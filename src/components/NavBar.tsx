'use client'

import { useEffect, useState } from 'react'
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
  { label: 'Tips & Guides', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[3] flex flex-row justify-center items-center w-full"
      style={{
        height: 'clamp(72px, 13vw, 104px)',
        padding: 'clamp(16px, 3.5vw, 24px)',
        backgroundImage: mobileOpen ? 'none' : 'linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0))',
        backgroundColor: mobileOpen ? 'rgb(255, 255, 255)' : 'transparent',
        backdropFilter: mobileOpen ? 'none' : 'blur(2px)',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '22px',
        color: 'rgb(1, 1, 1)',
        transition: reduced ? 'none' : 'background-color 0.3s ease',
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
            className="btn-book hidden md:flex flex-row justify-center items-center text-white no-underline"
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

          {/* Mobile hamburger button — the three bars morph into a cross */}
          <button
            className="flex md:hidden items-center justify-center"
            style={{
              width: '44px',
              height: '44px',
              position: 'relative',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
            }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span style={{ position: 'relative', display: 'block', width: '22px', height: '14px' }} aria-hidden="true">
              {[0, 1, 2].map((bar) => (
                <span
                  key={bar}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    width: '22px',
                    height: '1.6px',
                    borderRadius: '2px',
                    backgroundColor: 'rgb(1, 1, 1)',
                    transform: mobileOpen
                      ? bar === 0
                        ? 'translateY(-50%) rotate(45deg)'
                        : bar === 1
                        ? 'translateY(-50%) scaleX(0.2)'
                        : 'translateY(-50%) rotate(-45deg)'
                      : bar === 0
                      ? 'translateY(calc(-50% - 6px))'
                      : bar === 1
                      ? 'translateY(-50%)'
                      : 'translateY(calc(-50% + 6px))',
                    opacity: mobileOpen && bar === 1 ? 0 : 1,
                    transition: reduced
                      ? 'none'
                      : 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease',
                  }}
                />
              ))}
            </span>
          </button>
        </div>
      </div>

      {/* Tap-outside overlay: closes the mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{ position: 'fixed', inset: 0, zIndex: 1, background: 'transparent' }}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile dropdown menu — solid white, slides open, links cascade in */}
      <div
        className="absolute top-full left-0 right-0 md:hidden flex flex-col items-stretch"
        style={{
          backgroundColor: 'rgb(255, 255, 255)',
          padding: '8px 24px 24px',
          zIndex: 100,
          borderTop: '1px solid rgb(245, 246, 249)',
          boxShadow: '0 24px 40px -20px rgba(16, 40, 55, 0.18)',
          borderRadius: '0 0 28px 28px',
          opacity: mobileOpen ? 1 : 0,
          transform: reduced ? 'none' : mobileOpen ? 'translateY(0)' : 'translateY(-12px)',
          visibility: mobileOpen ? 'visible' : 'hidden',
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: reduced
            ? 'none'
            : mobileOpen
            ? 'opacity 0.3s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), visibility 0s'
            : 'opacity 0.22s ease, transform 0.25s ease, visibility 0s linear 0.25s',
        }}
      >
        {navItems.map((item, index) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className="w-full"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '17px',
                fontWeight: isActive ? 400 : 300,
                lineHeight: '24px',
                color: isActive ? 'rgb(1, 1, 1)' : 'rgb(124, 124, 124)',
                padding: '14px 4px',
                borderBottom: index < navItems.length - 1 ? '1px solid rgb(245, 246, 249)' : 'none',
                textDecoration: 'none',
                opacity: mobileOpen ? 1 : 0,
                transform: reduced ? 'none' : mobileOpen ? 'translateY(0)' : 'translateY(10px)',
                transition: reduced
                  ? 'none'
                  : 'opacity 0.35s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: !reduced && mobileOpen ? `${70 + index * 45}ms` : '0ms',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
              {isActive && (
                <span
                  aria-hidden="true"
                  style={{ width: '6px', height: '6px', borderRadius: '99px', backgroundColor: 'rgb(1, 1, 1)' }}
                />
              )}
            </Link>
          )
        })}

        {/* CTA block — the one action of the site, full width, WhatsApp green */}
        <div
          style={{
            marginTop: '18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            opacity: mobileOpen ? 1 : 0,
            transform: reduced ? 'none' : mobileOpen ? 'translateY(0)' : 'translateY(10px)',
            transition: reduced
              ? 'none'
              : 'opacity 0.35s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: !reduced && mobileOpen ? `${70 + navItems.length * 45}ms` : '0ms',
          }}
        >
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book-wa btn-pulse"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: '22px',
              color: 'rgb(255, 255, 255)',
              padding: '15px 24px',
              borderRadius: '99px',
              textDecoration: 'none',
            }}
            onClick={() => setMobileOpen(false)}
          >
            <WhatsAppGlyph size={17} />
            Book a Session
          </a>
          <p
            style={{
              margin: 0,
              fontFamily: 'Manrope, sans-serif',
              fontSize: '13px',
              fontWeight: 300,
              lineHeight: '18px',
              color: 'rgb(124, 124, 124)',
              textAlign: 'center',
            }}
          >
            Send a message on WhatsApp and get a response within a few hours.
          </p>
        </div>
      </div>
    </nav>
  )
}
