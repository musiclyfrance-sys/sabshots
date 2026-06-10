'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
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
import type { Area } from 'react-easy-crop'
import AdminHeader from '@/components/admin/AdminHeader'
import CropModal from '@/components/admin/CropModal'
import { useContent } from '@/components/admin/useContent'
import { uploadImage, bakeCrop } from '@/components/admin/upload-image'
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
const miniBtn: React.CSSProperties = { padding: '5px 9px', borderRadius: '8px', border: '1px solid rgb(228,230,236)', background: 'white', fontSize: '11px', fontWeight: 600, cursor: 'pointer', color: 'rgb(60,64,72)' }

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
        <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: 'cover' }} sizes="220px" />
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

type CropTarget = { kind: 'photo'; id: string } | { kind: 'cover' } | null

export default function AlbumEditor() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const { content, loading, saving, error, save } = useContent()
  const [album, setAlbum] = useState<CmsAlbum | null>(null)
  const [dirty, setDirty] = useState(false)
  const [msg, setMsg] = useState('')
  const [uploading, setUploading] = useState(false)
  const [cropTarget, setCropTarget] = useState<CropTarget>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))

  useEffect(() => {
    if (content && slug) {
      const found = content.albums.find((a) => a.slug === slug)
      setAlbum(found ? structuredClone(found) : null)
    }
  }, [content, slug])

  const counts = useMemo(() => ({
    l: album?.photos.filter((p) => p.wide).length ?? 0,
    p: album?.photos.filter((p) => !p.wide).length ?? 0,
  }), [album])

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
          id: uid(), src: res.url, original: res.url, path: res.path,
          alt: `${album.title} photo session in Paris by SabShots`,
          wide: res.wide, width: res.width, height: res.height,
        }
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
    const next: CmsContent = { ...content, albums: content.albums.map((a) => (a.slug === slug ? album : a)) }
    const ok = await save(next)
    if (ok) { setDirty(false); setMsg('Enregistré ✓'); setTimeout(() => setMsg(''), 2500) }
  }

  async function onCropSave(percent: Area, pixels: Area) {
    if (!album || !cropTarget) return
    const isCover = cropTarget.kind === 'cover'
    const source = isCover
      ? album.coverOriginal || album.cover
      : (() => { const p = album.photos.find((x) => x.id === cropTarget.id); return p?.original || p?.src || '' })()
    if (!source) return
    const { url } = await bakeCrop(source, pixels)
    update((a) => {
      if (isCover) {
        a.cover = url
        a.coverCrop = percent
        if (!a.coverOriginal) a.coverOriginal = source
      } else {
        a.photos = a.photos.map((p) => (p.id === (cropTarget as { id: string }).id ? { ...p, src: url, crop: percent, original: p.original || source } : p))
      }
    })
    setCropTarget(null)
  }

  const cropPhoto = album && cropTarget?.kind === 'photo' ? album.photos.find((p) => p.id === cropTarget.id) : null
  const cropSrc = cropTarget?.kind === 'cover' ? (album?.coverOriginal || album?.cover || '') : (cropPhoto?.original || cropPhoto?.src || '')
  const cropAspect = cropTarget?.kind === 'cover' ? 3 / 2 : cropPhoto?.wide ? 3 / 2 : 2 / 3
  const cropInitial = cropTarget?.kind === 'cover' ? album?.coverCrop : cropPhoto?.crop

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

            {/* Cover */}
            <div style={{ display: 'flex', gap: '18px', alignItems: 'center', background: 'white', border: '1px solid rgb(236,238,242)', borderRadius: '16px', padding: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', width: '220px', aspectRatio: '3 / 2', borderRadius: '12px', overflow: 'hidden', background: 'rgb(232,234,239)', flexShrink: 0 }}>
                {album.cover ? (
                  <Image src={album.cover} alt={album.coverAlt || album.title} fill style={{ objectFit: 'cover' }} sizes="220px" />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'rgb(150,154,162)', fontSize: '13px' }}>Aucune cover</div>
                )}
              </div>
              <div>
                <label style={labelStyle}>Photo de couverture (3:2)</label>
                <button onClick={() => setCropTarget({ kind: 'cover' })} disabled={!album.cover} style={{ padding: '9px 15px', borderRadius: '10px', border: '1px solid rgb(224,226,232)', background: 'white', fontSize: '13px', fontWeight: 600, cursor: album.cover ? 'pointer' : 'default', color: album.cover ? 'rgb(40,44,52)' : 'rgb(170,174,182)' }}>Recadrer la cover</button>
                <p style={{ margin: '8px 0 0', fontSize: '12px', color: 'rgb(107,114,128)', maxWidth: '320px' }}>Choisis une photo comme cover via son bouton « Cover » ci-dessous, puis recadre-la ici.</p>
              </div>
            </div>

            {/* Fields (no year) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', background: 'white', border: '1px solid rgb(236,238,242)', borderRadius: '16px', padding: '18px', marginBottom: '24px' }}>
              <div><label style={labelStyle}>Titre</label><input value={album.title} onChange={(e) => update((a) => { a.title = e.target.value })} style={fieldStyle} /></div>
              <div><label style={labelStyle}>Catégorie</label><input value={album.category} onChange={(e) => update((a) => { a.category = e.target.value })} style={fieldStyle} /></div>
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
                      onSetCover={() => update((a) => { a.cover = photo.src; a.coverAlt = photo.alt; a.coverPath = photo.path; a.coverOriginal = photo.original || photo.src; a.coverCrop = undefined; setMsg('Cover définie ✓') })}
                      onCrop={() => setCropTarget({ kind: 'photo', id: photo.id })}
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

      {cropTarget && cropSrc && (
        <CropModal
          src={cropSrc}
          aspect={cropAspect}
          initial={cropInitial}
          onCancel={() => setCropTarget(null)}
          onSave={onCropSave}
        />
      )}
    </>
  )
}
