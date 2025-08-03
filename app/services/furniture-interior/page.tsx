import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function FurnitureInteriorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/pexels-june-liu-368305200-31806951.jpg"
              alt="Furniture and interior GLB manufacturing"
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
                Furniture & Interior GLB Solutions
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                Eco-friendly GLB products for furniture manufacturing and interior design applications, combining sustainability with aesthetic excellence.
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
                  <h2 className="text-3xl font-bold mb-6 font-heading">Sustainable Design Excellence</h2>
                  <p className="text-gray-600 mb-4">
                    Our furniture and interior GLB products combine sustainable manufacturing with exceptional design quality. 
                    We create eco-friendly solutions that meet the highest standards of aesthetics and functionality while 
                    contributing to environmental responsibility.
                  </p>
                  <p className="text-gray-600">
                    From custom furniture pieces to wall panels and ceiling systems, our GLB products offer versatile 
                    design possibilities for both residential and commercial spaces.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/glubam4.png"
                    alt="GLB furniture manufacturing"
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
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Our Furniture & Interior Products</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Custom Furniture</h3>
                  <p className="text-gray-600 mb-4">
                    Bespoke GLB furniture pieces designed to meet your specific requirements and aesthetic preferences.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Custom designs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Premium finishes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Durable construction</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Wall Panels</h3>
                  <p className="text-gray-600 mb-4">
                    Elegant GLB wall panels that combine aesthetic appeal with sustainable materials.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Various patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Acoustic properties</span>
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
                  <h3 className="text-xl font-bold mb-4">Ceiling Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Innovative GLB ceiling solutions that enhance interior spaces with sustainable materials.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Acoustic performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Design flexibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Easy maintenance</span>
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
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Why Choose Our Furniture & Interior GLB?</h2>
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
                  <h3 className="text-xl font-bold mb-2">Sustainable Design</h3>
                  <p className="text-gray-600">
                    Eco-friendly materials and manufacturing processes for responsible design.
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
                  <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                  <p className="text-gray-600">
                    Tailored designs to meet your specific requirements and preferences.
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
                  <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
                  <p className="text-gray-600">
                    Exceptional attention to detail and superior finishing.
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
                  <h3 className="text-xl font-bold mb-2">Durability</h3>
                  <p className="text-gray-600">
                    Long-lasting products that maintain their beauty over time.
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
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
              alt="Background texture"
              width={1920}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                Ready to transform your space with sustainable GLB?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss your furniture and interior design requirements.
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