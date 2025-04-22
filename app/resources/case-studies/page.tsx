import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CaseStudiesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0a3b25] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Case Studies</h1>
            <p className="text-lg mb-8">
              Explore how our precision engineering solutions have helped clients overcome complex manufacturing
              challenges
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                  alt="Aerospace Component Optimization"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">AEROSPACE</div>
                <h3 className="text-xl font-bold mb-3">Aerospace Component Optimization</h3>
                <p className="text-gray-600 mb-4">
                  How we reduced weight by 30% while increasing durability for critical aerospace components.
                </p>
                <Link href="/resources/case-studies/aerospace-component-optimization">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Case Study
                  </Button>
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image
                  src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                  alt="Automotive Transmission Redesign"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">AUTOMOTIVE</div>
                <h3 className="text-xl font-bold mb-3">Automotive Transmission Redesign</h3>
                <p className="text-gray-600 mb-4">
                  Redesigning a transmission system to improve efficiency and reduce manufacturing costs.
                </p>
                <Link href="/resources/case-studies/automotive-transmission-redesign">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Case Study
                  </Button>
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                  alt="Medical Device Precision Manufacturing"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">MEDICAL</div>
                <h3 className="text-xl font-bold mb-3">Medical Device Precision Manufacturing</h3>
                <p className="text-gray-600 mb-4">
                  Achieving micron-level precision for critical medical implant components.
                </p>
                <Link href="/resources/case-studies/medical-device-precision">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Case Study
                  </Button>
                </Link>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image
                  src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                  alt="Industrial Equipment Durability Enhancement"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">INDUSTRIAL</div>
                <h3 className="text-xl font-bold mb-3">Industrial Equipment Durability Enhancement</h3>
                <p className="text-gray-600 mb-4">
                  Extending equipment lifespan by 40% through advanced material selection and design optimization.
                </p>
                <Link href="/resources/case-studies/industrial-equipment-durability">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Case Study
                  </Button>
                </Link>
              </div>
            </div>

            {/* Case Study 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                  alt="Sustainable Manufacturing Implementation"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">
                  SUSTAINABILITY
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainable Manufacturing Implementation</h3>
                <p className="text-gray-600 mb-4">
                  Reducing environmental impact while maintaining quality and efficiency in manufacturing processes.
                </p>
                <Link href="/resources/case-studies/sustainable-manufacturing">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Case Study
                  </Button>
                </Link>
              </div>
            </div>

            {/* Case Study 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Quality Control System Implementation"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#0a3b25] text-white text-xs px-2 py-1 rounded-sm mb-3">
                  QUALITY ASSURANCE
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Control System Implementation</h3>
                <p className="text-gray-600 mb-4">
                  Implementing an advanced quality control system that reduced defects by 85%.
                </p>
                <Link href="/resources/case-studies/quality-control-implementation">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white"
                  >
                    Read Case Study
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
              Ready to solve your engineering challenges?
            </h2>
            <p className="mb-8 text-[#0a3b25]">
              Contact us today to discuss how our precision engineering solutions can help your business.
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
