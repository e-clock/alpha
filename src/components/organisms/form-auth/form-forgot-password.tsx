'use client'

import { useRouter } from 'next/navigation'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import { Button } from '@nextui-org/button'

import { InputEmail } from '../../atoms'
import { SITE_URL } from '@/settings'
import { useNotificationStore } from '@/stores'
import { createBrowserClient } from '@/utils/supabase-client'

export interface IFormForgotPassword {
  email: string
}

export function FormForgotPassword() {
  const router = useRouter()
  const supabase = createBrowserClient()

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      email: ''
    }
  })

  const setNotification = useNotificationStore(state => state.setNotification)

  const onSubmitForgotPassword: SubmitHandler<IFormForgotPassword> = async (data) => {
    const response = await supabase.auth.resetPasswordForEmail(data.email,
      {
        redirectTo: `${SITE_URL}/update-password`
      }
    )
    if (response.error) {
      setNotification('Error', response.error.message, 'error')
      return
    }
    setNotification('Success', 'Check your email for the reset link!', 'success')
    router.push('/')
  }

  return (
    <form className='mt-6 space-y-8' onSubmit={handleSubmit(onSubmitForgotPassword)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => <InputEmail {...field} onValueChange={(value: string) => { setValue('email', value) }} />}
      />

      <div>
        <Button type='submit' color='primary' radius='sm' fullWidth>
          Reset the password
        </Button>
      </div>
    </form>
  )
}
