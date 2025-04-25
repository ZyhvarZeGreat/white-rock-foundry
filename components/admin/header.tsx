'use client'
import { usePathname, useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"

export function AdminHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const pageName = pathname.split("/").pop() || "Dashboard"

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing session, tokens, etc.)
    router.push("/")
  }

  return (
    <div className="flex items-center justify-between w-full p-4 border-b">
      <h1 className="text-3xl font-semibold capitalize">{pageName}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="/admin-avatar.png" alt="Admin" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
} 