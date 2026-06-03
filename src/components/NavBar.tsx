'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { WHATSAPP_BOOKING_URL } from '@/lib/site-data'
import { WhatsAppGlyph } from '@/components/icons'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[3] flex flex-row justify-center items-center w-full"
      style={{
        height: 'clamp(72px, 13vw, 104px)',
        padding: 'clamp(16px, 3.5vw, 24px)',
        backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0))',
        backgroundColor: 'transparent',
        backdropFilter: 'blur(2px)',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '22px',
        color: 'rgb(1, 1, 1)',
        transition: 'all',
      }}
    >
      {/* Inner centering container */}
      <div
        className="relative flex flex-row justify-center items-center w-full"
        style={{
          zIndex: 10,
          height: 'clamp(40px, 8vw, 56px)',
          backgroundColor: 'transparent',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0px',
        }}
      >
        {/* 3-column flex container */}
        <div
          className="flex flex-row justify-between items-center w-full"
          style={{
            maxWidth: '1000px',
            gap: '5px',
            padding: '9px',
            backgroundColor: 'transparent',
          }}
        >
          {/* Logo link */}
          <Link
            href="/"
            className="flex flex-row justify-center items-center relative"
            style={{
              height: '24px',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'all',
              color: 'rgb(51, 51, 51)',
            }}
          >
            <Image
              src="/assets/logo-dark.svg"
              alt="SabShots, professional photographer in Paris"
              width={1500}
              height={293}
              style={{ width: '124px', height: 'auto' }}
              priority
            />
          </Link>

          {/* Nav links — centered — hidden on mobile */}
          <nav
            className="hidden md:flex flex-row justify-center items-center relative"
            style={{ height: '40px' }}
          >
            <ul
              className="list-none p-0 m-0 flex flex-row items-center"
              style={{ gap: '4px', height: '40px' }}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block transition-all',
                        isActive
                          ? 'text-[rgb(1,1,1)]'
                          : 'text-[rgb(124,124,124)] hover:text-[rgb(1,1,1)]'
                      )}
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        lineHeight: '20px',
                        padding: '4px 10px',
                        borderRadius: '99px',
                        height: '28px',
                        cursor: 'pointer',
                        transition: 'all',
                        textDecoration: 'none',
                        backgroundColor: isActive ? 'rgb(255, 255, 255)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = '#fcfdfff7'
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* CTA Button — right side — "Book a Session" → WhatsApp */}
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex flex-row justify-center items-center text-white no-underline"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: '22px',
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(1, 1, 1)',
              padding: '9px 20px',
              borderRadius: '99px',
              height: '40px',
              gap: '10px',
              cursor: 'pointer',
              transition: 'all',
              textDecoration: 'none',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
            }}
          >
            <WhatsAppGlyph size={15} />
            Book a Session
          </a>

          {/* Mobile hamburger button */}
          <button
            className="flex md:hidden items-center justify-center"
            style={{
              padding: '18px',
              position: 'relative',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
            }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(1,1,1)" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 md:hidden flex flex-col items-start"
          style={{
            backgroundColor: 'rgb(255, 255, 255)',
            padding: '16px 24px',
            zIndex: 100,
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className="w-full"
                style={{
                  display: 'block',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '14px',
                  fontWeight: 300,
                  lineHeight: '20px',
                  color: isActive ? 'rgb(1, 1, 1)' : 'rgb(124, 124, 124)',
                  backgroundColor: isActive ? 'rgb(255,255,255)' : 'transparent',
                  padding: '10px 6px',
                  borderRadius: '99px',
                  textDecoration: 'none',
                  transition: 'all',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: '22px',
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(1, 1, 1)',
              padding: '9px 20px',
              borderRadius: '99px',
              textDecoration: 'none',
              transition: 'all',
            }}
            onClick={() => setMobileOpen(false)}
          >
            <WhatsAppGlyph size={15} className="mr-2" />
            Book a Session
          </a>
        </div>
      )}
    </nav>
  )
}
