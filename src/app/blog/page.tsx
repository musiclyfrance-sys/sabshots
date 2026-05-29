import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import FaqSection from '@/components/FaqSection'
import CtaSection from '@/components/CtaSection'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/site-data'

export const metadata = {
  title: 'Blog — Lightoory',
  description: 'Highlights from my photography journey, featuring my creative process and latest projects.',
}

export default function BlogPage() {
  return (
    <main style={{ background: 'rgb(240, 242, 248)', color: 'rgb(1,1,1)', fontFamily: 'Manrope, sans-serif', overflow: 'hidden' }}>
      <NavBar />

      {/* Hero with dot-grid background */}
      <section
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '160px 12px 80px',
          textAlign: 'center',
          gap: '14px',
        }}
      >
        {/* Dot-grid overlay */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(1,1,1,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgb(255,255,255)', borderRadius: '26px', padding: '4px 16px', fontSize: '14px', fontWeight: 300, color: 'rgb(1,1,1)' }}>
            Our Blog
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 8vw, 52px)', fontWeight: 500, lineHeight: '1.15', color: 'rgb(1,1,1)', margin: 0, maxWidth: '700px' }}>
            News &amp; Update
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, lineHeight: '25px', color: 'rgb(124,124,124)', margin: 0, maxWidth: '450px' }}>
            Highlights from my photography journey, featuring my creative process and latest projects.
          </p>
        </div>
      </section>

      {/* Blog grid — cards are clickable */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 12px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <article
                className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: 'rgb(255,255,255)',
                  borderRadius: '34px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  height: '100%',
                }}
              >
                {/* Thumbnail */}
                <div style={{ width: '100%', height: '220px', position: 'relative', backgroundColor: 'rgb(220,222,228)' }}>
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                {/* Card footer */}
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(1,1,1)' }}>{post.title}</span>
                  <span style={{ fontSize: '12px', fontWeight: 300, color: 'rgb(124,124,124)', backgroundColor: 'rgb(240,242,248)', padding: '3px 12px', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                    {post.tag}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
