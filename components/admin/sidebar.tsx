"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, FileText, ImageIcon, Settings, LogOut, MessageSquareQuote } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function AdminSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/")
  }

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <Sidebar>
          <SidebarHeader className="flex h-16 items-center border-b px-4">
            <Link href="/admin/dashboard" className="flex items-center space-x-2">
              <span className="text-xl font-bold">WRF Admin</span>
            </Link>
          </SidebarHeader>

          <SidebarContent className="">
          
            <SidebarMenu className="p-4 space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/admin/dashboard")}
                  className={isActive("/admin/dashboard") ? "bg-[#0a3b25] text-white" : "bg-transparent text-foreground"}
                >
                  <Link href="/admin/dashboard" className="flex items-center gap-2">
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/admin/quotes")}
                  className={isActive("/admin/quotes") ? "bg-[#0a3b25] text-white" : "bg-transparent text-foreground"}
                >
                  <Link href="/admin/quotes" className="flex items-center gap-2">
                    <MessageSquareQuote className="h-5 w-5" />
                    <span>Quote Requests</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/admin/blog")}
                  className={isActive("/admin/blog") ? "bg-[#0a3b25] text-white" : "bg-transparent text-foreground"}
                >
                  <Link href="/admin/blog/manage" className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    <span>Blog</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton 
                      asChild 
                      isActive={isActive("/admin/blog/manage")}
                      className={isActive("/admin/blog/manage") ? "bg-[#0a3b25] text-white" : "bg-transparent text-foreground"}
                    >
                      <Link href="/admin/blog/manage" className="pl-7">All Posts</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton 
                      asChild 
                      isActive={isActive("/admin/blog/upload")}
                      className={isActive("/admin/blog/upload") ? "bg-[#0a3b25] text-white" : "bg-transparent text-foreground"}
                    >
                      <Link href="/admin/blog/upload" className="pl-7">Add New Post</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton 
                      asChild 
                      isActive={isActive("/admin/blog/categories")}
                      className={isActive("/admin/blog/categories") ? "bg-[#0a3b25] text-white" : "bg-transparent text-foreground"}
                    >
                      <Link href="/admin/blog/categories" className="pl-7">Categories</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/admin/media")}
                  className={isActive("/admin/media") ? "bg-[#0a3b25] text-white" : "bg-transparent text-foreground"}
                >
                  <Link href="/admin/media" className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5" />
                    <span>Media Library</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/admin/settings")}
                  className={isActive("/admin/settings") ? "bg-[#0a3b25] text-white" : "bg-transparent text-foreground"}
                >
                  <Link href="/admin/settings" className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="border-t p-4">
            <Button
              variant="outline"
              className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </SidebarFooter>
        </Sidebar>

        {/* Main content */}
        <div className="flex-1 w-full mx-auto  overflow-auto">{children}</div>
      </div>
    </SidebarProvider>
  )
}
