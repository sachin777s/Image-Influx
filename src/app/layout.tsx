import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Image Influx',
  description: 'Image Influx is an web application, used to upload and download images for commercial use.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[var(--bg-primary)]'>
        {children}
      </body>
    </html>
  )
}
