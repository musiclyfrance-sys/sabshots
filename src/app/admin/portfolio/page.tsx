'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  rectSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import AdminHeader from '@/components/admin/AdminHeader'
import { useContent, slugify } from '@/components/admin/useContent'
import type { CmsAlbum, CmsContent } from '@/lib/cms/types'

function GripIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="9" cy="6" r="1.6" /><circle cx="15" cy="6" r="1.6" />
      <circle cx="9" cy="12" r="1.6" /><circle cx="15" cy="12" r="1.6" />
      <circle cx="9" cy="18" r="1.6" /><circle cx="15" cy="18" r="1.6" />
    </svg>
  )
}

function AlbumCard({ album, onDelete }: { album: CmsAlbum; onDelete: (slug: string) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: album.slug,
  })
  const realCount = album.photos.filter((p) => !p.template).length
  const tmplCount = album.photos.length - realCount

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.55 : 1,
        zIndex: isDragging ? 20 : 1,
        position: 'relative',
        background: 'white',
        border: '1px solid rgb(236,238,242)',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: isDragging ? '0 20px 40px -16px rgba(0,0,0,0.3)' : '0 10px 26px -22px rgba(0,0,0,0.3)',
      }}
    >
      <button
        {...attributes}
        {...listeners}
        aria-label="Déplacer l'album"
        style={{
          position: 'absolute', top: '10px', left: '10px', zIndex: 5,
          width: '34px', height: '34px', borderRadius: '10px', border: 'none',
          background: 'rgba(255,255,255,0.9)', color: 'rgb(80,84,92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'grab', touchAction: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}
      >
        <GripIcon />
      </button>

      <Link href={`/admin/portfolio/${album.slug}`} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
        <div style={{ position: 'relative', aspectRatio: '3 / 2', background: 'rgb(232,234,239)' }}>
          {album.cover ? (
            <Image src={album.cover} alt={album.coverAlt || album.title} fill style={{ objectFit: 'cover' }} sizes="360px" />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'rgb(150,154,162)', fontSize: '13px' }}>
              Pas encore de cover
            </div>
          )}
        </div>
        <div style={{ padding: '14px 16px' }}>
          <div style={{ fontWeight: 600, fontSize: '16px', letterSpacing: '-0.01em' }}>{album.title}</div>
          <div style={{ color: 'rgb(107,114,128)', fontSize: '13px', marginTop: '2px' }}>
            {realCount} photo{realCount > 1 ? 's' : ''}
            {tmplCount > 0 ? ` · ${tmplCount} à remplacer` : ''}
          </div>
        </div>
      </Link>

      <button
        onClick={() => onDelete(album.slug)}
        style={{
          position: 'absolute', top: '10px', right: '10px', zIndex: 5,
          padding: '6px 10px', borderRadius: '9px', border: 'none',
          background: 'rgba(255,255,255,0.92)', color: 'rgb(190,40,40)',
          fontSize: '12px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}
      >
        Supprimer
      </button>
    </div>
  )
}

