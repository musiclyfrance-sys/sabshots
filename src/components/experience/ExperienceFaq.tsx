'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { PlusIcon } from '@/components/icons'
import type { FAQItem } from '@/types'

// Per-experience FAQ accordion, identical styling to the global FaqSection.
// The FAQPage JSON-LD is emitted server-side by the page, not here.
export default function ExperienceFaq({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle: string
  items: FAQItem[]
}) {
  const [open, setOpen] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal')
    if (!elements || elements.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.15 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full" style={{ padding: '12px', margin: 'clamp(56px, 12vw, 100px) 0' }}>
      <div ref={sectionRef} className="flex flex-col items-center justify-center" style={{ padding: '8px' }}>
        <div
          className="flex flex-col items-center justify-center"
          style={{ maxWidth: '1000px', width: '100%', gap: '50px', borderRadius: '40px', padding: '8px' }}
        >
          <div className="reveal flex flex-col items-center justify-center" style={{ gap: '14px' }}>
            <div
              className="flex flex-row items-center justify-center"
              style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '26px', padding: '4px 12px', gap: '8px', height: '30px' }}
            >
              <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontWeight: 300, lineHeight: '22px', color: 'rgb(1, 1, 1)' }}>
                FAQ
              </span>
            </div>
            <h2
              className="text-center"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(26px, 5vw, 32px)',
                fontWeight: 500,
                lineHeight: '1.3',
                color: 'rgb(1, 1, 1)',
                maxWidth: '700px',
                textAlign: 'center',
              }}
            >
              {title}
            </h2>
            <p
              className="flex flex-row items-center justify-center text-center"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                fontWeight: 300,
                lineHeight: '25px',
                color: 'rgb(124, 124, 124)',
                maxWidth: '450px',
                textAlign: 'center',
              }}
            >
              {subtitle}
            </p>
          </div>

          <div
            className="reveal reveal-delay-1 flex flex-col items-center justify-start"
            style={{ gap: '10px', maxWidth: '500px', width: '100%', borderRadius: '24px', overflow: 'hidden' }}
          >
            {items.map((item, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-start"
                  style={{
                    backgroundColor: 'rgba(252, 253, 255, 0.97)',
                    borderRadius: '24px',
                    width: '500px',
                    overflow: 'hidden',
                    maxWidth: '100%',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`exp-faq-answer-${i}`}
                    className="flex flex-row items-center justify-between w-full cursor-pointer"
                    style={{
                      backgroundColor: 'rgba(252, 253, 255, 0.97)',
                      padding: '18px',
                      gap: '5px',
                      minHeight: '68px',
                      overflow: 'hidden',
                      border: 'none',
                      textAlign: 'left',
                      fontFamily: 'Manrope, sans-serif',
                    }}
                  >
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: '25px', color: 'rgb(1, 1, 1)' }}>
                      {item.question}
                    </span>
                    <div
                      className={cn('transition-transform duration-500')}
                      style={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderRadius: '99px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '32px',
                        height: '32px',
                        padding: '4px 3px 3px',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(-90deg)' : 'none',
                        transition: 'transform 0.5s ease',
                      }}
                    >
                      <PlusIcon className="w-5 h-5" />
                    </div>
                  </button>
                  <div
                    id={`exp-faq-answer-${i}`}
                    role="region"
                    style={{
                      maxHeight: isOpen ? '1000px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      width: '500px',
                      maxWidth: '100%',
                      padding: '0 18px',
                      borderRadius: '24px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '16px',
                        fontWeight: 300,
                        lineHeight: '22px',
                        color: 'rgb(124, 124, 124)',
                        display: 'block',
                        textAlign: 'left',
                        paddingBottom: '16px',
                        paddingTop: '4px',
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
