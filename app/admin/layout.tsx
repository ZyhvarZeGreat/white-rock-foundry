import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { AdminSidebar } from "@/components/admin/sidebar"
import { AdminHeader } from "@/components/admin/header"
import NextTopLoader from "nextjs-toploader"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Admin Dashboard - White Rock Foundry",
  description: "Admin dashboard for White Rock Foundry website",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.variable}>
      <NextTopLoader color="#000" />
      <AdminSidebar>
        <AdminHeader />
        {children}
      </AdminSidebar>
    </div>
  )
}
