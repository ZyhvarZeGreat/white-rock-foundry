import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
            alt="Engineering facility"
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
              About <span className="text-yellow-400">White Rock Foundry</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="fade-up" delay={200}>
            <p className="text-white text-lg mb-8 max-w-2xl">
              A legacy of precision engineering excellence and innovative manufacturing solutions since 2005.
            </p>
          </ScrollAnimation>
          <ScrollAnimation type="fade-up" delay={400}>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-2">
              OUR CAPABILITIES
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
                  Pioneering precision engineering for over 15 years
                </h2>
                <p className="text-gray-600 mb-4">
                  White Rock Foundry was established in 2005 with a clear mission: to deliver precision-engineered
                  components that meet the most demanding specifications across industries. What began as a small
                  specialized foundry has grown into a comprehensive engineering and manufacturing facility serving
                  clients worldwide.
                </p>
                <p className="text-gray-600 mb-4">
                  Our journey has been defined by continuous innovation, investment in advanced technologies, and a
                  relentless commitment to quality. Today, we operate a state-of-the-art 75,000 square foot facility
                  equipped with the latest manufacturing technologies and staffed by a team of highly skilled engineers,
                  metallurgists, and production specialists.
                </p>
                <p className="text-gray-600">
                  Throughout our growth, we've maintained our founding principles: precision, reliability, and
                  partnership with our clients. We don't just manufacture components—we collaborate with our clients to
                  solve complex engineering challenges and deliver solutions that drive their success.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-left">
              <div className="relative">
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                    alt="Our facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-6 rounded-lg shadow-lg max-w-xs">
                  <p className="text-2xl font-bold mb-2">15+</p>
                  <p className="text-sm">Years of engineering excellence and innovation</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <ScrollAnimation type="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm text-[#0a3b25] font-medium mb-2">MISSION & VALUES</p>
              <h2 className="text-3xl font-bold mb-6 font-heading">Guided by excellence in everything we do</h2>
              <p className="text-gray-600">
                Our mission and values form the foundation of our company culture and guide our approach to every
                project and client relationship.
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
                  To deliver precision-engineered components and manufacturing solutions that exceed client
                  expectations, drive innovation, and set new standards for quality and performance in the industries we
                  serve.
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
                  To be the global leader in precision engineering and manufacturing, recognized for our technical
                  expertise, innovative solutions, and unwavering commitment to quality and customer satisfaction.
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
                  <li>• Excellence in everything we do</li>
                  <li>• Innovation that drives progress</li>
                  <li>• Integrity in all our relationships</li>
                  <li>• Collaboration with clients and partners</li>
                  <li>• Sustainability in our operations</li>
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
                Our leadership team brings decades of combined experience in engineering, metallurgy, manufacturing, and
                business management to guide our company's growth and innovation.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation type="fade-up">
              <div className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                    alt="CEO"
                    width={300}
                    height={400}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex space-x-3 mb-2">
                      <a href="#" className="text-white hover:text-yellow-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-yellow-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-lg">Robert Anderson</h3>
                  <p className="text-[#0a3b25]">Chief Executive Officer</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={100}>
              <div className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                    alt="CTO"
                    width={300}
                    height={400}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex space-x-3 mb-2">
                      <a href="#" className="text-white hover:text-yellow-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-yellow-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-lg">Emily Carter</h3>
                  <p className="text-[#0a3b25]">Chief Technology Officer</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                    alt="COO"
                    width={300}
                    height={400}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex space-x-3 mb-2">
                      <a href="#" className="text-white hover:text-yellow-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-yellow-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-lg">Sarah Johnson</h3>
                  <p className="text-[#0a3b25]">Chief Operations Officer</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <div className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                    alt="Director of Engineering"
                    width={300}
                    height={400}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex space-x-3 mb-2">
                      <a href="#" className="text-white hover:text-yellow-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-yellow-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-lg">Michael O'Connell</h3>
                  <p className="text-[#0a3b25]">Director of Engineering</p>
                </div>
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
                    src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                    alt="Manufacturing facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                    alt="CNC machining"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                    alt="Quality control"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
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
      <section className="section-padding bg-white">
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
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
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
                Contact us today to discuss your manufacturing needs and discover how White Rock Foundry can deliver the
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
