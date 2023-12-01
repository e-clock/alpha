'use client'
import { useRouter } from 'next/navigation'
import { type Session } from '@supabase/supabase-js'

import { createBrowserClient } from '@/utils/supabase-client'
import { BASEURL } from '@/settings'

interface Props {
  session: Session | null
}

export function AuthButtonClient({ session }: Props) {
  const router = useRouter()
  const supabase = createBrowserClient()

  const handleSingIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${BASEURL}/auth/callback`
      }
    })
  }

  const handleSingOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      {
        session
          ? (
          <button onClick = { handleSingOut } className="flex items-center justify-center px-4 py-2 space-x-2 bg-white border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-500 hover:bg-gray-50" > Sing Out</button>
            )
          : (
          <button onClick={handleSingIn} className="flex items-center justify-center px-4 py-2 space-x-2 bg-white border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-500 hover:bg-gray-50">Sing In with Google</button>
            )
    }
    </>
  )
}
