'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import type { ExperienceLink } from '@/lib/experiences'

// Compact SEO intro: keyword H2, two short paragraphs (the second one is a
// snippet-ready definition), then two pill buttons for internal navigation.
export default function ExperienceIntro({
  h2,
  paragraphs,
  buttons,
}: {
  h2: string
  paragraphs: string[]
  buttons: ExperienceLink[]
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
        display: 'block',
        position: 'relative',
        margin: '0 0 clamp(40px, 8vw, 72px)',
        padding: '12px',
        fontFamily: 'Manrope, sans-serif',
        color: 'rgb(1, 1, 1)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px' }}>
        <div
          className="reveal"
          style={{
            width: '100%',
            maxWidth: '820px',
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '34px',
            padding: 'clamp(24px, 5vw, 40px)',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(22px, 4.5vw, 28px)',
              fontWeight: 500,
              lineHeight: '1.3',
              color: 'rgb(1, 1, 1)',
              margin: '0 0 16px',
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            {h2}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: '26px',
                  color: 'rgb(60, 60, 60)',
                  margin: 0,
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Internal navigation buttons, same pill language as the hero */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '22px',
            }}
          >
            {/* First button = the album link, rendered as the black primary pill */}
            {buttons.map((btn, i) => (
              <Link
                key={btn.href}
                href={btn.href}
                className="btn-back"
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: i === 0 ? 'rgb(255, 255, 255)' : 'rgb(1, 1, 1)',
                  backgroundColor: i === 0 ? 'rgb(1, 1, 1)' : 'rgb(247, 248, 253)',
                  padding: '11px 20px',
                  display: 'inline-flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '99px',
                  border: i === 0 ? '1px solid rgb(1, 1, 1)' : '1px solid rgb(240, 242, 246)',
                  cursor: 'pointer',
                  fontFamily: 'Manrope, sans-serif',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {btn.label}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
