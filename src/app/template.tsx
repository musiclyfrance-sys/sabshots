'use client'

import { useEffect, useRef } from 'react'

// Wraps every route and re-mounts on each navigation, so it gives both:
// 1) a subtle page-enter fade (the .page-enter class), and
// 2) a scroll-reveal pass: elements already in view fade in immediately, and
//    elements below the fold fade in as they scroll into view. Same gentle feel
//    on every page and device. Honors prefers-reduced-motion.
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const els = Array.from(root.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'))
    if (els.length === 0) return

    const reveal = (el: Element) => el.classList.add('is-visible')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const viewportH = window.innerHeight || document.documentElement.clientHeight
    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      // Already in view on load: fade it in now (no reliance on the observer,
      // which is paused while a tab is backgrounded). Below the fold: on scroll.
      if (rect.top < viewportH && rect.bottom > 0) {
        reveal(el)
      } else {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  )
}
