import { Html, Head, Main, NextScript } from "next/document";
import AuthProvider from '@/auth/components/AuthProvider'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mood Tracker Main system admin panel',
  description: 'Mood Tracker Main system admin panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  )
}