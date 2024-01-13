'use server'

import { cookies } from 'next/headers'
import { createServerClient as createSC } from '@supabase/ssr'

import { SUPABASE_KEY, SUPABASE_URL } from '@/settings'

export async function createServerClient() {
  const cookieStore = cookies()

  return createSC(
    SUPABASE_URL,
    SUPABASE_KEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        }
      }
    }
  )
}
