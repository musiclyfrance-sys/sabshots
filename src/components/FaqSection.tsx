'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { PlusIcon } from '@/components/icons'
import type { FAQItem } from '@/types'

const faqItems: FAQItem[] = [
  {
    question: 'Where in Paris do you shoot?',
    answer: 'Anywhere you like, from the Eiffel Tower and Trocadéro to hidden streets and rooftops across the city.',
  },
  {
    question: 'How do I book a session?',
    answer: 'Send me your preferred date and location, and I will confirm availability within 24 hours.',
  },
  {
    question: 'How long is a photo session?',
    answer: 'It depends on the location you choose and the vision you have. You can set the duration yourself, or I can suggest a few options that fit your shoot.',
  },
  {
    question: 'When will I receive my photos?',
    answer: 'Your edited photos are delivered within 24 to 72 hours after your session.',
  },
  {
    question: 'Do you photograph couples and proposals?',
    answer: 'Yes, I photograph couples, solo travelers, families, and surprise marriage proposals.',
  },
  {
    question: 'Do you speak my language?',
    answer: 'I work with clients from more than 80 nationalities, and I speak English, French, Arabic, and Spanish.',
  },
]

// Structured data so Google and AI assistants can read the questions and answers.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal')
    if (!elements || elements.length === 0) return

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

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ padding: '12px', margin: 'clamp(56px, 12vw, 100px) 0' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* padding-global */}
      <div
        className="flex flex-col items-center justify-center"
        style={{ padding: '8px' }}
      >
        {/* container-medium */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            maxWidth: '1000px',
            width: '100%',
            gap: '50px',
            borderRadius: '40px',
            padding: '8px',
          }}
        >
          {/* section-tittle center — scroll reveal */}
          <div
            className="reveal flex flex-col items-center justify-center"
            style={{ gap: '14px' }}
          >
            {/* badge */}
            <div
              className="flex flex-row items-center justify-center"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '26px',
                padding: '4px 12px',
                gap: '8px',
                height: '30px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '14px',
                  fontWeight: 300,
                  lineHeight: '22px',
                  color: 'rgb(1, 1, 1)',
                }}
              >
                FAQ
              </span>
            </div>

            {/* h2 */}
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
              Frequently asked questions
            </h2>

            {/* subtitle */}
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
              Everything you need to know before booking your Paris photo session.
            </p>
          </div>

          {/* faq-list — scroll reveal with stagger delay */}
          <div
            className="reveal reveal-delay-1 flex flex-col items-center justify-start"
            style={{
              gap: '10px',
              maxWidth: '500px',
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
            }}
          >
            {faqItems.map((item, i) => {
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
                  {/* faq-question — button so it is focusable and toggles with the keyboard */}
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="flex flex-row items-center justify-between w-full cursor-pointer"
                    style={{
                      backgroundColor: 'rgba(252, 253, 255, 0.97)',
                      padding: '18px',
                      gap: '5px',
                      height: '68px',
                      overflow: 'hidden',
                      border: 'none',
                      textAlign: 'left',
                      fontFamily: 'Manrope, sans-serif',
                    }}
                  >
                    {/* question text */}
                    <span
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: '25px',
                        color: 'rgb(1, 1, 1)',
                      }}
                    >
                      {item.question}
                    </span>

                    {/* faq-icon — rotates -90deg when open */}
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

                  {/* faq-answer */}
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    style={{
                      maxHeight: isOpen ? '1000px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      width: '500px',
                      maxWidth: '100%',
                      padding: '0 18px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
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
