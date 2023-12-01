import { createServerClient } from '@/utils/supabase-server'
import { AuthButtonClient } from '.'

export async function AuthButton() {
  const supabase = createServerClient()
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <AuthButtonClient session={session} />
  )
}
