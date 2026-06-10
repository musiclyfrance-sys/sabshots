import Link from 'next/link'
import AdminHeader from '@/components/admin/AdminHeader'
import { getContent } from '@/lib/cms/store'
import { isSupabaseConfigured } from '@/lib/cms/supabase'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const content = await getContent()
  const albumCount = content.albums.length
  const photoCount = content.albums.reduce((n, a) => n + a.photos.length, 0)
  const postCount = content.posts.length
  const configured = isSupabaseConfigured()

  const cardStyle: React.CSSProperties = {
    display: 'block',
    background: 'white',
    border: '1px solid rgb(236,238,242)',
    borderRadius: '20px',
    padding: '28px',
    boxShadow: '0 12px 30px -22px rgba(0,0,0,0.25)',
  }

  return (
    <>
      <AdminHeader />
      <main style={{ maxWidth: '1120px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 6px' }}>
          Bonjour Yassir 👋
        </h1>
        <p style={{ color: 'rgb(107,114,128)', margin: '0 0 32px' }}>
          Gère ton portfolio et tes articles. Chaque enregistrement met le site à jour automatiquement.
        </p>

        {!configured && (
          <div
            style={{
              background: 'rgb(254, 243, 199)',
              border: '1px solid rgb(252, 211, 77)',
              color: 'rgb(120, 53, 15)',
              borderRadius: '14px',
              padding: '14px 18px',
              marginBottom: '24px',
              fontSize: '14px',
            }}
          >
            Le stockage n&apos;est pas encore connecté. Les modifications ne pourront pas être enregistrées.
          </div>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          <Link href="/admin/portfolio" style={cardStyle}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgb(37,211,102)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Portfolio
            </div>
            <div style={{ fontSize: '40px', fontWeight: 700, margin: '10px 0 4px', letterSpacing: '-0.03em' }}>
              {albumCount} <span style={{ fontSize: '18px', fontWeight: 500, color: 'rgb(107,114,128)' }}>albums</span>
            </div>
            <div style={{ color: 'rgb(107,114,128)', fontSize: '14px' }}>{photoCount} photos au total</div>
            <div style={{ marginTop: '18px', fontWeight: 600, fontSize: '14px' }}>Gérer les albums →</div>
          </Link>

          <Link href="/admin/blog" style={cardStyle}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgb(37,211,102)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Articles
            </div>
            <div style={{ fontSize: '40px', fontWeight: 700, margin: '10px 0 4px', letterSpacing: '-0.03em' }}>
              {postCount} <span style={{ fontSize: '18px', fontWeight: 500, color: 'rgb(107,114,128)' }}>articles</span>
            </div>
            <div style={{ color: 'rgb(107,114,128)', fontSize: '14px' }}>Blog optimisé SEO</div>
            <div style={{ marginTop: '18px', fontWeight: 600, fontSize: '14px' }}>Gérer les articles →</div>
          </Link>
        </div>
      </main>
    </>
  )
}
