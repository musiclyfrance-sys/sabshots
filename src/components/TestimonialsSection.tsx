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
    title: 'A magical Eiffel Tower session',
    body: 'Our Eiffel Tower session was magical, and the photos captured Paris exactly as we dreamed it.',
    reviewer: 'Sofia, Italy',
    avatarSrc: '/assets/testimonial-1.jpg',
  },
  {
    id: 2,
    title: 'The best portraits I have had',
    body: 'I came solo and felt at ease the whole time, and the portraits are the best I have ever had.',
    reviewer: 'James, United States',
    avatarSrc: '/assets/testimonial-2.jpg',
  },
  {
    id: 3,
    title: 'Incredible for my feed',
    body: 'Every spot was beautiful and the photos look incredible on my feed, I cannot recommend him enough.',
    reviewer: 'Mei, Singapore',
    avatarSrc: '/assets/testimonial-3.jpg',
  },
  {
    id: 4,
    title: 'Our proposal, captured perfectly',
    body: 'He captured our proposal perfectly, and we will treasure these images for the rest of our lives.',
    reviewer: 'Lucas and Emma, Brazil',
    avatarSrc: '/assets/testimonial-4.jpg',
  },
  {
    id: 5,
    title: 'A smooth, friendly experience',
    body: 'It was a smooth and friendly experience from the first message all the way to the final gallery.',
    reviewer: 'Amira, United Arab Emirates',
    avatarSrc: '/assets/testimonial-5.jpg',
  },
  {
    id: 6,
    title: 'Stunning family photos',
    body: 'He is professional, creative, and fast, and our family photos in Paris turned out absolutely stunning.',
    reviewer: 'Thomas, Germany',
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
                What My Clients Say
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
                People from around the world share their Paris experience.
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
