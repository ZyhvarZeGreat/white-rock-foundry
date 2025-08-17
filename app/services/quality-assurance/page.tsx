import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function QualityAssurancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/pexels-roger-ben-323520146-18446420.jpg"
              alt="Quality assurance"
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
                Quality Assurance
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                Comprehensive quality control and testing services ensuring the highest standards in GLB manufacturing.
              </p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-2">
                GET A QUOTE
              </Button>
            </ScrollAnimation>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation type="fade-right">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-heading">Our Quality Commitment</h2>
                  <p className="text-gray-600 mb-4">
                    At Verdantlam, we maintain rigorous quality control standards throughout our GLB manufacturing 
                    process. Our comprehensive quality assurance program ensures that every product meets or exceeds 
                    industry standards and customer expectations.
                  </p>
                  <p className="text-gray-600">
                    From raw material selection to final product testing, we implement strict quality control measures 
                    to guarantee the durability, safety, and performance of our GLB products.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                    alt="Quality control process"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Our Quality Services</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Material Testing</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive testing of raw materials and finished products to ensure quality and performance.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Strength testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Durability assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Material composition</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Process Control</h3>
                  <p className="text-gray-600 mb-4">
                    Strict monitoring and control of manufacturing processes to maintain consistent quality.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Production monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Process optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Quality documentation</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Certification</h3>
                  <p className="text-gray-600 mb-4">
                    Industry-standard certifications and compliance verification for all GLB products.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>ISO certification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Safety standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Environmental compliance</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Our Quality Standards</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Manufacturing Standards</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>ISO 9001:2015 certified manufacturing processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Strict quality control at every production stage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Comprehensive testing and inspection protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Documented quality management system</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Product Standards</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Compliance with international building codes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Environmental sustainability certification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Fire resistance and safety standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Performance testing and validation</span>
                    </li>
                  </ul>
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
                Ready to ensure quality in your GLB project?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to learn more about our quality assurance services and how we can help maintain the highest standards in your GLB manufacturing.
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