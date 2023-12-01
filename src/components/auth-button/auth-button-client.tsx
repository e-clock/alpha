'use client'
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'
import { type Session } from '@supabase/supabase-js'

import { createBrowserClient } from '@/utils/supabase-client'
import { SITE_URL } from '@/settings'

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
        redirectTo: `${SITE_URL}/auth/callback`
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
            <Button onClick={handleSingOut} >Sing Out</Button>
            )
          : (
            <Button onClick={handleSingIn} >Sing In with Google</Button>
            )
      }
    </>
  )
}
