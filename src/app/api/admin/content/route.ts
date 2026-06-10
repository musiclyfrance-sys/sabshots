import { revalidatePath } from 'next/cache'
import { getContent, saveContent } from '@/lib/cms/store'
import { isAdmin } from '@/lib/cms/require-admin'
import type { CmsContent } from '@/lib/cms/types'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await isAdmin())) return Response.json({ error: 'unauthorized' }, { status: 401 })
  return Response.json(await getContent())
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) return Response.json({ error: 'unauthorized' }, { status: 401 })

  let content: CmsContent
  try {
    content = await request.json()
  } catch {
    return Response.json({ error: 'JSON invalide' }, { status: 400 })
  }
  if (!content || !Array.isArray(content.albums) || !Array.isArray(content.posts)) {
    return Response.json({ error: 'Contenu invalide' }, { status: 400 })
  }

  try {
    await saveContent(content)
  } catch (e) {
    return Response.json({ error: (e as Error).message }, { status: 500 })
  }

  // Refresh the public pages that read this content.
  for (const path of ['/', '/portfolio', '/blog', '/sitemap.xml']) revalidatePath(path)
  revalidatePath('/portfolio/[slug]', 'page')
  revalidatePath('/blog/[slug]', 'page')

  return Response.json({ ok: true })
}
