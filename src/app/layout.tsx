import type { Metadata } from 'next'
import { Poppins, Rubik } from 'next/font/google'
import './globals.css'
import { Header } from '@/ui/header'
import { Footer } from '@/ui/footer'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Brainwave.io - Premium AirPods',
  description: 'Sound, that sounds better! Get your premium AirPods with unique designs and better sound quality.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
