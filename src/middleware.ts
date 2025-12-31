import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Redirect root to /mengundang/Terhormat
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/mengundang/Terhormat', request.url))
  }

  // Redirect /mengundang to /mengundang/Terhormat
  if (pathname === '/mengundang' || pathname === '/mengundang/') {
    return NextResponse.redirect(new URL('/mengundang/Terhormat', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/mengundang', '/mengundang/'],
}
