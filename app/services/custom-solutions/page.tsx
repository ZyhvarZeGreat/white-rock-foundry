import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function CustomSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/pexels-rostislav-4767063.jpg"
              alt="Custom GLB solutions"
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
                Custom GLB Solutions
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                Bespoke GLB products tailored to your specific requirements, combining innovation with sustainable manufacturing.
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
                  <h2 className="text-3xl font-bold mb-6 font-heading">Tailored to Your Needs</h2>
                  <p className="text-gray-600 mb-4">
                    Our custom GLB solutions are designed to meet your unique requirements, whether you need specialized 
                    structural components, custom furniture, or innovative interior design elements. We work closely with 
                    you to understand your needs and deliver products that exceed expectations.
                  </p>
                  <p className="text-gray-600">
                    From concept to completion, our team of experts ensures that every custom GLB product meets the highest 
                    standards of quality, sustainability, and performance.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/pexels-roger-ben-323520146-18446420.jpg"
                    alt="Custom GLB manufacturing"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Our Custom Solutions</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Design Consultation</h3>
                  <p className="text-gray-600 mb-4">
                    Expert guidance in developing custom GLB solutions that meet your specific requirements.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Technical expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Material selection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Design optimization</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Custom Dimensions</h3>
                  <p className="text-gray-600 mb-4">
                    Precision manufacturing of GLB products to your exact specifications and requirements.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Exact measurements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Special shapes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Custom profiles</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Special Finishes</h3>
                  <p className="text-gray-600 mb-4">
                    Custom finishing options to achieve the desired aesthetic and performance characteristics.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Custom colors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Special textures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Protective coatings</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Our Custom Solution Process</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0a3b25] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Consultation</h3>
                  <p className="text-gray-600">
                    Initial discussion to understand your requirements and objectives.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0a3b25] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Design</h3>
                  <p className="text-gray-600">
                    Development of custom solutions tailored to your needs.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0a3b25] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
                  <p className="text-gray-600">
                    Precision production of your custom GLB products.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={300}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0a3b25] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Delivery</h3>
                  <p className="text-gray-600">
                    Careful handling and timely delivery of your custom products.
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
                Ready to create your custom GLB solution?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss your specific requirements and start the journey to your custom GLB products.
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