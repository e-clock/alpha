'use client'

import { useRouter } from 'next/navigation'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import { Button } from '@nextui-org/button'

import { InputPassword } from '../../atoms'
import { useNotificationStore } from '@/stores'
import { createBrowserClient } from '@/lib/supabase'

export interface IFormUpdatePassword {
  password: string
}

export function FormUpdatePassword() {
  const router = useRouter()
  const supabase = createBrowserClient()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: ''
    }
  })

  const setNotification = useNotificationStore(state => state.setNotification)

  const onSubmitUpdatePassword: SubmitHandler<IFormUpdatePassword> = async (data) => {
    const response = await supabase.auth.updateUser({ ...data })
    if (response.error) {
      setNotification('Error', response.error.message, 'error')
      return
    }
    setNotification('Success', 'Password updated successfully', 'success')
    router.push('/dashboard')
  }

  return (
    <form className='mt-6 space-y-8' onSubmit={handleSubmit(onSubmitUpdatePassword)}>
      <Controller
        name="password"
        control={control}
        render={({ field }) => <InputPassword className='mt-10' {...field} />}
      />

      <div>
        <Button type='submit' color='primary' radius='sm' fullWidth>
          Update
        </Button>
      </div>
    </form>
  )
}
