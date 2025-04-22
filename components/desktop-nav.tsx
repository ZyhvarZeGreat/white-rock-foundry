"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
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

export function DesktopNav() {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveItem(title)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setActiveItem(null)
    }, 150) // Small delay to prevent menu from closing immediately
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="hidden md:flex space-x-6">
      {navItems.map((item) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.title)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            className={cn(
              "text-white hover:text-yellow-300 flex items-center",
              activeItem === item.title && item.children ? "text-yellow-300" : "",
            )}
          >
            {item.title}
            {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
          </Link>

          {item.children && (
            <div
              className={cn(
                "absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 transition-all duration-200 ease-in-out",
                activeItem === item.title
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-2 pointer-events-none",
              )}
            >
              <div className="py-2">
                {item.children.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#0a3b25] hover:text-white"
                    onClick={() => setActiveItem(null)} // Close dropdown when link is clicked
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
