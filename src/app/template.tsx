'use client'

// Wraps every route. Because a template re-mounts on each navigation (unlike a
// layout), this gives a subtle, consistent page-enter fade on every page change,
// on all devices. Opacity only, so the fixed navbar keeps its viewport anchor.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>
}
