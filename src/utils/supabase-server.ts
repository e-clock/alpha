import { cookies } from 'next/headers'
import { createServerClient as createSC } from '@supabase/ssr'

import { SUPABASEKEY, SUPABASEURL } from '@/settings'

export function createServerClient() {
  const cookieStore = cookies()

  return createSC(
    SUPABASEURL,
    SUPABASEKEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        }
      }
    }
  )
}
