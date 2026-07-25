'use client'

import Link from 'next/link'
import { WHATSAPP_BOOKING_URL } from '@/lib/site-data'
import { WhatsAppGlyph } from '@/components/icons'

// Hero for experience landing pages: identical language to the homepage hero
// (dot grid, spinning aperture, badge, H1) plus the two homepage CTAs, so each
// experience page opens like a true landing page.
export default function ExperienceHero({
  badge,
  title,
  subtitle,
  secondaryHref,
  secondaryLabel,
}: {
  badge: string
  title: string
  subtitle: string
  secondaryHref: string
  secondaryLabel: string
}) {
  return (
    <section
      style={{
        position: 'relative',
        margin: 'clamp(84px, 14vw, 116px) 0 clamp(40px, 7vw, 70px)',
        padding: '12px',
        fontFamily: 'Manrope, sans-serif',
        color: 'rgb(1, 1, 1)',
        fontSize: '16px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '8px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(20px, 5vw, 44px)',
            width: '100%',
            maxWidth: '1000px',
            borderRadius: '40px',
            padding: '8px',
            position: 'relative',
          }}
        >
          {/* Dot-grid background overlay (identical to homepage) */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '40px',
              backgroundImage: 'radial-gradient(circle, rgba(1,1,1,0.12) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Spinning aperture brand mark */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(1, 1, 1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ display: 'block', animation: 'iconSpin 6s linear infinite' }}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94" />
              <path d="M9.69 8h11.48" />
              <path d="M7.38 12l5.74-9.94" />
              <path d="M9.69 16L3.95 6.06" />
              <path d="M14.31 16H2.83" />
              <path d="M16.62 12l-5.74 9.94" />
            </svg>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              maxWidth: '984px',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: 'flex',
                backgroundColor: 'rgb(255, 255, 255)',
                padding: '4px 12px',
                borderRadius: '26px',
                height: '30px',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '14px', fontWeight: 300, color: 'rgb(1, 1, 1)', lineHeight: '22px', whiteSpace: 'nowrap' }}>
                {badge}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <h1
                style={{
                  fontSize: 'clamp(32px, 7.5vw, 50px)',
                  fontWeight: 500,
                  lineHeight: '1.15',
                  color: 'rgb(1, 1, 1)',
                  textAlign: 'center',
                  fontFamily: 'Manrope, sans-serif',
                  margin: 0,
                  maxWidth: '820px',
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 300,
                  lineHeight: '25px',
                  color: 'rgb(124, 124, 124)',
                  textAlign: 'center',
                  fontFamily: 'Manrope, sans-serif',
                  margin: 0,
                  maxWidth: '520px',
                }}
              >
                {subtitle}
              </p>
            </div>

            {/* CTAs, same pair as the homepage hero */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', marginTop: '6px', position: 'relative' }}>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book btn-pulse"
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'rgb(255, 255, 255)',
                  backgroundColor: 'rgb(1, 1, 1)',
                  padding: '9px 20px',
                  height: '40px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '99px',
                  cursor: 'pointer',
                  fontFamily: 'Manrope, sans-serif',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <WhatsAppGlyph size={15} className="mr-2" />
                Book a Session
              </a>
              <Link
                href={secondaryHref}
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'rgb(1, 1, 1)',
                  backgroundColor: 'rgb(255, 255, 255)',
                  padding: '9px 20px',
                  height: '42px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '99px',
                  border: '1px solid rgb(245, 245, 245)',
                  cursor: 'pointer',
                  fontFamily: 'Manrope, sans-serif',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgb(240, 240, 240)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgb(255, 255, 255)'
                }}
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
