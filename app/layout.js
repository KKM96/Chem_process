import { Inter } from 'next/font/google'
import '../public/css/globals.css'
import Link from 'next/link'
import Nav from './Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body classNameName={inter.classNameName}>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
