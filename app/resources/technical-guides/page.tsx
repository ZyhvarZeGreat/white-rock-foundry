import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function TechnicalGuidesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0a3b25] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Technical Guides</h1>
            <p className="text-lg mb-8">
              In-depth resources to help you understand precision engineering concepts and best practices
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search technical guides..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white">
              All Guides
            </Button>
            <Button variant="outline" className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white">
              Materials Science
            </Button>
            <Button variant="outline" className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white">
              Manufacturing Processes
            </Button>
            <Button variant="outline" className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white">
              Quality Control
            </Button>
            <Button variant="outline" className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white">
              Design Principles
            </Button>
            <Button variant="outline" className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white">
              Industry Standards
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Guides Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Guide 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                  alt="Understanding Metal Alloys"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">
                  MATERIALS SCIENCE
                </div>
                <h3 className="text-xl font-bold mb-3">Understanding Metal Alloys for Precision Engineering</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to selecting the right metal alloys for different engineering applications.
                </p>
                <Link href="/resources/technical-guides/understanding-metal-alloys">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Guide
                  </Button>
                </Link>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                  alt="CNC Machining Best Practices"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">
                  MANUFACTURING PROCESSES
                </div>
                <h3 className="text-xl font-bold mb-3">CNC Machining Best Practices for Complex Components</h3>
                <p className="text-gray-600 mb-4">
                  Expert techniques for achieving precision and efficiency in CNC machining operations.
                </p>
                <Link href="/resources/technical-guides/cnc-machining-best-practices">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Guide
                  </Button>
                </Link>
              </div>
            </div>

            {/* Guide 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                  alt="Quality Control Systems"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">
                  QUALITY CONTROL
                </div>
                <h3 className="text-xl font-bold mb-3">Implementing Effective Quality Control Systems</h3>
                <p className="text-gray-600 mb-4">
                  A step-by-step guide to establishing robust quality control processes in manufacturing.
                </p>
                <Link href="/resources/technical-guides/quality-control-systems">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Guide
                  </Button>
                </Link>
              </div>
            </div>

            {/* Guide 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                  alt="Design for Manufacturing"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">
                  DESIGN PRINCIPLES
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Design for Manufacturing: Optimizing Components for Production
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to design components that are both functional and efficiently manufacturable.
                </p>
                <Link href="/resources/technical-guides/design-for-manufacturing">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Guide
                  </Button>
                </Link>
              </div>
            </div>

            {/* Guide 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                  alt="Industry Standards"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">
                  INDUSTRY STANDARDS
                </div>
                <h3 className="text-xl font-bold mb-3">Navigating Aerospace Manufacturing Standards</h3>
                <p className="text-gray-600 mb-4">
                  A detailed overview of key standards and certifications for aerospace component manufacturing.
                </p>
                <Link href="/resources/technical-guides/aerospace-standards">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Guide
                  </Button>
                </Link>
              </div>
            </div>

            {/* Guide 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Advanced Metrology"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">
                  QUALITY CONTROL
                </div>
                <h3 className="text-xl font-bold mb-3">Advanced Metrology Techniques for Precision Measurement</h3>
                <p className="text-gray-600 mb-4">
                  Exploring cutting-edge measurement technologies for ensuring component accuracy.
                </p>
                <Link href="/resources/technical-guides/advanced-metrology">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Guide
                  </Button>
                </Link>
              </div>
            </div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">Need custom engineering expertise?</h2>
            <p className="mb-8 text-[#0a3b25]">
              Our team of experts can provide tailored solutions for your specific manufacturing challenges.
            </p>
            <Link href="/quote">
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                GET A QUOTE
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
