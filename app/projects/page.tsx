import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-[#0a3b25] text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Street Care
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-yellow-300">
              HOME
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-300">
              ABOUT
            </Link>
            <Link href="/services" className="text-white hover:text-yellow-300">
              SERVICES
            </Link>
            <Link href="/projects" className="text-white hover:text-yellow-300 font-medium">
              PORTFOLIO
            </Link>
            <Link href="#" className="text-white hover:text-yellow-300">
              ALL PAGES
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-4 py-2">
              CONTACT
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4 font-heading">Our Projects</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
              Explore our portfolio of completed and ongoing projects that showcase our commitment to quality,
              innovation, and sustainability.
            </p>

            {/* Project Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant="ghost"
                className="text-[#0a3b25] hover:bg-[#0a3b25]/10 font-medium underline decoration-2 underline-offset-8"
              >
                ALL PROJECTS
              </Button>
              <Button variant="ghost" className="text-[#0a3b25] hover:bg-[#0a3b25]/10 font-medium">
                URBAN AESTHETICS & CLEANLINESS
              </Button>
              <Button variant="ghost" className="text-[#0a3b25] hover:bg-[#0a3b25]/10 font-medium">
                PUBLIC SPACE ENHANCEMENT & MAINTENANCE
              </Button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Public park green space enhancement"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Public park green space enhancement</h3>
                  <p className="text-gray-600 mb-4">
                    A project to green and enhance public parks, creating new recreational spaces for city residents.
                  </p>
                  <Link
                    href="/projects/public-park-enhancement"
                    className="text-[#0a3b25] font-medium hover:underline uppercase text-sm flex items-center"
                  >
                    ABOUT PROJECT <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Street lighting improvement initiative"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Street lighting improvement initiative</h3>
                  <p className="text-gray-600 mb-4">
                    A project to upgrade and improve street lighting across the city, ensuring safety and energy
                    efficiency.
                  </p>
                  <Link
                    href="/projects/street-lighting"
                    className="text-[#0a3b25] font-medium hover:underline uppercase text-sm flex items-center"
                  >
                    ABOUT PROJECT <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Park pathways maintenance"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Park pathways maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Repairing cracked sidewalks, clearing overgrown vegetation, and cleaning park benches and pathways.
                  </p>
                  <Link
                    href="/projects/park-pathways"
                    className="text-[#0a3b25] font-medium hover:underline uppercase text-sm flex items-center"
                  >
                    ABOUT PROJECT <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="City square revitalization"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">City square revitalization</h3>
                  <p className="text-gray-600 mb-4">
                    Complete cleaning and restoration of the central city square, including debris removal, power
                    washing of paved areas, and trash removal.
                  </p>
                  <Link
                    href="/projects/city-square"
                    className="text-[#0a3b25] font-medium hover:underline uppercase text-sm flex items-center"
                  >
                    ABOUT PROJECT <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Project 5 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Graffiti removal on public structures"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Graffiti removal on public structures</h3>
                  <p className="text-gray-600 mb-4">
                    Extensive graffiti removal from public walls, bridges, and transit stops using eco-friendly cleaning
                    solutions.
                  </p>
                  <Link
                    href="/projects/graffiti-removal"
                    className="text-[#0a3b25] font-medium hover:underline uppercase text-sm flex items-center"
                  >
                    ABOUT PROJECT <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Project 6 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Bus stop cleaning and modernization"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bus stop cleaning and modernization</h3>
                  <p className="text-gray-600 mb-4">
                    Washing and disinfecting public transport stops, replacing damaged seating, and adding waste bins.
                  </p>
                  <Link
                    href="/projects/bus-stop-cleaning"
                    className="text-[#0a3b25] font-medium hover:underline uppercase text-sm flex items-center"
                  >
                    ABOUT PROJECT <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-400 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="Background texture"
              width={1920}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                From streets to infrastructure,
                <br />
                we've got <span className="underline">you covered</span>.
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to experience professional solutions tailored to your community's needs!
              </p>
              <div className="flex justify-center">
                <div className="relative">
                  <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                    GET STARTED
                  </Button>
                  <div className="absolute -right-16 -top-16">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full border-2 border-[#0a3b25] animate-spin-slow"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-[#0a3b25] font-bold">GET STARTED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-[#0a3b25] py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold mb-4">Street Care</h2>
            <p className="max-w-md mx-auto text-gray-600">
              Let's make the city cleaner together – get in touch with us!
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
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/about" className="text-gray-600 hover:text-[#0a3b25]">
                ABOUT US
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-[#0a3b25]">
                PRICING
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-[#0a3b25]">
                SERVICES
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-[#0a3b25]">
                PORTFOLIO
              </Link>
              <Link href="/career" className="text-gray-600 hover:text-[#0a3b25]">
                CAREER
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-[#0a3b25]">
                FAQ
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-[#0a3b25]">
                SHOP
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#0a3b25]">
                CONTACT US
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              © 2023 Street Care. All Rights Reserved.{" "}
              <Link href="#" className="underline">
                Licensing
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
