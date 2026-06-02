import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/TestimonialsSection'
import CtaSection from '@/components/CtaSection'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems } from '@/lib/site-data'

export const metadata = {
  title: 'Paris Photo Session Portfolio | SabShots Photographer',
  description:
    'Explore the SabShots Paris photo portfolio: Eiffel Tower, street photography, instagrammable spots, couples, proposals, families and Paris by night.',
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

      {/* Portfolio grid — horizontal album cards, all CLICKABLE */}
      <section style={{ maxWidth: '1024px', margin: '0 auto', padding: '20px 12px 80px' }}>
        <p style={{ textAlign: 'center', color: 'rgb(124,124,124)', fontSize: '16px', fontWeight: 300, lineHeight: '24px', maxWidth: '600px', margin: '0 auto 32px' }}>
          Each cover is a full album. Open any collection to see all the photos inside.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '16px' }}>
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
                  borderRadius: '24px',
                  overflow: 'hidden',
                  aspectRatio: '3 / 2',
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

                {/* Left black fade so the album title stays readable on any photo */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5"
                  style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.30) 42%, transparent 72%)' }}
                >
                  <span style={{ color: 'white', fontSize: '22px', fontWeight: 600, lineHeight: 1.15 }}>{item.title}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '5px', color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 300 }}>
                    View album
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
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
