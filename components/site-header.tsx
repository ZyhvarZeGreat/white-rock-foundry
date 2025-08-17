import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DesktopNav } from "@/components/desktop-nav"
import { MobileMenu } from "@/components/mobile-menu"

export function SiteHeader() {
  return (
    <header className="bg-[#0a3b25] text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            Verdant Lam
          </Link>
        </div>
        <DesktopNav />
        <div className="flex items-center space-x-4">
          <Link href="/quote" className="hidden md:block">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-4 py-2">
              GET A QUOTE
            </Button>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
