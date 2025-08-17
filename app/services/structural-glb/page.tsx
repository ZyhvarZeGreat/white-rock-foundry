import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function StructuralGLBPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/glubam-structural.png"
              alt="Structural GLB manufacturing"
              width={1920}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="container mx-auto relative z-10 py-24 md:py-36 px-4">
            <ScrollAnimation type="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                Structural GLB Solutions
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                High-strength, durable Glue Laminated Bamboo products for structural applications in construction and architecture.
              </p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-2">
                GET A QUOTE
              </Button>
            </ScrollAnimation>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation type="fade-right">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-heading">Structural Excellence in GLB</h2>
                  <p className="text-gray-600 mb-4">
                    Our structural GLB products are engineered to meet the highest standards of strength, durability, and sustainability. 
                    Using advanced manufacturing techniques and rigorous quality control, we produce GLB components that rival traditional 
                    construction materials in performance while offering superior environmental benefits.
                  </p>
                  <p className="text-gray-600">
                    From beams and columns to flooring systems and decking solutions, our structural GLB products are designed to 
                    withstand demanding applications while contributing to sustainable building practices.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/glubam4.jpg"
                    alt="GLB manufacturing process"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Our Structural GLB Products</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Beams and Columns</h3>
                  <p className="text-gray-600 mb-4">
                    High-strength GLB beams and columns for structural applications, offering superior load-bearing capacity and durability.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Custom dimensions available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>High load-bearing capacity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Superior durability</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Flooring Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Sustainable GLB flooring solutions that combine strength, durability, and aesthetic appeal.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Multiple finish options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>High wear resistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Easy installation</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Decking Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Durable GLB decking products designed for outdoor applications, offering weather resistance and longevity.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Weather-resistant</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Slip-resistant surfaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Long service life</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Why Choose Our Structural GLB?</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0a3b25] rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="text-white"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Superior Strength</h3>
                  <p className="text-gray-600">
                    High load-bearing capacity and structural integrity for demanding applications.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0a3b25] rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="text-white"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                  <p className="text-gray-600">
                    Environmentally responsible manufacturing and renewable material sourcing.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0a3b25] rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="text-white"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">
                    Rigorous testing and quality control throughout the manufacturing process.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={300}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0a3b25] rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="text-white"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                  <p className="text-gray-600">
                    Tailored GLB products to meet your specific project requirements.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-400 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/glubam2.png"
              alt="Background texture"
              width={1920}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                Ready to start your structural GLB project?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss your requirements and get a detailed quote for your project.
              </p>
              <Link href="/quote">
                <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                  GET A QUOTE
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 