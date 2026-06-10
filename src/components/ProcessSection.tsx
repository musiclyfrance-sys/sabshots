'use client'

import { useEffect, useRef, useState } from 'react'

interface ProcessCard {
  title: string
  description: string
}

// Inline SVG icons, one per process card. Stroke uses currentColor so the icon
// can tint to green when its step becomes active.
const PROCESS_SVG_ICONS = [
  // Card 1 — Plan Your Session: notebook
  <svg key="plan" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M9 7h7" />
    <path d="M9 11h5" />
  </svg>,
  // Card 2 — Shoot Across Paris: camera
  <svg key="cam" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="8" width="20" height="13" rx="2.5" ry="2.5" />
    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <circle cx="12" cy="14.5" r="3" />
  </svg>,
  // Card 3 — Receive Your Photos: file with send arrow
  <svg key="file" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
  const [active, setActive] = useState<boolean[]>([false, false, false])

  // Title reveal (entrance fade), unchanged.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Scroll-driven step activation: a card lights up (and stays lit) once its
  // centre rises above ~80% of the viewport. Works on desktop (cards cascade via
  // the staggered transition-delay) and mobile (one by one as you scroll).
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    let raf = 0
    const check = () => {
      raf = 0
      const vh = window.innerHeight || document.documentElement.clientHeight
      const cards = Array.from(grid.children) as HTMLElement[]
      setActive((prev) => {
        let changed = false
        const next = [...prev]
        cards.forEach((c, i) => {
          if (!next[i]) {
            const r = c.getBoundingClientRect()
            if (r.top + r.height / 2 < vh * 0.8) { next[i] = true; changed = true }
          }
        })
        return changed ? next : prev
      })
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check) }
    check()
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
            {processCards.map((card, index) => (
              <div
                key={card.title}
                className={`process-step flex flex-col items-start justify-center ${active[index] ? 'is-active' : ''}`}
                style={{ gap: '24px', padding: '24px', backgroundColor: 'rgba(252, 253, 255, 0.97)', borderRadius: '34px', ['--d' as string]: `${index * 0.14}s` } as React.CSSProperties}
              >
                <div className="flex flex-row items-center justify-between w-full">
                  <span className="step-icon-wrap">{PROCESS_SVG_ICONS[index]}</span>
                  <span className="step-num">{`0${index + 1}`}</span>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
