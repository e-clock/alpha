export default function AuthLayout ({ children }: { children: React.ReactNode }) {
  return (
        <div className='min-h-full grid place-items-center'>
            <div className='bg-content1 shadow-sm rounded-md boder px-6 py-12 lg:px-8 w-full sm:max-w-sm'>
                {children}
            </div>
        </div>
  )
}
