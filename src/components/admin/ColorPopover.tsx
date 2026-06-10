'use client'

import { useState } from 'react'

const PRESETS = ['#111113', '#7c7c7c', '#25d366', '#c0392b', '#2563eb', '#b8860b', '#9b59b6', '#e67e22']
const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i

export default function ColorPopover({ current, onColor, onClose }: { current?: string; onColor: (hex: string) => void; onClose: () => void }) {
  const [hex, setHex] = useState(current && HEX.test(current) ? current : '#111113')

  function pick(v: string) {
    setHex(v)
    if (HEX.test(v)) onColor(v)
  }

  async function eyedrop() {
    const ED = (window as unknown as { EyeDropper?: new () => { open: () => Promise<{ sRGBHex: string }> } }).EyeDropper
    if (!ED) return
    try {
      const res = await new ED().open()
      pick(res.sRGBHex)
    } catch {
      /* cancelled */
    }
  }

  const hasEyeDropper = typeof window !== 'undefined' && 'EyeDropper' in window

  return (
    <div
      onMouseDown={(e) => e.preventDefault()}
      style={{ position: 'absolute', top: '42px', left: 0, zIndex: 40, background: 'white', border: '1px solid rgb(228,230,236)', borderRadius: '12px', padding: '12px', boxShadow: '0 16px 38px -18px rgba(0,0,0,0.32)', width: '230px' }}
    >
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
        <input type="color" value={HEX.test(hex) ? hex : '#111113'} onChange={(e) => pick(e.target.value)} style={{ width: '38px', height: '34px', border: 'none', background: 'none', cursor: 'pointer', padding: 0 }} />
        <input value={hex} onChange={(e) => pick(e.target.value)} placeholder="#000000" style={{ flex: 1, padding: '8px 9px', borderRadius: '8px', border: '1px solid rgb(224,226,232)', fontSize: '13px', fontFamily: 'monospace', width: '70px' }} />
        {hasEyeDropper && (
          <button type="button" title="Pipette" onClick={eyedrop} style={{ width: '34px', height: '34px', borderRadius: '8px', border: '1px solid rgb(228,230,236)', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(60,64,72)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 0 1 3 3L18 9l.4.4a2.1 2.1 0 0 1 0 3l-1.8 1.8a2.1 2.1 0 0 1-3 0l-3.8-3.8a2.1 2.1 0 0 1 0-3l1.8-1.8a2.1 2.1 0 0 1 3 0Z" /></svg>
          </button>
        )}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {PRESETS.map((c) => (
          <button key={c} type="button" onClick={() => pick(c)} style={{ width: '22px', height: '22px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)', background: c, cursor: 'pointer' }} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <button type="button" onClick={onClose} style={{ fontSize: '12px', color: 'rgb(107,114,128)', background: 'none', border: 'none', cursor: 'pointer' }}>Fermer</button>
      </div>
    </div>
  )
}
