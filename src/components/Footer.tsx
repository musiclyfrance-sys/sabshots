'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(1, 1, 1)',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '22px',
        display: 'block',
        width: '100%',
        padding: '12px',
        marginTop: '100px',
        overflow: 'hidden',
      }}
    >
      {/* padding-global */}
      <div
        className="flex flex-col justify-center items-center w-full"
        style={{ padding: '8px' }}
      >
        {/* container-medium */}
        <div
          className="flex flex-col justify-center items-center"
          style={{
            maxWidth: '1000px',
            width: '100%',
            padding: '8px',
            gap: '50px',
            borderRadius: '40px',
          }}
        >
          {/* footer-content */}
          <div
            className="flex flex-col justify-center items-center w-full"
            style={{ gap: '50px' }}
          >
            {/* column-foter: main columns row (logo left, links right) */}
            <div
              className="flex flex-col md:flex-row justify-between items-start w-full"
              style={{ gap: '50px' }}
            >
              {/* footer-wrapper: logo + tagline */}
              <div
                className="flex flex-row justify-start items-start"
                style={{ width: '100%', maxWidth: '467px' }}
              >
                {/* column-footer-logo */}
                <div
                  className="flex flex-col items-start"
                  style={{ gap: '20px', width: '184px' }}
                >
                  {/* Logo link */}
                  <Link
                    href="/"
                    className="flex items-center"
                    style={{
                      height: '26px',
                      color: 'rgb(1, 1, 1)',
                      textDecoration: 'none',
                      transition: 'all',
                    }}
                  >
                    <Image
                      src="/assets/logo-dark.svg"
                      alt="SabShots — photographe professionnel à Paris"
                      width={1500}
                      height={293}
                      style={{ width: '134px', height: 'auto', display: 'block' }}
                      priority
                    />
                  </Link>

                  {/* Tagline */}
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: 300,
                      fontFamily: 'Manrope, sans-serif',
                      lineHeight: '22px',
                      color: 'rgb(124, 124, 124)',
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Captivating Visual Stories
                  </p>
                </div>
              </div>

              {/* container-menu-footer: 3-column link grid */}
              <div
                className="flex flex-row justify-end items-start"
                style={{ gap: '40px', width: '100%', maxWidth: '467px' }}
              >
                {/* Pages column */}
                <div
                  className="flex flex-col items-start"
                  style={{ gap: '5px' }}
                >
                  <div style={{ padding: '8px 6px' }}>
                    <span
                      style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        fontFamily: 'Manrope, sans-serif',
                        lineHeight: '22px',
                        color: 'rgb(1, 1, 1)',
                        display: 'block',
                      }}
                    >
                      Pages
                    </span>
                  </div>
                  <div style={{ padding: '8px 6px' }}>
                    <Link
                      href="/"
                      style={{
                        fontSize: '14px',
                        fontWeight: 300,
                        fontFamily: 'Manrope, sans-serif',
                        lineHeight: '20px',
                        color: 'rgb(1, 1, 1)',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'all',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'rgb(124, 124, 124)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgb(1, 1, 1)'
                      }}
                    >
                      Home
                    </Link>
                  </div>
                  <div style={{ padding: '8px 6px' }}>
                    <Link
                      href="/portfolio"
                      style={{
                        fontSize: '14px',
                        fontWeight: 300,
                        fontFamily: 'Manrope, sans-serif',
                        lineHeight: '20px',
                        color: 'rgb(124, 124, 124)',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'all',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'rgb(1, 1, 1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgb(124, 124, 124)'
                      }}
                    >
                      Portfolio
                    </Link>
                  </div>
                </div>

                {/* Informations column */}
                <div
                  className="flex flex-col items-start"
                  style={{ gap: '5px' }}
                >
                  <div style={{ padding: '8px 6px' }}>
                    <span
                      style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        fontFamily: 'Manrope, sans-serif',
                        lineHeight: '22px',
                        color: 'rgb(1, 1, 1)',
                        display: 'block',
                      }}
                    >
                      Informations
                    </span>
                  </div>
                  <div style={{ padding: '8px 6px' }}>
                    <Link
                      href="/blog"
                      style={{
                        fontSize: '14px',
                        fontWeight: 300,
                        fontFamily: 'Manrope, sans-serif',
                        lineHeight: '20px',
                        color: 'rgb(124, 124, 124)',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'all',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'rgb(1, 1, 1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgb(124, 124, 124)'
                      }}
                    >
                      Blog
                    </Link>
                  </div>
                  <div style={{ padding: '8px 6px' }}>
                    <Link
                      href="/about"
                      style={{
                        fontSize: '14px',
                        fontWeight: 300,
                        fontFamily: 'Manrope, sans-serif',
                        lineHeight: '20px',
                        color: 'rgb(124, 124, 124)',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'all',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'rgb(1, 1, 1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgb(124, 124, 124)'
                      }}
                    >
                      About
                    </Link>
                  </div>
                </div>

                {/* Contact column */}
                <div
                  className="flex flex-col items-start"
                  style={{ gap: '5px' }}
                >
                  <div style={{ padding: '8px 6px' }}>
                    <span
                      style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        fontFamily: 'Manrope, sans-serif',
                        lineHeight: '22px',
                        color: 'rgb(1, 1, 1)',
                        display: 'block',
                      }}
                    >
                      Contact
                    </span>
                  </div>
                  <div style={{ padding: '8px 6px' }}>
                    <Link
                      href="https://maps.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '14px',
                        fontWeight: 300,
                        fontFamily: 'Manrope, sans-serif',
                        lineHeight: '20px',
                        color: 'rgb(124, 124, 124)',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'all',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'rgb(1, 1, 1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgb(124, 124, 124)'
                      }}
                    >
                      XYZ Square
                    </Link>
                  </div>
                  <div style={{ padding: '8px 6px' }}>
                    <Link
                      href="mailto:Hello@mail.com"
                      style={{
                        fontSize: '14px',
                        fontWeight: 300,
                        fontFamily: 'Manrope, sans-serif',
                        lineHeight: '20px',
                        color: 'rgb(124, 124, 124)',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'all',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'rgb(1, 1, 1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgb(124, 124, 124)'
                      }}
                    >
                      Hello@mail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* column-footer: bottom bar */}
            <div
              className="flex flex-row justify-between items-center w-full"
              style={{ height: '28px' }}
            >
              {/* Copyright */}
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 300,
                  fontFamily: 'Manrope, sans-serif',
                  lineHeight: '22px',
                  color: 'rgb(124, 124, 124)',
                  margin: 0,
                  padding: 0,
                }}
              >
                © All Rights Reserved, 2025
              </p>

              {/* License + Changelog links */}
              <div
                className="flex flex-row justify-center items-center"
                style={{ gap: '5px', height: '28px' }}
              >
                <Link
                  href="/templates-info/license"
                  style={{
                    fontSize: '14px',
                    fontWeight: 300,
                    fontFamily: 'Manrope, sans-serif',
                    lineHeight: '20px',
                    color: 'rgb(124, 124, 124)',
                    textDecoration: 'none',
                    transition: 'all',
                    padding: '4px 6px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgb(1, 1, 1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgb(124, 124, 124)'
                  }}
                >
                  License
                </Link>
                <Link
                  href="/templates-info/changelog"
                  style={{
                    fontSize: '14px',
                    fontWeight: 300,
                    fontFamily: 'Manrope, sans-serif',
                    lineHeight: '20px',
                    color: 'rgb(124, 124, 124)',
                    textDecoration: 'none',
                    transition: 'all',
                    padding: '4px 6px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgb(1, 1, 1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgb(124, 124, 124)'
                  }}
                >
                  Changelog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
