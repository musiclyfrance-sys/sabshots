import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { WHATSAPP_BOOKING_URL } from '@/lib/site-data'
import { getBlogPosts, getBlogPost } from '@/lib/cms/public-data'
import { stripHtml, wordCount } from '@/components/admin/markdown'

export const revalidate = 300
export const dynamicParams = true

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return { title: 'Not Found' }
  const description = post.metaDescription || post.excerpt
  return {
    title: `SabShots | ${post.title}`,
    description,
    keywords: post.keyword ? [post.keyword] : undefined,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      siteName: 'SabShots',
      url: `https://www.sabshots.com/blog/${slug}`,
      title: `SabShots | ${post.title}`,
      description,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) notFound()

  // Split body into paragraphs/sections
  const sections = post.body.split('\n\n').filter(Boolean)
  const articleWords = wordCount(stripHtml(post.body))

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith('http') ? post.image : `https://www.sabshots.com${post.image}`,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'SabShots',
      logo: { '@type': 'ImageObject', url: 'https://www.sabshots.com/assets/logo-dark.svg' },
    },
    mainEntityOfPage: `https://www.sabshots.com/blog/${slug}`,
    inLanguage: 'en',
    articleSection: post.tag,
    wordCount: articleWords,
    ...(post.keyword ? { keywords: post.keyword } : {}),
    ...(post.updatedAt ? { datePublished: post.updatedAt, dateModified: post.updatedAt } : {}),
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sabshots.com' },
      { '@type': 'ListItem', position: 2, name: 'Tips & Guides', item: 'https://www.sabshots.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.sabshots.com/blog/${slug}` },
    ],
  }

  return (
    <main style={{ background: 'rgb(240,242,248)', color: 'rgb(1,1,1)', fontFamily: 'Manrope, sans-serif', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <NavBar />

      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 16px 80px' }}>

        {/* Top bar — Back */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '40px' }}>
          <Link
            href="/blog"
            className="btn-back"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'rgb(255,255,255)', borderRadius: '99px',
              padding: '8px 18px', fontSize: '14px', fontWeight: 300,
              color: 'rgb(1,1,1)', textDecoration: 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </Link>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(32px, 7vw, 48px)', fontWeight: 500, lineHeight: '1.18', margin: '0 0 12px', color: 'rgb(1,1,1)' }}>
          {post.title}
        </h1>

        {/* Read time with clock icon */}
        <p style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 300, color: 'rgb(124,124,124)', margin: '0 0 40px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 7v5l3 2"/>
          </svg>
          {post.readTime}
        </p>

        {/* Hero image */}
        <div className="reveal" style={{ width: '100%', height: '420px', position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '48px', backgroundColor: 'rgb(220,222,228)' }}>
          <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} priority />
        </div>

        {/* Article body — HTML (editor) or legacy markdown subset */}
        {post.bodyFormat === 'html' ? (
          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.body }} />
        ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {sections.map((section, i) => {
            if (section.startsWith('## ')) {
              return (
                <h2 key={i} style={{ fontSize: '22px', fontWeight: 500, lineHeight: '32px', color: 'rgb(1,1,1)', margin: '16px 0 4px' }}>
                  {section.replace('## ', '')}
                </h2>
              )
            }
            // Parse inline [text](url) markdown links
            const parts = section.split(/(\[[^\]]+\]\([^)]+\))/g)
            return (
              <p key={i} style={{ fontSize: '16px', fontWeight: 300, lineHeight: '26px', color: 'rgb(60,60,60)', margin: 0 }}>
                {parts.map((part, j) => {
                  const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
                  if (match) {
                    return (
                      <a key={j} href={match[2]} style={{ color: 'rgb(1,1,1)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                        {match[1]}
                      </a>
                    )
                  }
                  return part
                })}
              </p>
            )
          })}
        </div>
        )}

        {/* Book a session CTA */}
        <div style={{ marginTop: '56px', backgroundColor: 'rgb(255,255,255)', borderRadius: '32px', padding: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94"/><path d="M9.69 8h11.48"/><path d="M7.38 12l5.74-9.94"/><path d="M9.69 16L3.95 6.06"/><path d="M14.31 16H2.83"/><path d="M16.62 12l-5.74 9.94"/>
          </svg>
          <h3 style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 500, color: 'rgb(1,1,1)', margin: 0 }}>
            Ready to book your Paris session?
          </h3>
          <p style={{ fontSize: '15px', fontWeight: 300, color: 'rgb(124,124,124)', margin: 0, maxWidth: '420px' }}>
            Send a message on WhatsApp and get a response within a few hours.
          </p>
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book-wa btn-pulse"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              borderRadius: '99px', padding: '12px 28px',
              fontSize: '14px', fontWeight: 400, textDecoration: 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.893-11.893 11.893a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.808-.999zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Book a Session
          </a>
        </div>

        {/* Back to blog */}
        <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgb(220,222,228)' }}>
          <Link
            href="/blog"
            className="btn-back"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'rgb(255,255,255)', color: 'rgb(1,1,1)',
              borderRadius: '99px', padding: '12px 24px',
              fontSize: '14px', fontWeight: 400, textDecoration: 'none',
            }}
          >
            ← Back to all articles
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}
