import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { VeridantAddress } from "@/components/veridant-address"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/glubam-home.png"
            alt="Bamboo Manufacturing"
            width={1920}
            height={700}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto relative z-10 py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-2xl">
            <ScrollAnimation type="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                Embracing Sustainability with
                <br />
                <span className="text-yellow-400">GLUE LAMINATED BAMBOO</span>
                <span className="text-gray-500"> and</span>
                <span className="text-yellow-400"> Ballistic Glass</span>
                <br />
                for Modern Construction
              </h1>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={200}>
              <p className="text-white mb-8 max-w-md">
                Delivering innovative Glue Laminated Bamboo solutions for construction, furniture, and interior design industries
              </p>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={400}>
              <div className="flex space-x-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-2">
                  GET A QUOTE
                </Button>
                <Button
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-black rounded-sm transition-colors"
                >
                  LEARN MORE
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollAnimation type="fade-up">
              <div>
                <p className="text-3xl font-bold text-[#0a3b25]">5,000+</p>
                <p className="text-gray-600">Cubic meters annual capacity</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={100}>
              <div>
                <p className="text-3xl font-bold text-[#0a3b25]">100%</p>
                <p className="text-gray-600">Ethically sourced bamboo</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={200}>
              <div>
                <p className="text-3xl font-bold text-[#0a3b25]">25%</p>
                <p className="text-gray-600">Market share target</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={300}>
              <div>
                <p className="text-3xl font-bold text-[#0a3b25]">ISO</p>
                <p className="text-gray-600">Certified quality</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 font-heading">
              Sustainable solutions for
              <br />
              modern construction
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation type="fade-up">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-[#0a3b25] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Structural GLB</h3>
                <p className="text-gray-600 mb-4">
                  High-strength, durable GLB products for structural applications including beams, flooring, and decking.
                </p>
                <Link href="/services" className="text-[#0a3b25] font-medium hover:underline uppercase text-sm">
                  Learn more →
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-[#0a3b25] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Furniture & Interior</h3>
                <p className="text-gray-600 mb-4">
                  Eco-friendly GLB solutions for furniture manufacturing and interior design applications.
                </p>
                <Link href="/services" className="text-[#0a3b25] font-medium hover:underline uppercase text-sm">
                  Learn more →
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-[#0a3b25] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Bespoke GLB products tailored to your specific requirements and design specifications.
                </p>
                <Link href="/services" className="text-[#0a3b25] font-medium hover:underline uppercase text-sm">
                  Learn more →
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#0a3b25] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ScrollAnimation type="fade-right">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                  Our mission is sustainability and
                  <br />
                  excellence in every product!
                </h2>
              </ScrollAnimation>
              <ScrollAnimation type="fade-right" delay={200}>
                <p className="mb-8 text-gray-300">
                  We are dedicated to delivering the highest quality Glue Laminated Bamboo products through sustainable practices, ethical sourcing, and unwavering commitment to environmental responsibility.
                </p>
              </ScrollAnimation>
              <ScrollAnimation type="fade-right" delay={400}>
                <div className="relative">
                  <Image
                    src="/glubam1.jpg"
                    alt="Bamboo Manufacturing Overview"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="space-y-6">
              <ScrollAnimation type="fade-left">
                <div className="flex gap-4">
                  <div className="text-yellow-400 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Ethical sourcing</h3>
                    <p className="text-gray-300">
                      Our bamboo is ethically farmed in Nigeria, supporting local communities and sustainable agricultural practices.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left" delay={100}>
                <div className="flex gap-4">
                  <div className="text-yellow-400 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Sustainable manufacturing</h3>
                    <p className="text-gray-300">
                      Our UK-based facility uses energy-efficient processes and eco-friendly methods to minimize environmental impact.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left" delay={200}>
                <div className="flex gap-4">
                  <div className="text-yellow-400 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Quality assurance</h3>
                    <p className="text-gray-300">
                      Rigorous testing and quality control ensure our GLB products meet the highest standards for strength and durability.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/bamboo pic 3.jpg"
            alt="Background texture"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollAnimation type="zoom-in">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                From concept to creation,
                <br />
                we've got <span className="underline">you covered</span>
              </h2>
              <Link href="/quote">
                <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                  GET IN TOUCH
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Glass Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Premium Glass Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our range of high-performance glass products designed for both aesthetics and security
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation type="fade-up">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                  <Image 
                    src="/glass1.jpg" 
                    alt="Tempered Glass"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tempered Glass</h3>
                <p className="text-gray-600 mb-4">Heat-treated for enhanced strength and safety, perfect for high-traffic areas.</p>
                <Link href="/products/glass-products/tempered">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                  <Image 
                    src="/glass-ballistic.jpg" 
                    alt="Ballistic Glass"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ballistic Glass</h3>
                <p className="text-gray-600 mb-4">High-security laminated glass designed to resist penetration from bullets and forced entry.</p>
                <Link href="/products/glass-products/ballistic">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 rounded-md mb-4 overflow-hidden">
                  <Image 
                    src="/glass3.jpg" 
                    alt="Laminated Glass"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Laminated Glass</h3>
                <p className="text-gray-600 mb-4">Safety glass that holds together when shattered, ideal for security and sound reduction.</p>
                <Link href="/products/glass-products/laminated">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>

          <div className="text-center mt-12">
            <Link href="/products/glass-products">
              <Button className="bg-[#0a3b25] hover:bg-[#0c4a30] text-white">
                View All Glass Products <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <VeridantAddress />
        </div>
      </section>
    </>
  )
}
