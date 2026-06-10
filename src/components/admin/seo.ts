// Rule-based SEO coach for blog articles. Inspired by on-page + featured-snippet
// best practices (title/meta/keyword placement, snippet-ready definitions,
// structure, internal linking, technical). Returns a score + actionable tips.
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

const GENERIC_ANCHORS = ['click here', 'here', 'this', 'read more', 'cliquez ici', 'ici', 'lire la suite', 'en savoir plus', 'voir']
const QUESTION_STARTS = /^(what|how|why|when|where|which|who|comment|pourquoi|quand|où|quel|quelle|quels|quelles|est-ce|combien)\b/i
const ACTION_VERB = /^(découvre|découvrez|réserve|réservez|apprends|apprenez|explore|explorez|book|discover|plan|learn|capture|trouve|trouvez|choisis|choisissez|prépare|préparez|planifie|planifiez|réussis|réussissez|obtenez|obtiens)/i

export function analyzeSeo(input: SeoInput): SeoReport {
  const text = stripHtml(input.bodyHtml)
  const lower = text.toLowerCase()
  const words = wordCount(text)
  const kw = (input.keyword || '').trim().toLowerCase()
  const titleLower = input.title.toLowerCase()
  const titleFull = `SabShots | ${input.title}`.trim()
  const h2s = (input.bodyHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || []).map((h) => stripHtml(h))
  const paras = (input.bodyHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || []).map((p) => stripHtml(p)).filter(Boolean)
  const first100 = text.split(/\s+/).slice(0, 100).join(' ').toLowerCase()
  const imgs = input.bodyHtml.match(/<img[^>]*>/gi) || []
  const imgsNoAlt = imgs.filter((t) => !/alt\s*=\s*["'][^"']+["']/i.test(t))
  const anchors = [...input.bodyHtml.matchAll(/<a[^>]*>([\s\S]*?)<\/a>/gi)].map((m) => stripHtml(m[1]).toLowerCase().trim())
  const internalLinks = (input.bodyHtml.match(/href=["']\/(portfolio|blog|about)/gi) || []).length
  const meta = (input.metaDescription || input.excerpt || '').trim()
  const metaLower = meta.toLowerCase()
  const kwCount = kw ? lower.split(kw).length - 1 : 0
  const earlyDef = paras.slice(0, 3).some((p) => { const w = wordCount(p); return w >= 35 && w <= 65 })

  const checks: SeoCheck[] = []
  const add = (id: string, label: string, ok: boolean, okTip: string, badTip: string, softWarn = false) =>
    checks.push({ id, label, status: ok ? 'ok' : softWarn ? 'warn' : 'fail', tip: ok ? okTip : badTip })

  // — Title —
  add('title', 'Titre complet 50-60 caractères', titleFull.length >= 48 && titleFull.length <= 62,
    `Bon (${titleFull.length} car.)`, `Le titre complet fait ${titleFull.length} caractères. Vise 50-60 (titre d’article ~38-48).`, titleFull.length > 0)

  // — Keyword —
  add('keyword', 'Mot-clé principal défini', !!kw, 'Défini',
    'Choisis un mot-clé principal (ex. « séance photo Tour Eiffel ») pour cibler une recherche précise.')
  if (kw) {
    add('kw-title', 'Mot-clé dans le titre', titleLower.includes(kw), 'Présent', 'Ajoute le mot-clé dans le titre.')
    add('kw-title-front', 'Mot-clé tôt dans le titre', titleLower.includes(kw) && titleLower.indexOf(kw) <= Math.max(1, titleLower.length / 2),
      'Bien placé', 'Place le mot-clé plutôt au début du titre.', true)
    add('kw-meta', 'Mot-clé dans la meta description', metaLower.includes(kw), 'Présent', 'Inclus le mot-clé dans la meta description.', true)
    add('kw-intro', 'Mot-clé dans les 100 premiers mots', first100.includes(kw), 'Présent', 'Place le mot-clé dès le premier paragraphe.')
    add('kw-h2', 'Mot-clé dans un sous-titre (H2)', h2s.some((h) => h.toLowerCase().includes(kw)), 'Présent', 'Mets le mot-clé dans au moins un H2.', true)
    const cap = Math.max(8, Math.round(words / 90))
    add('kw-density', 'Mot-clé ni absent ni sur-utilisé', kwCount >= 2 && kwCount <= cap, `${kwCount} fois`,
      kwCount < 2 ? `Le mot-clé n’apparaît que ${kwCount} fois. Utilise-le 2-3 fois naturellement.` : `Le mot-clé apparaît ${kwCount} fois, c’est trop (bourrage). Allège.`, true)
  }

  // — Meta description —
  add('meta-len', 'Meta description 150-160 caractères', meta.length >= 120 && meta.length <= 165,
    `Bon (${meta.length} car.)`, `La meta fait ${meta.length} caractères. Vise 150-160.`, meta.length > 0)
  add('meta-verb', 'Meta commence par un verbe d’action', ACTION_VERB.test(meta),
    'Bon', 'Commence la meta par un verbe d’action (Découvre, Réserve, Planifie…).', true)

  // — Structure & featured snippets —
  add('h2', 'Au moins 2 sous-titres (H2)', h2s.length >= 2, `${h2s.length} H2`, `${h2s.length} H2. Structure l’article avec au moins 2 sous-titres.`, h2s.length === 1)
  add('snippet-def', 'Définition courte (35-65 mots) tôt', earlyDef, 'Présente',
    'Mets un paragraphe de réponse claire de 35-65 mots au début (idéal pour les extraits Google).', true)
  add('question-h2', 'Un sous-titre sous forme de question', h2s.some((h) => /\?\s*$/.test(h) || QUESTION_STARTS.test(h.trim())),
    'Présent', 'Formule un H2 en question (« Comment… », « Pourquoi… ») pour viser les « questions associées ».', true)
  add('list', 'Au moins une liste à puces', /<(ul|ol)[^>]*>/i.test(input.bodyHtml),
    'Présente', 'Ajoute une liste à puces : c’est très repris par Google et plus lisible.', true)
  add('words', 'Longueur suffisante (600+ mots)', words >= 600, `${words} mots`,
    words >= 300 ? `${words} mots. Vise 600+ pour un vrai guide.` : `Seulement ${words} mots. Vise au moins 300, idéalement 600+.`, words >= 300)
  add('para', 'Paragraphes courts', !paras.some((p) => wordCount(p) > 95), 'Bon',
    'Un paragraphe est très long. Coupe en blocs de 2-4 phrases.', true)
  add('bold', 'Termes importants en gras', /<strong>|<b>/i.test(input.bodyHtml), 'Présent',
    'Mets en gras les termes importants à leur première apparition.', true)

  // — Links & images —
  add('img-alt', 'Toutes les images ont un alt', imgsNoAlt.length === 0,
    imgs.length ? `${imgs.length} image(s) OK` : 'Aucune image', `${imgsNoAlt.length} image(s) sans alt. Décris la scène + Paris.`)
  add('internal', 'Liens internes (2+ recommandés)', internalLinks >= 2, `${internalLinks} lien(s)`,
    internalLinks === 1 ? 'Ajoute un 2e lien interne vers un album ou un article.' : 'Ajoute des liens vers tes albums (/portfolio/...) ou articles.', internalLinks === 1)
  add('anchor', 'Texte des liens descriptif', !anchors.some((a) => GENERIC_ANCHORS.includes(a)),
    'Bon', 'Évite les liens « ici » / « cliquez ici ». Utilise un texte descriptif.', true)

  // — Technical —
  add('slug', 'Slug court avec mot-clé', input.slug.length > 0 && input.slug.length <= 60 && (!kw || input.slug.includes(kw.replace(/\s+/g, '-'))),
    'Bon', 'Garde un slug court (tirets, minuscules) contenant le mot-clé.', true)
  add('h1', 'Pas de H1 dans le corps', !/<h1[^>]*>/i.test(input.bodyHtml), 'Bon',
    'Le titre de la page est déjà le H1. Utilise H2/H3 dans le corps, pas de H1.', true)

  const weight = (s: SeoStatus) => (s === 'ok' ? 1 : s === 'warn' ? 0.5 : 0)
  const score = checks.length ? Math.round((checks.reduce((a, c) => a + weight(c.status), 0) / checks.length) * 100) : 0
  return { score, checks }
}
