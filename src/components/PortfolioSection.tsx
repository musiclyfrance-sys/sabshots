'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { PortfolioCard } from '@/types'

const projects: PortfolioCard[] = [
  {
    title: 'Nature',
    category: 'Nature',
    year: '2026',
    image: '/assets/portfolio-1.png',
  },
  {
    title: 'Travel',
    category: 'Photography',
    year: '2022',
    image: '/assets/portfolio-2.png',
  },
  {
    title: 'Urban',
    category: 'Photography',
    year: '2023',
    image: '/assets/portfolio-3.png',
  },
  {
    title: 'Emotion',
    category: 'Photography',
    year: '2021',
    image: '/assets/portfolio-4.png',
  },
  {
    title: 'Wonders',
    category: 'Photography',
    year: '2022',
    image: '/assets/portfolio-5.png',
  },
  {
    title: 'Event',
    category: 'Photography',
    year: '2023',
    image: '/assets/portfolio-6.png',
  },
]

function PortfolioCardItem({ project }: { project: PortfolioCard }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative cursor-pointer"
      style={{
        width: '100%',
        maxWidth: '480px',
        marginInline: 'auto',
        aspectRatio: '3 / 2',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* card-cms.portfolio.w-inline-block */}
      <div
        className="flex flex-col items-center justify-center gap-2.5 p-2 w-full h-full rounded-[32px]"
        style={{
          backgroundColor: 'rgba(252, 253, 255, 0.97)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0px)',
          transition: 'transform 500ms ease-out',
        }}
      >
        {/* tumbnail-wrapper */}
        <div
          className="relative flex items-center justify-center rounded-[32px] overflow-hidden"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          {/* tumbnail-portfolio */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              filter: isHovered
                ? 'grayscale(0.68) blur(3px)'
                : 'grayscale(0) blur(0px)',
              transition: 'transform 1000ms ease-out, filter 500ms ease-out',
            }}
          />

          {/* Top overlay: title + camera icon — column-potrfolio-item */}
          <div
            className="absolute flex flex-row justify-between items-center gap-2.5"
            style={{
              top: '6%',
              width: '85%',
              display: isHovered ? 'flex' : 'none',
              zIndex: 10,
            }}
          >
            <span
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: 'rgb(255, 255, 255)',
              }}
            >
              {project.title}
            </span>
            <div
              className="relative"
              style={{
                width: '22px',
                height: '22px',
                zIndex: 1,
                transition: 'transform 1000ms ease-out',
                transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                flexShrink: 0,
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(1, 1, 1)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ display: 'block' }}
              >
                <rect x="2" y="8" width="20" height="13" rx="2.5" ry="2.5" />
                <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <circle cx="12" cy="14.5" r="3" />
              </svg>
            </div>
          </div>

          {/* Bottom overlay: category + year — column-potrfolio-item._2 */}
          <div
            className="absolute flex flex-row justify-between items-center"
            style={{
              bottom: '6%',
              width: '85%',
              display: isHovered ? 'flex' : 'none',
              zIndex: 10,
            }}
          >
            <p
              style={{
                fontSize: '16px',
                fontWeight: 300,
                color: 'rgb(255, 255, 255)',
              }}
            >
              {project.category}
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 300,
                color: 'rgb(255, 255, 255)',
              }}
            >
              {project.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const revealEls = section.querySelectorAll<HTMLElement>('.reveal')
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

    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    /* section.section — body > section:nth-of-type(2) */
    <section
      ref={sectionRef}
      className="relative block w-full"
      style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        color: 'rgb(1, 1, 1)',
        padding: '12px',
        margin: 'clamp(56px, 12vw, 100px) 0px',
      }}
    >
      {/* .padding-global */}
      <div
        className="flex flex-col justify-center items-center relative text-center"
        style={{
          padding: '8px',
        }}
      >
        {/* .container-medium */}
        <div
          className="flex flex-col justify-center items-center relative text-center mx-auto"
          style={{
            gap: '50px',
            padding: '8px',
            maxWidth: '1000px',
            width: '100%',
            borderRadius: '40px',
            background: 'rgba(255, 255, 255, 0)',
          }}
        >
          {/* .section-tittle.center — scroll reveal */}
          <div
            className={cn(
              'reveal flex flex-col justify-center items-center text-center w-full'
            )}
            style={{ gap: '14px' }}
          >
            {/* .icon-wrapper */}
            <div
              className="flex justify-center items-center relative"
              style={{
                backgroundColor: 'rgb(1, 1, 1)',
                padding: '7px',
                width: '38px',
                height: '38px',
                borderRadius: '99px',
                boxShadow:
                  'rgba(255, 255, 255, 0.38) -3px 1px 8px 1px inset',
              }}
            >
              <Image
                src="/assets/icon-camera.png"
                alt="camera icon"
                width={22}
                height={22}
                className="object-cover block relative"
              />
            </div>

            {/* .heading-style-h2.center */}
            <h2
              className="block text-center"
              style={{
                fontSize: 'clamp(26px, 5vw, 32px)',
                fontWeight: 500,
                color: 'rgb(1, 1, 1)',
                maxWidth: '700px',
              }}
            >
              A lens into my world
            </h2>

            {/* .paragraph-large.center */}
            <p
              className="block text-center"
              style={{
                fontSize: '18px',
                fontWeight: 300,
                color: 'rgb(124, 124, 124)',
              }}
            >
              I capture your vision through creative photography.
            </p>
          </div>

          {/* .collection-list-wrapper.featured.w-dyn-list */}
          <div className="reveal reveal-delay-1 w-full">
            {/* .grid.portfolio.w-dyn-items */}
            <div
              className="grid mx-auto"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gridTemplateRows: 'repeat(2, 416px)',
                gap: '20px',
                width: '984px',
                maxWidth: '100%',
              }}
            >
              {projects.map((project, i) => (
                /* .item.w-dyn-item */
                <div key={i} className="block">
                  <PortfolioCardItem project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
