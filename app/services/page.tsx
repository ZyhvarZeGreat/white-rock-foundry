import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h1 className="text-4xl font-bold text-center mb-4 font-heading">Our Services</h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                Discover our comprehensive range of sustainable GLB manufacturing services, designed to meet your construction,
                furniture, and interior design needs while promoting environmental responsibility.
              </p>
            </ScrollAnimation>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <ScrollAnimation type="fade-up">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg"
                      alt="Structural GLB"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Structural GLB</h3>
                    <p className="text-gray-600 mb-4">
                      High-strength, durable GLB products for structural applications in construction and architecture.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Beams and Columns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Flooring Systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Decking Solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Cladding Panels</span>
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                    >
                      EXPLORE SERVICE
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Service 2 */}
              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
                      alt="Furniture & Interior"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Furniture & Interior</h3>
                    <p className="text-gray-600 mb-4">
                      Eco-friendly GLB solutions for furniture manufacturing and interior design applications.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Custom Furniture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Wall Panels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Ceiling Systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Decorative Elements</span>
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                    >
                      EXPLORE SERVICE
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Service 3 */}
              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                      alt="Custom Solutions"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                    <p className="text-gray-600 mb-4">
                      Bespoke GLB products tailored to your specific requirements and design specifications.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Design Consultation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Custom Dimensions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Special Finishes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Technical Support</span>
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                    >
                      EXPLORE SERVICE
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Service 4 */}
              <ScrollAnimation type="fade-up">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg"
                      alt="Quality Assurance"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                    <p className="text-gray-600 mb-4">
                      Rigorous testing and quality control to ensure our GLB products meet the highest standards for strength and durability.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Strength Testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Durability Assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Environmental Testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>ISO Certification</span>
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                    >
                      EXPLORE SERVICE
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Service 5 */}
              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/3768/snow-garden-winter-plant.jpg"
                      alt="Sustainability Services"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Sustainability Services</h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive sustainability services to support your green building initiatives and environmental goals.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Environmental Impact Assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Carbon Footprint Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Sustainability Certification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Green Building Support</span>
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                    >
                      EXPLORE SERVICE
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Service 6 */}
              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg"
                      alt="Assembly & Integration"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Assembly & Integration</h3>
                    <p className="text-gray-600 mb-4">
                      Complete assembly and integration services to deliver finished components or sub-assemblies ready
                      for your production line.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Component Assembly</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Sub-Assembly Integration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Functional Testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0a3b25] mr-2">•</span>
                        <span>Packaging & Shipping</span>
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                    >
                      EXPLORE SERVICE
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-center mb-8">Trusted by 25+ industry leaders</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <Image
                src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg"
                alt="Client logo"
                width={120}
                height={50}
                className="h-8 w-auto object-contain opacity-70"
              />
              <Image
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
                alt="Client logo"
                width={120}
                height={50}
                className="h-8 w-auto object-contain opacity-70"
              />
              <Image
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="Client logo"
                width={120}
                height={50}
                className="h-8 w-auto object-contain opacity-70"
              />
              <Image
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                alt="Client logo"
                width={120}
                height={50}
                className="h-8 w-auto object-contain opacity-70"
              />
              <Image
                src="https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg"
                alt="Client logo"
                width={120}
                height={50}
                className="h-8 w-auto object-contain opacity-70"
              />
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
                From concept to creation,
                <br />
                we've got <span className="underline">you covered</span>.
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to experience precision engineering solutions tailored to your manufacturing needs!
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

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
