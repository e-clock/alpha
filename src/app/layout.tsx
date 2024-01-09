import clsx from 'clsx'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

import { Providers } from '@/context/providers'

import './globals.css'

import { Notification } from '@/components/atoms'

const ubuntu = Ubuntu({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-clock',
  description: 'Application for attendance and time management'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full">
      <body className={clsx(ubuntu.className, 'h-full text-foreground bg-background')}>
        <Providers>
          {children}
          <Notification />
        </Providers>
      </body>
    </html>
  )
}
