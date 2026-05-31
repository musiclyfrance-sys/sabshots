'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const SLIDES = [
  { src: '/assets/showcase-1.png', alt: 'Majestic Mountain Peak' },
  { src: '/assets/portrait-1.avif', alt: 'Dreamlike Portrait' },
  { src: '/assets/showcase-2.png', alt: 'Serene Tree Landscape' },
  { src: '/assets/portrait-2.avif', alt: 'Serene Floral Embrace' },
]

function TagBadge({ label }: { label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        height: '30px',
        padding: '4px 12px',
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: '26px',
        color: 'rgb(1, 1, 1)',
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: '22px',
      }}
    >
      {label}
    </div>
  )
}

// Doubled for seamless CSS vertical loop
const DOUBLED_SLIDES = [...SLIDES, ...SLIDES]

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll reveal
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reveals = section.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        display: 'block',
        margin: 'clamp(56px, 12vw, 100px) 0',
        padding: '12px',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '22px',
        color: 'rgb(1, 1, 1)',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {/* .padding-global */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '8px',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        {/* .container-medium */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            width: '100%',
            maxWidth: '1000px',
            borderRadius: '40px',
            padding: '8px',
            position: 'relative',
            textAlign: 'center',
            overflow: 'visible',
          }}
        >
          {/* .section-tittle.center */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              width: '100%',
              maxWidth: '984px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'visible',
            }}
          >
            {/* Badge — "Expertise" */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                height: '30px',
                padding: '4px 12px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '26px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  color: 'rgb(1, 1, 1)',
                  fontSize: '14px',
                  fontWeight: 300,
                  lineHeight: '22px',
                }}
              >
                Services
              </span>
            </div>

            {/* h2 */}
            <h2
              style={{
                display: 'block',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(26px, 5vw, 32px)',
                fontWeight: 500,
                lineHeight: '1.3',
                color: 'rgb(1, 1, 1)',
                textAlign: 'center',
                margin: 0,
              }}
            >
              How can I help you today?
            </h2>

            {/* Subtitle */}
            <p
              style={{
                display: 'flex',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                fontWeight: 300,
                lineHeight: '25px',
                color: 'rgb(124, 124, 124)',
                textAlign: 'center',
                margin: 0,
                maxWidth: '450px',
              }}
            >
              From private Eiffel Tower shoots to custom sessions anywhere in Paris, I bring your vision to life.
            </p>
          </div>

          {/* .grid.expertise — 3-column grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 314.664px))',
              gap: '20px',
              width: '100%',
              maxWidth: '984px',
              justifyContent: 'center',
              justifyItems: 'center',
              alignItems: 'stretch',
              marginInline: 'auto',
              overflow: 'visible',
            }}
            className={cn(
              'max-[991px]:grid-cols-1'
            )}
          >
            {/* ── Col 1: CSS continuous vertical scroll — no dots, no stars, no backwards jump ── */}
            <div
              className="reveal reveal-delay-1"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                maxWidth: '314.664px',
                height: '610px',
                padding: '8px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '34px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Slide mask */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '298.664px',
                  height: '594px',
                  overflow: 'hidden',
                  position: 'relative',
                  borderRadius: '34px',
                }}
              >
                {/* Continuous vertical strip — doubled for seamless loop */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    animation: 'imageScrollV 12s linear infinite',
                    width: '100%',
                  }}
                >
                  {DOUBLED_SLIDES.map((slide, i) => (
                    <div
                      key={i}
                      style={{
                        width: '100%',
                        height: '594px',
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="299px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Col 2: Center column ── */}
            <div
              className="reveal reveal-delay-2"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                width: '100%',
                maxWidth: '314.664px',
              }}
            >
              {/* Large card — "Shot with Top Gear" */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '24px',
                  width: '100%',
                  height: '464px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '34px',
                  transition: 'transform 500ms ease',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                {/* Thumbnail image */}
                <div
                  style={{
                    width: '100%',
                    height: '218px',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/assets/expertise-image.png"
                    alt="Gear lens"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="267px"
                  />
                </div>

                {/* Icon — camera aperture (Shot with Top Gear) */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>

                {/* Content */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '6px',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                      textAlign: 'left',
                    }}
                  >
                    Shot with Top Gear
                  </div>
                  <p
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: '22px',
                      color: 'rgb(124, 124, 124)',
                      textAlign: 'left',
                      margin: 0,
                    }}
                  >
                    Using premium equipment for stunning images.
                  </p>
                </div>

                {/* Tag pills */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <TagBadge label="Lighting" />
                  <TagBadge label="Direction" />
                  <TagBadge label="Edting" />
                </div>
              </div>

              {/* Mini stat card — "Over 500+ happy clients served." */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '24px',
                  width: '100%',
                  height: '118px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '34px',
                  transition: 'transform 500ms ease',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                {/* Icon — badge/medal (Over 500+ clients) */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '6px',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                      textAlign: 'left',
                    }}
                  >
                    Over 500+ happy clients served.
                  </div>
                </div>
              </div>
            </div>

            {/* ── Col 3: Right column ── */}
            <div
              className="reveal reveal-delay-3"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                width: '100%',
                maxWidth: '314.664px',
              }}
            >
              {/* Medium card — "E-Commerce Shoots" */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '24px',
                  width: '100%',
                  height: '222px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '34px',
                  transition: 'transform 500ms ease',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                {/* Icon — Eiffel Tower (Photo Session in Paris) */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2v3" />
                  <path d="M9.5 5h5" />
                  <path d="M10 5C9 11 6 17 4 22" />
                  <path d="M14 5C15 11 18 17 20 22" />
                  <path d="M8 11h8" />
                  <path d="M6.2 16h11.6" />
                  <path d="M12 5v17" />
                </svg>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '6px',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                      textAlign: 'left',
                    }}
                  >
                    Photo Session in Paris
                  </div>
                  <p
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: '22px',
                      color: 'rgb(124, 124, 124)',
                      textAlign: 'left',
                      margin: 0,
                    }}
                  >
                    The most photogenic spots in Paris, delivered quickly.
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <TagBadge label="Streets" />
                  <TagBadge label="Monuments" />
                </div>
              </div>

              {/* Mini card — "Smooth client experience" */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '24px',
                  width: '100%',
                  height: '118px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '34px',
                  transition: 'transform 500ms ease',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                {/* Icon — user/profile (Smooth client experience) */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '6px',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                      textAlign: 'left',
                    }}
                  >
                    Smooth client experience
                  </div>
                </div>
              </div>

              {/* Medium card — "Portrait Photography" */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '24px',
                  width: '100%',
                  height: '222px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '34px',
                  transition: 'transform 500ms ease',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                {/* Icon — location pin (Custom Sessions) */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '6px',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                      textAlign: 'left',
                    }}
                  >
                    Custom Sessions
                  </div>
                  <p
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: '22px',
                      color: 'rgb(124, 124, 124)',
                      textAlign: 'left',
                      margin: 0,
                    }}
                  >
                    You pick the location anywhere in Paris.
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <TagBadge label="Couples" />
                  <TagBadge label="Solo" />
                  <TagBadge label="Proposals" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
