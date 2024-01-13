import { createBrowserClient as createBC } from '@supabase/ssr'

import { SUPABASE_KEY, SUPABASE_URL } from '@/settings'

export function createBrowserClient() {
  return createBC(SUPABASE_URL, SUPABASE_KEY)
}
