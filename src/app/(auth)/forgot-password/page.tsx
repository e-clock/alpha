import { AuthHeader } from '@/components/molecules'
import { FormForgotPassword } from '@/components/organisms'

export default function LoginPage () {
  return (
        <>
            <AuthHeader title='Forgot your password?' />
            <FormForgotPassword />
        </>
  )
}
