'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  title: string
  body: string
  reviewer: string
  avatarSrc: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: 'A joy to work with.',
    body: 'Working with this photographer on our wedding day was a joy. Their creativity, professionalism, and ability to capture genuine moments resulted in timeless photos we truly cherish. Highly recommended!',
    reviewer: 'Johnson',
    avatarSrc: '/assets/testimonial-1.jpg',
  },
  {
    id: 2,
    title: 'Creative Wedding Photography!',
    body: 'Incredible wedding photos—full of emotion, creativity, and beautiful details. Every image feels meaningful, and we\'re beyond happy with the results. Highly recommended!',
    reviewer: 'Sarah Davis',
    avatarSrc: '/assets/testimonial-2.jpg',
  },
  {
    id: 3,
    title: 'Memorable Family Photos!',
    body: 'Incredible wedding photos—rich in emotion, creativity, and stunning detail. Every image feels special, and we couldn\'t be happier. Highly recommended!',
    reviewer: 'Michael Brown',
    avatarSrc: '/assets/testimonial-3.jpg',
  },
  {
    id: 4,
    title: 'Breathtaking Landscapes!',
    body: 'The landscape photos are absolutely breathtaking—authentic, artistic, and beautifully composed. Each image feels like a true masterpiece and looks stunning on display. Truly exceptional work!',
    reviewer: 'Emily Johnson',
    avatarSrc: '/assets/testimonial-4.jpg',
  },
  {
    id: 5,
    title: 'Incredible Portraits!',
    body: 'The portrait session was unforgettable—the photographer made me feel confident and at ease, and the results truly reflect my personality. The creativity and skill exceeded my expectations. I\'ll definitely be back for more!',
    reviewer: 'Jane Smith',
    avatarSrc: '/assets/testimonial-5.jpg',
  },
  {
    id: 6,
    title: 'Stunning Work!',
    body: 'Working with this photographer for our wedding was a wonderful experience. Their attention to detail and ability to capture the true essence of the day was incredible—every photo tells a story we\'ll cherish forever. Highly recommended!',
    reviewer: 'John Doe',
    avatarSrc: '/assets/testimonial-6.jpg',
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
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
        padding: '12px',
        margin: '100px 0',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        color: 'rgb(1, 1, 1)',
        overflow: 'visible',
      }}
    >
      {/* padding-global */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '8px',
        }}
      >
        {/* container-medium */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            maxWidth: '1000px',
            width: '100%',
            padding: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderRadius: '40px',
            position: 'relative',
          }}
        >
          {/* section-tittle center — scroll reveal */}
          <div
            className="reveal"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              width: '100%',
            }}
          >
            {/* badge */}
            <div
              style={{
                display: 'flex',
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgb(1, 1, 1)',
                padding: '4px 12px',
                borderRadius: '26px',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '22px',
              }}
            >
              Testimonials
            </div>

            {/* text block */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                alignItems: 'center',
              }}
            >
              {/* h2 */}
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 500,
                  color: 'rgb(1, 1, 1)',
                  lineHeight: '44px',
                  textAlign: 'center',
                  margin: '0px',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                Hear from Our User
              </h2>

              {/* subtitle */}
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 300,
                  color: 'rgb(124, 124, 124)',
                  lineHeight: '25px',
                  textAlign: 'center',
                  margin: '0px',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                Read how our users have achieved success
              </p>
            </div>
          </div>

          {/* collection-list-wrapper testimonials */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            {/* grid testimonials — scroll reveal with stagger */}
            <div
              className="reveal reveal-delay-1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {testimonials.map((item) => (
                /* item w-dyn-item */
                <div
                  key={item.id}
                  style={{
                    display: 'block',
                    padding: '0px',
                  }}
                >
                  {/* card testimonials */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      gap: '24px',
                      height: '314px',
                      padding: '24px',
                      backgroundColor: 'rgb(255, 255, 255)',
                      borderRadius: '32px',
                      boxShadow: 'none',
                      position: 'static',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* quote mark icon */}
                    <Image
                      src="/assets/icon-quote.png"
                      alt="Quote mark"
                      width={24}
                      height={24}
                      style={{
                        display: 'flex',
                        width: '24px',
                        height: '24px',
                        objectFit: 'cover',
                        borderRadius: '0px',
                        flexShrink: 0,
                      }}
                    />

                    {/* content-testimonials */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '34px',
                        width: '100%',
                      }}
                    >
                      {/* text left */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          gap: '6px',
                          width: '100%',
                        }}
                      >
                        {/* sub-heading-regular left — card title */}
                        <div
                          style={{
                            display: 'block',
                            fontSize: '16px',
                            fontWeight: 400,
                            color: 'rgb(1, 1, 1)',
                            lineHeight: '22px',
                            fontFamily: 'Manrope, sans-serif',
                          }}
                        >
                          {item.title}
                        </div>

                        {/* paragraph-regular left — card body */}
                        <p
                          style={{
                            fontSize: '16px',
                            fontWeight: 300,
                            color: 'rgb(124, 124, 124)',
                            lineHeight: '22px',
                            margin: '0px',
                            fontFamily: 'Manrope, sans-serif',
                            display: '-webkit-box',
                            WebkitLineClamp: 5,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {item.body}
                        </p>
                      </div>

                      {/* user-column */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '10px',
                          width: '100%',
                          height: '24px',
                        }}
                      >
                        {/* column-name: avatar + reviewer name */}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            height: '24px',
                          }}
                        >
                          {/* circular avatar */}
                          <Image
                            src={item.avatarSrc}
                            alt={item.reviewer}
                            width={24}
                            height={24}
                            style={{
                              display: 'block',
                              width: '24px',
                              height: '24px',
                              objectFit: 'cover',
                              borderRadius: '99px',
                              flexShrink: 0,
                            }}
                          />

                          {/* reviewer name */}
                          <p
                            style={{
                              fontSize: '16px',
                              fontWeight: 300,
                              color: 'rgb(124, 124, 124)',
                              lineHeight: '22px',
                              margin: '0px',
                              fontFamily: 'Manrope, sans-serif',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {item.reviewer}
                          </p>
                        </div>

                        {/* verified badge */}
                        <Image
                          src="/assets/icon-verified.png"
                          alt="Verified"
                          width={20}
                          height={20}
                          style={{
                            display: 'flex',
                            width: '20px',
                            height: '20px',
                            objectFit: 'cover',
                            borderRadius: '0px',
                            flexShrink: 0,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles via a style tag approach using Tailwind's arbitrary breakpoints */}
      <style>{`
        @media (max-width: 991px) {
          .testimonials-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  )
}
