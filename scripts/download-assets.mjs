import https from 'node:https'
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { URL as NodeURL } from 'node:url'

const PROJECT = '/Users/yassirsabounji/Desktop/Claude code/SabShots/ai-website-cloner-template'

const assets = [
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971932ba37e8c8b3dc8c1bf_Sections.png",
    "localPath": "public/assets/background-sections.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69742c6f33cfc60ce0c4501e_logo%20(1).png",
    "localPath": "public/assets/logo.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69748565c7ef768b4d03796a_logo%20(2).png",
    "localPath": "public/favicon.png",
    "type": "favicon"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69718ad08fb0fbc691ee5572_Image%20Container.png",
    "localPath": "public/assets/hero-image.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ecf7_Portrait%20of%20Young%20Man.avif",
    "localPath": "public/assets/portrait-1.avif",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ed38_Close-Up%20Portrait.avif",
    "localPath": "public/assets/portrait-2.avif",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ed0e_Portrait%20of%20Young%20Man%20(1).avif",
    "localPath": "public/assets/portrait-3.avif",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ed1a_Confident%20Young%20Man.avif",
    "localPath": "public/assets/portrait-4.avif",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69744892b004248019907e3b_Modern%20Villa%20Serenity.png",
    "localPath": "public/assets/portfolio-1.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69743066ebbab186ad41c48d_Sun.png",
    "localPath": "public/assets/portfolio-2.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747bc4479da39d61be602b_Modern%20Speaker%20Interaction.png",
    "localPath": "public/assets/portfolio-3.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747c0cfce8ee90c4533f54_Serene%20Floral%20Contemplation.png",
    "localPath": "public/assets/portfolio-4.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747c3527afa05fd6db2a81_Abstract%20Portrait%20Art.png",
    "localPath": "public/assets/portfolio-5.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747c89c1bb8c1db487c71d_Elegant%20Hands%20with%20Gradient%20Object.png",
    "localPath": "public/assets/portfolio-6.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/6972e27547c5431766f0c0b7_Dynamic%20Black-and-White%20Portrait%20(2).jpeg",
    "localPath": "public/assets/testimonial-1.jpg",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/6972e2834dd72f7af8f14c51_Dynamic%20Black-and-White%20Portrait%20(1).jpeg",
    "localPath": "public/assets/testimonial-2.jpg",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/6972e291e629715f463dfced_Black%20and%20White%20Portrait.jpeg",
    "localPath": "public/assets/testimonial-3.jpg",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/6972e29e62269dd99630a45f_Dynamic%20Black-and-White%20Portrait.jpeg",
    "localPath": "public/assets/testimonial-4.jpg",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/6972e2ac8c12a332fcb0f898_Blurred%20Portrait%20Art.jpeg",
    "localPath": "public/assets/testimonial-5.jpg",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/6972e2b9aaff2b29e8d16b0c_Dynamic%20Afro%20Portrait.jpeg",
    "localPath": "public/assets/testimonial-6.jpg",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69747a47b721007275ed868b_3156805-sd_960_540_30fps_mp4.mp4",
    "localPath": "public/assets/cta-video.mp4",
    "type": "video"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747ab3beb70ea081e03c0c_Serene%20Floral%20Embrace.png",
    "localPath": "public/assets/blog-1.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747ae944723a30fb674907_Modern%20Camera%20Close-Up.png",
    "localPath": "public/assets/blog-2.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea56/69747afb3923a91a4920e962_ChatGPT%20Image%20Dec%2022%2C%202025%2C%2010_29_55%20AM.png",
    "localPath": "public/assets/blog-3.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ef29_material-symbols--camera-outline.png",
    "localPath": "public/assets/icon-camera.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971de4316aab6ce86e4b8bb_ic--round-star%20(1).png",
    "localPath": "public/assets/icon-star-filled.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6972de0f561903461d046d23_material-symbols--verified-rounded.png",
    "localPath": "public/assets/icon-verified.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8eed6_gg--add%20(1).png",
    "localPath": "public/assets/icon-plus.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ee6f_mynaui--arrow-up-right%20(2).png",
    "localPath": "public/assets/icon-arrow-up-right.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6972dd06d8e5466789b9c683_oui--quote.png",
    "localPath": "public/assets/icon-quote.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/6971a0ebaee84e5e2d99b5d3_Image%20Card.png",
    "localPath": "public/assets/expertise-image.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697188003e8e3143dfd8ef2f_material-symbols--camera-outline%20(1).png",
    "localPath": "public/assets/icon-camera-hero.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69748603e6f7b5a73ca8438a_Serene%20Tree%20Landscape.png",
    "localPath": "public/assets/showcase-1.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/69719f24d0a24c23b1ab1669_Sun.png",
    "localPath": "public/assets/showcase-2.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697477f2d50cc16bbbe95406_Majestic%20Mountain%20Peak.png",
    "localPath": "public/assets/showcase-3.png",
    "type": "image"
  },
  {
    "url": "https://cdn.prod.website-files.com/697188003e8e3143dfd8ea51/697477f26ee88f4dce384ede_Ethereal%20Landscape%20with%20Cosmic%20Reflection.png",
    "localPath": "public/assets/showcase-4.png",
    "type": "image"
  }
]

function download(url, dest) {
  return new Promise((resolve) => {
    try {
      const dir = path.dirname(dest)
      fs.mkdirSync(dir, { recursive: true })
      if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
        resolve({ ok: true, skipped: true })
        return
      }
      const file = fs.createWriteStream(dest)
      const parsed = new NodeURL(url)
      const getter = parsed.protocol === 'https:' ? https : http
      const req = getter.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': '*/*' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close()
          try { fs.unlinkSync(dest) } catch(e) {}
          download(res.headers.location, dest).then(resolve)
          return
        }
        if (res.statusCode !== 200) {
          file.close()
          try { fs.unlinkSync(dest) } catch(e) {}
          resolve({ ok: false, status: res.statusCode })
          return
        }
        res.pipe(file)
        file.on('finish', () => { file.close(); resolve({ ok: true }) })
        file.on('error', (e) => { try { fs.unlinkSync(dest) } catch(_) {}; resolve({ ok: false, error: e.message }) })
      })
      req.on('error', (e) => {
        try { file.close(); fs.unlinkSync(dest) } catch(_) {}
        resolve({ ok: false, error: e.message })
      })
      req.setTimeout(15000, () => { req.destroy(); resolve({ ok: false, error: 'timeout' }) })
    } catch(e) {
      resolve({ ok: false, error: e.message })
    }
  })
}

async function run() {
  let ok = 0, skip = 0, fail = 0
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4)
    await Promise.all(batch.map(async (a) => {
      const dest = path.join(PROJECT, a.localPath)
      const r = await download(a.url, dest)
      if (r.skipped) skip++
      else if (r.ok) ok++
      else { fail++; console.warn('FAIL:', a.url, r.error || r.status) }
    }))
    process.stdout.write('.')
  }
  console.log('')
  console.log('Assets: ' + ok + ' downloaded, ' + skip + ' skipped, ' + fail + ' failed')
}

run().catch(console.error)
