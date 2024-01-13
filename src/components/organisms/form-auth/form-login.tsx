import { AuthSingInButtonClient } from '@/components/atoms'
import { EmailPasswordForm } from '@/components/molecules'

export function FormLogin() {
  return (
    <>
      <EmailPasswordForm />
      <div className="mt-10">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-white px-6 text-gray-900">Or continue with</span>
          </div>
        </div>

        <div className="mt-6">
          <AuthSingInButtonClient />
        </div>
      </div>
    </>
  )
}
