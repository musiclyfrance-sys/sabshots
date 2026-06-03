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
  return {
    title: `${item.title} Photo Album | SabShots Paris Photographer`,
    description: item.description,
  }
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

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '120px 28px 0' }}>

        {/* Header card — back link + title + description (no date, no icon) */}
        <div
          style={{
            backgroundColor: 'rgb(255,255,255)', borderRadius: '34px',
            padding: '28px 32px', marginBottom: '40px',
          }}
        >
          <Link
            href="/portfolio"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontSize: '14px', fontWeight: 300, color: 'rgb(1,1,1)',
              textDecoration: 'none', marginBottom: '20px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to portfolio
          </Link>
          <h1 style={{ fontSize: 'clamp(30px, 6.5vw, 40px)', fontWeight: 500, lineHeight: '1.2', margin: '0 0 10px', color: 'rgb(1,1,1)' }}>
            {item.title}
          </h1>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgb(124,124,124)', margin: 0, maxWidth: '600px' }}>
            {item.description}
          </p>
        </div>

        {/* Gallery — alternating landscape (3:2) and portrait (2:3) rows.
            Desktop: 2 per row. Mobile: landscapes 2-up, portraits full-width. */}
        <div className="album-gallery">
          {item.images.map((src, i) => {
            // Blocks of 8: 2 landscapes then 6 portraits, repeating.
            const isPortrait = i % 8 >= 2
            const isLonePortrait = i % 5 === 4 // the 3rd portrait, alone on mobile (2 per row)
            return (
              <div key={i} className={`album-shot ${isPortrait ? 'album-shot-p' : 'album-shot-l'}${isLonePortrait ? ' album-shot-p-lone' : ''}`}>
                <Image
                  src={src}
                  alt={`${item.title} photo ${i + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 700px) 100vw, 480px"
                  priority={i < 2}
                />
              </div>
            )
          })}
        </div>

        {/* More Work — centered, at the bottom */}
        <div style={{ paddingTop: '80px', paddingBottom: '8px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 32px)', fontWeight: 500, lineHeight: '1.3', margin: '0 0 28px', color: 'rgb(1,1,1)', textAlign: 'center' }}>
            More Work
          </h2>
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
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '14px 16px', background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 70%)' }}>
                    <span style={{ color: 'white', fontSize: '15px', fontWeight: 500 }}>{other.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Pretty divider before the CTA (same as the portfolio list page) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', maxWidth: '900px', margin: '64px auto 0', padding: '0 28px' }}>
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(1,1,1,0.16))' }} />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(1,1,1,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(1,1,1,0.16))' }} />
      </div>

      <CtaSection />
      <Footer />
    </main>
  )
}
