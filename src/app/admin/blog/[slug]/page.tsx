'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import AdminHeader from '@/components/admin/AdminHeader'
import TiptapEditor from '@/components/admin/TiptapEditor'
import { useContent } from '@/components/admin/useContent'
import { uploadImage, bakeCrop } from '@/components/admin/upload-image'
import CropModal from '@/components/admin/CropModal'
import type { Area } from 'react-easy-crop'
import { analyzeSeo, type SeoStatus } from '@/components/admin/seo'
import { markdownToHtml, stripHtml, wordCount } from '@/components/admin/markdown'
import type { CmsBlogPost, CmsContent } from '@/lib/cms/types'

const fieldStyle: React.CSSProperties = {
  width: '100%', padding: '11px 13px', borderRadius: '11px',
  border: '1px solid rgb(224,226,232)', fontSize: '14px', fontFamily: 'inherit', background: 'white',
}
const labelStyle: React.CSSProperties = { fontSize: '13px', fontWeight: 600, color: 'rgb(80,84,92)', marginBottom: '6px', display: 'block' }
const statusColor: Record<SeoStatus, string> = { ok: 'rgb(22,163,74)', warn: 'rgb(202,138,4)', fail: 'rgb(220,38,38)' }

export default function BlogEditor() {
  const slug = useParams<{ slug: string }>()?.slug
  const { content, loading, saving, error, save } = useContent()
  const [post, setPost] = useState<CmsBlogPost | null>(null)
  const [bodyHtml, setBodyHtml] = useState('')
  const [ready, setReady] = useState(false)
  const [dirty, setDirty] = useState(false)
  const [msg, setMsg] = useState('')
  const [coverBusy, setCoverBusy] = useState(false)
  const [coverCropOpen, setCoverCropOpen] = useState(false)
  const coverRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (content && slug) {
      const found = content.posts.find((p) => p.slug === slug)
      if (found) {
        const p = structuredClone(found)
        setPost(p)
        setBodyHtml(p.bodyFormat === 'html' ? p.body : markdownToHtml(p.body))
      } else {
        setPost(null)
      }
      setReady(true)
    }
  }, [content, slug])

  function update(mut: (p: CmsBlogPost) => void) {
    setPost((prev) => { if (!prev) return prev; const n = structuredClone(prev); mut(n); return n })
    setDirty(true)
  }

  const report = useMemo(
    () => (post ? analyzeSeo({ title: post.title, excerpt: post.excerpt, metaDescription: post.metaDescription, keyword: post.keyword, slug: post.slug, bodyHtml }) : null),
    [post, bodyHtml]
  )

  async function onCover(files: FileList | null) {
    if (!files || !files[0]) return
    setCoverBusy(true)
    try {
      const res = await uploadImage(files[0], 'blog')
      update((p) => { p.image = res.url; p.imageOriginal = res.url; p.imagePath = res.path; p.imageCrop = undefined })
    } catch (e) {
      alert((e as Error).message)
    } finally {
      setCoverBusy(false)
      if (coverRef.current) coverRef.current.value = ''
    }
  }

  async function persist() {
    if (!content || !post) return
    const words = wordCount(stripHtml(bodyHtml))
    const readTime = `${Math.max(1, Math.round(words / 200))} min read`
    const updated: CmsBlogPost = { ...post, body: bodyHtml, bodyFormat: 'html', readTime, updatedAt: new Date().toISOString() }
    const next: CmsContent = { ...content, posts: content.posts.map((p) => (p.slug === slug ? updated : p)) }
    const ok = await save(next)
    if (ok) { setPost(updated); setDirty(false); setMsg('Enregistré ✓'); setTimeout(() => setMsg(''), 2500) }
  }

  const metaLen = (post?.metaDescription || '').length
  const scoreColor = report ? (report.score >= 80 ? 'rgb(22,163,74)' : report.score >= 50 ? 'rgb(202,138,4)' : 'rgb(220,38,38)') : '#999'

  return (
    <>
      <AdminHeader />
      <main style={{ maxWidth: '1180px', margin: '0 auto', padding: '24px 24px 100px' }}>
        <Link href="/admin/blog" style={{ color: 'rgb(107,114,128)', fontSize: '14px', textDecoration: 'none' }}>← Tous les articles</Link>

        {loading || !ready ? (
          <p style={{ color: 'rgb(107,114,128)', marginTop: '24px' }}>Chargement…</p>
        ) : !post ? (
          <p style={{ color: 'rgb(190,40,40)', marginTop: '24px' }}>Article introuvable.</p>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '12px 0 18px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>{post.title || 'Sans titre'}</h1>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
                {msg && <span style={{ color: 'rgb(22,163,74)', fontSize: '14px', fontWeight: 600 }}>{msg}</span>}
                {error && <span style={{ color: 'rgb(220,38,38)', fontSize: '13px' }}>{error}</span>}
                <button onClick={() => update((p) => { p.draft = !p.draft })} style={{ padding: '10px 14px', borderRadius: '11px', border: '1px solid rgb(224,226,232)', background: post.draft ? 'white' : 'rgb(236,253,243)', color: post.draft ? 'rgb(120,124,132)' : 'rgb(22,163,74)', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                  {post.draft ? 'Brouillon' : 'Publié'}
                </button>
                <button onClick={persist} disabled={!dirty || saving} style={{ padding: '10px 18px', borderRadius: '11px', border: 'none', fontSize: '14px', fontWeight: 600, background: dirty && !saving ? 'rgb(37,211,102)' : 'rgb(220,222,228)', color: dirty && !saving ? 'white' : 'rgb(140,144,152)', cursor: dirty && !saving ? 'pointer' : 'default' }}>
                  {saving ? 'Enregistrement…' : 'Enregistrer'}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '22px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {/* Main column */}
              <div style={{ flex: '1 1 540px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ background: 'white', border: '1px solid rgb(236,238,242)', borderRadius: '16px', padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                  <div style={{ gridColumn: '1 / -1' }}><label style={labelStyle}>Titre de l&apos;article</label><input value={post.title} onChange={(e) => update((p) => { p.title = e.target.value })} style={fieldStyle} /></div>
                  <div><label style={labelStyle}>Mot-clé principal</label><input value={post.keyword || ''} onChange={(e) => update((p) => { p.keyword = e.target.value })} placeholder="ex. séance photo Tour Eiffel" style={fieldStyle} /></div>
                  <div><label style={labelStyle}>Tag</label><input value={post.tag} onChange={(e) => update((p) => { p.tag = e.target.value })} style={fieldStyle} /></div>
                  <div style={{ gridColumn: '1 / -1' }}><label style={labelStyle}>Résumé (extrait)</label><textarea value={post.excerpt} onChange={(e) => update((p) => { p.excerpt = e.target.value })} rows={2} style={{ ...fieldStyle, resize: 'vertical' }} /></div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>Meta description <span style={{ color: metaLen >= 120 && metaLen <= 165 ? 'rgb(22,163,74)' : 'rgb(170,174,182)', fontWeight: 500 }}>({metaLen}/160)</span></label>
                    <textarea value={post.metaDescription || ''} onChange={(e) => update((p) => { p.metaDescription = e.target.value })} rows={2} placeholder="Commence par un verbe d'action. 150-160 caractères." style={{ ...fieldStyle, resize: 'vertical' }} />
                  </div>
                </div>

                {/* Cover */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center', background: 'white', border: '1px solid rgb(236,238,242)', borderRadius: '16px', padding: '14px', flexWrap: 'wrap' }}>
                  <div style={{ position: 'relative', width: '160px', aspectRatio: '16 / 9', borderRadius: '10px', overflow: 'hidden', background: 'rgb(232,234,239)', flexShrink: 0 }}>
                    {post.image && <Image src={post.image} alt={post.imageAlt || post.title} fill style={{ objectFit: 'cover' }} sizes="160px" />}
                  </div>
                  <div>
                    <input ref={coverRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => onCover(e.target.files)} />
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button onClick={() => coverRef.current?.click()} disabled={coverBusy} style={{ padding: '9px 15px', borderRadius: '10px', border: '1px solid rgb(224,226,232)', background: 'white', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>{coverBusy ? 'Upload…' : 'Changer l’image de couverture'}</button>
                      <button onClick={() => setCoverCropOpen(true)} disabled={!post.image} style={{ padding: '9px 15px', borderRadius: '10px', border: '1px solid rgb(224,226,232)', background: 'white', fontSize: '13px', fontWeight: 600, cursor: post.image ? 'pointer' : 'default', color: post.image ? 'rgb(40,44,52)' : 'rgb(170,174,182)' }}>Recadrer (16:9)</button>
                    </div>
                    <input value={post.imageAlt || ''} onChange={(e) => update((p) => { p.imageAlt = e.target.value })} placeholder="Alt de la cover (SEO)" style={{ ...fieldStyle, marginTop: '8px', fontSize: '12px', padding: '8px 10px' }} />
                  </div>
                </div>

                {/* Editor */}
                <TiptapEditor key={slug} valueHtml={bodyHtml} onChange={(html) => { setBodyHtml(html); setDirty(true) }} folder="blog" />
              </div>

              {/* SEO coach */}
              <aside style={{ flex: '1 1 280px', maxWidth: '340px', position: 'sticky', top: '76px', background: 'white', border: '1px solid rgb(236,238,242)', borderRadius: '16px', padding: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', border: `4px solid ${scoreColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px', color: scoreColor }}>{report?.score ?? 0}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px' }}>Coach SEO</div>
                    <div style={{ color: 'rgb(107,114,128)', fontSize: '12px' }}>Score en direct</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {report?.checks.map((c) => (
                    <div key={c.id} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start' }}>
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: statusColor[c.status], marginTop: '5px', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgb(40,44,52)' }}>{c.label}</div>
                        <div style={{ fontSize: '12px', color: c.status === 'ok' ? 'rgb(107,114,128)' : statusColor[c.status] }}>{c.tip}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </>
        )}
      </main>
      {coverCropOpen && post && (
        <CropModal
          src={post.imageOriginal || post.image}
          aspect={16 / 9}
          initial={post.imageCrop as Area | undefined}
          onCancel={() => setCoverCropOpen(false)}
          onSave={async (percent, pixels) => {
            const source = post.imageOriginal || post.image
            const { url } = await bakeCrop(source, pixels)
            update((p) => { p.image = url; p.imageCrop = percent; if (!p.imageOriginal) p.imageOriginal = source })
            setCoverCropOpen(false)
          }}
        />
      )}
    </>
  )
}
