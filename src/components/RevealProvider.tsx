'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Site-wide scroll-reveal. Mounted once in the root layout, it re-scans on every
// route change and fades in any `.reveal` element as it scrolls into view, so the
// gentle reveal used on the homepage now applies identically across all pages and
// devices. Honors prefers-reduced-motion by showing content immediately.
export default function RevealProvider() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const revealAll = () =>
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
        .forEach((el) => el.classList.add('is-visible'))

    if (prefersReduced) {
      revealAll()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    // Wait one frame so freshly navigated DOM is in place before observing.
    const raf = window.requestAnimationFrame(() => {
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
        .forEach((el) => observer.observe(el))
    })

    // Safety net: if anything is still hidden after a moment, show it.
    const safety = window.setTimeout(revealAll, 2500)

    return () => {
      window.cancelAnimationFrame(raf)
      window.clearTimeout(safety)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
