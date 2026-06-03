import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { blogPosts } from '@/lib/site-data'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: `SabShots | ${post.title}`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      siteName: 'SabShots',
      url: `https://www.sabshots.com/blog/${slug}`,
      title: `SabShots | ${post.title}`,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  // Split body into paragraphs/sections
  const sections = post.body.split('\n\n').filter(Boolean)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.sabshots.com${post.image}`,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'SabShots',
      logo: { '@type': 'ImageObject', url: 'https://www.sabshots.com/assets/logo-dark.svg' },
    },
    mainEntityOfPage: `https://www.sabshots.com/blog/${slug}`,
    inLanguage: 'en',
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

        {/* Top bar — Back + read time */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'rgb(255,255,255)', borderRadius: '99px',
              padding: '8px 18px', fontSize: '14px', fontWeight: 300,
              color: 'rgb(1,1,1)', textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </Link>
          <span style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '99px', padding: '8px 18px', fontSize: '13px', fontWeight: 300, color: 'rgb(124,124,124)' }}>
            {post.readTime}
          </span>
        </div>

        {/* Tag badge */}
        <div style={{ marginBottom: '16px' }}>
          <span style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '99px', padding: '4px 14px', fontSize: '13px', fontWeight: 300, color: 'rgb(1,1,1)' }}>
            {post.tag}
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(32px, 7vw, 48px)', fontWeight: 500, lineHeight: '1.18', margin: '0 0 12px', color: 'rgb(1,1,1)' }}>
          {post.title}
        </h1>

        {/* Author */}
        <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgb(124,124,124)', margin: '0 0 40px' }}>
          By {post.author}
        </p>

        {/* Hero image */}
        <div className="reveal" style={{ width: '100%', height: '420px', position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '48px', backgroundColor: 'rgb(220,222,228)' }}>
          <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} priority />
        </div>

        {/* Article body — renders ## headings, paragraphs, and [text](url) links */}
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

        {/* Back to blog */}
        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid rgb(220,222,228)' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'rgb(1,1,1)', color: 'rgb(255,255,255)',
              borderRadius: '99px', padding: '12px 24px',
              fontSize: '14px', fontWeight: 400, textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}
