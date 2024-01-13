'use client'
import { Button } from '@nextui-org/button'

import { createBrowserClient } from '@/lib/supabase'
import { SITE_URL } from '@/settings'

import { GIcon } from '../../icons/g-icon'

export function AuthSingInButtonClient() {
  const supabase = createBrowserClient()

  const handleSingIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${SITE_URL}/auth/callback`
      }
    })
  }

  return (
    <Button onClick={handleSingIn} radius='sm' fullWidth startContent={<GIcon />} className='bg-transparent border-0 shadow-sm ring-1 ring-inset ring-gray-300' >
      Sing In with Google
    </Button>
  )
}
