import { createServerClient } from '@/lib/supabase'
import { AuthButtonClient } from '.'

export async function AuthButton() {
  const supabase = await createServerClient()
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <AuthButtonClient session={session} />
  )
}
