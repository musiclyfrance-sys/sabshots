'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AdminHeader from '@/components/admin/AdminHeader'
import { useContent, slugify } from '@/components/admin/useContent'
import type { CmsBlogPost } from '@/lib/cms/types'

export default function AdminBlogList() {
  const router = useRouter()
  const { content, loading, saving, error, save } = useContent()
  const [posts, setPosts] = useState<CmsBlogPost[]>([])
  const [adding, setAdding] = useState(false)
  const [title, setTitle] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (content) setPosts(content.posts)
  }, [content])

  async function persist(next: CmsBlogPost[]) {
    if (!content) return false
    const ok = await save({ ...content, posts: next })
    if (ok) { setMsg('Enregistré ✓'); setTimeout(() => setMsg(''), 2000) }
    return ok
  }

  async function create() {
    const t = title.trim()
    if (!t) return
    let slug = slugify(t) || 'article'
    const existing = new Set(posts.map((p) => p.slug))
    if (existing.has(slug)) { let n = 2; while (existing.has(`${slug}-${n}`)) n++; slug = `${slug}-${n}` }
    const post: CmsBlogPost = {
      slug, title: t, tag: 'Guide', readTime: '1 min read', author: 'Yassir',
      image: '/assets/blog-1.png', excerpt: '', body: '<p></p>', bodyFormat: 'html', draft: true,
    }
    const next = [post, ...posts]
    setPosts(next)
    const ok = await persist(next)
    if (ok) router.push(`/admin/blog/${slug}`)
  }

  function del(slug: string) {
    if (!confirm('Supprimer cet article ?')) return
    const next = posts.filter((p) => p.slug !== slug)
    setPosts(next)
    persist(next)
  }

  return (
    <>
      <AdminHeader />
      <main style={{ maxWidth: '1120px', margin: '0 auto', padding: '32px 24px 90px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '6px', flexWrap: 'wrap' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>Articles</h1>
          {msg && <span style={{ color: 'rgb(22,163,74)', fontSize: '14px', fontWeight: 600 }}>{msg}</span>}
          {error && <span style={{ color: 'rgb(220,38,38)', fontSize: '14px' }}>{error}</span>}
        </div>
        <p style={{ color: 'rgb(107,114,128)', margin: '0 0 26px' }}>Écris des articles optimisés SEO. Les brouillons n&apos;apparaissent pas sur le site.</p>

        {loading ? (
          <p style={{ color: 'rgb(107,114,128)' }}>Chargement…</p>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '18px' }}>
              {posts.map((post) => (
                <div key={post.slug} style={{ background: 'white', border: '1px solid rgb(236,238,242)', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
                  <Link href={`/admin/blog/${post.slug}`} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                    <div style={{ position: 'relative', aspectRatio: '16 / 9', background: 'rgb(232,234,239)' }}>
                      {post.image && <Image src={post.image} alt={post.imageAlt || post.title} fill style={{ objectFit: 'cover' }} sizes="320px" />}
                      {post.draft && <span style={{ position: 'absolute', top: '8px', left: '8px', background: 'rgb(251,191,36)', color: 'rgb(92,55,3)', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '7px' }}>BROUILLON</span>}
                    </div>
                    <div style={{ padding: '14px 16px' }}>
                      <div style={{ fontWeight: 600, fontSize: '15px', lineHeight: '1.35' }}>{post.title}</div>
                    </div>
                  </Link>
                  <button onClick={() => del(post.slug)} style={{ position: 'absolute', top: '8px', right: '8px', padding: '5px 10px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.92)', color: 'rgb(190,40,40)', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Supprimer</button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '26px' }}>
              {adding ? (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <input autoFocus value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') create() }} placeholder="Titre du nouvel article" style={{ padding: '11px 14px', borderRadius: '11px', border: '1px solid rgb(224,226,232)', fontSize: '15px', fontFamily: 'inherit', minWidth: '280px' }} />
                  <button onClick={create} disabled={saving || !title.trim()} style={{ padding: '11px 18px', borderRadius: '11px', border: 'none', background: 'rgb(17,17,19)', color: 'white', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Créer et écrire</button>
                  <button onClick={() => { setAdding(false); setTitle('') }} style={{ padding: '11px 14px', borderRadius: '11px', border: '1px solid rgb(224,226,232)', background: 'white', fontSize: '14px', cursor: 'pointer' }}>Annuler</button>
                </div>
              ) : (
                <button onClick={() => setAdding(true)} style={{ padding: '12px 20px', borderRadius: '12px', border: '1.5px dashed rgb(200,204,212)', background: 'white', color: 'rgb(60,64,72)', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>+ Nouvel article</button>
              )}
            </div>
          </>
        )}
      </main>
    </>
  )
}
