'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'

import { InputEmail, InputPassword } from '../atoms'
import { useNotificationStore } from '@/stores'
import { createBrowserClient } from '@/utils/supabase-client'

export interface IFormLogin {
  email: string
  password: string
}

export function EmailPasswordForm() {
  const router = useRouter()
  const supabase = createBrowserClient()

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const setNotification = useNotificationStore(state => state.setNotification)

  const onSubmitEmailPassword: SubmitHandler<IFormLogin> = async (data) => {
    const response = await supabase.auth.signInWithPassword({ ...data })
    if (response.error) {
      setNotification('Error', response.error.message, 'error')
    }
    router.push('/dashboard')
  }

  return (
    <form className='mt-6 space-y-8' onSubmit={handleSubmit(onSubmitEmailPassword)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => <InputEmail {...field} onValueChange={(value: string) => { setValue('email', value) }} />}
      />

      <div>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <InputPassword className='mt-10' {...field} />}
        />
        <div className='flex items-center justify-end mt-2'>
          <div className='text-sm'>
            <Link href='/forgot-password' className='font-semibold text-focus hover:text-focus/70'>
              Did you forget your password?
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Button type='submit' color='primary' radius='sm' fullWidth>
          Sign in
        </Button>
      </div>
    </form>
  )
}
