/**
 * ============================================================================
 * BACKUP — ProcessSection "Spotlight / Dim" design (saved 2026-06-10)
 * ============================================================================
 *
 * This is the scroll-driven SPOTLIGHT version of the "How a Session Works"
 * section: one card is fully lit (full opacity + slight lift + soft shadow)
 * while the other two are dimmed to 0.42 opacity. The active card follows the
 * scroll position and is reversible.
 *
 * It is kept here on purpose as a fallback. This folder is excluded from the
 * TypeScript build (see tsconfig.json "exclude") so this file is NOT compiled
 * and will never affect the live site.
 *
 * TO RESTORE THIS DESIGN:
 *   Copy the component code below (everything under the divider) back into
 *   src/components/ProcessSection.tsx, replacing the current version.
 * ============================================================================
 */

'use client'

import { useEffect, useRef, useState } from 'react'

interface ProcessCard {
  title: string
  description: string
}

// Inline SVG icons, one per process card.
const PROCESS_SVG_ICONS = [
  <svg key="plan" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M9 7h7" />
    <path d="M9 11h5" />
  </svg>,
  <svg key="cam" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="8" width="20" height="13" rx="2.5" ry="2.5" />
    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <circle cx="12" cy="14.5" r="3" />
  </svg>,
  <svg key="file" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <polyline points="9 15 12 12 15 15" />
  </svg>,
]

const processCards: ProcessCard[] = [
  { title: 'Plan Your Session', description: 'We choose the spot, the time, and the style that fit your vision.' },
  { title: 'Shoot Across Paris', description: 'We meet on location and capture natural, striking images.' },
  { title: 'Receive Your Photos', description: 'Your edited and retouched photos arrive within 24 to 72 hours.' },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [reduced, setReduced] = useState(false)

  // Title entrance reveal (unchanged).
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Scroll-driven single "active" step: a spotlight that follows the scroll and
  // is fully reversible (scroll up moves it back). Only one step is lit at a time.
  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const grid = gridRef.current
    if (!grid) return
    let raf = 0
    const compute = () => {
      raf = 0
      const rect = grid.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      // 0 when the grid is just below the viewport, 1 when it has fully passed above.
      const p = (vh - rect.top) / (vh + rect.height)
      const idx = Math.min(2, Math.max(0, Math.floor(p * 3)))
      setActive((prev) => (prev === idx ? prev : idx))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(compute) }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ margin: 'clamp(56px, 12vw, 100px) 0', padding: '12px', fontFamily: 'Manrope, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '22px', color: 'rgb(1, 1, 1)' }}
      className="relative block w-full overflow-visible"
    >
      <div className="flex flex-col items-center justify-center w-full px-2 py-2 relative overflow-visible">
        <div style={{ maxWidth: '1000px', gap: '50px', borderRadius: '40px', padding: '8px' }} className="flex flex-col items-center justify-center w-full overflow-visible">
          {/* Title */}
          <div className="reveal flex flex-col items-center justify-center w-full overflow-visible" style={{ gap: '14px' }}>
            <div style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '26px', padding: '4px 12px', fontSize: '16px', fontWeight: 400, color: 'rgb(1, 1, 1)' }} className="flex flex-row items-center gap-2">
              Process
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 5vw, 32px)', fontWeight: 500, fontFamily: 'Manrope, sans-serif', lineHeight: '1.3', color: 'rgb(1, 1, 1)', maxWidth: '700px' }} className="text-center block">
              How a Session Works
            </h2>
            <p style={{ fontSize: '18px', fontWeight: 300, fontFamily: 'Manrope, sans-serif', lineHeight: '25px', color: 'rgb(124, 124, 124)', maxWidth: '450px' }} className="text-center">
              A simple three-step process, from your first message to your final photos.
            </p>
          </div>

          {/* Steps grid */}
          <div
            ref={gridRef}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px', width: '100%', maxWidth: '984px' }}
            className="justify-center items-stretch overflow-visible"
          >
            {processCards.map((card, index) => {
              const on = reduced || active === index
              return (
                <div
                  key={card.title}
                  className="flex flex-col items-start justify-center overflow-visible"
                  style={{
                    gap: '24px',
                    padding: '24px',
                    backgroundColor: 'rgba(252, 253, 255, 0.97)',
                    borderRadius: '34px',
                    border: '1px solid rgb(240, 242, 246)',
                    opacity: on ? 1 : 0.42,
                    transform: reduced ? 'none' : on ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: on ? '0 26px 50px -28px rgba(16, 40, 55, 0.22)' : '0 1px 0 rgba(0,0,0,0)',
                    transition: reduced ? 'none' : 'opacity 0.5s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.55s ease',
                  }}
                >
                  <div className="flex flex-row items-center justify-between w-full">
                    {PROCESS_SVG_ICONS[index]}
                    <svg width="24" height="6" viewBox="0 0 24 6" fill="rgb(200,200,200)" aria-hidden="true">
                      <circle cx="3" cy="3" r="2" /><circle cx="12" cy="3" r="2" /><circle cx="21" cy="3" r="2" />
                    </svg>
                  </div>

                  <div style={{ backgroundColor: 'rgb(245, 245, 245)', height: '1px', width: '100%' }} />

                  <div className="flex flex-col items-start justify-center w-full overflow-visible" style={{ gap: '6px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 400, fontFamily: 'Manrope, sans-serif', lineHeight: '22px', color: 'rgb(1, 1, 1)' }}>
                      {card.title}
                    </div>
                    <p style={{ fontSize: '16px', fontWeight: 300, fontFamily: 'Manrope, sans-serif', lineHeight: '22px', color: 'rgb(124, 124, 124)' }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