export default function AdminPortfolioList() {
  const router = useRouter()
  const { content, loading, saving, error, save } = useContent()
  const [albums, setAlbums] = useState<CmsAlbum[]>([])
  const [dirty, setDirty] = useState(false)
  const [adding, setAdding] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [msg, setMsg] = useState('')

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))

  useEffect(() => {
    if (content) setAlbums(content.albums)
  }, [content])

  function onDragEnd(e: DragEndEvent) {
    const { active, over } = e
    if (!over || active.id === over.id) return
    setAlbums((prev) => {
      const from = prev.findIndex((a) => a.slug === active.id)
      const to = prev.findIndex((a) => a.slug === over.id)
      if (from < 0 || to < 0) return prev
      return arrayMove(prev, from, to)
    })
    setDirty(true)
  }

  function deleteAlbum(slug: string) {
    if (!confirm('Supprimer cet album ? Cette action sera appliquée à l’enregistrement.')) return
    setAlbums((prev) => prev.filter((a) => a.slug !== slug))
    setDirty(true)
  }

  async function persist(next: CmsAlbum[]) {
    if (!content) return false
    const payload: CmsContent = { ...content, albums: next }
    const ok = await save(payload)
    if (ok) {
      setDirty(false)
      setMsg('Enregistré ✓')
      setTimeout(() => setMsg(''), 2500)
    }
    return ok
  }

  async function createAlbum() {
    const title = newTitle.trim()
    if (!title) return
    let slug = slugify(title) || 'album'
    const existing = new Set(albums.map((a) => a.slug))
    if (existing.has(slug)) {
      let n = 2
      while (existing.has(`${slug}-${n}`)) n++
      slug = `${slug}-${n}`
    }
    const album: CmsAlbum = {
      slug, title, category: 'Custom', year: '', cover: '', coverAlt: '',
      description: '', photos: [],
    }
    const next = [...albums, album]
    setAlbums(next)
    const ok = await persist(next)
    if (ok) router.push(`/admin/portfolio/${slug}`)
  }

  return (
    <>
      <AdminHeader />
      <main style={{ maxWidth: '1120px', margin: '0 auto', padding: '32px 24px 90px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>Portfolio</h1>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
            {msg && <span style={{ color: 'rgb(22,163,74)', fontSize: '14px', fontWeight: 600 }}>{msg}</span>}
            {error && <span style={{ color: 'rgb(220,38,38)', fontSize: '14px' }}>{error}</span>}
            <button
              onClick={() => persist(albums)}
              disabled={!dirty || saving}
              style={{
                padding: '10px 18px', borderRadius: '11px', border: 'none', fontSize: '14px', fontWeight: 600,
                background: dirty && !saving ? 'rgb(37,211,102)' : 'rgb(220,222,228)',
                color: dirty && !saving ? 'white' : 'rgb(140,144,152)',
                cursor: dirty && !saving ? 'pointer' : 'default',
              }}
            >
              {saving ? 'Enregistrement…' : 'Enregistrer'}
            </button>
          </div>
        </div>
        <p style={{ color: 'rgb(107,114,128)', margin: '0 0 26px' }}>
          Glisse les albums pour les réordonner. Clique un album pour gérer ses photos et sa cover.
        </p>

        {loading ? (
          <p style={{ color: 'rgb(107,114,128)' }}>Chargement…</p>
        ) : (
          <>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
              <SortableContext items={albums.map((a) => a.slug)} strategy={rectSortingStrategy}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '18px' }}>
                  {albums.map((album) => (
                    <AlbumCard key={album.slug} album={album} onDelete={deleteAlbum} />
                  ))}
                </div>
              </SortableContext>
            </DndContext>

            <div style={{ marginTop: '28px' }}>
              {adding ? (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <input
                    autoFocus
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') createAlbum() }}
                    placeholder="Nom du nouvel album"
                    style={{ padding: '11px 14px', borderRadius: '11px', border: '1px solid rgb(224,226,232)', fontSize: '15px', fontFamily: 'inherit', minWidth: '240px' }}
                  />
                  <button onClick={createAlbum} disabled={saving || !newTitle.trim()} style={{ padding: '11px 18px', borderRadius: '11px', border: 'none', background: 'rgb(17,17,19)', color: 'white', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
                    Créer et éditer
                  </button>
                  <button onClick={() => { setAdding(false); setNewTitle('') }} style={{ padding: '11px 14px', borderRadius: '11px', border: '1px solid rgb(224,226,232)', background: 'white', fontSize: '14px', cursor: 'pointer' }}>
                    Annuler
                  </button>
                </div>
              ) : (
                <button onClick={() => setAdding(true)} style={{ padding: '12px 20px', borderRadius: '12px', border: '1.5px dashed rgb(200,204,212)', background: 'white', color: 'rgb(60,64,72)', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                  + Ajouter un album
                </button>
              )}
            </div>
          </>
        )}
      </main>
    </>
  )
}
