'use client'

import { useEffect, useRef } from 'react'

// Wraps every route and re-mounts on each navigation. Gives a subtle page-enter
// fade plus a robust scroll reveal: everything from the top of the page down to
// the current viewport fades in, the rest fades in as it scrolls into view.
// It re-checks on mount, again as the browser settles the scroll after a
// navigation (forward resets to top, back restores position), and on scroll, so
// content can never get stuck hidden. Honors prefers-reduced-motion.
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

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
      pending().forEach((el) => {
        if (el.getBoundingClientRect().top < vh - 60) reveal(el)
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
    const timers = [
      window.setTimeout(check, 90),
      window.setTimeout(check, 300),
      window.setTimeout(check, 700),
    ]
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      timers.forEach((t) => window.clearTimeout(t))
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  )
}
