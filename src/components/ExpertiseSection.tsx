'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const SLIDES = [
  { src: '/assets/showcase-1.png', alt: 'Majestic Mountain Peak' },
  { src: '/assets/portrait-1.avif', alt: 'Dreamlike Portrait' },
  { src: '/assets/showcase-2.png', alt: 'Serene Tree Landscape' },
  { src: '/assets/portrait-2.avif', alt: 'Serene Floral Embrace' },
]

function TagBadge({ label }: { label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        height: '30px',
        padding: '4px 12px',
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: '26px',
        color: 'rgb(1, 1, 1)',
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: '22px',
      }}
    >
      {label}
    </div>
  )
}

// Doubled for seamless CSS vertical loop
const DOUBLED_SLIDES = [...SLIDES, ...SLIDES]

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll reveal
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
        display: 'block',
        margin: 'clamp(56px, 12vw, 100px) 0',
        padding: '12px',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '22px',
        color: 'rgb(1, 1, 1)',
        position: 'relative',
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
          position: 'relative',
          overflow: 'visible',
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
            width: '100%',
            maxWidth: '1000px',
            borderRadius: '40px',
            padding: '8px',
            position: 'relative',
            textAlign: 'center',
            overflow: 'visible',
          }}
        >
          {/* .section-tittle.center */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              width: '100%',
              maxWidth: '984px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'visible',
            }}
          >
            {/* Badge — "Expertise" */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                height: '30px',
                padding: '4px 12px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '26px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  color: 'rgb(1, 1, 1)',
                  fontSize: '14px',
                  fontWeight: 300,
                  lineHeight: '22px',
                }}
              >
                Services
              </span>
            </div>

            {/* h2 */}
            <h2
              style={{
                display: 'block',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(26px, 5vw, 32px)',
                fontWeight: 500,
                lineHeight: '1.3',
                color: 'rgb(1, 1, 1)',
                textAlign: 'center',
                margin: 0,
              }}
            >
              How can I help you today?
            </h2>

            {/* Subtitle */}
            <p
              style={{
                display: 'flex',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                fontWeight: 300,
                lineHeight: '25px',
                color: 'rgb(124, 124, 124)',
                textAlign: 'center',
                margin: 0,
                maxWidth: '450px',
              }}
            >
              From private Eiffel Tower shoots to custom sessions anywhere in Paris, I bring your vision to life.
            </p>
          </div>

          {/* .grid.expertise — 3-column grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 314.664px))',
              gap: '20px',
              width: '100%',
              maxWidth: '984px',
              justifyContent: 'center',
              justifyItems: 'center',
              alignItems: 'stretch',
              marginInline: 'auto',
              overflow: 'visible',
            }}
            className={cn(
              'max-[991px]:grid-cols-1'
            )}
          >
            {/* ── Col 1: CSS continuous vertical scroll — no dots, no stars, no backwards jump ── */}
            <div
              className="reveal reveal-delay-1"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                maxWidth: '314.664px',
                height: '464px',
                padding: '8px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '34px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Slide mask */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '298.664px',
                  height: '448px',
                  overflow: 'hidden',
                  position: 'relative',
                  borderRadius: '34px',
                }}
              >
                {/* Continuous vertical strip — doubled for seamless loop */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    animation: 'imageScrollV 12s linear infinite',
                    width: '100%',
                  }}
                >
                  {DOUBLED_SLIDES.map((slide, i) => (
                    <div
                      key={i}
                      style={{
                        width: '100%',
                        height: '448px',
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
                        sizes="299px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Col 2: Center column ── */}
            <div
              className="reveal reveal-delay-2"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                width: '100%',
                maxWidth: '314.664px',
              }}
            >
              {/* Large card — "Shot with Top Gear" */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '24px',
                  width: '100%',
                  height: '464px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '34px',
                  transition: 'transform 500ms ease',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                {/* Thumbnail image */}
                <div
                  style={{
                    width: '100%',
                    height: '218px',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/assets/expertise-image.png"
                    alt="Gear lens"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="267px"
                  />
                </div>

                {/* Icon — camera aperture (Shot with Top Gear) */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>

                {/* Content */}
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
                  <div
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                      textAlign: 'left',
                    }}
                  >
                    Shot with Top Gear
                  </div>
                  <p
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: '22px',
                      color: 'rgb(124, 124, 124)',
                      textAlign: 'left',
                      margin: 0,
                    }}
                  >
                    Using premium equipment for stunning images.
                  </p>
                </div>

                {/* Tag pills */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <TagBadge label="Lighting" />
                  <TagBadge label="Direction" />
                  <TagBadge label="Edting" />
                </div>
              </div>

              {/* Mini stat card — "Over 500+ happy clients served." */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '24px',
                  width: '100%',
                  height: '118px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '34px',
                  transition: 'transform 500ms ease',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                {/* Icon — badge/medal (Over 500+ clients) */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
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
                  <div
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                      textAlign: 'left',
                    }}
                  >
                    Over 500+ happy clients served.
                  </div>
                </div>
              </div>
            </div>

            {/* ── Col 3: Right column ── */}
            <div
              className="reveal reveal-delay-3"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                width: '100%',
                maxWidth: '314.664px',
              }}
            >
              {/* Medium card — "E-Commerce Shoots" */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '24px',
                  width: '100%',
                  height: '222px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '34px',
                  transition: 'transform 500ms ease',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                {/* Icon — Eiffel Tower (Photo Session in Paris) */}
                <svg width="24" height="24" viewBox="0 0 1500 1500" fill="rgb(1,1,1)" aria-hidden="true" style={{ display: 'block' }}>
                  <path d="M 1300.503906 1446.628906 L 1264.453125 1396.84375 C 1192.605469 1297.832031 1114.039062 1189.433594 1044.300781 1060.773438 L 1119.882812 1060.773438 C 1137.039062 1060.773438 1150.960938 1046.851562 1150.960938 1029.695312 C 1150.960938 1012.542969 1137.039062 998.617188 1119.882812 998.617188 L 1012.042969 998.617188 C 951.195312 875.054688 900.164062 732.472656 869.835938 563.535156 L 902.277344 563.535156 C 919.433594 563.535156 933.355469 549.613281 933.355469 532.457031 C 933.355469 515.304688 919.496094 501.382812 902.339844 501.382812 L 859.828125 501.382812 C 847.519531 415.046875 840.1875 322.5 840.1875 221.683594 C 840.1875 217.023438 839.003906 212.671875 837.140625 208.695312 C 837.015625 208.445312 837.078125 208.074219 836.953125 207.824219 L 778.03125 89.980469 L 778.03125 35.222656 C 778.03125 18.066406 764.109375 4.144531 746.953125 4.144531 C 729.800781 4.144531 715.878906 18.066406 715.878906 35.222656 L 715.878906 90.105469 L 657.015625 207.824219 C 656.890625 208.011719 656.953125 208.257812 656.890625 208.445312 C 654.964844 212.484375 653.660156 216.898438 653.660156 221.683594 C 653.660156 322.5 646.386719 415.046875 634.019531 501.382812 L 591.566406 501.382812 C 574.414062 501.382812 560.492188 515.304688 560.492188 532.457031 C 560.492188 549.613281 574.414062 563.535156 591.566406 563.535156 L 623.949219 563.535156 C 593.617188 732.472656 542.589844 875.054688 481.742188 998.617188 L 405.105469 998.617188 C 387.949219 998.617188 374.027344 1012.542969 374.027344 1029.695312 C 374.027344 1046.851562 387.949219 1060.773438 405.105469 1060.773438 L 449.542969 1060.773438 C 379.746094 1189.433594 301.242188 1297.832031 229.390625 1396.84375 L 193.34375 1446.628906 C 186.503906 1456.140625 185.574219 1468.632812 190.917969 1479.011719 C 196.265625 1489.390625 206.890625 1495.855469 218.578125 1495.855469 L 468.875 1495.855469 C 477.761719 1495.855469 486.152344 1492.066406 492.058594 1485.539062 C 497.960938 1478.886719 500.820312 1470.1875 499.828125 1461.359375 C 498.832031 1452.285156 498.335938 1443.023438 498.335938 1433.703125 C 498.335938 1296.589844 609.839844 1185.082031 746.953125 1185.082031 C 884.066406 1185.082031 995.574219 1296.589844 995.574219 1433.703125 C 995.574219 1443.023438 995.074219 1452.285156 994.019531 1461.359375 C 993.085938 1470.1875 995.882812 1478.949219 1001.789062 1485.539062 C 1007.753906 1492.066406 1016.144531 1495.855469 1024.972656 1495.855469 L 1275.269531 1495.855469 C 1286.890625 1495.855469 1297.644531 1489.390625 1302.929688 1479.011719 C 1308.210938 1468.632812 1307.277344 1456.078125 1300.503906 1446.628906 Z M 715.007812 252.761719 L 778.777344 252.761719 C 780.019531 341.394531 786.359375 424 796.925781 501.382812 L 696.796875 501.382812 C 707.425781 424 713.824219 341.332031 715.007812 252.761719 Z M 687.410156 563.535156 L 806.4375 563.535156 C 835.402344 731.851562 884.316406 874.308594 943.050781 998.617188 L 862.5625 998.617188 L 807.492188 833.410156 C 803.265625 820.730469 791.394531 812.15625 778.03125 812.15625 L 715.878906 812.15625 C 702.515625 812.15625 690.640625 820.730469 686.414062 833.410156 L 631.347656 998.617188 L 550.792969 998.617188 C 609.46875 874.308594 658.445312 731.851562 687.410156 563.535156 Z M 797.050781 998.617188 L 696.859375 998.617188 L 738.253906 874.308594 L 755.59375 874.308594 Z M 1057.726562 1433.703125 C 1057.726562 1262.339844 918.316406 1122.929688 746.953125 1122.929688 C 575.59375 1122.929688 436.179688 1262.339844 436.179688 1433.703125 L 279.488281 1433.703125 L 279.675781 1433.328125 C 358.425781 1324.746094 444.882812 1205.035156 519.964844 1060.773438 L 973.820312 1060.773438 C 1048.964844 1204.972656 1135.359375 1324.746094 1214.109375 1433.328125 L 1214.417969 1433.703125 Z M 1057.726562 1433.703125 " />
                </svg>
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
                  <div
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                      textAlign: 'left',
                    }}
                  >
                    Photo Session in Paris
                  </div>
                  <p
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: '22px',
                      color: 'rgb(124, 124, 124)',
                      textAlign: 'left',
                      margin: 0,
                    }}
                  >
                    The most photogenic spots in Paris, delivered quickly.
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <TagBadge label="Streets" />
                  <TagBadge label="Monuments" />
                </div>
              </div>

              {/* Mini card — "Smooth client experience" */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '24px',
                  width: '100%',
                  height: '118px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '34px',
                  transition: 'transform 500ms ease',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                {/* Icon — user/profile (Smooth client experience) */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
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
                  <div
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                      textAlign: 'left',
                    }}
                  >
                    Smooth client experience
                  </div>
                </div>
              </div>

              {/* Medium card — "Portrait Photography" */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '24px',
                  width: '100%',
                  height: '222px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '34px',
                  transition: 'transform 500ms ease',
                  cursor: 'pointer',
                }}
                className="hover:scale-105"
              >
                {/* Icon — location pin (Custom Sessions) */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
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
                  <div
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: 'rgb(1, 1, 1)',
                      textAlign: 'left',
                    }}
                  >
                    Custom Sessions
                  </div>
                  <p
                    style={{
                      display: 'block',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: '22px',
                      color: 'rgb(124, 124, 124)',
                      textAlign: 'left',
                      margin: 0,
                    }}
                  >
                    You pick the location anywhere in Paris.
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <TagBadge label="Couples" />
                  <TagBadge label="Solo" />
                  <TagBadge label="Proposals" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
