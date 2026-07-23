import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ameni-azouz.vercel.app'),
  title: {
    default: 'Ameni Azouz — Junior Cybersecurity Engineer | Ingénieure Cybersécurité',
    template: '%s | Ameni Azouz',
  },
  description:
    'Portfolio of Ameni Azouz — final-year cybersecurity engineering student. Cloud Security, DevSecOps, Application Security & Penetration Testing. Seeking a graduation internship in France starting January 2027. Portfolio bilingue FR/EN.',
  keywords: [
    'cybersecurity',
    'cybersécurité',
    'cloud security',
    'devsecops',
    'application security',
    'penetration testing',
    'pentest',
    'stage cybersécurité',
    'internship France',
    'Ameni Azouz',
  ],
  authors: [{ name: 'Ameni Azouz' }],
  openGraph: {
    title: 'Ameni Azouz — Junior Cybersecurity Engineer',
    description:
      'Cloud Security · DevSecOps · Application Security · Penetration Testing. Bilingual FR/EN portfolio. Seeking a graduation internship in France from January 2027.',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1120',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
