import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://ameni-azouz.vercel.app"),
  title: {
    default: "Ameni Azzouz - Cybersecurity Engineering Student",
    template: "%s | Ameni Azzouz",
  },
  description:
    "Bilingual portfolio of Ameni Azzouz, cybersecurity engineering student. DevSecOps, application security, cloud security, penetration testing, malware analysis and SIEM. Available for a graduation internship or junior opportunity starting January 2027.",
  keywords: [
    "cybersecurity",
    "cybersecurite",
    "DevSecOps",
    "application security",
    "cloud security",
    "penetration testing",
    "pentest",
    "malware analysis",
    "SIEM",
    "SOC",
    "stage PFE cybersecurite",
    "cybersecurity internship France",
    "Ameni Azzouz",
  ],
  authors: [{ name: "Ameni Azzouz" }],
  openGraph: {
    title: "Ameni Azzouz - Cybersecurity Engineering Student",
    description:
      "DevSecOps, application security, cloud security, penetration testing, malware analysis and SIEM. Bilingual FR/EN portfolio.",
    url: "https://ameni-azouz.vercel.app",
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    siteName: "Ameni Azzouz Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ameni Azzouz cybersecurity portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ameni Azzouz - Cybersecurity Engineering Student",
    description:
      "DevSecOps, application security, cloud security, penetration testing, malware analysis and SIEM. Available from January 2027.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b1120",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
