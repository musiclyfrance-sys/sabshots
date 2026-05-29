'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface BlogPost {
  id: number
  title: string
  category: string
  image: string
  imageAlt: string
  href: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Best Photo Spots in Paris',
    category: 'Guide',
    image: '/assets/blog-1.png',
    imageAlt: 'Best photo spots in Paris',
    href: '/blog/best-photo-spots-in-paris',
  },
  {
    id: 2,
    title: 'When to Shoot at the Eiffel Tower',
    category: 'Tips',
    image: '/assets/blog-2.png',
    imageAlt: 'Best time to photograph the Eiffel Tower',
    href: '/blog/when-to-shoot-eiffel-tower',
  },
  {
    id: 3,
    title: 'How to Prepare for Your Paris Session',
    category: 'Guide',
    image: '/assets/blog-3.png',
    imageAlt: 'Preparing for a Paris photo session',
    href: '/blog/how-to-prepare-paris-session',
  },
]

export function BlogSection() {
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

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        margin: 'clamp(56px, 12vw, 100px) 0px',
        padding: '12px',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '22px',
        color: 'rgb(1, 1, 1)',
      }}
      className="relative block w-full"
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
          padding: '8px',
          borderRadius: '40px',
        }}
        className="mx-auto w-full"
      >
        {/* section-tittle center — header block */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          {/* "Blog" badge pill */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgb(255, 255, 255)',
              color: 'rgb(1, 1, 1)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '22px',
              padding: '4px 12px',
              borderRadius: '26px',
              height: '30px',
              textAlign: 'center',
            }}
          >
            <div>Blog</div>
          </div>

          {/* h2: "News & Update" */}
          <h2
            style={{
              fontSize: 'clamp(26px, 5vw, 32px)',
              fontWeight: 500,
              fontFamily: 'Manrope, sans-serif',
              lineHeight: '1.3',
              color: 'rgb(1, 1, 1)',
              textAlign: 'center',
              maxWidth: '700px',
              margin: 0,
            }}
          >
            News &amp; Update
          </h2>

          {/* subtitle paragraph */}
          <p
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '18px',
              fontWeight: 300,
              fontFamily: 'Manrope, sans-serif',
              lineHeight: '25px',
              color: 'rgb(124, 124, 124)',
              textAlign: 'center',
              maxWidth: '450px',
              margin: 0,
            }}
          >
            Tips and guides to help you plan the perfect photo session in Paris.
          </p>
        </div>

        {/* collection-list-wrapper — card grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
            maxWidth: '984px',
          }}
        >
          {/* 3-column grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '20px',
              width: '100%',
              maxWidth: '984px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                revealDelay={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface BlogCardProps {
  post: BlogPost
  revealDelay: number
}

function BlogCard({ post, revealDelay }: BlogCardProps) {
  const delayClass = revealDelay === 1
    ? 'reveal-delay-1'
    : revealDelay === 2
    ? 'reveal-delay-2'
    : 'reveal-delay-3'

  return (
    <a
      href={post.href}
      className={cn('group reveal', delayClass)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '34px',
        width: '100%',
        maxWidth: '100%',
        padding: '8px',
        cursor: 'pointer',
        overflow: 'visible',
        textDecoration: 'none',
      }}
    >
      {/* thumbnail wrapper — overflow hidden for scale clip */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '32px',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          height: '260px',
        }}
      >
        {/* thumbnail image — scales on hover */}
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 314px"
        />

        {/* arrow-up-right icon popup — hidden by default, shown on hover */}
        <div
          className="hidden group-hover:flex"
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            borderRadius: '99px',
            padding: '8px',
            position: 'absolute',
            top: '5%',
            right: '4%',
            zIndex: 10,
          }}
        >
          <Image
            src="/assets/icon-arrow-up-right.png"
            alt="arrow up right"
            width={24}
            height={24}
            className="object-cover relative z-10"
          />
        </div>
      </div>

      {/* content-cms-item — bottom info row */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          width: '100%',
          padding: '14px',
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 1,
          cursor: 'pointer',
        }}
      >
        {/* post title */}
        <div
          style={{
            display: 'block',
            fontSize: '16px',
            fontWeight: 400,
            fontFamily: 'Manrope, sans-serif',
            lineHeight: '22px',
            color: 'rgb(1, 1, 1)',
            maxWidth: '300px',
          }}
        >
          {post.title}
        </div>

        {/* category badge pill */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgb(245, 245, 245)',
            color: 'rgb(1, 1, 1)',
            fontSize: '16px',
            fontWeight: 400,
            fontFamily: 'Manrope, sans-serif',
            lineHeight: '22px',
            textAlign: 'center',
            padding: '4px 12px',
            borderRadius: '26px',
            height: '30px',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          {post.category}
        </div>
      </div>
    </a>
  )
}
