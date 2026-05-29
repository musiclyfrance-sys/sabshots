import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import { portfolioItems } from '@/lib/site-data'

export function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = portfolioItems.find((p) => p.slug === slug)
  if (!item) return { title: 'Not Found' }
  return { title: `${item.title} — Lightoory Portfolio` }
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = portfolioItems.find((p) => p.slug === slug)
  if (!item) notFound()

  // Other projects for "more work" section
  const others = portfolioItems.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <main style={{ background: 'rgb(240,242,248)', color: 'rgb(1,1,1)', fontFamily: 'Manrope, sans-serif', minHeight: '100vh' }}>
      <NavBar />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '120px 16px 80px' }}>

        {/* Header card — matches original: back arrow + aperture icon + year + title + description */}
        <div
          style={{
            backgroundColor: 'rgb(255,255,255)', borderRadius: '34px',
            padding: '28px 32px', marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <Link
              href="/portfolio"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '14px', fontWeight: 300, color: 'rgb(1,1,1)',
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back
            </Link>
            {/* Aperture icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="3"/>
              <line x1="12" y1="2" x2="12" y2="9"/>
              <line x1="12" y1="15" x2="12" y2="22"/>
              <line x1="3" y1="12" x2="9" y2="12"/>
              <line x1="15" y1="12" x2="22" y2="12"/>
            </svg>
          </div>

          <p style={{ fontSize: '13px', fontWeight: 300, color: 'rgb(124,124,124)', margin: '0 0 8px' }}>
            {item.year}
          </p>
          <h1 style={{ fontSize: 'clamp(30px, 6.5vw, 40px)', fontWeight: 500, lineHeight: '48px', margin: '0 0 10px', color: 'rgb(1,1,1)' }}>
            {item.title}
          </h1>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgb(124,124,124)', margin: 0 }}>
            {item.description}
          </p>
        </div>

        {/* Hero image — full width */}
        <div
          style={{
            width: '100%', height: '520px', position: 'relative',
            borderRadius: '34px', overflow: 'hidden', marginBottom: '16px',
            backgroundColor: 'rgb(200,202,208)',
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="1000px"
          />
        </div>

        {/* Section title */}
        <div style={{ textAlign: 'center', padding: '48px 0 32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgb(255,255,255)', borderRadius: '26px', padding: '4px 16px', fontSize: '14px', fontWeight: 300, marginBottom: '16px' }}>
            {item.category}
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 32px)', fontWeight: 500, lineHeight: '1.3', margin: 0, color: 'rgb(1,1,1)' }}>
            An Insight into My Perspective
          </h2>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgb(124,124,124)', margin: '8px 0 0', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
            I capture your vision through creative photography.
          </p>
        </div>

        {/* Additional images — 2-col grid */}
        {item.images.length > 1 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '16px', marginBottom: '48px' }}>
            {item.images.slice(1).map((src, i) => (
              <div
                key={i}
                style={{ height: '320px', position: 'relative', borderRadius: '24px', overflow: 'hidden', backgroundColor: 'rgb(200,202,208)' }}
              >
                <Image src={src} alt={`${item.title} ${i + 2}`} fill style={{ objectFit: 'cover' }} sizes="500px" />
              </div>
            ))}
          </div>
        )}

        {/* More work */}
        <div style={{ paddingTop: '48px', borderTop: '1px solid rgb(220,222,228)' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '24px', color: 'rgb(1,1,1)' }}>More Work</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
            {others.map((other) => (
              <Link key={other.slug} href={`/portfolio/${other.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div
                  className="hover:scale-105 transition-transform duration-300"
                  style={{
                    position: 'relative', aspectRatio: '3/2', borderRadius: '20px',
                    overflow: 'hidden', backgroundColor: 'rgb(200,202,208)', cursor: 'pointer',
                  }}
                >
                  <Image src={other.image} alt={other.title} fill style={{ objectFit: 'cover' }} sizes="320px" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px', background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)' }}>
                    <span style={{ color: 'white', fontSize: '13px', fontWeight: 400 }}>{other.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CtaSection />
      <Footer />
    </main>
  )
}
