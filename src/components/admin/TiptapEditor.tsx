'use client'

import { useEditor, EditorContent, type Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Image as TiptapImage } from '@tiptap/extension-image'
import { TextStyle, Color } from '@tiptap/extension-text-style'
import { Placeholder } from '@tiptap/extension-placeholder'
import { useRef, useState } from 'react'
import { uploadImage } from './upload-image'

const COLORS = ['#111113', '#25d366', '#c0392b', '#2563eb', '#b8860b']

function Btn({ active, onClick, title, children }: { active?: boolean; onClick: () => void; title: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      style={{
        minWidth: '32px', height: '32px', padding: '0 8px', borderRadius: '8px',
        border: '1px solid ' + (active ? 'rgb(17,17,19)' : 'rgb(228,230,236)'),
        background: active ? 'rgb(17,17,19)' : 'white', color: active ? 'white' : 'rgb(50,54,62)',
        fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {children}
    </button>
  )
}

export default function TiptapEditor({
  valueHtml, onChange, folder,
}: {
  valueHtml: string
  onChange: (html: string) => void
  folder: string
}) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        link: { openOnClick: false, HTMLAttributes: { rel: 'noopener', target: '_blank' } },
      }),
      TextStyle,
      Color,
      TiptapImage,
      Placeholder.configure({ placeholder: 'Écris ton article ici…' }),
    ],
    content: valueHtml || '',
    onUpdate: ({ editor }: { editor: Editor }) => onChange(editor.getHTML()),
  })

  if (!editor) return <div style={{ minHeight: '320px', background: 'white', borderRadius: '14px' }} />

  function setLink() {
    if (!editor) return
    const prev = (editor.getAttributes('link').href as string) || ''
    const url = window.prompt('URL du lien (vide pour retirer). Astuce SEO : lie un album, ex. /portfolio/eiffel-tower', prev)
    if (url === null) return
    if (url === '') editor.chain().focus().extendMarkRange('link').unsetLink().run()
    else editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }

  async function onImageFile(files: FileList | null) {
    if (!files || !files[0] || !editor) return
    setUploading(true)
    try {
      const res = await uploadImage(files[0], folder)
      const alt = window.prompt('Texte alt de l’image (décris la scène + Paris, pour le SEO)', '') || ''
      editor.chain().focus().setImage({ src: res.url, alt }).run()
    } catch (e) {
      alert((e as Error).message)
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <div style={{ background: 'white', border: '1px solid rgb(232,234,239)', borderRadius: '14px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', padding: '10px', borderBottom: '1px solid rgb(236,238,242)', position: 'sticky', top: '60px', background: 'white', zIndex: 5 }}>
        <Btn title="Gras" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></Btn>
        <Btn title="Italique" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></Btn>
        <Btn title="Sous-titre" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Btn>
        <Btn title="Sous-sous-titre" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Btn>
        <Btn title="Liste à puces" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>•</Btn>
        <Btn title="Liste numérotée" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1.</Btn>
        <Btn title="Citation" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>&ldquo;</Btn>
        <Btn title="Lien" active={editor.isActive('link')} onClick={setLink}>🔗</Btn>
        <span style={{ width: '1px', background: 'rgb(228,230,236)', margin: '2px 4px' }} />
        {COLORS.map((c) => (
          <button key={c} type="button" title="Couleur" onMouseDown={(e) => e.preventDefault()} onClick={() => editor.chain().focus().setColor(c).run()} style={{ width: '24px', height: '32px', borderRadius: '8px', border: '1px solid rgb(228,230,236)', background: c, cursor: 'pointer' }} />
        ))}
        <Btn title="Couleur par défaut" onClick={() => editor.chain().focus().unsetColor().run()}>A</Btn>
        <span style={{ width: '1px', background: 'rgb(228,230,236)', margin: '2px 4px' }} />
        <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => onImageFile(e.target.files)} />
        <Btn title="Insérer une image" onClick={() => fileRef.current?.click()}>{uploading ? '…' : '🖼 Image'}</Btn>
      </div>
      <EditorContent editor={editor} className="editor-content" />
    </div>
  )
}
