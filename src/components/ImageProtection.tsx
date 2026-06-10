'use client'

import { useEffect } from 'react'

// Deters casual downloading of the photos: blocks right-click and drag on images
// (and, with the CSS callout rule, the iOS/Android long-press save menu). It does
// not alter image quality. Determined users can still reach files via dev tools,
// which is unavoidable for any web image, but this stops the easy ways.
export default function ImageProtection() {
  useEffect(() => {
    const block = (e: Event) => {
      const target = e.target as HTMLElement | null
      if (target && target.tagName === 'IMG') e.preventDefault()
    }
    document.addEventListener('contextmenu', block)
    document.addEventListener('dragstart', block)
    return () => {
      document.removeEventListener('contextmenu', block)
      document.removeEventListener('dragstart', block)
    }
  }, [])

  return null
}
