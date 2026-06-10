import AdminHeader from '@/components/admin/AdminHeader'

export const dynamic = 'force-dynamic'

export default function AdminPortfolioPlaceholder() {
  return (
    <>
      <AdminHeader />
      <main style={{ maxWidth: '1120px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' }}>Portfolio</h1>
        <p style={{ color: 'rgb(107,114,128)' }}>Éditeur d&apos;albums en cours de construction…</p>
      </main>
    </>
  )
}
