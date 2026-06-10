// Rule-based SEO coach. Analyzes the article fields + body HTML and returns a
// score plus a checklist of concrete tips. No external API.
import { stripHtml, wordCount } from './markdown'

export type SeoStatus = 'ok' | 'warn' | 'fail'
export interface SeoCheck {
  id: string
  label: string
  status: SeoStatus
  tip: string
}
export interface SeoReport {
  score: number
  checks: SeoCheck[]
}

export interface SeoInput {
  title: string
  excerpt: string
  metaDescription?: string
  keyword?: string
  slug: string
  bodyHtml: string
}

export function analyzeSeo(input: SeoInput): SeoReport {
  const text = stripHtml(input.bodyHtml)
  const words = wordCount(text)
  const kw = (input.keyword || '').trim().toLowerCase()
  const titleFull = `SabShots | ${input.title}`.trim()
  const h2s = (input.bodyHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || []).map((h) => stripHtml(h).toLowerCase())
  const first100 = text.split(/\s+/).slice(0, 100).join(' ').toLowerCase()
  const imgs = input.bodyHtml.match(/<img[^>]*>/gi) || []
  const imgsNoAlt = imgs.filter((t) => !/alt\s*=\s*["'][^"']+["']/i.test(t))
  const internalLinks = (input.bodyHtml.match(/href=["']\/(portfolio|blog|about)/gi) || []).length
  const meta = (input.metaDescription || input.excerpt || '').trim()

  const checks: SeoCheck[] = []
  const add = (id: string, label: string, ok: boolean, okTip: string, badTip: string, softWarn = false) =>
    checks.push({ id, label, status: ok ? 'ok' : softWarn ? 'warn' : 'fail', tip: ok ? okTip : badTip })

  add('title', `Titre complet 50-60 caractères`, titleFull.length >= 48 && titleFull.length <= 62,
    `Bon (${titleFull.length} car.)`, `Le titre complet « ${titleFull} » fait ${titleFull.length} caractères. Vise 50-60 (le titre d'article ~38-48).`, titleFull.length > 0)

  add('keyword', `Mot-clé principal défini`, !!kw,
    'Défini', 'Choisis un mot-clé principal (ex. « séance photo Tour Eiffel ») pour cibler une recherche.')

  if (kw) {
    add('kw-title', 'Mot-clé dans le titre', input.title.toLowerCase().includes(kw),
      'Présent', 'Ajoute le mot-clé dans le titre de l’article.')
    add('kw-intro', 'Mot-clé dans les 100 premiers mots', first100.includes(kw),
      'Présent', 'Place le mot-clé dès le premier paragraphe.')
    add('kw-h2', 'Mot-clé dans un sous-titre (H2)', h2s.some((h) => h.includes(kw)),
      'Présent', 'Mets le mot-clé dans au moins un sous-titre H2.', true)
  }

  add('meta-len', 'Meta description 150-160 caractères', meta.length >= 120 && meta.length <= 165,
    `Bon (${meta.length} car.)`, `La meta description fait ${meta.length} caractères. Vise 150-160.`, meta.length > 0)
  add('meta-verb', 'Meta commence par un verbe d’action',
    /^(découvre|découvrez|réserve|réservez|apprends|apprenez|explore|explorez|book|discover|plan|learn|capture|trouve|choisis|prépare|planifie)/i.test(meta),
    'Bon', 'Commence la meta par un verbe d’action (Découvre, Réserve, Planifie…).', true)

  add('h2', 'Au moins un sous-titre (H2)', h2s.length >= 1, `${h2s.length} H2`, 'Ajoute des sous-titres H2 pour structurer l’article.')
  add('words', 'Longueur suffisante (300+ mots)', words >= 300, `${words} mots`, `Seulement ${words} mots. Vise 300+ (600+ pour un vrai guide).`, words >= 150)
  add('img-alt', 'Toutes les images ont un texte alt', imgsNoAlt.length === 0,
    imgs.length ? `${imgs.length} image(s) OK` : 'Aucune image', `${imgsNoAlt.length} image(s) sans alt. Ajoute un alt descriptif.`)
  add('internal', 'Liens internes (1 minimum)', internalLinks >= 1, `${internalLinks} lien(s)`,
    'Ajoute un lien vers un album (/portfolio/...) ou un autre article.', true)
  add('slug', 'Slug court avec mot-clé', input.slug.length > 0 && input.slug.length <= 60 && (!kw || input.slug.includes(kw.replace(/\s+/g, '-'))),
    'Bon', 'Garde un slug court et inclus-y le mot-clé.', true)

  const weight = (s: SeoStatus) => (s === 'ok' ? 1 : s === 'warn' ? 0.5 : 0)
  const score = checks.length ? Math.round((checks.reduce((a, c) => a + weight(c.status), 0) / checks.length) * 100) : 0
  return { score, checks }
}
