'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const LINKS = [
  { href: '/admin', label: 'Tableau de bord' },
  { href: '/admin/portfolio', label: 'Portfolio' },
  { href: '/admin/blog', label: 'Articles' },
]

export default function AdminHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function logout() {
    setLoading(true)
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgb(229, 231, 235)',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Link
          href="/admin"
          style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '-0.02em', color: 'rgb(17,17,19)' }}
        >
          SabShots<span style={{ color: 'rgb(37, 211, 102)' }}> Admin</span>
        </Link>

        <nav style={{ display: 'flex', gap: '4px', marginLeft: '8px' }}>
          {LINKS.map((l) => {
            const active = l.href === '/admin' ? pathname === '/admin' : pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: '8px 14px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: active ? 'rgb(17,17,19)' : 'rgb(107,114,128)',
                  background: active ? 'rgb(238,240,244)' : 'transparent',
                }}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Link
            href="/"
            target="_blank"
            style={{ fontSize: '13px', color: 'rgb(107,114,128)' }}
          >
            Voir le site ↗
          </Link>
          <button
            onClick={logout}
            disabled={loading}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 600,
              border: '1px solid rgb(229,231,235)',
              background: 'white',
              color: 'rgb(17,17,19)',
              cursor: 'pointer',
            }}
          >
            {loading ? '…' : 'Déconnexion'}
          </button>
        </div>
      </div>
    </header>
  )
}
