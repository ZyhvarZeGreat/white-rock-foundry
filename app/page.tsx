import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { DesktopNav } from "@/components/desktop-nav"
import { MobileMenu } from "@/components/mobile-menu"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-[#0a3b25] text-white sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 container-padding">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              White Rock Foundry
            </Link>
          </div>
          <DesktopNav />
          <div className="flex items-center space-x-4">
            <ShoppingCart className="h-5 w-5" />
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-4 py-2 hidden md:flex">
              GET A QUOTE
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
              alt="Industrial manufacturing facility"
              width={1920}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="container mx-auto relative z-10 py-20 md:py-32 container-padding">
            <div className="max-w-2xl">
              <ScrollAnimation type="fade-up">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                  Precision <span className="text-yellow-400">engineering</span>
                  <br />
                  for modern manufacturing
                </h1>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={200}>
                <p className="text-white mb-8 max-w-md">
                  Delivering innovative metal casting and precision engineering solutions for industries that demand
                  excellence
                </p>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={400}>
                <div className="flex space-x-4">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-2">
                    GET STARTED
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-sm">
                    LEARN MORE
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <ScrollAnimation type="fade-up">
                <div>
                  <p className="text-3xl font-bold text-[#0a3b25]">500+</p>
                  <p className="text-gray-600">Projects completed</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={100}>
                <div>
                  <p className="text-3xl font-bold text-[#0a3b25]">15+</p>
                  <p className="text-gray-600">Years of experience</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={200}>
                <div>
                  <p className="text-3xl font-bold text-[#0a3b25]">30+</p>
                  <p className="text-gray-600">Industries served</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={300}>
                <div>
                  <p className="text-3xl font-bold text-[#0a3b25]">99.8%</p>
                  <p className="text-gray-600">Quality assurance rate</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto container-padding">
            <ScrollAnimation type="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 font-heading">
                Comprehensive solutions for
                <br />
                precision manufacturing
              </h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="bg-[#0a3b25] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Precision Metal Casting</h3>
                  <p className="text-gray-600 mb-4">
                    State-of-the-art metal casting services with exceptional precision and quality for complex
                    components across industries.
                  </p>
                  <Link href="/services" className="text-[#0a3b25] font-medium hover:underline uppercase text-sm">
                    Learn more →
                  </Link>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="bg-[#0a3b25] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">CNC Machining & Finishing</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced CNC machining capabilities for tight-tolerance components with superior surface finishes
                    and dimensional accuracy.
                  </p>
                  <Link href="/services" className="text-[#0a3b25] font-medium hover:underline uppercase text-sm">
                    Learn more →
                  </Link>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="bg-[#0a3b25] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Engineering & Design</h3>
                  <p className="text-gray-600 mb-4">
                    Collaborative engineering services to optimize designs for manufacturability, performance, and
                    cost-effectiveness.
                  </p>
                  <Link href="/services" className="text-[#0a3b25] font-medium hover:underline uppercase text-sm">
                    Learn more →
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#0a3b25] text-white flex items-center justify-center">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-[#0a3b25] text-white section-padding">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <ScrollAnimation type="fade-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                    Our mission is precision and
                    <br />
                    excellence in every component!
                  </h2>
                </ScrollAnimation>
                <ScrollAnimation type="fade-right" delay={200}>
                  <p className="mb-8 text-gray-300">
                    We are dedicated to delivering the highest quality precision-engineered components through
                    innovative manufacturing processes and unwavering commitment to excellence.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation type="fade-right" delay={400}>
                  <div className="relative">
                    <Image
                      src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                      alt="Precision manufacturing process"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </ScrollAnimation>
              </div>
              <div className="space-y-6">
                <ScrollAnimation type="fade-left">
                  <div className="flex gap-4">
                    <div className="text-yellow-400 mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 12L11 14L15 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Engineering expertise</h3>
                      <p className="text-gray-300">
                        Our team of experienced engineers and metallurgists brings decades of specialized knowledge to
                        every project, ensuring optimal design and manufacturing solutions.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation type="fade-left" delay={100}>
                  <div className="flex gap-4">
                    <div className="text-yellow-400 mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 12L11 14L15 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Advanced technology</h3>
                      <p className="text-gray-300">
                        We invest in cutting-edge manufacturing technology and equipment to deliver components with
                        exceptional precision, consistency, and quality.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation type="fade-left" delay={200}>
                  <div className="flex gap-4">
                    <div className="text-yellow-400 mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 12L11 14L15 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Quality assurance</h3>
                      <p className="text-gray-300">
                        Our comprehensive quality control systems and rigorous testing protocols ensure that every
                        component meets or exceeds the most demanding specifications.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation type="fade-left" delay={300}>
                  <div className="flex gap-4">
                    <div className="text-yellow-400 mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 12L11 14L15 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Sustainable manufacturing</h3>
                      <p className="text-gray-300">
                        We are committed to environmentally responsible manufacturing practices, implementing
                        energy-efficient processes and material recycling throughout our operations.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation type="fade-left" delay={400}>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-2 mt-4">
                    LEARN MORE
                  </Button>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto container-padding">
            <ScrollAnimation type="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 font-heading">
                The team driving our
                <br />
                engineering excellence
              </h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <ScrollAnimation type="fade-up">
                <div className="bg-white overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                      alt="Team member"
                      width={250}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-[#0a3b25] text-white">
                    <h3 className="font-bold">Mike Jones</h3>
                    <p className="text-sm text-gray-300">Chief Engineering Officer</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={100}>
                <div className="bg-white overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                      alt="Team member"
                      width={250}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-[#0a3b25] text-white">
                    <h3 className="font-bold">Emily Carter</h3>
                    <p className="text-sm text-gray-300">Production Director</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                      alt="Team member"
                      width={250}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-[#0a3b25] text-white">
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-300">Quality Assurance Manager</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={300}>
                <div className="bg-white overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                      alt="Team member"
                      width={250}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-[#0a3b25] text-white">
                    <h3 className="font-bold">Michael O'Connell</h3>
                    <p className="text-sm text-gray-300">R&D Lead</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto container-padding">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <ScrollAnimation type="fade-right">
                <div>
                  <p className="text-sm text-[#0a3b25] font-medium mb-2">OUR PROJECTS</p>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading">
                    Engineering excellence,
                    <br />
                    one project at a time
                  </h2>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left">
                <Button
                  variant="outline"
                  className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm mt-4 md:mt-0"
                >
                  SEE ALL PROJECTS
                </Button>
              </ScrollAnimation>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                      alt="Aerospace component manufacturing"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Aerospace component manufacturing</h3>
                    <p className="text-gray-600 mb-4">
                      Precision-engineered components for the aerospace industry, meeting rigorous quality and
                      performance standards.
                    </p>
                    <Link href="/projects" className="text-[#0a3b25] font-medium hover:underline uppercase text-sm">
                      Read more →
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="Automotive powertrain components"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Automotive powertrain components</h3>
                    <p className="text-gray-600 mb-4">
                      High-performance engine and transmission components engineered for durability and efficiency in
                      demanding automotive applications.
                    </p>
                    <Link href="/projects" className="text-[#0a3b25] font-medium hover:underline uppercase text-sm">
                      Read more →
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                      alt="Medical device components"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Medical device components</h3>
                    <p className="text-gray-600 mb-4">
                      Ultra-precise components for medical devices and surgical instruments, manufactured in our ISO
                      13485 certified facility.
                    </p>
                    <Link href="/projects" className="text-[#0a3b25] font-medium hover:underline uppercase text-sm">
                      Read more →
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-padding bg-yellow-50">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto text-center relative">
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <ScrollAnimation type="fade-up">
                <div>
                  <p className="text-sm text-[#0a3b25] font-medium mb-4">WHAT OUR CLIENTS SAY</p>
                  <blockquote className="text-xl md:text-2xl font-medium mb-6 text-[#0a3b25]">
                    "White Rock Foundry's engineering expertise and precision manufacturing capabilities have been
                    instrumental in the success of our latest product line. Their team consistently delivers components
                    that exceed our specifications."
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <Image
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                        alt="Testimonial author"
                        width={50}
                        height={50}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-bold">Thomas R.</p>
                      <p className="text-sm text-gray-600">Director of Engineering, AeroTech Industries</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto container-padding">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <ScrollAnimation type="fade-right">
                <div>
                  <p className="text-sm text-[#0a3b25] font-medium mb-2">OUR BLOG ARTICLES</p>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Insights on precision
                    <br />
                    engineering & manufacturing
                  </h2>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left">
                <Button
                  variant="outline"
                  className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm mt-4 md:mt-0"
                >
                  SEE ALL ARTICLES
                </Button>
              </ScrollAnimation>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                      alt="Blog post image"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-4">May 6, 2023</span>
                      <span>5 min read</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Precision Metal Casting Innovations: Breaking New Ground</h3>
                    <p className="text-gray-600 mb-4">
                      Explore the latest advancements in precision metal casting technology and how they're
                      revolutionizing manufacturing processes.
                    </p>
                    <Link
                      href="/blog/precision-metal-casting-innovations"
                      className="text-[#0a3b25] font-medium hover:underline uppercase text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                      alt="Blog post image"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-4">June 12, 2023</span>
                      <span>4 min read</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      Sustainable Manufacturing Practices in Modern Foundry Operations
                    </h3>
                    <p className="text-gray-600 mb-4">
                      How modern foundries are implementing eco-friendly practices while maintaining high-quality
                      production standards.
                    </p>
                    <Link
                      href="/blog/sustainable-manufacturing-practices"
                      className="text-[#0a3b25] font-medium hover:underline uppercase text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                      alt="Blog post image"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-4">July 23, 2023</span>
                      <span>6 min read</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      Digital Transformation in Engineering: Revolutionizing Design and Production
                    </h3>
                    <p className="text-gray-600 mb-4">
                      How digital technologies are transforming engineering processes from design through production.
                    </p>
                    <Link
                      href="/blog/digital-transformation-in-engineering"
                      className="text-[#0a3b25] font-medium hover:underline uppercase text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
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
                  From concept to creation,
                  <br />
                  we've got <span className="underline">you covered</span>
                </h2>
                <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                  GET IN TOUCH
                </Button>
              </div>
            </ScrollAnimation>
          </div>
          <button className="absolute right-8 bottom-8 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
            <ChevronRight className="h-6 w-6" />
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a3b25] text-white py-12">
        <div className="container mx-auto container-padding">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">White Rock Foundry</h2>
            <p className="max-w-md text-gray-300">
              Precision engineering solutions for modern manufacturing challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-b border-gray-700">
            <div>
              <h3 className="font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-300 hover:text-white">
                    Our team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">SERVICES</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white">
                    Precision Casting
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white">
                    CNC Machining
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white">
                    Engineering Design
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white">
                    Quality Assurance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-gray-300 hover:text-white">
                    Case studies
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-gray-300 hover:text-white">
                    Technical guides
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/legal" className="text-gray-300 hover:text-white">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-gray-300 hover:text-white">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-gray-300 hover:text-white">
                    Cookie policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 White Rock Foundry. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
