'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import { SortableContext, useSortable, rectSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import AdminHeader from '@/components/admin/AdminHeader'
import { useContent } from '@/components/admin/useContent'
import { uploadImage } from '@/components/admin/upload-image'
import { focalPosition } from '@/lib/cms/images'
import type { CmsAlbum, CmsContent, CmsPhoto } from '@/lib/cms/types'

function uid(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return 'p-' + Math.random().toString(36).slice(2) + Date.now().toString(36)
}

const fieldStyle: React.CSSProperties = {
  width: '100%', padding: '11px 13px', borderRadius: '11px',
  border: '1px solid rgb(224,226,232)', fontSize: '14px', fontFamily: 'inherit', background: 'white',
}
const labelStyle: React.CSSProperties = { fontSize: '13px', fontWeight: 600, color: 'rgb(80,84,92)', marginBottom: '6px', display: 'block' }

/* ---- Focal-point picker (lossless crop: just sets object-position) ---- */
function FocalModal({
  src, wide, focusX, focusY, onCancel, onSave,
}: {
  src: string; wide: boolean; focusX?: number; focusY?: number
  onCancel: () => void; onSave: (x: number, y: number) => void
}) {
  const [fx, setFx] = useState(focusX ?? 0.5)
  const [fy, setFy] = useState(focusY ?? 0.5)
  const boxRef = useRef<HTMLDivElement>(null)

  function setFromEvent(e: React.MouseEvent) {
    const box = boxRef.current
    if (!box) return
    const r = box.getBoundingClientRect()
    setFx(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)))
    setFy(Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)))
  }

  return (
    <div onClick={onCancel} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'white', borderRadius: '20px', padding: '22px', maxWidth: '560px', width: '100%' }}>
        <h3 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 700 }}>Recadrer</h3>
        <p style={{ margin: '0 0 16px', color: 'rgb(107,114,128)', fontSize: '13px' }}>
          Clique sur la zone à garder bien visible dans le cadre {wide ? '3:2 (paysage)' : '2:3 (portrait)'}.
        </p>
        <div
          ref={boxRef}
          onClick={setFromEvent}
          style={{
            position: 'relative', width: '100%', maxWidth: wide ? '480px' : '320px', margin: '0 auto',
            aspectRatio: wide ? '3 / 2' : '2 / 3', borderRadius: '14px', overflow: 'hidden', cursor: 'crosshair',
            background: 'rgb(232,234,239)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: `${Math.round(fx * 100)}% ${Math.round(fy * 100)}%` }} />
          <span style={{ position: 'absolute', left: `${fx * 100}%`, top: `${fy * 100}%`, transform: 'translate(-50%,-50%)', width: '22px', height: '22px', borderRadius: '50%', border: '2px solid white', boxShadow: '0 0 0 2px rgba(0,0,0,0.4)', pointerEvents: 'none' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '18px' }}>
          <button onClick={onCancel} style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid rgb(224,226,232)', background: 'white', cursor: 'pointer', fontSize: '14px' }}>Annuler</button>
          <button onClick={() => onSave(fx, fy)} style={{ padding: '10px 18px', borderRadius: '10px', border: 'none', background: 'rgb(17,17,19)', color: 'white', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}>Valider</button>
        </div>
      </div>
    </div>
  )
}

/* ---- Sortable photo card ---- */
function PhotoCard({
  photo, isCover, onChange, onDelete, onSetCover, onCrop,
}: {
  photo: CmsPhoto; isCover: boolean
  onChange: (next: CmsPhoto) => void; onDelete: () => void; onSetCover: () => void; onCrop: () => void
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: photo.id })
  return (
    <div ref={setNodeRef} style={{ transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.55 : 1, zIndex: isDragging ? 20 : 1, position: 'relative', background: 'white', border: isCover ? '2px solid rgb(37,211,102)' : '1px solid rgb(236,238,242)', borderRadius: '14px', overflow: 'hidden' }}>
      <div style={{ position: 'relative', aspectRatio: photo.wide ? '3 / 2' : '2 / 3', background: 'rgb(232,234,239)' }}>
        <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: 'cover', objectPosition: focalPosition(photo.focusX, photo.focusY) }} sizes="220px" />
        <button {...attributes} {...listeners} aria-label="Déplacer" style={{ position: 'absolute', top: '6px', left: '6px', width: '30px', height: '30px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.9)', cursor: 'grab', touchAction: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(90,94,102)"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg>
        </button>
        {photo.template && <span style={{ position: 'absolute', top: '6px', right: '6px', background: 'rgb(251,191,36)', color: 'rgb(92,55,3)', fontSize: '10px', fontWeight: 700, padding: '3px 7px', borderRadius: '7px' }}>TEMPLATE</span>}
        {isCover && <span style={{ position: 'absolute', bottom: '6px', left: '6px', background: 'rgb(37,211,102)', color: 'white', fontSize: '10px', fontWeight: 700, padding: '3px 7px', borderRadius: '7px' }}>COVER</span>}
      </div>
      <div style={{ padding: '8px' }}>
        <input value={photo.alt} onChange={(e) => onChange({ ...photo, alt: e.target.value })} placeholder="Texte alt (SEO)" style={{ ...fieldStyle, padding: '7px 9px', fontSize: '12px' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '7px' }}>
          <button onClick={() => onChange({ ...photo, wide: !photo.wide })} style={miniBtn}>{photo.wide ? 'Paysage' : 'Portrait'}</button>
          <button onClick={onCrop} style={miniBtn}>Cadrer</button>
          <button onClick={onSetCover} style={miniBtn}>Cover</button>
          <button onClick={onDelete} style={{ ...miniBtn, color: 'rgb(190,40,40)' }}>Suppr.</button>
        </div>
      </div>
    </div>
  )
}
const miniBtn: React.CSSProperties = { padding: '5px 9px', borderRadius: '8px', border: '1px solid rgb(228,230,236)', background: 'white', fontSize: '11px', fontWeight: 600, cursor: 'pointer', color: 'rgb(60,64,72)' }

