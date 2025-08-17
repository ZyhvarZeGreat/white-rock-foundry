import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CaseStudyDetailPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0a3b25] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/resources/case-studies"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-400 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Aerospace Component Optimization</h1>
            <p className="text-lg mb-6">
              How we reduced weight by 30% while increasing durability for critical aerospace components
            </p>
            <div className="flex items-center text-sm">
              <span className="mr-4">Client: Major Aerospace Manufacturer</span>
              <span>Industry: Aerospace</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                alt="Aerospace Component Optimization"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="mb-4">
                Our client, a leading aerospace manufacturer, approached us with a critical challenge: they needed to
                reduce the weight of key structural components in their next-generation aircraft without compromising
                safety or durability. The existing components were reliable but contributed significantly to the
                aircraft's overall weight, affecting fuel efficiency and operational costs.
              </p>
              <p className="mb-4">The specific requirements included:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Minimum 20% weight reduction from current components</li>
                <li>Equal or improved durability under extreme conditions</li>
                <li>Compliance with all aerospace safety regulations</li>
                <li>Cost-effective manufacturing process suitable for scale production</li>
                <li>Minimal disruption to existing assembly processes</li>
              </ul>
              <p>
                Additionally, the timeline was tight – the redesigned components needed to be ready for testing within
                six months to meet the aircraft development schedule.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="mb-4">
                We assembled a multidisciplinary team of metallurgists, structural engineers, and manufacturing
                specialists to tackle this challenge. Our approach combined advanced materials science, innovative
                design techniques, and cutting-edge manufacturing processes.
              </p>
              <p className="mb-4">Key elements of our approach included:</p>
              <ol className="list-decimal pl-6 mb-4 space-y-4">
                <li>
                  <strong>Comprehensive Analysis:</strong> We began with a detailed analysis of the existing components,
                  identifying areas where material could be reduced without compromising structural integrity. Using
                  finite element analysis (FEA), we simulated various stress scenarios to understand the components'
                  performance under different conditions.
                </li>
                <li>
                  <strong>Advanced Material Selection:</strong> We explored several advanced alloys and composites,
                  eventually selecting a titanium-aluminum alloy that offered an exceptional strength-to-weight ratio.
                  This material provided the necessary durability while significantly reducing weight.
                </li>
                <li>
                  <strong>Topology Optimization:</strong> Using AI-driven topology optimization software, we redesigned
                  the components to use material only where structurally necessary. This approach resulted in organic,
                  lightweight structures that maintained required strength characteristics.
                </li>
                <li>
                  <strong>Additive Manufacturing:</strong> To produce these complex geometries, we employed advanced
                  metal 3D printing techniques. This allowed us to create components that would be impossible to
                  manufacture using traditional methods.
                </li>
                <li>
                  <strong>Rigorous Testing:</strong> We conducted extensive physical testing, subjecting prototypes to
                  conditions exceeding normal operational requirements to ensure safety and reliability.
                </li>
              </ol>
              <p>
                Throughout the process, we maintained close collaboration with the client's engineering team, providing
                regular updates and incorporating their feedback into our design iterations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-4">The Results</h2>
              <p className="mb-4">Our solution exceeded the client's expectations, delivering:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>30% weight reduction</strong> from the original components, surpassing the 20% target
                </li>
                <li>
                  <strong>15% improvement in durability</strong> under extreme temperature and stress conditions
                </li>
                <li>
                  <strong>Full compliance</strong> with all relevant aerospace safety regulations
                </li>
                <li>
                  <strong>Scalable manufacturing process</strong> suitable for production volumes
                </li>
                <li>
                  <strong>Seamless integration</strong> with existing assembly processes
                </li>
              </ul>
              <p className="mb-4">
                The redesigned components were delivered within the six-month timeframe and successfully passed all
                testing phases. The client has since incorporated these components into their new aircraft design, which
                is projected to achieve a 4% improvement in fuel efficiency partly due to our weight-saving
                contribution.
              </p>
              <p>
                Additionally, the manufacturing techniques developed during this project have been applied to other
                components, creating further weight savings and performance improvements across the aircraft.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#0a3b25] pl-4 italic mb-4">
                "Verdantlam's innovative approach to our weight reduction challenge delivered results that
                exceeded our expectations. Their team's expertise in materials science and advanced manufacturing
                techniques was evident throughout the project. The redesigned components not only met our weight targets
                but also improved durability – a rare combination. We're now exploring additional opportunities to work
                with them on other critical components."
              </blockquote>
              <p className="text-right font-medium">— Director of Engineering, Major Aerospace Manufacturer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                    alt="Automotive Transmission Redesign"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Automotive Transmission Redesign</h3>
                  <Link
                    href="/resources/case-studies/automotive-transmission-redesign"
                    className="text-[#0a3b25] hover:underline text-sm"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                    alt="Medical Device Precision Manufacturing"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Medical Device Precision Manufacturing</h3>
                  <Link
                    href="/resources/case-studies/medical-device-precision"
                    className="text-[#0a3b25] hover:underline text-sm"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                    alt="Sustainable Manufacturing Implementation"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Sustainable Manufacturing Implementation</h3>
                  <Link
                    href="/resources/case-studies/sustainable-manufacturing"
                    className="text-[#0a3b25] hover:underline text-sm"
                  >
                    Read Case Study →
                  </Link>
                </div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">Have a similar challenge?</h2>
            <p className="mb-8 text-[#0a3b25]">
              Our team of experts is ready to help you find innovative solutions to your engineering and manufacturing
              challenges.
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
