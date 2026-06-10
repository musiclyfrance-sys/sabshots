'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const SLIDES = [
  { src: '/assets/paris-showcase-01.jpg', alt: 'Woman in a beret on Pont de Bir-Hakeim with the Eiffel Tower and the Seine in Paris by SabShots' },
  { src: '/assets/paris-showcase-02.jpg', alt: 'Bride and groom wedding photo session on the grand staircase of Chateau de Fontainebleau near Paris by SabShots' },
  { src: '/assets/paris-showcase-03.jpg', alt: 'Fashion portrait session among the columns of Palais de Tokyo at golden hour in Paris by SabShots' },
  { src: '/assets/paris-showcase-04.jpg', alt: 'Woman laughing beside the glowing Louvre Pyramid at sunset in Paris by SabShots' },
  { src: '/assets/paris-showcase-05.jpg', alt: 'Editorial photo session on the Debilly footbridge over the Seine in Paris by SabShots' },
  { src: '/assets/paris-showcase-06.jpg', alt: 'Joyful street style portrait session at the Palais de Tokyo colonnade in Paris by SabShots' },
]

// Doubled for seamless CSS loop
const DOUBLED_SLIDES = [...SLIDES, ...SLIDES]

// Fixed brand names — not scrolling
const BRANDS = ['Jacquemus', 'Ashlynn Park', 'Ricardo Alverèz', 'C.C.O. budah']

function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="rgb(1, 1, 1)"
      aria-hidden="true"
      style={{ display: 'block', position: 'relative', zIndex: 1 }}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )
}

function CameraVectorIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Camera body */}
      <rect x="2" y="8" width="20" height="13" rx="2.5" ry="2.5" />
      {/* Viewfinder bump */}
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      {/* Lens circle */}
      <circle cx="12" cy="14.5" r="3" />
      {/* Flash dot */}
      <circle cx="18.5" cy="10.5" r="0.5" fill="white" />
    </svg>
  )
}

export default function TrustedGloballySection() {
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
    const revealEls = sectionRef.current?.querySelectorAll('.reveal')
    revealEls?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        display: 'block',
        position: 'relative',
        margin: 'clamp(56px, 12vw, 100px) 0',
        padding: '12px',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '22px',
        color: 'rgb(1, 1, 1)',
        backgroundColor: 'transparent',
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
        }}
      >
        {/* .container-medium */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            maxWidth: '1000px',
            width: '100%',
            padding: '8px',
            textAlign: 'center',
          }}
        >
          {/* Header: star/camera row + title + subtitle */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              textAlign: 'center',
            }}
          >
            {/* ★ ★ [camera] ★ ★ */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '6px',
                height: '38px',
              }}
            >
              <StarIcon />
              <StarIcon />
              {/* Camera in dark circle — vectorial SVG */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgb(1, 1, 1)',
                  borderRadius: '99px',
                  padding: '7px',
                  width: '38px',
                  height: '38px',
                  position: 'relative',
                  boxShadow: 'rgba(255, 255, 255, 0.38) -3px 1px 8px 1px inset',
                  flexShrink: 0,
                }}
              >
                <CameraVectorIcon />
              </div>
              <StarIcon />
              <StarIcon />
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: 'clamp(26px, 5vw, 32px)',
                fontWeight: 500,
                fontFamily: 'Manrope, sans-serif',
                lineHeight: '1.3',
                color: 'rgb(1, 1, 1)',
                maxWidth: '700px',
                margin: 0,
              }}
            >
              Trusted by Clients from Around the World
            </h2>
            <p
              style={{
                fontSize: '18px',
                fontWeight: 300,
                fontFamily: 'Manrope, sans-serif',
                lineHeight: '25px',
                color: 'rgb(124, 124, 124)',
                maxWidth: '450px',
                margin: 0,
                textAlign: 'center',
              }}
            >
              More than 500 clients from over 80 nationalities have trusted me to capture their
              Paris memories.
            </p>
          </div>

          {/* Continuous image slider — no arrows, no dots, no backwards jump */}
          <div
            style={{
              width: '100%',
              maxWidth: '700px',
              aspectRatio: '3 / 2',
              overflow: 'hidden',
              borderRadius: '34px',
              backgroundColor: 'rgb(245, 245, 245)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
                animation: 'imageScrollH 26s linear infinite',
                width: 'max-content',
              }}
            >
              {DOUBLED_SLIDES.map((slide, i) => (
                <div
                  key={i}
                  style={{
                    height: '100%',
                    aspectRatio: '3 / 2',
                    flexShrink: 0,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="700px"
                    priority={i < 2}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fixed brand name pills — not scrolling */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            {BRANDS.map((name) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '26px',
                  padding: '4px 16px',
                  height: '30px',
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 300,
                    fontFamily: 'Manrope, sans-serif',
                    lineHeight: '22px',
                    color: 'rgb(1, 1, 1)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
