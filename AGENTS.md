<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:sabshots-rules -->
# SabShots Project Rules (priorité absolue)

Ces règles s'appliquent à tout le travail sur ce projet et priment sur les autres conventions de ce fichier.

## Déploiement et versioning
- Le code vit sur GitHub : `https://github.com/musiclyfrance-sys/sabshots` (remote `origin`, branche `master`).
- Toute modification doit être commitée et poussée sur GitHub. On ne laisse jamais de travail uniquement en local.
- Vercel redéploie automatiquement à chaque push sur `master`. Le site de production est `https://sabshots.vercel.app`.
- Le workflow standard après chaque changement est : `git add -A`, puis `git commit`, puis `git push origin master`.

## Règles de rédaction du contenu (copywriting)
- Toujours formuler des phrases complètes. On évite les phrases coupées après deux ou trois mots suivies d'un point.
- Ne jamais utiliser le tiret cadratin. Quand une pause est nécessaire, on le remplace par une virgule.
- Ces règles s'appliquent au contenu du site comme aux textes marketing produits pour ce projet.

## Skills enregistrés pour ce projet
On utilise ces skills selon le besoin au fil de l'avancement :
- `/seo-audit` pour l'audit et l'optimisation SEO.
- `/ui-ux-pro-max` pour le design UI et UX.
- `/copywriting` pour la rédaction du contenu.

## Principes design, copy et SEO (extraits des skills, à appliquer en continu)
Tirés de la lecture complète des skills ui-ux-pro-max, copywriting et seo-review. À garder en tête pour chaque message et chaque action sur le site.

### Design et UX
- Une seule action principale par écran. Sur SabShots, c'est toujours "Book a Session" vers WhatsApp.
- Ne jamais faire dépendre une information du survol seul, car le mobile n'a pas de survol.
- Icônes en SVG, jamais d'emoji. Une seule famille d'icônes, épaisseur de trait cohérente.
- Cibles tactiles d'au moins 44px, contraste du texte d'au moins 4.5:1.
- Animer uniquement transform et opacity, durée 150 à 300ms, respecter prefers-reduced-motion.
- Toujours déclarer les dimensions des images pour éviter les sauts de mise en page.
- Rythme d'espacement par multiples de 4 et 8, marges latérales cohérentes sur tout le site.
- La barre de navigation est fixe, donc le bouton de réservation reste toujours visible, pas besoin de bouton flottant.

### Copywriting
- La clarté prime sur l'esprit, le bénéfice et le résultat priment sur la fonctionnalité.
- Parler la langue du client, une seule idée par section.
- Jamais de chiffre, d'avis ou de garantie inventés.
- Les boutons disent ce que l'utilisateur obtient. Enchaînement fonctionnalité, bénéfice, résultat.

### Photos et images (IMPÉRATIF pour le SEO, demande explicite de Yassir)
- Yassir envoie ses vraies photos petit à petit, par album. Les intégrer à la place des images d'exemple, dans le bon album.
- TOUJOURS renommer chaque fichier photo avec un nom descriptif, en minuscules, mots séparés par des tirets, riche en mots-clés et localisé Paris. Exemple : seance-photo-tour-eiffel-couple-paris.jpg. Jamais de nom générique type IMG_1234.jpg.
- TOUJOURS écrire un texte alternatif (alt) descriptif et riche en mots-clés pour chaque image (sujet, lieu, le mot Paris, et la marque SabShots quand c'est pertinent). Jamais d'alt vide ou générique.
- Toujours déclarer les dimensions (width et height) et servir en format web optimisé (webp ou avif) pour la vitesse.

### SEO et GEO
- Title de 50 à 60 caractères commençant toujours par "SabShots |" suivi des mots-clés, une seule balise H1 par page.
- Meta description de 150 à 160 caractères commençant par un verbe d'action.
- Mot-clé présent dans les 100 premiers mots et dans un H2.
- Définitions de 40 à 60 mots pour viser les extraits optimisés de Google.
- Slugs courts et riches en mots-clés, 3 à 5 liens internes avec ancres descriptives, aucune page orpheline.
<!-- END:sabshots-rules -->

# Website Reverse-Engineer Template

## What This Is
A reusable template for reverse-engineering any website into a clean, modern Next.js codebase using AI coding agents. The Next.js + shadcn/ui + Tailwind v4 base is pre-scaffolded — just run `/clone-website <url1> [<url2> ...]`.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (default — will be replaced/supplemented by extracted SVGs)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Pixel-perfect emulation** — match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation phase** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Project Structure
```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Downloaded images from target site
  videos/           # Downloaded videos from target site
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download scripts
```

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to regenerate the skill for all platforms.

@docs/research/INSPECTION_GUIDE.md
