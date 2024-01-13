import { AuthHeader } from '@/components/molecules'
import { FormUpdatePassword } from '@/components/organisms'

export default function LoginPage () {
  return (
        <>
            <AuthHeader title='Update password' />
            <FormUpdatePassword />
        </>
  )
}
