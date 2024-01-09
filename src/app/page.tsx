// import { AuthButton } from '@/components/atoms'
// import { createServerClient } from '@/utils/supabase-server'

export default async function Home() {
  // const supabase = await createServerClient()
  // const { data } = await supabase.from('navigation-item').select('*')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='sm:flex sm:flex-col sm:align-center'>
        <h1 className="text-4xl font-extrabold sm:text-center sm:text-6xl">E-clock</h1>
        <p className="max-w-2xl m-auto mt-5 text-xl sm:text-center sm:text-2xl">
          Simplify your time attendance operations with a product modern and user-friendly.
        </p>
      </div>
      {/*
      <AuthButton />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      */}
    </main>
  )
}
