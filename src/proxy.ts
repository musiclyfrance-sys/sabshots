// Next.js 16 "proxy" (formerly middleware). Runs on the Node runtime. Guards the
// admin UI and admin API. Auth is ALSO re-checked inside every admin route/action
// (defense in depth) — never rely on the proxy alone.
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySession, SESSION_COOKIE } from '@/lib/cms/session'

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isLoginPage = pathname === '/admin/login'
  const isLoginApi = pathname === '/api/admin/login'
  const isPublicAdminRoute = isLoginPage || isLoginApi

  const token = request.cookies.get(SESSION_COOKIE)?.value
  const session = await verifySession(token)

  // Already signed in and visiting the login page → go to the dashboard.
  if (session && isLoginPage) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  if (!session && !isPublicAdminRoute) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
    }
    const loginUrl = new URL('/admin/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
