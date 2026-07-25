'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export interface LinksLineSegment {
  text?: string
  href?: string
  label?: string
}

// SEO intro block: keyword H2 + three paragraphs (the second one is a
// snippet-ready definition) + one sentence of descriptive internal links.
export default function ExperienceIntro({
  h2,
  paragraphs,
  linksLine,
}: {
  h2: string
  paragraphs: string[]
  linksLine: LinksLineSegment[]
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
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(22px, 4.5vw, 28px)',
              fontWeight: 500,
              lineHeight: '1.3',
              color: 'rgb(1, 1, 1)',
              margin: '0 0 18px',
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            {h2}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
            {/* Internal links sentence with descriptive anchors */}
            <p
              style={{
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '26px',
                color: 'rgb(60, 60, 60)',
                margin: 0,
                fontFamily: 'Manrope, sans-serif',
              }}
            >
              {linksLine.map((seg, i) =>
                seg.href && seg.label ? (
                  <Link
                    key={i}
                    href={seg.href}
                    style={{
                      color: 'rgb(1, 1, 1)',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    {seg.label}
                  </Link>
                ) : (
                  <span key={i}>{seg.text}</span>
                )
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
