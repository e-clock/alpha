import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { createServerClient } from '@/utils/supabase-server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = await createServerClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return res
}

export const config = {
  matcher: ['/dashboard/:path*', '/update-password']
}
