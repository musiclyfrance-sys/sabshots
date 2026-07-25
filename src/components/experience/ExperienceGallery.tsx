'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export interface GalleryPhoto {
  src: string
  alt: string
}

// Continuous marquee gallery, identical in construction to the homepage
// "Trusted by Clients from Around the World" slider, but fed with photos of
// the current experience. Photos come from the CMS album when one is linked,
// so Yassir can customize them from the admin.
export default function ExperienceGallery({
  title,
  subtitle,
  photos,
}: {
  title: string
  subtitle: string
  photos: GalleryPhoto[]
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

  if (photos.length === 0) return null
  // Doubled for the seamless CSS loop (same trick as the homepage slider).
  const doubled = [...photos, ...photos]

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
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '8px' }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '14px', textAlign: 'center' }}>
            {/* Badge pill, same as other section headers */}
            <div
              style={{
                display: 'flex',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '26px',
                padding: '4px 12px',
                height: '30px',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '14px', fontWeight: 300, lineHeight: '22px', color: 'rgb(1, 1, 1)' }}>Gallery</span>
            </div>

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
              {title}
            </h2>
            <p
              style={{
                fontSize: '18px',
                fontWeight: 300,
                fontFamily: 'Manrope, sans-serif',
                lineHeight: '25px',
                color: 'rgb(124, 124, 124)',
                maxWidth: '460px',
                margin: 0,
                textAlign: 'center',
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Continuous image slider, no arrows, no dots */}
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
              {doubled.map((photo, i) => (
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
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="700px"
                    priority={i < 2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
