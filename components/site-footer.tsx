import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="bg-white text-[#0a3b25] py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold mb-4">White Rock Foundry</h2>
          <p className="max-w-md mx-auto text-gray-600">
            Precision engineering solutions for modern manufacturing challenges
          </p>
          <div className="mt-6 max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a3b25] rounded-l-sm"
            />
            <Button className="bg-black hover:bg-black/90 text-white font-medium rounded-r-sm rounded-l-none">
              SUBSCRIBE
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/about" className="text-gray-600 hover:text-[#0a3b25]">
              ABOUT US
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-[#0a3b25]">
              SERVICES
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-[#0a3b25]">
              PROJECTS
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-[#0a3b25]">
              BLOG
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#0a3b25]">
              CONTACT
            </Link>
            <Link href="/quote" className="text-gray-600 hover:text-[#0a3b25]">
              GET A QUOTE
            </Link>
          </div>
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} White Rock Foundry. All Rights Reserved.{" "}
            <Link href="#" className="underline">
              Licensing
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
