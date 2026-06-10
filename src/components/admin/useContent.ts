'use client'

import { useCallback, useEffect, useState } from 'react'
import type { CmsContent } from '@/lib/cms/types'

// Loads the CMS content into the admin UI and saves it back. A single source of
// truth: the whole content document is fetched, edited in state, and PUT back.
export function useContent() {
  const [content, setContent] = useState<CmsContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let alive = true
    fetch('/api/admin/content')
      .then((r) => {
        if (!r.ok) throw new Error('Chargement impossible')
        return r.json()
      })
      .then((d: CmsContent) => {
        if (alive) {
          setContent(d)
          setLoading(false)
        }
      })
      .catch(() => {
        if (alive) {
          setError('Chargement impossible')
          setLoading(false)
        }
      })
    return () => {
      alive = false
    }
  }, [])

  const save = useCallback(async (next: CmsContent): Promise<boolean> => {
    setSaving(true)
    setError('')
    try {
      const r = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(next),
      })
      if (!r.ok) {
        const d = await r.json().catch(() => ({}))
        throw new Error(d.error || 'Enregistrement impossible')
      }
      setContent(next)
      return true
    } catch (e) {
      setError((e as Error).message)
      return false
    } finally {
      setSaving(false)
    }
  }, [])

  return { content, setContent, loading, saving, error, save }
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}
