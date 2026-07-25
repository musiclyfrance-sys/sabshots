'use client'

import { useEffect, useRef } from 'react'

export interface ExperienceSpotItem {
  title: string
  text: string
}

// "Best spots and moments" grid: four clean cards in the exact style of the
// ProcessSection cards (same background, radius, divider and typography). The
// H2 is phrased as a question to target Google's People Also Ask results.
export default function ExperienceSpots({
  h2,
  spots,
}: {
  h2: string
  spots: ExperienceSpotItem[]
}) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
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
      <div className="flex flex-col items-center justify-center w-full px-2 py-2 relative overflow-visible">
        <div
          style={{ maxWidth: '1000px', gap: '50px', borderRadius: '40px', padding: '8px' }}
          className="flex flex-col items-center justify-center w-full overflow-visible"
        >
          {/* Section title */}
          <div className="reveal flex flex-col items-center justify-center w-full overflow-visible" style={{ gap: '14px' }}>
            <div
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '26px',
                padding: '4px 12px',
                fontSize: '14px',
                fontWeight: 300,
                color: 'rgb(1, 1, 1)',
              }}
              className="flex flex-row items-center gap-2"
            >
              Best Spots
            </div>
            <h2
              style={{
                fontSize: 'clamp(26px, 5vw, 32px)',
                fontWeight: 500,
                fontFamily: 'Manrope, sans-serif',
                lineHeight: '1.3',
                color: 'rgb(1, 1, 1)',
                maxWidth: '760px',
              }}
              className="text-center block"
            >
              {h2}
            </h2>
          </div>

          {/* 2x2 cards grid, ProcessSection card language */}
          <div
            className="reveal reveal-delay-1"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '20px',
              width: '100%',
              maxWidth: '984px',
            }}
          >
            {spots.map((spot, index) => (
              <div
                key={spot.title}
                className="flex flex-col items-start justify-start overflow-visible"
                style={{
                  gap: '18px',
                  padding: '24px',
                  backgroundColor: 'rgba(252, 253, 255, 0.97)',
                  borderRadius: '34px',
                  border: '1px solid rgb(240, 242, 246)',
                }}
              >
                <div className="flex flex-row items-center justify-between w-full">
                  {/* Numbered disc, same marker language as the process steps */}
                  <div
                    aria-hidden="true"
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '999px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 500,
                      fontFamily: 'Manrope, sans-serif',
                      lineHeight: 1,
                      border: '1.5px solid rgb(1, 1, 1)',
                      backgroundColor: 'rgb(1, 1, 1)',
                      color: 'rgb(255, 255, 255)',
                    }}
                  >
                    {index + 1}
                  </div>
                  <svg width="24" height="6" viewBox="0 0 24 6" fill="rgb(200,200,200)" aria-hidden="true">
                    <circle cx="3" cy="3" r="2" />
                    <circle cx="12" cy="3" r="2" />
                    <circle cx="21" cy="3" r="2" />
                  </svg>
                </div>

                <div style={{ backgroundColor: 'rgb(245, 245, 245)', height: '1px', width: '100%' }} />

                <div className="flex flex-col items-start justify-center w-full overflow-visible" style={{ gap: '6px' }}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 400,
                      fontFamily: 'Manrope, sans-serif',
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                      margin: 0,
                    }}
                  >
                    {spot.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: 300,
                      fontFamily: 'Manrope, sans-serif',
                      lineHeight: '22px',
                      color: 'rgb(124, 124, 124)',
                      margin: 0,
                    }}
                  >
                    {spot.text}
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
