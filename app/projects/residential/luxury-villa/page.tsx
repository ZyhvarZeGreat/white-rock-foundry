import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function LuxuryVillaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
              alt="Luxury Villa"
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
                Luxury Villa
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                An exclusive villa project showcasing premium GLB materials and innovative architectural solutions.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation type="fade-right">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-heading">Project Overview</h2>
                  <p className="text-gray-600 mb-4">
                    This luxury villa represents the pinnacle of GLB construction, combining premium materials with 
                    innovative design to create a truly exceptional living space. The project demonstrates how GLB 
                    can be used to achieve both luxury and sustainability.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The villa features custom-designed GLB elements that provide both structural integrity and 
                    architectural beauty, creating a unique and sophisticated living environment.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div>
                      <h3 className="font-bold text-[#0a3b25]">Location</h3>
                      <p className="text-gray-600">Exclusive Area</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a3b25]">Size</h3>
                      <p className="text-gray-600">5,000 sq ft</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a3b25]">Completion</h3>
                      <p className="text-gray-600">2023</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a3b25]">Category</h3>
                      <p className="text-gray-600">Residential</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left">
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                    alt="Luxury Villa Overview"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Key Features</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Premium GLB Materials</h3>
                  <p className="text-gray-600">
                    High-quality GLB components used throughout the villa for superior strength and aesthetics.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Luxury Interiors</h3>
                  <p className="text-gray-600">
                    Sophisticated interior design with custom GLB furniture and architectural elements.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Smart Home Integration</h3>
                  <p className="text-gray-600">
                    State-of-the-art smart home features integrated with GLB structural elements.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Project Gallery</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                    alt="Exterior View"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                    alt="Living Area"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                    alt="Master Suite"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-400 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
              alt="Background texture"
              width={1920}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                Ready to Create Your Luxury Home?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss how our premium GLB solutions can elevate your residential project.
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