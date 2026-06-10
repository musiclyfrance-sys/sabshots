'use client'

import { useState } from 'react'

const input: React.CSSProperties = {
  width: '100%', padding: '11px 13px', borderRadius: '11px',
  border: '1px solid rgb(224,226,232)', fontSize: '14px', fontFamily: 'inherit', background: 'white',
}

export default function ChangePasswordCard() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [confirm, setConfirm] = useState('')
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setErr(''); setMsg('')
    if (next !== confirm) { setErr('Les deux mots de passe ne correspondent pas.'); return }
    if (next.length < 8) { setErr('Au moins 8 caractères.'); return }
    setLoading(true)
    try {
      const r = await fetch('/api/admin/password', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ current, next }) })
      if (r.ok) {
        setMsg('Mot de passe changé ✓'); setCurrent(''); setNext(''); setConfirm('')
        setTimeout(() => { setMsg(''); setOpen(false) }, 2500)
      } else {
        const d = await r.json().catch(() => ({}))
        setErr(d.error || 'Erreur')
      }
    } catch {
      setErr('Erreur réseau')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ marginTop: '24px', background: 'white', border: '1px solid rgb(236,238,242)', borderRadius: '20px', padding: '22px', maxWidth: '460px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ fontWeight: 600, fontSize: '15px' }}>Sécurité du compte</div>
        {!open && (
          <button onClick={() => setOpen(true)} style={{ marginLeft: 'auto', padding: '8px 14px', borderRadius: '10px', border: '1px solid rgb(224,226,232)', background: 'white', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Changer le mot de passe</button>
        )}
      </div>
      {open && (
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
          <input type="password" placeholder="Mot de passe actuel" value={current} onChange={(e) => setCurrent(e.target.value)} autoComplete="current-password" required style={input} />
          <input type="password" placeholder="Nouveau mot de passe (8+ caractères)" value={next} onChange={(e) => setNext(e.target.value)} autoComplete="new-password" required style={input} />
          <input type="password" placeholder="Confirme le nouveau mot de passe" value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" required style={input} />
          {err && <div style={{ color: 'rgb(220,38,38)', fontSize: '13px' }}>{err}</div>}
          {msg && <div style={{ color: 'rgb(22,163,74)', fontSize: '13px', fontWeight: 600 }}>{msg}</div>}
          <div style={{ display: 'flex', gap: '10px', marginTop: '2px' }}>
            <button type="submit" disabled={loading} style={{ padding: '11px 18px', borderRadius: '11px', border: 'none', background: 'rgb(17,17,19)', color: 'white', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>{loading ? 'Changement…' : 'Valider'}</button>
            <button type="button" onClick={() => { setOpen(false); setErr(''); setCurrent(''); setNext(''); setConfirm('') }} style={{ padding: '11px 16px', borderRadius: '11px', border: '1px solid rgb(224,226,232)', background: 'white', fontSize: '14px', cursor: 'pointer' }}>Annuler</button>
          </div>
        </form>
      )}
    </div>
  )
}
