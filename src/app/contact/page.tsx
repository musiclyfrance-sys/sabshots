'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    date: '',
    message: '',
  })

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'rgb(240, 242, 248)',
    border: 'none',
    borderRadius: '16px',
    padding: '14px 18px',
    fontSize: '14px',
    fontWeight: 300,
    fontFamily: 'Manrope, sans-serif',
    color: 'rgb(1, 1, 1)',
    outline: 'none',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgb(1, 1, 1)',
    marginBottom: '8px',
    display: 'block',
  }

  return (
    <main
      style={{
        background: 'rgb(240, 242, 248)',
        color: 'rgb(1, 1, 1)',
        fontFamily: 'Manrope, sans-serif',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      <NavBar />

      <PageHero
        badge="Contact"
        title="Let's talk !"
        subtitle="Fill out the form below, and we'll respond soon!"
      />

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 12px 80px',
        }}
      >

        {/* Form card */}
        <div
          style={{
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '40px',
            padding: '40px',
            width: '100%',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Name + Email row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Your Name</label>
              <input
                type="text"
                placeholder="John"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={fieldStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                placeholder="Yourmail@mail.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={fieldStyle}
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label style={labelStyle}>Your Budget</label>
            <input
              type="text"
              placeholder="$1000– $4000"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              style={fieldStyle}
            />
          </div>

          {/* Preferred date */}
          <div>
            <label style={labelStyle}>Preferred date</label>
            <input
              type="text"
              placeholder="22 May 2025"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              style={fieldStyle}
            />
          </div>

          {/* Message */}
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              placeholder="Your Message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              style={{ ...fieldStyle, resize: 'vertical', minHeight: '120px' }}
            />
          </div>

          {/* Privacy note */}
          <p
            style={{
              fontSize: '13px',
              fontWeight: 300,
              color: 'rgb(124, 124, 124)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            Your information will remain confidential.
          </p>

          {/* Submit */}
          <button
            type="button"
            style={{
              width: '100%',
              backgroundColor: 'rgb(1, 1, 1)',
              color: 'rgb(255, 255, 255)',
              border: 'none',
              borderRadius: '99px',
              padding: '16px',
              fontSize: '16px',
              fontWeight: 400,
              fontFamily: 'Manrope, sans-serif',
              cursor: 'pointer',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            Submit
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
