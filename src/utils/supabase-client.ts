import { createBrowserClient as createBC } from '@supabase/ssr'

import { SUPABASEKEY, SUPABASEURL } from '@/settings'

export function createBrowserClient() {
  return createBC(SUPABASEURL, SUPABASEKEY)
}
