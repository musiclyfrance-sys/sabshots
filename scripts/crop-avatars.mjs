import sharp from 'sharp'
const A = "/Users/yassirsabounji/Desktop/Claude code/SabShots/ai-website-cloner-template/public/assets/"
const crops = [
  { n: 1, file: A + 'paris-showcase-03.jpg', left: 570, top: 300, size: 360 },
  { n: 2, file: A + 'paris-portrait-photoshoot.jpg', left: 40, top: 30, size: 300 },
  { n: 3, file: A + 'paris-eiffel-tower-photoshoot-03.jpg', left: 530, top: 295, size: 380 },
  { n: 4, file: A + 'paris-couple-photoshoot-01.jpg', left: 440, top: 60, size: 620 },
  { n: 5, file: A + 'paris-instagrammable-photoshoot-05.jpg', left: 520, top: 320, size: 420 },
  { n: 6, file: A + 'paris-street-lifestyle-photoshoot-06.jpg', left: 540, top: 380, size: 360 },
]
for (const c of crops) {
  try {
    const meta = await sharp(c.file).metadata()
    const left = Math.max(0, Math.min(c.left, (meta.width || 0) - 1))
    const top = Math.max(0, Math.min(c.top, (meta.height || 0) - 1))
    const size = Math.min(c.size, (meta.width || 0) - left, (meta.height || 0) - top)
    await sharp(c.file).extract({ left, top, width: size, height: size }).resize(220, 220, { fit: 'cover' }).jpeg({ quality: 88, progressive: true }).toFile(A + 'testimonial-' + c.n + '.jpg')
    console.log('OK testimonial-' + c.n + '.jpg  (' + size + 'px sq from ' + c.file.split('/').pop() + ')')
  } catch (e) { console.log('FAIL testimonial-' + c.n + ': ' + e.message) }
}
