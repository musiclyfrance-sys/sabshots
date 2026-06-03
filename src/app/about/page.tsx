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

const stats = [
  { value: '8', label: 'Years of experience' },
  { value: '500+', label: 'Clients photographed' },
  { value: '80+', label: 'Nationalities' },
  { value: '∞', label: 'Satisfaction' },
]

export const metadata = {
  title: 'About Yassir | Private Paris Photographer | SabShots',
  description:
    'Meet Yassir, a Paris photographer who captures your moments with creativity and natural light, from the Eiffel Tower to the streets of the city.',
}

export default function AboutPage() {
  return (
    <main style={{ background: 'rgb(240,242,248)', color: 'rgb(1,1,1)', fontFamily: 'Manrope, sans-serif', overflow: 'hidden' }}>
      <NavBar />

      {/* Hero — identical to the other pages (dot panel + spinning icon + title + subtitle) */}
      <PageHero
        badge="About Me"
        title="Hey, I'm Yassir."
        subtitle="I capture moments across Paris with creativity and natural light, making each photo tell a unique story."
      />

      {/* Photo + gear */}
      <section style={{ padding: '0 28px', fontFamily: 'Manrope, sans-serif' }}>
        <div className="about-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
              alt="Portrait of Yassir, photographer in Paris"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
              sizes="500px"
            />
          </div>

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

      {/* My Story — storytelling + stats (before "How a Session Works") */}
      <section style={{ padding: 'clamp(48px, 9vw, 88px) 28px 0', fontFamily: 'Manrope, sans-serif' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '14px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgb(255,255,255)', borderRadius: '26px', padding: '4px 16px', fontSize: '14px', fontWeight: 300, color: 'rgb(1,1,1)' }}>
              My Story
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 5vw, 32px)', fontWeight: 500, lineHeight: '1.3', color: 'rgb(1,1,1)', margin: 0, maxWidth: '620px' }}>
              From a Phone in My Pocket to the Streets of Paris
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '28px', fontSize: '18px', fontWeight: 300, lineHeight: '29px', color: 'rgb(95,95,100)' }}>
            <p style={{ margin: 0 }}>
              It all started with a phone and a lot of curiosity. As a teenager, I was the one who could never stop capturing the moment, first on my phone, then on the small cameras I saved up for one by one. I taught myself frame after frame, and what began as a hobby slowly became an obsession, and then a craft I chose to study seriously.
            </p>
            <p style={{ margin: 0 }}>
              Over the last eight years, I turned that passion into a full career as a professional photographer in Paris. I worked freelance and solo, and I built a strong reputation on platforms like GetYourGuide and Airbnb Experiences, climbing every step from my very first paid shoot to becoming a name travelers trust for their private photo session in Paris.
            </p>
            <p style={{ margin: 0 }}>
              Since then, I have photographed more than 500 clients from over 80 nationalities, from couples and families to solo travelers and surprise proposals at the Eiffel Tower. Every session taught me the same lesson: the magic is never only in the camera, it is in making you feel relaxed so your real story comes through. When you book a session with me, you do not just leave with photos, you leave with memories of Paris you will want to relive for years.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(28px, 7vw, 64px)', marginTop: '44px' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(30px, 6vw, 40px)', fontWeight: 500, color: 'rgb(1,1,1)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '14px', fontWeight: 300, color: 'rgb(124,124,124)', marginTop: '8px' }}>{s.label}</div>
              </div>
            ))}
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
