import './globals.css'
import { Inter } from 'next/font/google'
import navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Teen Thrives',
  description: 'A platform designed for teenagers to help them with their mental and physical health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <navbar>
        {children}
        </navbar>
        
      </body>
    </html>
  )
}
