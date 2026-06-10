import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SabShots Admin',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'rgb(244, 245, 248)',
        color: 'rgb(17, 17, 19)',
        fontFamily: 'Manrope, sans-serif',
      }}
    >
      {children}
    </div>
  )
}
