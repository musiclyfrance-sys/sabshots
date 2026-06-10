'use client'

import { useRef, useState } from 'react'
import { uploadImage } from './upload-image'

const overlay: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }
const panel: React.CSSProperties = { background: 'white', borderRadius: '20px', padding: '22px', maxWidth: '480px', width: '100%' }
const field: React.CSSProperties = { width: '100%', padding: '11px 13px', borderRadius: '11px', border: '1px solid rgb(224,226,232)', fontSize: '14px', fontFamily: 'inherit' }
const ghost: React.CSSProperties = { padding: '10px 16px', borderRadius: '10px', border: '1px solid rgb(224,226,232)', background: 'white', cursor: 'pointer', fontSize: '14px' }
const dark: React.CSSProperties = { padding: '10px 18px', borderRadius: '10px', border: 'none', background: 'rgb(17,17,19)', color: 'white', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }

const SIZES: { label: string; value: string }[] = [
  { label: 'Petite', value: '40%' },
  { label: 'Moyenne', value: '66%' },
  { label: 'Grande', value: '100%' },
]

export interface ImageInsert { url: string; alt: string; width: string; rounded: boolean }

export default function ImageModal({ folder, onCancel, onInsert }: { folder: string; onCancel: () => void; onInsert: (img: ImageInsert) => void }) {
  const [url, setUrl] = useState('')
  const [alt, setAlt] = useState('')
  const [width, setWidth] = useState('100%')
  const [rounded, setRounded] = useState(true)
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  async function pick(files: FileList | null) {
    if (!files || !files[0]) return
    setBusy(true); setErr('')
    try {
      const r = await uploadImage(files[0], folder)
      setUrl(r.url)
    } catch (e) {
      setErr((e as Error).message)
    } finally {
      setBusy(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <div onClick={onCancel} style={overlay}>
      <div onClick={(e) => e.stopPropagation()} style={panel}>
        <h3 style={{ margin: '0 0 14px', fontSize: '18px', fontWeight: 700 }}>Insérer une image</h3>
        <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => pick(e.target.files)} />

        {!url ? (
          <button onClick={() => fileRef.current?.click()} disabled={busy} style={{ width: '100%', padding: '40px', borderRadius: '14px', border: '1.5px dashed rgb(200,204,212)', background: 'rgb(248,249,251)', color: 'rgb(60,64,72)', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
            {busy ? 'Compression + upload…' : '+ Choisir une image (compression auto)'}
          </button>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'center', background: 'rgb(245,246,249)', borderRadius: '14px', padding: '14px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" style={{ width, maxWidth: '100%', height: 'auto', borderRadius: rounded ? '14px' : 0 }} />
            </div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgb(80,84,92)', margin: '14px 0 6px' }}>Texte alt (SEO)</label>
            <input value={alt} onChange={(e) => setAlt(e.target.value)} placeholder="Décris la scène + Paris" style={field} />
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '14px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgb(80,84,92)' }}>Taille</span>
              {SIZES.map((s) => (
                <button key={s.value} onClick={() => setWidth(s.value)} style={{ padding: '7px 12px', borderRadius: '9px', border: '1px solid ' + (width === s.value ? 'rgb(17,17,19)' : 'rgb(228,230,236)'), background: width === s.value ? 'rgb(17,17,19)' : 'white', color: width === s.value ? 'white' : 'rgb(50,54,62)', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>{s.label}</button>
              ))}
              <button onClick={() => setRounded((r) => !r)} style={{ marginLeft: '8px', padding: '7px 12px', borderRadius: '9px', border: '1px solid ' + (rounded ? 'rgb(37,211,102)' : 'rgb(228,230,236)'), background: rounded ? 'rgb(236,253,243)' : 'white', color: rounded ? 'rgb(22,163,74)' : 'rgb(50,54,62)', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Bords arrondis {rounded ? '✓' : ''}</button>
            </div>
          </>
        )}

        {err && <div style={{ color: 'rgb(220,38,38)', fontSize: '13px', marginTop: '10px' }}>{err}</div>}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '18px' }}>
          <button onClick={onCancel} style={ghost}>Annuler</button>
          <button onClick={() => url && onInsert({ url, alt, width, rounded })} disabled={!url} style={{ ...dark, opacity: url ? 1 : 0.5 }}>Insérer</button>
        </div>
      </div>
    </div>
  )
}
