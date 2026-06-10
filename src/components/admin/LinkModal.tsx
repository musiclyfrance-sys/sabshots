'use client'

import { useState } from 'react'

const overlay: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }
const panel: React.CSSProperties = { background: 'white', borderRadius: '20px', padding: '22px', maxWidth: '440px', width: '100%' }
const field: React.CSSProperties = { width: '100%', padding: '11px 13px', borderRadius: '11px', border: '1px solid rgb(224,226,232)', fontSize: '14px', fontFamily: 'inherit' }
const ghost: React.CSSProperties = { padding: '10px 16px', borderRadius: '10px', border: '1px solid rgb(224,226,232)', background: 'white', cursor: 'pointer', fontSize: '14px' }
const dark: React.CSSProperties = { padding: '10px 18px', borderRadius: '10px', border: 'none', background: 'rgb(17,17,19)', color: 'white', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }

export default function LinkModal({
  initialUrl = '', selectedText = '', initialNewTab = true, hasLink = false, onCancel, onSave, onRemove,
}: {
  initialUrl?: string; selectedText?: string; initialNewTab?: boolean; hasLink?: boolean
  onCancel: () => void; onSave: (url: string, newTab: boolean) => void; onRemove: () => void
}) {
  const [url, setUrl] = useState(initialUrl)
  const [newTab, setNewTab] = useState(initialNewTab)
  const ok = url.trim().length > 0

  return (
    <div onClick={onCancel} style={overlay}>
      <div onClick={(e) => e.stopPropagation()} style={panel}>
        <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 700 }}>{hasLink ? 'Modifier le lien' : 'Ajouter un lien'}</h3>
        <p style={{ margin: '0 0 14px', color: 'rgb(107,114,128)', fontSize: '13px' }}>
          {selectedText ? <>Texte sélectionné : « {selectedText.slice(0, 60)} »</> : 'Sélectionne d’abord du texte, sinon l’URL servira de texte.'}
        </p>
        <input autoFocus value={url} onChange={(e) => setUrl(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && ok) onSave(url.trim(), newTab) }} placeholder="https://…  ou  /portfolio/eiffel-tower" style={field} />
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', fontSize: '14px', color: 'rgb(50,54,62)', cursor: 'pointer' }}>
          <input type="checkbox" checked={newTab} onChange={(e) => setNewTab(e.target.checked)} /> Ouvrir dans un nouvel onglet
        </label>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '18px' }}>
          {hasLink && <button onClick={onRemove} style={{ ...ghost, color: 'rgb(190,40,40)', marginRight: 'auto' }}>Retirer le lien</button>}
          <button onClick={onCancel} style={ghost}>Annuler</button>
          <button onClick={() => ok && onSave(url.trim(), newTab)} disabled={!ok} style={{ ...dark, opacity: ok ? 1 : 0.5 }}>Valider</button>
        </div>
      </div>
    </div>
  )
}
