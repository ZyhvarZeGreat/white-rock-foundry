"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { title: "HOME", href: "/" },
  { title: "ABOUT", href: "/about" },
  {
    title: "SERVICES",
    href: "/services",
    children: [
      { title: "Precision Casting", href: "/services/precision-casting" },
      { title: "CNC Machining", href: "/services/cnc-machining" },
      { title: "Engineering Design", href: "/services/engineering-design" },
      { title: "Quality Assurance", href: "/services/quality-assurance" },
    ],
  },
  {
    title: "PROJECTS",
    href: "/projects",
    children: [
      { title: "Aerospace", href: "/projects/aerospace" },
      { title: "Automotive", href: "/projects/automotive" },
      { title: "Medical", href: "/projects/medical" },
      { title: "Industrial", href: "/projects/industrial" },
    ],
  },
  {
    title: "RESOURCES",
    href: "/resources",
    children: [
      { title: "Blog", href: "/blog" },
      { title: "Case Studies", href: "/resources/case-studies" },
      { title: "Technical Guides", href: "/resources/technical-guides" },
      { title: "FAQ", href: "/resources/faq" },
    ],
  },
  { title: "CONTACT", href: "/contact" },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-[#0a3b25] p-6 shadow-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="space-y-4">
          {navItems.map((item) => (
            <div key={item.title} className="border-b border-[#0a3b25]/20 pb-2">
              {item.children ? (
                <div>
                  <button
                    className="flex w-full items-center justify-between text-white py-2"
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        openDropdowns[item.title] ? "rotate-180" : "",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "mt-2 space-y-2 pl-4 overflow-hidden transition-all duration-300",
                      openDropdowns[item.title] ? "max-h-96" : "max-h-0",
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="block text-gray-300 hover:text-yellow-300 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block text-white hover:text-yellow-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-[#0a3b25]/20">
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm">
            GET A QUOTE
          </Button>
        </div>
      </div>
    </div>
  )
}
