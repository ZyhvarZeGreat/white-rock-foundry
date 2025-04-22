import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function PrecisionCastingPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0a3b25] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Precision Casting Services</h1>
            <p className="text-lg mb-8">
              Advanced casting solutions for complex components with exceptional accuracy and surface finish
            </p>
            <Link href="/quote">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-3">
                REQUEST A QUOTE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">Precision Casting Excellence</h2>
              <p className="mb-4 text-gray-700">
                White Rock Foundry specializes in advanced precision casting techniques that deliver complex metal
                components with exceptional dimensional accuracy, superior surface finish, and excellent mechanical
                properties.
              </p>
              <p className="mb-6 text-gray-700">
                Our state-of-the-art facilities and expert metallurgists enable us to produce castings that meet the
                most demanding specifications across aerospace, automotive, medical, and industrial applications.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Tight tolerances down to ±0.005"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Complex geometries with internal features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Wide range of alloys including aluminum, steel, and titanium</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Comprehensive quality control and material certification</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                alt="Precision Casting Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Casting Methods Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-heading">Our Casting Methods</h2>
            <p className="text-gray-700">
              We employ a variety of precision casting techniques to meet your specific requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Method 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#0a3b25] text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Investment Casting</h3>
              <p className="text-gray-700 mb-4">
                Also known as lost-wax casting, this process delivers exceptional surface finish and dimensional
                accuracy for complex components.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Ideal for intricate geometries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Excellent surface finish (32-125 RMS)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Tight tolerances (±0.005" for first inch)</span>
                </li>
              </ul>
            </div>

            {/* Method 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#0a3b25] text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Die Casting</h3>
              <p className="text-gray-700 mb-4">
                High-pressure die casting provides excellent dimensional consistency and is ideal for high-volume
                production.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Cost-effective for large production runs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Excellent dimensional stability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Thin wall capabilities (down to 0.5mm)</span>
                </li>
              </ul>
            </div>

            {/* Method 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#0a3b25] text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sand Casting</h3>
              <p className="text-gray-700 mb-4">
                Our advanced sand casting processes deliver superior results for large components and specialized
                alloys.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Suitable for large components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Wide range of alloy compatibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Cost-effective for low to medium volumes</span>
                </li>
              </ul>
            </div>

            {/* Method 4 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#0a3b25] text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Vacuum Casting</h3>
              <p className="text-gray-700 mb-4">
                Vacuum-assisted casting for exceptional quality in critical applications requiring minimal porosity.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Minimizes porosity and inclusions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Ideal for aerospace and medical components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Superior mechanical properties</span>
                </li>
              </ul>
            </div>

            {/* Method 5 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#0a3b25] text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Low-Pressure Casting</h3>
              <p className="text-gray-700 mb-4">
                Controlled filling process that delivers high-quality castings with minimal turbulence and gas
                entrapment.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Excellent for thin-walled components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Reduced porosity and shrinkage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Consistent mechanical properties</span>
                </li>
              </ul>
            </div>

            {/* Method 6 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 bg-[#0a3b25] text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Centrifugal Casting</h3>
              <p className="text-gray-700 mb-4">
                Specialized process for cylindrical components with excellent density and material properties.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Ideal for cylindrical or tubular parts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Superior density and mechanical properties</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Excellent for wear-resistant applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-heading text-center">Materials We Cast</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#0a3b25]">Aluminum Alloys</h3>
                <ul className="space-y-2">
                  <li>A356, A357</li>
                  <li>6061, 6063</li>
                  <li>7075, 7050</li>
                  <li>Custom alloys</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#0a3b25]">Steel Alloys</h3>
                <ul className="space-y-2">
                  <li>Carbon steels</li>
                  <li>Stainless steels (304, 316, 17-4PH)</li>
                  <li>Tool steels</li>
                  <li>High-temperature steels</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#0a3b25]">Copper Alloys</h3>
                <ul className="space-y-2">
                  <li>Brass (C260, C360)</li>
                  <li>Bronze (C954, C932)</li>
                  <li>Copper-nickel alloys</li>
                  <li>Beryllium copper</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#0a3b25]">Nickel Alloys</h3>
                <ul className="space-y-2">
                  <li>Inconel (718, 625)</li>
                  <li>Monel</li>
                  <li>Hastelloy</li>
                  <li>Waspaloy</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#0a3b25]">Titanium Alloys</h3>
                <ul className="space-y-2">
                  <li>Ti-6Al-4V</li>
                  <li>Ti-6Al-2Sn-4Zr-2Mo</li>
                  <li>Ti-5Al-2.5Sn</li>
                  <li>Custom titanium alloys</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#0a3b25]">Specialty Alloys</h3>
                <ul className="space-y-2">
                  <li>Cobalt-chrome alloys</li>
                  <li>Magnesium alloys</li>
                  <li>Zinc alloys</li>
                  <li>Custom developed alloys</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 font-heading">Quality Assurance</h2>
              <p className="mb-4 text-gray-700">
                At White Rock Foundry, quality is built into every step of our casting process. Our comprehensive
                quality control system ensures that every component meets or exceeds your specifications.
              </p>
              <p className="mb-6 text-gray-700">Our quality assurance processes include:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Advanced metrology using coordinate measuring machines (CMMs)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Non-destructive testing (X-ray, ultrasonic, dye penetrant)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Material composition verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Mechanical property testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0a3b25] mr-2 flex-shrink-0" />
                  <span>Comprehensive documentation and certification</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="Quality Control Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-heading">Industries We Serve</h2>
            <p className="text-gray-700">
              Our precision casting capabilities serve a wide range of industries with demanding requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-20 w-20 mx-auto mb-4">
                <Image
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                  alt="Aerospace"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Aerospace</h3>
              <p className="text-gray-700">
                High-performance components for aircraft engines, structural parts, and space applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-20 w-20 mx-auto mb-4">
                <Image
                  src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                  alt="Automotive"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Automotive</h3>
              <p className="text-gray-700">
                Precision components for engines, transmissions, and safety-critical systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-20 w-20 mx-auto mb-4">
                <Image
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                  alt="Medical"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Medical</h3>
              <p className="text-gray-700">
                Implantable devices, surgical instruments, and diagnostic equipment components.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-20 w-20 mx-auto mb-4">
                <Image
                  src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                  alt="Industrial"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Industrial</h3>
              <p className="text-gray-700">
                Durable components for heavy machinery, pumps, valves, and power generation equipment.
              </p>
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
              Ready to discuss your precision casting needs?
            </h2>
            <p className="mb-8 text-[#0a3b25]">
              Contact us today to speak with our engineering team about your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quote">
                <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3 w-full sm:w-auto">
                  REQUEST A QUOTE
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-white border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white font-medium rounded-sm px-8 py-3 w-full sm:w-auto"
                >
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
