'use client'

import { useEditor, EditorContent, type Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TextStyle, Color } from '@tiptap/extension-text-style'
import { Placeholder } from '@tiptap/extension-placeholder'
import { useState } from 'react'
import { ResizableImage } from './ResizableImage'
import ColorPopover from './ColorPopover'
import LinkModal from './LinkModal'
import ImageModal, { type ImageInsert } from './ImageModal'

const SIZES = [
  { label: 'Petite', value: '40%' },
  { label: 'Moyenne', value: '66%' },
  { label: 'Grande', value: '100%' },
]

function Btn({ active, onClick, title, children }: { active?: boolean; onClick: () => void; title: string; children: React.ReactNode }) {
  return (
    <button type="button" title={title} onMouseDown={(e) => e.preventDefault()} onClick={onClick}
      style={{ minWidth: '32px', height: '32px', padding: '0 8px', borderRadius: '8px', border: '1px solid ' + (active ? 'rgb(17,17,19)' : 'rgb(228,230,236)'), background: active ? 'rgb(17,17,19)' : 'white', color: active ? 'white' : 'rgb(50,54,62)', fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </button>
  )
}

export default function TiptapEditor({ valueHtml, onChange, folder }: { valueHtml: string; onChange: (html: string) => void; folder: string }) {
  const [colorOpen, setColorOpen] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)
  const [linkOpen, setLinkOpen] = useState(false)
  const [linkInit, setLinkInit] = useState<{ url: string; text: string; newTab: boolean; hasLink: boolean }>({ url: '', text: '', newTab: true, hasLink: false })

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] }, link: { openOnClick: false, HTMLAttributes: { rel: 'noopener' } } }),
      TextStyle,
      Color,
      ResizableImage,
      Placeholder.configure({ placeholder: 'Écris ton article ici…' }),
    ],
    content: valueHtml || '',
    onUpdate: ({ editor }: { editor: Editor }) => onChange(editor.getHTML()),
  })

  if (!editor) return <div style={{ minHeight: '360px', background: 'white', borderRadius: '14px' }} />

  function openLink() {
    if (!editor) return
    const { from, to } = editor.state.selection
    const text = editor.state.doc.textBetween(from, to, ' ')
    const attrs = editor.getAttributes('link')
    setLinkInit({ url: (attrs.href as string) || '', text, newTab: attrs.target ? attrs.target === '_blank' : true, hasLink: editor.isActive('link') })
    setLinkOpen(true)
  }
  function saveLink(url: string, newTab: boolean) {
    if (!editor) return
    const { from, to } = editor.state.selection
    if (from === to && !editor.isActive('link')) {
      editor.chain().focus().insertContent(`<a href="${url}"${newTab ? ' target="_blank" rel="noopener"' : ''}>${url}</a> `).run()
    } else {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url, target: newTab ? '_blank' : null }).run()
    }
    setLinkOpen(false)
  }
  function removeLink() {
    editor?.chain().focus().extendMarkRange('link').unsetLink().run()
    setLinkOpen(false)
  }
  function insertImage(img: ImageInsert) {
    const alt = img.alt.replace(/"/g, '&quot;')
    const radius = img.rounded ? 'border-radius:16px;' : ''
    editor?.chain().focus().insertContent(`<img src="${img.url}" alt="${alt}" style="display:block;width:${img.width};height:auto;${radius}margin-left:auto;margin-right:auto;">`).run()
    setImageOpen(false)
  }

  const imgActive = editor.isActive('image')
  const imgAttrs = editor.getAttributes('image')

  return (
    <div style={{ background: 'white', border: '1px solid rgb(232,234,239)', borderRadius: '14px', overflow: 'hidden' }}>
      {/* Toolbar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', padding: '10px', borderBottom: '1px solid rgb(236,238,242)', background: 'white', alignItems: 'center' }}>
        <Btn title="Gras" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></Btn>
        <Btn title="Italique" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></Btn>
        <Btn title="Sous-titre" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Btn>
        <Btn title="Sous-sous-titre" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Btn>
        <Btn title="Liste à puces" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>•</Btn>
        <Btn title="Liste numérotée" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1.</Btn>
        <Btn title="Citation" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>&ldquo;</Btn>
        <Btn title="Lien" active={editor.isActive('link')} onClick={openLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
        </Btn>
        <span style={{ width: '1px', alignSelf: 'stretch', background: 'rgb(228,230,236)', margin: '0 4px' }} />
        {/* Color with popover */}
        <span style={{ position: 'relative', display: 'inline-flex' }}>
          <Btn title="Couleur du texte" active={colorOpen} onClick={() => setColorOpen((o) => !o)}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontWeight: 700 }}>A</span>
              <span style={{ width: '12px', height: '4px', borderRadius: '2px', background: (editor.getAttributes('textStyle').color as string) || '#111113' }} />
            </span>
          </Btn>
          {colorOpen && (
            <ColorPopover current={editor.getAttributes('textStyle').color as string} onColor={(hex) => editor.chain().focus().setColor(hex).run()} onClose={() => setColorOpen(false)} />
          )}
        </span>
        <Btn title="Couleur par défaut" onClick={() => editor.chain().focus().unsetColor().run()}>A̲</Btn>
        <span style={{ width: '1px', alignSelf: 'stretch', background: 'rgb(228,230,236)', margin: '0 4px' }} />
        <Btn title="Insérer une image" onClick={() => setImageOpen(true)}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '0 2px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></svg>
            Image
          </span>
        </Btn>
      </div>

      {/* Contextual image controls */}
      {imgActive && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center', padding: '8px 10px', borderBottom: '1px solid rgb(236,238,242)', background: 'rgb(248,249,251)' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'rgb(80,84,92)' }}>Image sélectionnée :</span>
          {SIZES.map((s) => (
            <Btn key={s.value} title={s.label} active={imgAttrs.width === s.value} onClick={() => editor.chain().focus().updateAttributes('image', { width: s.value }).run()}>{s.label}</Btn>
          ))}
          <Btn title="Bords arrondis" active={!!imgAttrs.rounded} onClick={() => editor.chain().focus().updateAttributes('image', { rounded: !imgAttrs.rounded }).run()}>Arrondi</Btn>
          <Btn title="Supprimer l'image" onClick={() => editor.chain().focus().deleteSelection().run()}>Supprimer</Btn>
        </div>
      )}

      <div style={{ maxHeight: '62vh', overflowY: 'auto' }}>
        <EditorContent editor={editor} className="editor-content" />
      </div>

      {linkOpen && (
        <LinkModal initialUrl={linkInit.url} selectedText={linkInit.text} initialNewTab={linkInit.newTab} hasLink={linkInit.hasLink} onCancel={() => setLinkOpen(false)} onSave={saveLink} onRemove={removeLink} />
      )}
      {imageOpen && <ImageModal folder={folder} onCancel={() => setImageOpen(false)} onInsert={insertImage} />}
    </div>
  )
}
