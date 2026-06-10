import { createClient } from '@supabase/supabase-js'
let url = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim()
try { url = new URL(url).origin } catch {}
const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) { console.log('MISSING_ENV'); process.exit(1) }
console.log('normalized url:', url)
const sb = createClient(url, key, { auth: { persistSession: false } })
try {
  const g = await sb.storage.getBucket('sabshots')
  if (!g.data) {
    const c = await sb.storage.createBucket('sabshots', { public: true, fileSizeLimit: '20MB' })
    console.log('createBucket:', c.error ? 'ERROR ' + c.error.message : 'ok')
  } else console.log('bucket: exists')
  const up = await sb.storage.from('sabshots').upload('_healthcheck.json', new Blob([JSON.stringify({ ok: true })], { type: 'application/json' }), { upsert: true, contentType: 'application/json', cacheControl: '0' })
  console.log('upload:', up.error ? 'ERROR ' + up.error.message : 'ok')
  const dl = await sb.storage.from('sabshots').download('_healthcheck.json')
  console.log('download:', dl.error ? 'ERROR ' + dl.error.message : 'ok ' + (await dl.data.text()))
  await sb.storage.from('sabshots').remove(['_healthcheck.json'])
  if (!up.error && !dl.error) console.log('SUPABASE_OK')
} catch (e) { console.log('EXCEPTION', e.message) }
