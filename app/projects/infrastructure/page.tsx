import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function InfrastructureProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
             src="/glubam1.png"
              alt="Infrastructure projects"
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
                Infrastructure Projects
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                Explore our innovative GLB solutions for infrastructure development, from bridges to public facilities.
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
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Featured Infrastructure Projects</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <ScrollAnimation type="fade-up">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                          src="/glubam8.png"
                      alt="Bridge project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Modern Bridge</h3>
                    <p className="text-gray-600 mb-4">
                      A state-of-the-art bridge project featuring innovative GLB structural solutions and sustainable design.
                    </p>
                    <Link href="/projects/infrastructure/modern-bridge">
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
                      src="/glubam3.png"
                      alt="Public facility project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Public Facility</h3>
                    <p className="text-gray-600 mb-4">
                      A large-scale public facility showcasing the versatility and strength of GLB materials in infrastructure construction.
                    </p>
                    <Link href="/projects/infrastructure/public-facility">
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
                      src="/glubam3.pn  g"
                      alt="Transportation hub project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Transportation Hub</h3>
                    <p className="text-gray-600 mb-4">
                      A major transportation facility featuring custom GLB solutions for heavy traffic and public use.
                    </p>
                    <Link href="/projects/infrastructure/transportation-hub">
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
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Why Choose GLB for Infrastructure Projects?</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Longevity</h3>
                  <p className="text-gray-600">
                    GLB materials are designed to last for decades, making them ideal for long-term infrastructure projects.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Safety</h3>
                  <p className="text-gray-600">
                    Our GLB solutions meet strict safety standards, ensuring reliable performance in critical infrastructure applications.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                  <p className="text-gray-600">
                    Environmentally friendly GLB solutions that contribute to sustainable infrastructure development and reduced environmental impact.
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
                Ready to enhance your infrastructure project?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss how our GLB solutions can benefit your infrastructure development project.
              </p>
              <Link href="/quote">
                <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                  GET A QUOTE
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Explore Our Infrastructure Projects</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <Link href="/projects/infrastructure/bridge" className="block group">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="Bridge"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Bridge</h3>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <Link href="/projects/infrastructure/tunnel" className="block group">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="Tunnel"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Tunnel</h3>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <Link href="/projects/infrastructure/highway" className="block group">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="Highway"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Highway</h3>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={600}>
                <Link href="/projects/infrastructure/airport" className="block group">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="Airport"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Airport</h3>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 