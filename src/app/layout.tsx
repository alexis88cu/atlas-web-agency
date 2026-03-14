import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Atlas Web Agency | Websites for Local Businesses in Florida',
  description: 'We build professional, fast, and mobile-friendly websites for local businesses in Florida. Starting at $250 setup + $14.99/month. No hidden fees.',
  keywords: 'web design florida, small business website, affordable website, local business website florida',
  openGraph: {
    title: 'Atlas Web Agency',
    description: 'Professional websites for local businesses. $250 setup + $14.99/month.',
    url: 'https://atlaswebagency.net',
    siteName: 'Atlas Web Agency',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0B1120] text-white antialiased">{children}</body>
    </html>
  )
}
