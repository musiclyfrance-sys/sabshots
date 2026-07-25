'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export interface ExperienceCard {
  href: string
  name: string
  image: string
  imageAlt: string
}

// Cross-links to sibling experiences, in the same card language as the
// "More Work" grid on album pages. Keeps every experience one click away.
export default function MoreExperiences({ cards }: { cards: ExperienceCard[] }) {
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
    <section ref={sectionRef} style={{ padding: '12px', margin: '0 0 clamp(24px, 5vw, 40px)', fontFamily: 'Manrope, sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '8px' }}>
        <div className="reveal">
          <h2
            style={{
              fontSize: 'clamp(26px, 5vw, 32px)',
              fontWeight: 500,
              lineHeight: '1.3',
              margin: '0 0 8px',
              color: 'rgb(1, 1, 1)',
              textAlign: 'center',
            }}
          >
            More Paris Photoshoot Experiences
          </h2>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 300,
              lineHeight: '25px',
              color: 'rgb(124, 124, 124)',
              margin: '0 0 28px',
              textAlign: 'center',
            }}
          >
            Every corner of Paris tells a different story. Pick yours.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
            {cards.map((card) => (
              <Link key={card.href} href={card.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div
                  className="hover:scale-105 transition-transform duration-300"
                  style={{
                    position: 'relative',
                    aspectRatio: '3/2',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: 'rgb(200,202,208)',
                    cursor: 'pointer',
                  }}
                >
                  <Image src={card.image} alt={card.imageAlt} fill style={{ objectFit: 'cover' }} sizes="320px" />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '14px 16px',
                      background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 70%)',
                    }}
                  >
                    <span style={{ color: 'white', fontSize: '15px', fontWeight: 500 }}>{card.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
            <Link
              href="/experiences"
              className="btn-back"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgb(255,255,255)',
                color: 'rgb(1,1,1)',
                borderRadius: '99px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 400,
                textDecoration: 'none',
              }}
            >
              See all Paris photoshoot experiences
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
