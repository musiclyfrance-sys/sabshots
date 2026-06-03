'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { WHATSAPP_BOOKING_URL } from '@/lib/site-data'
import { WhatsAppGlyph } from '@/components/icons'

export default function CtaSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Force video play (handles browsers where autoplay attribute alone is insufficient)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    const attempt = () => video.play().catch(() => {})
    if (video.readyState >= 2) {
      attempt()
    } else {
      video.addEventListener('canplay', attempt, { once: true })
    }
  }, [])

  // Scroll reveal via IntersectionObserver
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

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

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="relative block"
      style={{
        padding: '12px',
        margin: 'clamp(56px, 12vw, 100px) 0',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '22px',
        color: 'rgb(1, 1, 1)',
      }}
    >
      {/* padding-global */}
      <div
        className="flex flex-col justify-center items-center"
        style={{ padding: '8px' }}
      >
        {/* container-medium */}
        <div
          className="flex flex-col justify-center items-center"
          style={{
            maxWidth: '1000px',
            width: '100%',
            padding: '8px',
            gap: '50px',
            borderRadius: '40px',
          }}
        >
          {/* tumbnail-wrapper — scroll reveal target */}
          <div
            ref={wrapperRef}
            className={cn('reveal flex flex-row justify-center items-center w-full')}
            style={{
              maxWidth: '984px',
              height: '420px',
              borderRadius: '32px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* tumbnail-sections — video background container with dark overlay */}
            <div
              className="flex flex-row justify-center items-center w-full h-full relative overflow-hidden"
              style={{
                padding: '50px',
                color: 'rgb(255, 255, 255)',
              }}
            >
              {/* Background video — z:0 so it renders above element background */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 0,
                }}
              >
                <source src="/assets/cta-video.mp4" type="video/mp4" />
              </video>
              {/* Dark overlay — darkened for text legibility */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52))',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />

              {/* Content — section-tittle.center */}
              <div
                className="flex flex-col items-center justify-center relative"
                style={{
                  gap: '14px',
                  maxWidth: '884px',
                  width: '100%',
                  color: 'rgb(255, 255, 255)',
                  zIndex: 10,
                }}
              >
                {/* Camera aperture icon — crisp white vector */}
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ display: 'block', zIndex: 1 }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M14.31 8l5.74 9.94" />
                  <path d="M9.69 8h11.48" />
                  <path d="M7.38 12l5.74-9.94" />
                  <path d="M9.69 16L3.95 6.06" />
                  <path d="M14.31 16H2.83" />
                  <path d="M16.62 12l-5.74 9.94" />
                </svg>

                {/* Text block */}
                <div
                  className="flex flex-col items-center justify-center"
                  style={{ gap: '6px', maxWidth: '500px' }}
                >
                  <h2
                    style={{
                      fontSize: 'clamp(26px, 5vw, 32px)',
                      fontWeight: 500,
                      fontFamily: 'Manrope, sans-serif',
                      lineHeight: '1.3',
                      color: 'rgb(255, 255, 255)',
                      textAlign: 'center',
                      maxWidth: '700px',
                      margin: 0,
                    }}
                  >
                    The ideal shot is only a chat away.
                  </h2>
                  <p
                    style={{
                      fontSize: '18px',
                      fontWeight: 300,
                      fontFamily: 'Manrope, sans-serif',
                      lineHeight: '25px',
                      color: 'rgb(255, 255, 255)',
                      textAlign: 'center',
                      maxWidth: '450px',
                      margin: 0,
                    }}
                  >
                    Reach out and let&apos;s plan your private photo session in Paris.
                  </p>
                </div>

                {/* Primary CTA — "Book a Session" → WhatsApp */}
                <a
                  href={WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book btn-pulse"
                  style={{
                    fontSize: '14px',
                    fontWeight: 300,
                    color: 'rgb(1, 1, 1)',
                    backgroundColor: 'rgb(255, 255, 255)',
                    padding: '9px 22px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '99px',
                    textDecoration: 'none',
                    fontFamily: 'Manrope, sans-serif',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgb(240, 240, 240)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgb(255, 255, 255)'
                  }}
                >
                  <WhatsAppGlyph size={15} className="mr-2" />
                  Book a Session
                </a>
              </div>

              {/* No pause button — video plays continuously */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
