import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/TestimonialsSection'
import CtaSection from '@/components/CtaSection'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems } from '@/lib/site-data'

export const metadata = {
  title: 'Paris Photo Session Portfolio | SabShots Photographer',
  description:
    'Explore the SabShots Paris photo portfolio: Eiffel Tower, street photography, instagrammable spots, couples, proposals and families.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    type: 'website',
    siteName: 'SabShots',
    url: 'https://sabshots.com/portfolio',
    title: 'Paris Photo Session Portfolio | SabShots Photographer',
    description:
      'Explore the SabShots Paris photo portfolio: Eiffel Tower, street photography, instagrammable spots, couples, proposals and families.',
    images: ['/assets/portfolio-1.png'],
  },
}

export default function PortfolioPage() {
  return (
    <main style={{ background: 'rgb(240,242,248)', color: 'rgb(1,1,1)', fontFamily: 'Manrope, sans-serif', overflow: 'hidden' }}>
      <NavBar />

      <PageHero
        badge="Creative Photography"
        title="A Glimpse into My Perspective"
        subtitle="I capture your vision through creative photography."
      />

      {/* Portfolio grid — horizontal album cards, all CLICKABLE */}
      <section style={{ maxWidth: '1024px', margin: '0 auto', padding: '20px 28px 80px' }}>
        <div className="album-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))' }}>
          {portfolioItems.map((item, i) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className={`album-stack group reveal ${['', 'reveal-delay-1', 'reveal-delay-2'][i % 3]}`}
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              {/* Stacked album photos peeking behind the cover */}
              <div className="album-layer album-layer-2" aria-hidden="true">
                <Image src={item.images[2] || item.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="album-layer album-layer-1" aria-hidden="true">
                <Image src={item.images[1] || item.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>

              {/* Cover */}
              <div
                className="album-cover"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  aspectRatio: '3 / 2',
                  backgroundColor: 'rgb(200,202,208)',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Left black fade + title with arrow */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5"
                  style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.74) 0%, rgba(0,0,0,0.32) 42%, transparent 72%)' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '9px', color: 'white', fontSize: '22px', fontWeight: 600, lineHeight: 1.15 }}>
                    {item.title}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>

                {/* Auto photo count — reflects how many photos are in the album */}
                <div style={{ position: 'absolute', top: '14px', right: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', borderRadius: '99px', padding: '5px 12px', lineHeight: 1 }}>
                  <span style={{ fontSize: '12px', fontWeight: 400, color: 'white', lineHeight: 1, display: 'block' }}>{item.images.length} photos</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pretty divider before the closing CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', maxWidth: '900px', margin: '0 auto', padding: '4px 24px 8px' }}>
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(1,1,1,0.16))' }} />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(1,1,1,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(1,1,1,0.16))' }} />
      </div>

      <CtaSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
