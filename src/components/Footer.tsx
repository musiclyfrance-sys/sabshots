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
        marginTop: 'clamp(56px, 12vw, 100px)',
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
                      alt="SabShots, professional photographer in Paris"
                      width={1500}
                      height={293}
                      style={{ width: '124px', height: 'auto', display: 'block' }}
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
                    Your Paris Story in Photos
                  </p>
                </div>
              </div>

              {/* container-menu-footer: 3-column link grid */}
              <div
                className="flex flex-row flex-wrap justify-start md:justify-end items-start"
                style={{ gap: '32px', width: '100%', maxWidth: '467px' }}
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
                      Tips &amp; Guides
                    </Link>
                  </div>
                  <div style={{ padding: '8px 6px' }}>
                    <Link
                      href="/faq"
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
                      FAQ
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
                      href="https://www.google.com/maps/place/Paris"
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
                      Paris, France
                    </Link>
                  </div>
                  <div style={{ padding: '8px 6px' }}>
                    <Link
                      href="mailto:sabounjiyassir@gmail.com"
                      style={{
                        fontSize: '14px',
                        fontWeight: 300,
                        fontFamily: 'Manrope, sans-serif',
                        lineHeight: '20px',
                        color: 'rgb(124, 124, 124)',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'all',
                        overflowWrap: 'anywhere',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'rgb(1, 1, 1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgb(124, 124, 124)'
                      }}
                    >
                      sabounjiyassir@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* column-footer: bottom bar — socials above the copyright, left-aligned */}
            <div
              className="flex flex-col justify-center items-start w-full"
              style={{ gap: '18px' }}
            >
              {/* Social links — GetYourGuide, Instagram, WhatsApp */}
              <div
                className="flex flex-row justify-center items-center"
                style={{ gap: '10px' }}
              >
                {/* GetYourGuide */}
                <a
                  href="https://www.getyourguide.com/yassir-sabounji-s514149/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book on GetYourGuide"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '999px',
                    backgroundColor: 'rgb(1, 1, 1)',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.85'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  <Image
                    src="/assets/getyourguide.svg"
                    alt="GetYourGuide"
                    width={14}
                    height={14}
                    style={{ width: '14px', height: '14px' }}
                  />
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sab.shots/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '999px',
                    backgroundColor: 'rgb(1, 1, 1)',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.85'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/33652077909?text=Hey%2C%20I%20just%20saw%20your%20website%20and%20I%20want%20to%20book%20a%20photo%20session%20in%20Paris."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '999px',
                    backgroundColor: 'rgb(1, 1, 1)',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.85'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
                    <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.8.9.9-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
                  </svg>
                </a>
              </div>

              {/* Copyright — below the social buttons */}
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                  fontFamily: 'Manrope, sans-serif',
                  lineHeight: '20px',
                  color: 'rgb(124, 124, 124)',
                  margin: 0,
                  padding: 0,
                  textAlign: 'left',
                }}
              >
                © 2021 SabShots. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
