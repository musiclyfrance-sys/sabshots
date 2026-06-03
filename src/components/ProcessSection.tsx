'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface ProcessCard {
  title: string
  description: string
}

// Inline SVG icons, one per process card.
const PROCESS_SVG_ICONS = [
  // Card 1 — Plan Your Session: notebook
  <svg key="plan" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M9 7h7"/>
    <path d="M9 11h5"/>
  </svg>,
  // Card 2 — Shoot Across Paris: camera
  <svg key="cam" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="8" width="20" height="13" rx="2.5" ry="2.5"/>
    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <circle cx="12" cy="14.5" r="3"/>
  </svg>,
  // Card 3 — Deliver with Impact: file with send arrow
  <svg key="file" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="12" y1="18" x2="12" y2="12"/>
    <polyline points="9 15 12 12 15 15"/>
  </svg>,
]

const processCards: ProcessCard[] = [
  {
    title: 'Plan Your Session',
    description: 'We choose the spot, the time, and the style that fit your vision.',
  },
  {
    title: 'Shoot Across Paris',
    description: 'We meet on location and capture natural, striking images.',
  },
  {
    title: 'Receive Your Photos',
    description: 'Your edited and retouched photos arrive within 24 to 72 hours.',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const revealEls = sectionRef.current?.querySelectorAll('.reveal')
    revealEls?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        margin: 'clamp(56px, 12vw, 100px) 0',
        padding: '12px',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '22px',
        color: 'rgb(1, 1, 1)',
      }}
      className="relative block w-full overflow-visible"
    >
      {/* .padding-global */}
      <div className="flex flex-col items-center justify-center w-full px-2 py-2 relative overflow-visible">
        {/* .container-medium */}
        <div
          style={{
            maxWidth: '1000px',
            gap: '50px',
            borderRadius: '40px',
            padding: '8px',
          }}
          className="flex flex-col items-center justify-center w-full overflow-visible"
        >
          {/* .section-tittle.center — scroll reveal */}
          <div
            className="reveal flex flex-col items-center justify-center w-full overflow-visible"
            style={{ gap: '14px' }}
          >
            {/* .badge */}
            <div
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '26px',
                padding: '4px 12px',
                fontSize: '16px',
                fontWeight: 400,
                color: 'rgb(1, 1, 1)',
              }}
              className="flex flex-row items-center gap-2"
            >
              Process
            </div>

            {/* h2.heading-style-h2.center */}
            <h2
              style={{
                fontSize: 'clamp(26px, 5vw, 32px)',
                fontWeight: 500,
                fontFamily: 'Manrope, sans-serif',
                lineHeight: '1.3',
                color: 'rgb(1, 1, 1)',
                maxWidth: '700px',
              }}
              className="text-center block"
            >
              How a Session Works
            </h2>

            {/* p.paragraph-large.center */}
            <p
              style={{
                fontSize: '18px',
                fontWeight: 300,
                fontFamily: 'Manrope, sans-serif',
                lineHeight: '25px',
                color: 'rgb(124, 124, 124)',
                maxWidth: '450px',
              }}
              className="text-center"
            >
              A simple three-step process, from your first message to your final photos.
            </p>
          </div>

          {/* .grid.benefits — 3-column grid of cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '20px',
              width: '100%',
              maxWidth: '984px',
            }}
            className="justify-center items-center overflow-visible"
          >
            {processCards.map((card, index) => (
              <div
                key={card.title}
                className={cn(
                  'reveal flex flex-col items-start justify-center overflow-visible',
                  'hover:-translate-y-1 hover:shadow-md transition-all duration-300',
                  index === 0 ? '' : index === 1 ? 'reveal-delay-1' : 'reveal-delay-2'
                )}
                style={{
                  gap: '24px',
                  padding: '24px',
                  backgroundColor: 'rgba(252, 253, 255, 0.97)',
                  borderRadius: '34px',
                  border: '3px solid rgb(255, 255, 255)',
                }}
              >
                {/* .flex-column — icon row */}
                <div className="flex flex-row items-center justify-between w-full">
                  {/* Inline SVG icon */}
                  {PROCESS_SVG_ICONS[index]}
                  {/* three-dot separator */}
                  <svg width="24" height="6" viewBox="0 0 24 6" fill="rgb(200,200,200)" aria-hidden="true">
                    <circle cx="3" cy="3" r="2"/><circle cx="12" cy="3" r="2"/><circle cx="21" cy="3" r="2"/>
                  </svg>
                </div>

                {/* .line._2 — horizontal separator */}
                <div
                  style={{
                    backgroundColor: 'rgb(245, 245, 245)',
                    height: '1px',
                    width: '100%',
                  }}
                />

                {/* .content.process */}
                <div
                  className="flex flex-col items-start justify-center w-full overflow-visible"
                  style={{ gap: '6px' }}
                >
                  {/* .sub-heading-regular.left */}
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 400,
                      fontFamily: 'Manrope, sans-serif',
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                    }}
                  >
                    {card.title}
                  </div>

                  {/* p.paragraph-regular.left */}
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: 300,
                      fontFamily: 'Manrope, sans-serif',
                      lineHeight: '22px',
                      color: 'rgb(124, 124, 124)',
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
