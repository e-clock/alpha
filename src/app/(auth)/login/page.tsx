import { AuthHeader } from '@/components/molecules'
import { FormLogin } from '@/components/organisms'

export default function LoginPage () {
  return (
        <>
            <AuthHeader title='Login to your account' />
            <FormLogin />
        </>
  )
}
