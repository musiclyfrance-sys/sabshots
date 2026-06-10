// Convert the legacy markdown subset (## / ### headings, paragraphs, [text](url)
// links, **bold**) into HTML so it can be loaded into the rich-text editor. New
// posts are HTML from the start.
function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
function inline(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, t, u) => `<a href="${u}">${t}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

export function markdownToHtml(md: string): string {
  const blocks = md.split(/\n\n+/).map((b) => b.trim()).filter(Boolean)
  return blocks
    .map((b) => {
      if (b.startsWith('### ')) return `<h3>${inline(esc(b.slice(4)))}</h3>`
      if (b.startsWith('## ')) return `<h2>${inline(esc(b.slice(3)))}</h2>`
      return `<p>${inline(esc(b))}</p>`
    })
    .join('')
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length
}
