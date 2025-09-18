import type React from "react"
import "@/app/globals.css"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from "@/components/client-layout"
import NextTopLoader from "nextjs-toploader"
import type { Metadata } from "next"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: "Verdant Lam - Precision Engineering & Manufacturing Solutions",
  description: "Innovative engineering solutions for industrial manufacturing and precision metalwork",
  generator: 'v0.dev',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.verdantlam.com'),
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/favicon/favicon.svg'],
    other: [
      { rel: 'mask-icon', url: '/favicon/favicon.svg', color: '#0f172a' }
    ]
  },
  openGraph: {
    title: "Verdant Lam - Precision Engineering & Manufacturing Solutions",
    description: "Innovative engineering solutions for industrial manufacturing and precision metalwork",
    url: '/',
    siteName: 'Verdant Lam',
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 1200,
        height: 630,
        alt: 'Verdant Lam hero image'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdant Lam - Precision Engineering & Manufacturing Solutions',
    description: 'Innovative engineering solutions for industrial manufacturing and precision metalwork',
    images: ['/favicon/favicon-96x96.png']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="org-logo-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Verdant Lam',
            url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.verdantlam.com'),
            logo: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.verdantlam.com') + '/favicon/favicon-96x96.png'
          })
        }} />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1931633079128460"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans`}>
        <NextTopLoader 
          color="#fff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
