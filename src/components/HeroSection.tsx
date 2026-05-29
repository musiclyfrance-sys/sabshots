'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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
    <main
      ref={sectionRef}
      style={{
        position: 'relative',
        margin: '100px 0',
        padding: '12px',
        height: '790px',
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
            gap: '50px',
            width: '1000px',
            maxWidth: '100%',
            height: '750px',
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
            <Image
              src="/assets/icon-camera-hero.png"
              alt="Camera aperture"
              width={24}
              height={24}
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'clip',
                animation: 'heroIconSpin 4s linear infinite',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            />
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
                  fontSize: '52px',
                  fontWeight: 500,
                  lineHeight: '62px',
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
              {/* Primary button — "Get In Touch" */}
              <a
                href="#contact"
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
                Book a Session
              </a>

              {/* Secondary button — "View Portfolio" */}
              <a
                href="#portfolio"
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

          {/* Hero portrait — SabShots */}
          <div
            className="reveal reveal-delay-2"
            style={{
              position: 'relative',
              width: '940px',
              maxWidth: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Image
              src="/assets/sabshots-hero.png"
              alt="Portrait of SabShots, professional photographer in Paris"
              width={1923}
              height={876}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
              priority
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
    </main>
  )
}
