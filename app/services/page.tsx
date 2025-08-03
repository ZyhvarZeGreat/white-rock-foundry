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
                <Link href="/services/structural-glb" className="block group">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/glubam8.png"
                      alt="Structural GLB"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Structural GLB</h3>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>

              {/* Service 2 */}
              <ScrollAnimation type="fade-up" delay={200}>
                <Link href="/services/furniture-interior" className="block group">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/pexels-roger-ben-323520146-18446420.jpg"
                      alt="Furniture & Interior"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Furniture & Interior</h3>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>

              {/* Service 3 */}
              <ScrollAnimation type="fade-up" delay={400}>
                <Link href="/services/precision-casting" className="block group">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/glubam3.png"
                      alt="Precision Casting"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Precision Casting</h3>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>

              {/* Service 4 */}
              <ScrollAnimation type="fade-up">
                <Link href="/services/quality-assurance" className="block group">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/glubam2.png"
                      alt="Quality Assurance"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Quality Assurance</h3>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>

              {/* Service 5 */}
              <ScrollAnimation type="fade-up" delay={200}>
                <Link href="/services/custom-solutions" className="block group">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/glubam4.png"
                      alt="Custom Solutions"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Custom Solutions</h3>
                    </div>
                  </div>
                </Link>
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
