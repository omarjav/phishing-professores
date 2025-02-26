import { NextRequest, NextResponse } from 'next/server'

import { cookies } from 'next/headers'
import { COOKIES_NAME } from './utils/constants/cookies'
 
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/']
 
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  const token = (await cookies()).get(COOKIES_NAME.token)?.value
 
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }
 
  if (
    isPublicRoute &&
    token &&
    !req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}