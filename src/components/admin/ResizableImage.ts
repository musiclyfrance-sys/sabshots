// Image node with adjustable width + rounded corners, baked into the saved HTML
// so the public article renders exactly what the photographer set.
import { Image as TiptapImage } from '@tiptap/extension-image'
import { mergeAttributes } from '@tiptap/core'

export const ResizableImage = TiptapImage.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: '100%',
        parseHTML: (el) => (el as HTMLElement).style.width || '100%',
        renderHTML: () => ({}),
      },
      rounded: {
        default: true,
        parseHTML: (el) => !!(el as HTMLElement).style.borderRadius,
        renderHTML: () => ({}),
      },
      align: {
        default: 'center',
        parseHTML: (el) => (el as HTMLElement).style.marginLeft === 'auto' ? 'center' : 'left',
        renderHTML: () => ({}),
      },
    }
  },
  renderHTML({ HTMLAttributes, node }) {
    const width = node.attrs.width || '100%'
    const rounded = node.attrs.rounded
    const align = node.attrs.align
    const style = `display:block;width:${width};height:auto;${rounded ? 'border-radius:16px;' : ''}${align === 'center' ? 'margin-left:auto;margin-right:auto;' : ''}`
    return ['img', mergeAttributes(HTMLAttributes, { style })]
  },
})
