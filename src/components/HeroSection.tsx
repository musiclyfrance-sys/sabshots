'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { WHATSAPP_BOOKING_URL } from '@/lib/site-data'
import { WhatsAppGlyph } from '@/components/icons'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
        position: 'relative',
        margin: 'clamp(84px, 14vw, 116px) 0 clamp(48px, 9vw, 90px)',
        padding: '12px',
        fontFamily: 'Manrope, sans-serif',
        color: 'rgb(1, 1, 1)',
        fontSize: '16px',
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
          height: '100%',
        }}
      >
        {/* .container-medium */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(20px, 5vw, 50px)',
            width: '100%',
            maxWidth: '1000px',
            borderRadius: '40px',
            padding: '8px',
            position: 'relative',
          }}
        >
          {/* Subtle dot-grid background overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '40px',
              backgroundImage:
                'radial-gradient(circle, rgba(1,1,1,0.12) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Camera aperture icon — continuous spin */}
          <div
            className="reveal"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
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
              style={{
                display: 'block',
                animation: 'heroIconSpin 6s linear infinite',
              }}
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

          {/* .section-tittle.center */}
          <div
            className="reveal reveal-delay-1"
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
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'rgb(1, 1, 1)',
                  lineHeight: '22px',
                  display: 'block',
                  zIndex: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                Paris Photographer
              </span>
            </div>

            {/* Heading + Paragraph */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h1
                style={{
                  fontSize: 'clamp(34px, 8vw, 52px)',
                  fontWeight: 500,
                  lineHeight: '1.15',
                  color: 'rgb(1, 1, 1)',
                  textAlign: 'center',
                  fontFamily: 'Manrope, sans-serif',
                  margin: 0,
                }}
              >
                Your Paris Story in Photos
              </h1>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '25px',
                  color: 'rgb(124, 124, 124)',
                  textAlign: 'center',
                  fontFamily: 'Manrope, sans-serif',
                  margin: 0,
                }}
              >
                Private photo sessions in Paris, tailored to you and trusted by over 500 clients
                worldwide.
              </p>
            </div>

            {/* Button column */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {/* Primary button — "Book a Session" → WhatsApp */}
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
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgb(40, 40, 40)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgb(1, 1, 1)'
                }}
              >
                <WhatsAppGlyph size={15} className="mr-2" />
                Book a Session
              </a>

              {/* Secondary button — "View Portfolio" → full portfolio page */}
              <a
                href="/portfolio"
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
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    'rgb(240, 240, 240)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    'rgb(255, 255, 255)'
                }}
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Hero image: SabShots portrait with floating thumbnails */}
          <div
            className="reveal reveal-delay-2 hero-portrait"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              overflow: 'visible',
            }}
          >
            {/* Main hero portrait — bottom faded with a mask to remove the white cut */}
            <Image
              src="/assets/sabshots-hero.png"
              alt="Yassir, professional photographer in Paris offering private photo sessions"
              width={1923}
              height={876}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                transform: 'translateX(2.5%)',
                display: 'block',
                WebkitMaskImage:
                  'linear-gradient(to bottom, #000 78%, rgba(0,0,0,0.35) 92%, transparent 100%)',
                maskImage:
                  'linear-gradient(to bottom, #000 78%, rgba(0,0,0,0.35) 92%, transparent 100%)',
              }}
              priority
            />

            {/* Thumbnail 1 — base, bottom-left (90x90, top:270, left:80) */}
            <Image
              src="/assets/paris-portrait-photoshoot.jpg"
              alt="Portrait photo session in Paris by SabShots"
              className="htn htn-2"
              width={90}
              height={90}
              style={{
                position: 'absolute',
                top: '67.5%',
                left: '10%',
                width: '11.25%',
                height: 'auto',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: '999px',
              }}
            />

            {/* Thumbnail 2 — _4, top-left (70x70, top:20, left:160) */}
            <Image
              src="/assets/paris-lifestyle-photoshoot.jpg"
              alt="Lifestyle photo session in a Paris street by SabShots"
              className="htn-sm htn-1"
              width={70}
              height={70}
              style={{
                position: 'absolute',
                top: '5%',
                left: '20%',
                width: '8.75%',
                height: 'auto',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: '999px',
              }}
            />

            {/* Thumbnail 3 — _1, top-right (90x90, top:0, left:630) */}
            <Image
              src="/assets/paris-street-style-photoshoot.jpg"
              alt="Street style photo session in a Paris street by SabShots"
              className="htn htn-3"
              width={90}
              height={90}
              style={{
                position: 'absolute',
                top: '0%',
                left: '78.75%',
                width: '11.25%',
                height: 'auto',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: '999px',
              }}
            />

            {/* Thumbnail 4 — _4 _6, small center-top (45x45, top:8, left:459) */}
            <Image
              src="/assets/paris-editorial-portrait-photoshoot.jpg"
              alt="Editorial portrait photo session in Paris by SabShots"
              className="htn-sm htn-4"
              width={45}
              height={45}
              style={{
                position: 'absolute',
                top: '2%',
                left: '57.375%',
                width: '5.625%',
                height: 'auto',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: '999px',
              }}
            />

            {/* Thumbnail 5 — _4 _5, mid-right (70x70, top:230, left:530) */}
            <Image
              src="/assets/paris-candid-photoshoot-sunglasses.jpg"
              alt="Candid photo session in a Paris street by SabShots"
              className="htn htn-5"
              width={70}
              height={70}
              style={{
                position: 'absolute',
                top: '57.5%',
                left: '66.25%',
                width: '8.75%',
                height: 'auto',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: '999px',
              }}
            />
          </div>
        </div>
      </div>

      {/* Inline keyframes for camera icon spin */}
      <style>{`
        @keyframes heroIconSpin {
          from { transform: rotateZ(0deg); }
          to   { transform: rotateZ(360deg); }
        }
      `}</style>
    </section>
  )
}
