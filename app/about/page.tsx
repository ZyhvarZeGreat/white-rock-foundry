import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import Link from "next/link"
import Address from "@/components/address"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/glubam4.png"
            alt="GLB manufacturing facility"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto relative z-10 py-24 md:py-36 container-padding">
          <ScrollAnimation type="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              About <span className="text-yellow-400">Verdant Lam</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="fade-up" delay={200}>
            <p className="text-white text-lg mb-8 max-w-2xl">
              Pioneering sustainable Glue Laminated Bamboo manufacturing in the UK, combining innovation with environmental responsibility.
            </p>
          </ScrollAnimation>
          <ScrollAnimation type="fade-up" delay={400}>
            <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-2">
              <Link href="/contact?ref=about">CONTACT US</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation type="fade-right">
              <div>
                <p className="text-sm text-[#0a3b25] font-medium mb-2">OUR STORY</p>
                <h2 className="text-3xl font-bold mb-6 font-heading">
                  Revolutionizing sustainable construction materials
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2023, our journey began with a vision to transform the construction industry through innovative, eco-friendly materials. We recognized the urgent need for sustainable alternatives to traditional building materials and set out to create something revolutionary.
                </p>
                <p className="text-gray-600">
                  Our team of experts in material science and sustainable engineering has developed proprietary techniques to create high-performance Glue Laminated Bamboo products that don't compromise on quality or environmental responsibility.
                </p>
                <p className="text-gray-600">
                  We've built a state-of-the-art manufacturing facility in the UK, equipped with advanced technology for processing and fabricating GLB products. Our facility is designed to meet the highest environmental standards while maintaining exceptional quality control.
                </p>
                <p className="text-gray-600">
                  Our commitment to sustainability extends beyond our products. We've established strong partnerships with bamboo farming cooperatives in Nigeria, ensuring ethical sourcing practices and supporting local communities. This dual focus on environmental responsibility and social impact defines our approach to business.
                </p>
              </div>
            </ScrollAnimation>
            {/* <ScrollAnimation type="fade-left">
              <div className="relative">
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="/glubam2.png"
                    alt="Our GLB manufacturing facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-6 rounded-lg shadow-lg max-w-xs">
                  <p className="text-2xl font-bold mb-2">5,000+</p>
                  <p className="text-sm">Cubic meters annual GLB production capacity</p>
                </div>
              </div>
            </ScrollAnimation> */}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <ScrollAnimation type="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm text-[#0a3b25] font-medium mb-2">MISSION & VALUES</p>
              <h2 className="text-3xl font-bold mb-6 font-heading">Guided by sustainability and excellence</h2>
              <p className="text-gray-600">
                Our mission and values form the foundation of our company culture and guide our approach to sustainable manufacturing and client relationships.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation type="fade-up">
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <div className="w-12 h-12 bg-[#0a3b25] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver sustainable, ethically sourced GLB products of the highest quality, promoting environmental responsibility and fostering economic growth in both Nigeria and the UK.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <div className="w-12 h-12 bg-[#0a3b25] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of sustainable GLB products in the UK and European markets, recognized for our commitment to environmental stewardship, ethical sourcing, and product innovation.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <div className="w-12 h-12 bg-[#0a3b25] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Environmental responsibility</li>
                  <li>• Ethical sourcing and fair trade</li>
                  <li>• Innovation in sustainable materials</li>
                  <li>• Quality and performance excellence</li>
                  <li>• Community development and support</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <ScrollAnimation type="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm text-[#0a3b25] font-medium mb-2">OUR LEADERSHIP</p>
              <h2 className="text-3xl font-bold mb-6 font-heading">Meet the team behind our success</h2>
              <p className="text-gray-600">
                Our dedicated leadership team brings together decades of combined experience in sustainable construction, 
                manufacturing, and business development. With a shared vision for environmental responsibility and 
                innovation, we're committed to driving the future of sustainable building materials.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Business Concept Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <ScrollAnimation type="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm text-[#0a3b25] font-medium mb-2">BUSINESS CONCEPT</p>
              <h2 className="text-3xl font-bold mb-6 font-heading">Revolutionizing Sustainable Construction</h2>
              <p className="text-gray-600">
                Pioneering eco-friendly GLB manufacturing in the UK, combining innovation with environmental responsibility.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation type="fade-up">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#0a3b25] rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Construction</h3>
                <p className="text-gray-600">
                  Structural beams, flooring, cladding, and decking for sustainable building projects.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#0a3b25] rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M20 7h-7m7 10h-7m7-5h-7M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Furniture</h3>
                <p className="text-gray-600">
                  Eco-friendly and bespoke furniture for residential and commercial spaces.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#0a3b25] rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Interior Design</h3>
                <p className="text-gray-600">
                  Decorative wall panels, ceilings, and custom design features.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation type="fade-right">
              <div>
                <p className="text-sm text-[#0a3b25] font-medium mb-2">MARKET ANALYSIS</p>
                <h2 className="text-3xl font-bold mb-6 font-heading">Growing Demand for Sustainable Materials</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0a3b25] font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Construction Sector</h3>
                      <p className="text-gray-600">Structural materials for green building projects</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0a3b25] font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Furniture Manufacturers</h3>
                      <p className="text-gray-600">Eco-conscious brands seeking sustainable alternatives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0a3b25] font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Interior Design Firms</h3>
                      <p className="text-gray-600">Decorative solutions for high-end spaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-left">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Market Trends</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[#0a3b25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Increased preference for renewable materials</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[#0a3b25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Growing government incentives for green building</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[#0a3b25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Rising consumer awareness about sustainability</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <ScrollAnimation type="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm text-[#0a3b25] font-medium mb-2">OUR IMPACT</p>
              <h2 className="text-3xl font-bold mb-6 font-heading">Creating Positive Change</h2>
              <p className="text-gray-600">
                Our commitment extends beyond business success to creating meaningful impact across environmental, economic, and social dimensions.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation type="fade-up">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#0a3b25] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Environmental Impact</h3>
                <p className="text-gray-600">
                  Reducing deforestation and contributing to global carbon reduction efforts through sustainable practices.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#0a3b25] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Economic Impact</h3>
                <p className="text-gray-600">
                  Creating jobs in Nigeria and the UK while empowering communities through fair-trade practices.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#0a3b25] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Social Impact</h3>
                <p className="text-gray-600">
                  Promoting sustainable construction practices and raising awareness about bamboo as a material of the future.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation type="fade-right">
              <div>
                <p className="text-sm text-[#0a3b25] font-medium mb-2">OUR FACILITIES</p>
                <h2 className="text-3xl font-bold mb-6 font-heading">State-of-the-art manufacturing capabilities</h2>
                <p className="text-gray-600 mb-4">
                  Our 75,000 square foot manufacturing facility houses the latest in precision engineering and
                  manufacturing technology. From advanced CNC machining centers to specialized casting equipment, we've
                  invested in the tools and technologies needed to deliver exceptional quality and precision.
                </p>
                <p className="text-gray-600 mb-4">
                  Our facility includes dedicated areas for design and engineering, prototype development, production
                  manufacturing, quality control, and finishing operations. This integrated approach allows us to manage
                  the entire manufacturing process in-house, ensuring consistent quality and efficient production.
                </p>
                <p className="text-gray-600 mb-6">
                  We continuously invest in new equipment and technologies to expand our capabilities and maintain our
                  position at the forefront of precision manufacturing.
                </p>
                <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-6 py-2">
                  EXPLORE OUR CAPABILITIES
                </Button>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-left">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/glubam2.png"
                    alt="Manufacturing facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/glubam8.png"
                    alt="CNC machining"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/glubam6.png"
                    alt="Quality control"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/glubam3.png"
                    alt="Engineering design"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/* <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <ScrollAnimation type="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm text-[#0a3b25] font-medium mb-2">CERTIFICATIONS & STANDARDS</p>
              <h2 className="text-3xl font-bold mb-6 font-heading">Quality assurance at every step</h2>
              <p className="text-gray-600">
                Our commitment to quality is backed by industry certifications and rigorous adherence to international
                standards.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation type="fade-up">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="ISO 9001"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">ISO 9001:2015</h3>
                <p className="text-gray-600">
                  Certified quality management system ensuring consistent processes and continuous improvement.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="AS9100"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">AS9100 Rev D</h3>
                <p className="text-gray-600">
                  Aerospace quality management system certification for manufacturing components for aviation, space,
                  and defense industries.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="ISO 13485"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">ISO 13485:2016</h3>
                <p className="text-gray-600">
                  Medical device quality management system certification for manufacturing components for medical
                  applications.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/glubam7.png"
            alt="Background texture"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto container-padding relative z-10">
          <ScrollAnimation type="zoom-in">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                Ready to partner with a leader in precision engineering?
              </h2>
              <p className="mb-8 text-[#0a3b25] text-lg">
                Contact us today to discuss your manufacturing needs and discover how Verdant Lam can deliver the
                precision components your projects demand.
              </p>
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                CONTACT US TODAY
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
