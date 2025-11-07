import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Family Diet Plan Viewer',
  description: 'Comprehensive diet plans for the family - powered by markdown',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
