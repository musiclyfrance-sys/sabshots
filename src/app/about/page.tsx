import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProcessSection from '@/components/ProcessSection'
import CtaSection from '@/components/CtaSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PageHero from '@/components/PageHero'
import Image from 'next/image'

const gear = [
  {
    name: 'Fujifilm XT50',
    description: 'My everyday camera for crisp, vivid shots.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
  },
  {
    name: 'XC15-45mm',
    description: 'A versatile wide zoom for streets and scenes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="3" x2="12" y2="8"/>
        <line x1="12" y1="16" x2="12" y2="21"/>
        <line x1="3" y1="12" x2="8" y2="12"/>
        <line x1="16" y1="12" x2="21" y2="12"/>
      </svg>
    ),
  },
  {
    name: 'Sony A7 IV',
    description: 'Built for night scenes and low light photography.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    ),
  },
]

export const metadata = {
  title: 'About Yassir Sabounji | Paris Photographer | SabShots',
  description:
    'Meet Yassir Sabounji, a Paris photographer who captures your moments with creativity and natural light, from the Eiffel Tower to the streets of the city.',
}

export default function AboutPage() {
  return (
    <main style={{ background: 'rgb(240,242,248)', color: 'rgb(1,1,1)', fontFamily: 'Manrope, sans-serif', overflow: 'hidden' }}>
      <NavBar />

      {/* Mobile hero — identical to the other pages (spinning icon + title + subtitle + dot panel) */}
      <div className="about-mobile-hero">
        <PageHero
          badge="About Me"
          title="Hey, I'm Yassir Sabounji."
          subtitle="I capture moments across Paris with creativity and natural light, making each photo tell a unique story."
        />
      </div>

      {/* Bio */}
      <section className="about-bio-section" style={{ position: 'relative', paddingLeft: '28px', paddingRight: '28px' }}>
        {/* Dot-grid (desktop only; on mobile the PageHero above provides the dots) */}
        <div
          className="about-section-dots"
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(1,1,1,0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px', pointerEvents: 'none', zIndex: 0,
          }}
        />

        <div className="about-grid" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', paddingBottom: '60px' }}>
          {/* Hero text — desktop only (mobile uses the PageHero above) */}
          <div className="about-hero-text" style={{ flexDirection: 'column', gap: '20px', paddingTop: '24px' }}>
            <div
              style={{
                display: 'inline-flex', alignItems: 'center',
                backgroundColor: 'rgb(255,255,255)', borderRadius: '26px',
                padding: '4px 16px', fontSize: '14px', fontWeight: 300,
                color: 'rgb(1,1,1)', alignSelf: 'flex-start',
              }}
            >
              About Me
            </div>
            <h2 style={{ fontSize: 'clamp(34px, 8vw, 52px)', fontWeight: 500, lineHeight: '1.15', color: 'rgb(1,1,1)', margin: 0 }}>
              Hey, I&apos;m Yassir Sabounji.
            </h2>
            <p style={{ fontSize: '18px', fontWeight: 300, lineHeight: '25px', color: 'rgb(124,124,124)', margin: 0, maxWidth: '460px' }}>
              I capture moments across Paris with creativity and natural light, making each photo tell a unique story.
            </p>
          </div>

          {/* Portrait */}
          <div
            className="about-portrait"
            style={{
              width: '100%',
              borderRadius: '40px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: 'rgb(200,202,208)',
            }}
          >
            <Image
              src="/assets/portrait-1.avif"
              alt="Portrait of Yassir Sabounji, photographer in Paris"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
              sizes="500px"
            />
          </div>

          {/* Gear list card */}
          <div className="about-gear">
            <div style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '28px', overflow: 'hidden' }}>
              <div style={{ padding: '14px 20px', fontSize: '13px', fontWeight: 300, color: 'rgb(124,124,124)', borderBottom: '1px solid rgb(240,242,248)' }}>
                Gear and tools I use
              </div>
              {gear.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px',
                    padding: '18px 20px',
                    borderBottom: i < gear.length - 1 ? '1px solid rgb(240,242,248)' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '40px', height: '40px', flexShrink: 0,
                      backgroundColor: 'rgb(240,242,248)', borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 500, color: 'rgb(1,1,1)' }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 300, color: 'rgb(124,124,124)' }}>
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
      <CtaSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
