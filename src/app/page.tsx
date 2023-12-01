import { AuthButton } from '@/components/auth-button'
import { createServerClient } from '@/utils/supabase-server'

export default async function Home() {
  const supabase = createServerClient()

  const { data } = await supabase.from('navigation-item').select('*')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButton />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
