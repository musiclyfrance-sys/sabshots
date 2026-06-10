'use client'

import { useState } from 'react'
import Cropper, { type Area } from 'react-easy-crop'

// Manual crop: drag to position, zoom in/out, aspect locked. The crop is baked
// server-side (sharp) by the caller's onSave.
export default function CropModal({
  src, aspect, initial, onCancel, onSave,
}: {
  src: string
  aspect: number
  initial?: Area
  onCancel: () => void
  onSave: (percent: Area, pixels: Area) => Promise<void> | void
}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [pct, setPct] = useState<Area | null>(initial ?? null)
  const [px, setPx] = useState<Area | null>(null)
  const [busy, setBusy] = useState(false)

  async function valider() {
    if (!px || !pct) return
    setBusy(true)
    try {
      await onSave(pct, px)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div onClick={onCancel} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'white', borderRadius: '20px', padding: '22px', maxWidth: '600px', width: '100%' }}>
        <h3 style={{ margin: '0 0 12px', fontSize: '18px', fontWeight: 700 }}>Recadrer</h3>
        <div style={{ position: 'relative', width: '100%', height: 'min(60vh, 420px)', background: 'rgb(22,22,24)', borderRadius: '14px', overflow: 'hidden' }}>
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            minZoom={1}
            maxZoom={5}
            zoomSpeed={0.2}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            initialCroppedAreaPercentages={initial}
            onCropComplete={(p, x) => { setPct(p); setPx(x) }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '14px' }}>
          <span style={{ fontSize: '13px', color: 'rgb(107,114,128)', minWidth: '42px' }}>Zoom</span>
          <input type="range" min={1} max={5} step={0.01} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} style={{ flex: 1 }} />
        </div>
        <p style={{ margin: '10px 0 0', fontSize: '12px', color: 'rgb(107,114,128)' }}>
          Déplace l&apos;image et zoome pour cadrer. Le cadre est verrouillé au bon format.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
          <button onClick={onCancel} disabled={busy} style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid rgb(224,226,232)', background: 'white', cursor: 'pointer', fontSize: '14px' }}>Annuler</button>
          <button onClick={valider} disabled={busy || !px} style={{ padding: '10px 18px', borderRadius: '10px', border: 'none', background: 'rgb(17,17,19)', color: 'white', fontWeight: 600, cursor: busy || !px ? 'default' : 'pointer', fontSize: '14px', opacity: busy || !px ? 0.6 : 1 }}>
            {busy ? 'Traitement…' : 'Valider'}
          </button>
        </div>
      </div>
    </div>
  )
}
