import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function TechnicalGuidesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
              alt="Technical guides"
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
                Technical Guides
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                Comprehensive guides and resources to help you understand and implement GLB solutions effectively.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Featured Guides Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Featured Technical Guides</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Guide 1 */}
              <ScrollAnimation type="fade-up">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="GLB installation guide"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">GLB Installation Guide</h3>
                    <p className="text-gray-600 mb-4">
                      A comprehensive guide to proper installation techniques and best practices for GLB materials.
                    </p>
                    <Link href="/resources/technical-guides/glb-installation">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Guide 2 */}
              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="GLB maintenance guide"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">GLB Maintenance Guide</h3>
                    <p className="text-gray-600 mb-4">
                      Essential maintenance procedures and tips to ensure the longevity of your GLB installations.
                    </p>
                    <Link href="/resources/technical-guides/glb-maintenance">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Guide 3 */}
              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="GLB specifications guide"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">GLB Specifications Guide</h3>
                    <p className="text-gray-600 mb-4">
                      Detailed specifications and technical data for various GLB products and applications.
                    </p>
                    <Link href="/resources/technical-guides/glb-specifications">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        Read Guide
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Browse by Category</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Installation Guides</h3>
                  <p className="text-gray-600 mb-4">
                    Step-by-step guides for proper installation of GLB materials in various applications.
                  </p>
                  <Link href="/resources/technical-guides/category/installation">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View Guides
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Maintenance Guides</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive guides for maintaining and caring for GLB installations.
                  </p>
                  <Link href="/resources/technical-guides/category/maintenance">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View Guides
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed technical specifications and data sheets for GLB products.
                  </p>
                  <Link href="/resources/technical-guides/category/specifications">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View Guides
                    </Button>
                  </Link>
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
                Need Technical Support?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Our technical team is ready to assist you with any questions about GLB products and applications.
              </p>
              <Link href="/contact">
                <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                  CONTACT SUPPORT
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