export default function AlbumEditor() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const router = useRouter()
  const { content, loading, saving, error, save } = useContent()
  const [album, setAlbum] = useState<CmsAlbum | null>(null)
  const [dirty, setDirty] = useState(false)
  const [msg, setMsg] = useState('')
  const [uploading, setUploading] = useState(false)
  const [cropId, setCropId] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))

  useEffect(() => {
    if (content && slug) {
      const found = content.albums.find((a) => a.slug === slug)
      setAlbum(found ? structuredClone(found) : null)
    }
  }, [content, slug])

  const counts = useMemo(() => {
    if (!album) return { l: 0, p: 0 }
    return {
      l: album.photos.filter((p) => p.wide).length,
      p: album.photos.filter((p) => !p.wide).length,
    }
  }, [album])

  function update(mut: (a: CmsAlbum) => void) {
    setAlbum((prev) => {
      if (!prev) return prev
      const next = structuredClone(prev)
      mut(next)
      return next
    })
    setDirty(true)
  }

  function onDragEnd(e: DragEndEvent) {
    const { active, over } = e
    if (!over || active.id === over.id) return
    update((a) => {
      const from = a.photos.findIndex((p) => p.id === active.id)
      const to = a.photos.findIndex((p) => p.id === over.id)
      if (from >= 0 && to >= 0) a.photos = arrayMove(a.photos, from, to)
    })
  }

  async function onFiles(files: FileList | null) {
    if (!files || !album) return
    setUploading(true)
    setMsg('')
    try {
      for (const file of Array.from(files)) {
        const res = await uploadImage(file, slug || 'album')
        const photo: CmsPhoto = {
          id: uid(),
          src: res.url,
          path: res.path,
          alt: `${album.title} photo session in Paris by SabShots`,
          wide: res.wide,
          width: res.width,
          height: res.height,
          focusX: 0.5,
          focusY: 0.5,
        }
        // append using functional update to avoid stale state across the loop
        setAlbum((prev) => (prev ? { ...prev, photos: [...prev.photos, photo] } : prev))
        setDirty(true)
      }
      setMsg('Photos ajoutées ✓')
      setTimeout(() => setMsg(''), 2500)
    } catch (e) {
      setMsg((e as Error).message)
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  async function persist() {
    if (!content || !album) return
    const next: CmsContent = {
      ...content,
      albums: content.albums.map((a) => (a.slug === slug ? album : a)),
    }
    const ok = await save(next)
    if (ok) {
      setDirty(false)
      setMsg('Enregistré ✓')
      setTimeout(() => setMsg(''), 2500)
    }
  }

  const cropPhoto = album?.photos.find((p) => p.id === cropId) || null

  return (
    <>
      <AdminHeader />
      <main style={{ maxWidth: '1120px', margin: '0 auto', padding: '28px 24px 100px' }}>
        <Link href="/admin/portfolio" style={{ color: 'rgb(107,114,128)', fontSize: '14px', textDecoration: 'none' }}>← Tous les albums</Link>

        {loading ? (
          <p style={{ color: 'rgb(107,114,128)', marginTop: '24px' }}>Chargement…</p>
        ) : !album ? (
          <p style={{ color: 'rgb(190,40,40)', marginTop: '24px' }}>Album introuvable.</p>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '12px 0 22px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>{album.title || 'Sans titre'}</h1>
              <span style={{ color: 'rgb(107,114,128)', fontSize: '13px' }}>{counts.l} paysage{counts.l > 1 ? 's' : ''} · {counts.p} portrait{counts.p > 1 ? 's' : ''}</span>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
                {msg && <span style={{ color: msg.includes('✓') ? 'rgb(22,163,74)' : 'rgb(220,38,38)', fontSize: '14px', fontWeight: 600 }}>{msg}</span>}
                {error && <span style={{ color: 'rgb(220,38,38)', fontSize: '13px' }}>{error}</span>}
                <button onClick={persist} disabled={!dirty || saving} style={{ padding: '10px 18px', borderRadius: '11px', border: 'none', fontSize: '14px', fontWeight: 600, background: dirty && !saving ? 'rgb(37,211,102)' : 'rgb(220,222,228)', color: dirty && !saving ? 'white' : 'rgb(140,144,152)', cursor: dirty && !saving ? 'pointer' : 'default' }}>
                  {saving ? 'Enregistrement…' : 'Enregistrer'}
                </button>
              </div>
            </div>

            {/* Album fields */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', background: 'white', border: '1px solid rgb(236,238,242)', borderRadius: '16px', padding: '18px', marginBottom: '24px' }}>
              <div><label style={labelStyle}>Titre</label><input value={album.title} onChange={(e) => update((a) => { a.title = e.target.value })} style={fieldStyle} /></div>
              <div><label style={labelStyle}>Catégorie</label><input value={album.category} onChange={(e) => update((a) => { a.category = e.target.value })} style={fieldStyle} /></div>
              <div><label style={labelStyle}>Année</label><input value={album.year} onChange={(e) => update((a) => { a.year = e.target.value })} style={fieldStyle} /></div>
              <div style={{ gridColumn: '1 / -1' }}><label style={labelStyle}>Description</label><textarea value={album.description} onChange={(e) => update((a) => { a.description = e.target.value })} rows={2} style={{ ...fieldStyle, resize: 'vertical' }} /></div>
            </div>

            {/* Upload */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', flexWrap: 'wrap' }}>
              <input ref={fileRef} type="file" accept="image/*" multiple onChange={(e) => onFiles(e.target.files)} style={{ display: 'none' }} />
              <button onClick={() => fileRef.current?.click()} disabled={uploading} style={{ padding: '12px 20px', borderRadius: '12px', border: 'none', background: 'rgb(17,17,19)', color: 'white', fontSize: '14px', fontWeight: 600, cursor: uploading ? 'default' : 'pointer' }}>
                {uploading ? 'Compression + upload…' : '+ Ajouter des photos'}
              </button>
              <span style={{ color: 'rgb(107,114,128)', fontSize: '13px' }}>Compression et SEO automatiques. Glisse les photos pour les réordonner.</span>
            </div>

            {/* Photos grid */}
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
              <SortableContext items={album.photos.map((p) => p.id)} strategy={rectSortingStrategy}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))', gap: '14px', alignItems: 'start' }}>
                  {album.photos.map((photo) => (
                    <PhotoCard
                      key={photo.id}
                      photo={photo}
                      isCover={album.cover === photo.src}
                      onChange={(next) => update((a) => { a.photos = a.photos.map((p) => (p.id === next.id ? next : p)) })}
                      onDelete={() => update((a) => { a.photos = a.photos.filter((p) => p.id !== photo.id) })}
                      onSetCover={() => update((a) => { a.cover = photo.src; a.coverAlt = photo.alt; a.coverPath = photo.path; a.coverFocusX = photo.focusX; a.coverFocusY = photo.focusY; setMsg('Cover définie ✓'); })}
                      onCrop={() => setCropId(photo.id)}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>

            {album.photos.length === 0 && (
              <p style={{ color: 'rgb(107,114,128)', marginTop: '8px' }}>Aucune photo. Ajoute tes premières photos ci-dessus.</p>
            )}
          </>
        )}
      </main>

      {cropPhoto && (
        <FocalModal
          src={cropPhoto.src}
          wide={cropPhoto.wide}
          focusX={cropPhoto.focusX}
          focusY={cropPhoto.focusY}
          onCancel={() => setCropId(null)}
          onSave={(x, y) => {
            update((a) => {
              a.photos = a.photos.map((p) => (p.id === cropId ? { ...p, focusX: x, focusY: y } : p))
              if (a.cover === cropPhoto.src) { a.coverFocusX = x; a.coverFocusY = y }
            })
            setCropId(null)
          }}
        />
      )}
    </>
  )
}
