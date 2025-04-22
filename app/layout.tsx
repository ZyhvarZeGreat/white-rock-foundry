import type React from "react"
import "@/app/globals.css"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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

export const metadata = {
  title: "White Rock Foundry - Precision Engineering & Manufacturing Solutions",
  description: "Innovative engineering solutions for industrial manufacturing and precision metalwork",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Check if the current path is in the admin section
  const isAdminPage = typeof window !== "undefined" ? window.location.pathname.startsWith("/admin") : false

  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {!isAdminPage && (
            <div className="flex flex-col min-h-screen">
              <SiteHeader />
              <main className="flex-grow">{children}</main>
              <SiteFooter />
            </div>
          )}
          {isAdminPage && children}
        </ThemeProvider>
      </body>
    </html>
  )
}
