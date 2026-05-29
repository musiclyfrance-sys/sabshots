import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProcessSection from '@/components/ProcessSection'
import CtaSection from '@/components/CtaSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Image from 'next/image'

const gear = [
  {
    name: 'Nanon EOS R9',
    description: 'Fast, precise, and built for any moment.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
        <circle cx="18.5" cy="9.5" r="0.5" fill="rgb(1,1,1)"/>
      </svg>
    ),
  },
  {
    name: '50mm f/1.2',
    description: 'Stunning portraits with rich depth and smooth blur.',
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
    name: 'Mensa Tripod',
    description: 'Rock-steady for long shots and creative frames.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="13" rx="2.5" ry="2.5"/>
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        <circle cx="12" cy="14.5" r="3"/>
      </svg>
    ),
  },
]

export const metadata = {
  title: 'About Me — Lightoory',
  description: 'I capture moments with creativity and natural light, making each photo tell a unique story.',
}

export default function AboutPage() {
  return (
    <main style={{ background: 'rgb(240,242,248)', color: 'rgb(1,1,1)', fontFamily: 'Manrope, sans-serif', overflow: 'hidden' }}>
      <NavBar />

      {/* Hero — full-width with dot-grid, matching original layout */}
      <section style={{ position: 'relative', padding: '110px 12px 0' }}>
        {/* Dot-grid background overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(1,1,1,0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0,
          }}
        />

        {/* Two-column hero — max-width container */}
        <div
          style={{
            position: 'relative', zIndex: 1,
            maxWidth: '1000px', margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '40px', alignItems: 'start',
            paddingBottom: '60px',
          }}
        >
          {/* Left: tall portrait photo */}
          <div
            style={{
              width: '100%',
              height: '580px',
              borderRadius: '40px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: 'rgb(200,202,208)',
            }}
          >
            <Image
              src="/assets/portrait-1.avif"
              alt="Portrait of photographer"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
              sizes="500px"
            />
          </div>

          {/* Right: bio + gear list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '24px' }}>
            {/* About Me badge */}
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

            {/* Heading */}
            <h1 style={{ fontSize: 'clamp(32px, 7vw, 44px)', fontWeight: 500, lineHeight: '1.2', color: 'rgb(1,1,1)', margin: 0 }}>
              Hey Im Keylis,&thinsp;wue.
            </h1>

            {/* Bio */}
            <p style={{ fontSize: '18px', fontWeight: 300, lineHeight: '27px', color: 'rgb(124,124,124)', margin: 0 }}>
              I capture moments with creativity and natural light, making each photo tell a unique story.
            </p>

            {/* Gear list card */}
            <div style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '28px', overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ padding: '14px 20px', fontSize: '13px', fontWeight: 300, color: 'rgb(124,124,124)', borderBottom: '1px solid rgb(240,242,248)' }}>
                Gear and tools I use
              </div>

              {/* Gear items */}
              {gear.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px',
                    padding: '18px 20px',
                    borderBottom: i < gear.length - 1 ? '1px solid rgb(240,242,248)' : 'none',
                  }}
                >
                  {/* Icon in small rounded bg */}
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

      {/* Reused sections */}
      <ProcessSection />
      <CtaSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
