import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function IndustrialProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/glubam4.png"
              alt="Industrial projects"
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
                Industrial Projects
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                Discover our robust GLB solutions for industrial facilities, from manufacturing plants to warehouses.
              </p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-2">
                VIEW PROJECTS
              </Button>
            </ScrollAnimation>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Featured Industrial Projects</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <ScrollAnimation type="fade-up">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="/glubam3.png"
                      alt="Manufacturing plant project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Manufacturing Plant</h3>
                    <p className="text-gray-600 mb-4">
                      A state-of-the-art manufacturing facility featuring durable GLB structural solutions and efficient design.
                    </p>
                    <Link href="/projects/industrial/manufacturing-plant">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Project Card 2 */}
              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="/glubam4.png"
                      alt="Warehouse project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Distribution Center</h3>
                    <p className="text-gray-600 mb-4">
                      A large-scale warehouse facility showcasing the strength and versatility of GLB materials in industrial construction.
                    </p>
                    <Link href="/projects/industrial/distribution-center">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Project Card 3 */}
              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="/glubam2.png"
                      alt="Processing facility project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Processing Facility</h3>
                    <p className="text-gray-600 mb-4">
                      A specialized industrial facility featuring custom GLB solutions for heavy-duty operations.
                    </p>
                    <Link href="/projects/industrial/processing-facility">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Why Choose GLB for Industrial Projects?</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Durability</h3>
                  <p className="text-gray-600">
                    GLB materials are designed to withstand heavy loads and harsh industrial environments, ensuring long-term reliability.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Efficiency</h3>
                  <p className="text-gray-600">
                    Our GLB solutions enable faster construction and reduced maintenance, maximizing operational efficiency.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Safety</h3>
                  <p className="text-gray-600">
                    GLB materials meet strict industrial safety standards, providing a secure environment for workers and operations.
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
                Ready to optimize your industrial facility?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss how our GLB solutions can enhance your industrial construction project.
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