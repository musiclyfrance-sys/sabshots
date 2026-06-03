'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Wraps every route. Gives a subtle page-enter fade plus a robust scroll reveal.
// Key points that keep content from ever looking "empty until you scroll":
//  - it reveals everything from the top of the page down to a bit BELOW the
//    current viewport (vh * 1.4), so the arrival screen and the content just
//    under the fold are already shown, and items fade in just before they reach
//    the viewport rather than after;
//  - it re-checks on mount, as the scroll settles after a navigation, and on
//    scroll/resize;
//  - it depends on the pathname, so it re-runs on every client-side navigation.
// Honors prefers-reduced-motion.
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const reveal = (el: Element) => el.classList.add('is-visible')
    const pending = () =>
      Array.from(root.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      pending().forEach(reveal)
      return
    }

    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      const limit = vh * 1.4
      pending().forEach((el) => {
        if (el.getBoundingClientRect().top < limit) reveal(el)
      })
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        check()
        ticking = false
      })
    }

    check()
    const timers = [60, 200, 500, 1000].map((ms) => window.setTimeout(check, ms))
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      timers.forEach((t) => window.clearTimeout(t))
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  )
}
