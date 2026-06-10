'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (res.ok) {
        router.push('/admin')
        router.refresh()
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Connexion impossible')
        setLoading(false)
      }
    } catch {
      setError('Erreur réseau')
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 15px',
    borderRadius: '12px',
    border: '1px solid rgb(224, 226, 232)',
    fontSize: '15px',
    fontFamily: 'inherit',
    outline: 'none',
    background: 'white',
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: 'white',
          borderRadius: '22px',
          padding: '36px 32px',
          boxShadow: '0 20px 50px -20px rgba(0,0,0,0.18)',
          border: '1px solid rgb(236, 238, 242)',
        }}
      >
        <div style={{ fontWeight: 700, fontSize: '24px', letterSpacing: '-0.02em', marginBottom: '6px' }}>
          SabShots<span style={{ color: 'rgb(37, 211, 102)' }}> Admin</span>
        </div>
        <p style={{ color: 'rgb(107,114,128)', fontSize: '14px', margin: '0 0 24px' }}>
          Connecte-toi pour gérer ton portfolio et tes articles.
        </p>

        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            style={inputStyle}
          />

          {error && (
            <div style={{ color: 'rgb(220, 38, 38)', fontSize: '13px', fontWeight: 500 }}>{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: '4px',
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              background: loading ? 'rgb(120,124,132)' : 'rgb(17,17,19)',
              color: 'white',
              fontSize: '15px',
              fontWeight: 600,
              cursor: loading ? 'default' : 'pointer',
            }}
          >
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}
