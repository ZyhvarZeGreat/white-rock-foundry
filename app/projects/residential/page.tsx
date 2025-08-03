import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function ResidentialProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/glubam2.png"
              alt="Residential projects"
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
                Residential Projects
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                Discover our innovative GLB solutions for residential construction, from custom homes to multi-family developments.
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
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Featured Residential Projects</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <ScrollAnimation type="fade-up">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="/glubam3.png"
                      alt="Modern home project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Modern Family Home</h3>
                    <p className="text-gray-600 mb-4">
                      A contemporary family home featuring custom GLB structural elements and sustainable design.
                    </p>
                    <Link href="/projects/residential/modern-family-home">
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
                      src="/glubam8.png"
                      alt="Luxury villa project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Luxury Villa</h3>
                    <p className="text-gray-600 mb-4">
                      An exclusive villa project showcasing premium GLB materials and innovative architectural solutions.
                    </p>
                    <Link href="/projects/residential/luxury-villa">
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
                      src="/glubam4.png"
                      alt="Eco-friendly home project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Eco-Friendly Home</h3>
                    <p className="text-gray-600 mb-4">
                      A sustainable residential project featuring energy-efficient GLB solutions and green building practices.
                    </p>
                    <Link href="/projects/residential/eco-friendly-home">
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
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Why Choose GLB for Residential Projects?</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Durability</h3>
                  <p className="text-gray-600">
                    GLB materials offer exceptional strength and longevity, ensuring your residential project stands the test of time.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                  <p className="text-gray-600">
                    Our GLB solutions are environmentally friendly, contributing to green building certifications and reduced carbon footprint.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Customization</h3>
                  <p className="text-gray-600">
                    Tailored GLB solutions to match your specific residential design requirements and aesthetic preferences.
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
              src="/glubam3.png"
              alt="Background texture"
              width={1920}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                Ready to start your residential project?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss how our GLB solutions can enhance your residential construction project.
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