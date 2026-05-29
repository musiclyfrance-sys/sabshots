import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/TestimonialsSection'
import CtaSection from '@/components/CtaSection'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems } from '@/lib/site-data'

export const metadata = {
  title: 'Portfolio — Lightoory',
  description: 'A glimpse into my perspective — creative photography capturing stories.',
}

function ApertureIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="3"/>
      <line x1="12" y1="2" x2="12" y2="9"/>
      <line x1="12" y1="15" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="9" y2="12"/>
      <line x1="15" y1="12" x2="22" y2="12"/>
    </svg>
  )
}

export default function PortfolioPage() {
  return (
    <main style={{ background: 'rgb(240,242,248)', color: 'rgb(1,1,1)', fontFamily: 'Manrope, sans-serif', overflow: 'hidden' }}>
      <NavBar />

      {/* Hero with dot-grid — matches original exactly */}
      <section
        style={{
          position: 'relative',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '140px 12px 60px',
          textAlign: 'center',
        }}
      >
        {/* Dot-grid overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(1,1,1,0.09) 1px, transparent 1px)',
            backgroundSize: '24px 24px', pointerEvents: 'none', zIndex: 0,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          {/* Aperture icon */}
          <ApertureIcon />

          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgb(255,255,255)', borderRadius: '26px', padding: '4px 16px', fontSize: '14px', fontWeight: 300, color: 'rgb(1,1,1)' }}>
            Creative Photograpy
          </div>

          <h1 style={{ fontSize: 'clamp(34px, 8vw, 52px)', fontWeight: 500, lineHeight: '1.15', color: 'rgb(1,1,1)', margin: 0, maxWidth: '700px' }}>
            A Glimpse into My Perspective
          </h1>

          <p style={{ fontSize: '18px', fontWeight: 300, lineHeight: '25px', color: 'rgb(124,124,124)', margin: 0, maxWidth: '420px' }}>
            I capture your vision through creative photography.
          </p>
        </div>
      </section>

      {/* Portfolio grid — 3 cols, all portrait cards, all CLICKABLE */}
      <section style={{ maxWidth: '1024px', margin: '0 auto', padding: '20px 12px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
          {portfolioItems.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className="group hover:scale-105 transition-transform duration-400"
                style={{
                  position: 'relative',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  aspectRatio: '3 / 4',
                  backgroundColor: 'rgb(200,202,208)',
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Hover overlay — CSS group-hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)' }}
                >
                  <span style={{ color: 'white', fontSize: '16px', fontWeight: 500 }}>{item.title}</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 300 }}>{item.category} · {item.year}</span>
                </div>

                {/* Camera icon + year chip (always visible at top) */}
                <div
                  style={{
                    position: 'absolute', top: '14px', left: '14px',
                    backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '99px',
                    padding: '4px 10px', display: 'flex', alignItems: 'center', gap: '6px',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                  <span style={{ fontSize: '11px', fontWeight: 300, color: 'rgb(1,1,1)' }}>{item.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
