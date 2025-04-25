import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
            alt="Industrial manufacturing facility"
            width={1920}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto relative z-10 py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-2xl">
            <ScrollAnimation type="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                Precision <span className="text-yellow-400">engineering</span>
                <br />
                for modern manufacturing
              </h1>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={200}>
              <p className="text-white mb-8 max-w-md">
                Delivering innovative metal casting and precision engineering solutions for industries that demand
                excellence
              </p>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={400}>
              <div className="flex space-x-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-2">
                  GET STARTED
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollAnimation type="fade-up">
              <div>
                <p className="text-3xl font-bold text-[#0a3b25]">500+</p>
                <p className="text-gray-600">Projects completed</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={100}>
              <div>
                <p className="text-3xl font-bold text-[#0a3b25]">15+</p>
                <p className="text-gray-600">Years of experience</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={200}>
              <div>
                <p className="text-3xl font-bold text-[#0a3b25]">30+</p>
                <p className="text-gray-600">Industries served</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-up" delay={300}>
              <div>
                <p className="text-3xl font-bold text-[#0a3b25]">99.8%</p>
                <p className="text-gray-600">Quality assurance rate</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 font-heading">
              Comprehensive solutions for
              <br />
              precision manufacturing
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation type="fade-up">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-[#0a3b25] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Precision Metal Casting</h3>
                <p className="text-gray-600 mb-4">
                  State-of-the-art metal casting services with exceptional precision and quality for complex components
                  across industries.
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
                <h3 className="text-xl font-bold mb-3">CNC Machining & Finishing</h3>
                <p className="text-gray-600 mb-4">
                  Advanced CNC machining capabilities for tight-tolerance components with superior surface finishes and
                  dimensional accuracy.
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
                <h3 className="text-xl font-bold mb-3">Engineering & Design</h3>
                <p className="text-gray-600 mb-4">
                  Collaborative engineering services to optimize designs for manufacturability, performance, and
                  cost-effectiveness.
                </p>
                <Link href="/services" className="text-[#0a3b25] font-medium hover:underline uppercase text-sm">
                  Learn more →
                </Link>
              </div>
            </ScrollAnimation>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-transparent hover:bg-[#0a3b25] hover:text-white hover:border-[#0a3b25] transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-[#0a3b25] text-white flex items-center justify-center">
              <ChevronRight className="h-4 w-4" />
            </button>
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
                  Our mission is precision and
                  <br />
                  excellence in every component!
                </h2>
              </ScrollAnimation>
              <ScrollAnimation type="fade-right" delay={200}>
                <p className="mb-8 text-gray-300">
                  We are dedicated to delivering the highest quality precision-engineered components through innovative
                  manufacturing processes and unwavering commitment to excellence.
                </p>
              </ScrollAnimation>
              <ScrollAnimation type="fade-right" delay={400}>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                    alt="Precision manufacturing process"
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
                    <h3 className="font-bold text-lg mb-1">Engineering expertise</h3>
                    <p className="text-gray-300">
                      Our team of experienced engineers and metallurgists brings decades of specialized knowledge to
                      every project, ensuring optimal design and manufacturing solutions.
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
                    <h3 className="font-bold text-lg mb-1">Advanced technology</h3>
                    <p className="text-gray-300">
                      We invest in cutting-edge manufacturing technology and equipment to deliver components with
                      exceptional precision, consistency, and quality.
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
                      Our comprehensive quality control systems and rigorous testing protocols ensure that every
                      component meets or exceeds the most demanding specifications.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left" delay={300}>
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
                      We are committed to environmentally responsible manufacturing practices, implementing
                      energy-efficient processes and material recycling throughout our operations.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left" delay={400}>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-2 mt-4">
                  LEARN MORE
                </Button>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
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
    </>
  )
}
