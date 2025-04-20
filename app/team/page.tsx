import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TeamPage() {
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
            <Link href="/projects" className="text-white hover:text-yellow-300">
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

      <main className="flex-grow bg-gray-50">
        {/* Team Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-2 font-heading">
                Meet our
                <br />
                dedicated <span className="text-[#0a3b25]">team</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Together, we work to ensure a cleaner, safer, and more vibrant environment for our community.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              {/* Team Member 1 */}
              <div className="bg-[#0a3b25] text-white overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Mike Jones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Mike Jones</h3>
                  <p className="text-sm text-gray-300">Environmental Specialist</p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-[#0a3b25] text-white overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Emily Carter"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Emily Carter</h3>
                  <p className="text-sm text-gray-300">Operations Manager</p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-[#0a3b25] text-white overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Sarah Johnson"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Sarah Johnson</h3>
                  <p className="text-sm text-gray-300">Urban Maintenance Technician</p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="bg-[#0a3b25] text-white overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Michael O'Connor"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Michael O'Connor</h3>
                  <p className="text-sm text-gray-300">Environmental Health Specialist</p>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="bg-[#0a3b25] text-white overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Sophia Reed"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Sophia Reed</h3>
                  <p className="text-sm text-gray-300">Waste Management Coordinator</p>
                </div>
              </div>

              {/* Team Member 6 */}
              <div className="bg-[#0a3b25] text-white overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Daniel Morgan"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Daniel Morgan</h3>
                  <p className="text-sm text-gray-300">Street Maintenance Supervisor</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              <div>
                <p className="text-sm text-[#0a3b25] font-medium mb-2">WHY CHOOSE US</p>
                <h2 className="text-3xl font-bold mb-4 font-heading">
                  With us, the city becomes cleaner, safer, and more convenient
                </h2>
                <p className="text-gray-600 mb-6">
                  We specialize in professional street cleaning, waste management, and infrastructure maintenance
                  services designed to keep your city spotless, efficient, and running smoothly.
                </p>
                <p className="text-gray-600 mb-6">
                  Our services cover high-quality infrastructure maintenance, ranging from cleaning urban areas to
                  maintaining streets and sidewalks in good condition.
                </p>
                <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm">
                  SEE HOW WE WORK
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-full">
                  <Image
                    src="/placeholder.svg?height=300&width=250"
                    alt="Park maintenance"
                    width={250}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-full">
                  <Image
                    src="/placeholder.svg?height=300&width=250"
                    alt="Street lighting"
                    width={250}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="text-center mb-8">
                <p className="text-sm text-[#0a3b25] font-medium mb-2">FAQ</p>
                <h2 className="text-3xl font-bold font-heading">Clearing up your concerns</h2>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-4">
                  <div className="inline-block bg-[#0a3b25] text-white text-sm px-3 py-1 rounded-sm mb-4">
                    SERVICES & OPERATIONS
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-gray-200 py-4">
                    <AccordionTrigger className="flex justify-between items-center w-full text-left font-medium">
                      <span>How do you handle waste disposal?</span>
                      <Plus className="h-5 w-5 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 text-gray-600">
                      We follow environmentally responsible waste disposal practices, separating recyclables and organic
                      waste. All waste is transported to certified processing facilities where it's handled according to
                      local regulations and environmental standards.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-gray-200 py-4">
                    <AccordionTrigger className="flex justify-between items-center w-full text-left font-medium">
                      <span>Do you use environmentally safe cleaning methods?</span>
                      <Plus className="h-5 w-5 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 text-gray-600">
                      Yes, we prioritize eco-friendly cleaning solutions and methods. Our team uses biodegradable
                      detergents, water-saving equipment, and techniques that minimize environmental impact while still
                      delivering excellent cleaning results.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-gray-200 py-4">
                    <AccordionTrigger className="flex justify-between items-center w-full text-left font-medium">
                      <span>How do you manage water drainage systems?</span>
                      <Plus className="h-5 w-5 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 text-gray-600">
                      Our drainage management includes regular inspection, cleaning, and maintenance of storm drains,
                      culverts, and catch basins. We use specialized equipment to remove debris and sediment that can
                      cause blockages, and we implement preventive measures to reduce flooding risks during heavy
                      rainfall.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b border-gray-200 py-4">
                    <AccordionTrigger className="flex justify-between items-center w-full text-left font-medium">
                      <span>Do you offer recycling programs?</span>
                      <Plus className="h-5 w-5 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 text-gray-600">
                      Yes, we offer comprehensive recycling programs tailored to community needs. Our services include
                      collection of recyclable materials, educational initiatives to promote proper recycling practices,
                      and partnerships with local recycling facilities to ensure materials are processed efficiently.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
              <Link href="/portfolio" className="text-gray-600 hover:text-[#0a3b25]">
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
