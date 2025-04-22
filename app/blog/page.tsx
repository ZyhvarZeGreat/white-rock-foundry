import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-[#0a3b25] text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              White Rock Foundry
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-yellow-300">
              HOME
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-300">
              ABOUT
            </Link>
            <Link href="/services" className="text-white hover:text-yellow-300">
              SERVICES
            </Link>
            <Link href="/projects" className="text-white hover:text-yellow-300">
              PORTFOLIO
            </Link>
            <Link href="#" className="text-white hover:text-yellow-300">
              ALL PAGES
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
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
                className="h-6 w-6"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-4 py-2">
              CONTACT
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        {/* Blog Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <p className="text-sm text-[#0a3b25] font-medium mb-2">ENGINEERING INSIGHTS</p>
              <h1 className="text-4xl font-bold mb-4 font-heading">
                Precision Engineering
                <br />& Manufacturing Excellence
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Blog Post 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                      alt="Precision Metal Casting Innovations"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-4">May 6, 2023</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      Precision Metal Casting Innovations: Breaking New Ground in Manufacturing
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Explore the latest advancements in precision metal casting technology and how they're
                      revolutionizing manufacturing processes.
                    </p>
                    <Link
                      href="/blog/precision-metal-casting-innovations"
                      className="text-[#0a3b25] font-medium hover:underline uppercase text-sm"
                    >
                      READ MORE →
                    </Link>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                      alt="Sustainable Manufacturing Practices"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-4">June 12, 2023</span>
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
                      READ MORE →
                    </Link>
                  </div>
                </div>

                {/* Blog Post 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                      alt="Digital Transformation in Engineering"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-4">July 23, 2023</span>
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
                      READ MORE →
                    </Link>
                  </div>
                </div>

                {/* Blog Post 4 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                      alt="Advanced Materials in Engineering"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-4">August 15, 2023</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      Advanced Materials in Engineering: Pushing the Boundaries of Performance
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover how innovative materials are enabling unprecedented performance in engineering
                      applications.
                    </p>
                    <Link
                      href="/blog/advanced-materials-in-engineering"
                      className="text-[#0a3b25] font-medium hover:underline uppercase text-sm"
                    >
                      READ MORE →
                    </Link>
                  </div>
                </div>

                {/* Blog Post 5 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="Quality Control in Precision Manufacturing"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-4">September 8, 2023</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      Quality Control in Precision Manufacturing: Ensuring Excellence at Every Step
                    </h3>
                    <p className="text-gray-600 mb-4">
                      How advanced quality control systems ensure perfection in precision manufacturing environments.
                    </p>
                    <Link
                      href="/blog/quality-control-in-precision-manufacturing"
                      className="text-[#0a3b25] font-medium hover:underline uppercase text-sm"
                    >
                      READ MORE →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                {/* Search */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <div className="flex flex-col space-y-4">
                    <Input
                      type="text"
                      placeholder="Enter search keyword"
                      className="border-gray-300 focus:border-[#0a3b25] focus:ring-[#0a3b25] rounded-sm"
                    />
                    <Button className="w-full bg-black hover:bg-black/90 text-white font-medium rounded-sm">
                      SEARCH
                    </Button>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="flex items-start space-x-3">
                        <div className="w-16 h-16 flex-shrink-0">
                          <Image
                            src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                            alt="Precision Metal Casting"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">May 6, 2023</p>
                          <Link
                            href="/blog/precision-metal-casting-innovations"
                            className="font-medium hover:text-[#0a3b25]"
                          >
                            Precision Metal Casting Innovations
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start space-x-3">
                        <div className="w-16 h-16 flex-shrink-0">
                          <Image
                            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                            alt="Sustainable Manufacturing"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">June 12, 2023</p>
                          <Link
                            href="/blog/sustainable-manufacturing-practices"
                            className="font-medium hover:text-[#0a3b25]"
                          >
                            Sustainable Manufacturing Practices
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start space-x-3">
                        <div className="w-16 h-16 flex-shrink-0">
                          <Image
                            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                            alt="Digital Transformation"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">July 23, 2023</p>
                          <Link
                            href="/blog/digital-transformation-in-engineering"
                            className="font-medium hover:text-[#0a3b25]"
                          >
                            Digital Transformation in Engineering
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start space-x-3">
                        <div className="w-16 h-16 flex-shrink-0">
                          <Image
                            src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                            alt="Advanced Materials"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">August 15, 2023</p>
                          <Link
                            href="/blog/advanced-materials-in-engineering"
                            className="font-medium hover:text-[#0a3b25]"
                          >
                            Advanced Materials in Engineering
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Categories */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Categories</h3>
                  <div className="space-y-2">
                    <Link
                      href="/blog/categories/manufacturing-technology"
                      className="inline-block bg-[#0a3b25] text-white text-sm px-3 py-1 rounded-sm mr-2 mb-2"
                    >
                      MANUFACTURING TECHNOLOGY
                    </Link>
                    <Link
                      href="/blog/categories/sustainability"
                      className="inline-block bg-[#0a3b25] text-white text-sm px-3 py-1 rounded-sm mr-2 mb-2"
                    >
                      SUSTAINABILITY
                    </Link>
                    <Link
                      href="/blog/categories/technology-innovation"
                      className="inline-block bg-[#0a3b25] text-white text-sm px-3 py-1 rounded-sm mr-2 mb-2"
                    >
                      TECHNOLOGY & INNOVATION
                    </Link>
                    <Link
                      href="/blog/categories/materials-science"
                      className="inline-block bg-[#0a3b25] text-white text-sm px-3 py-1 rounded-sm mr-2 mb-2"
                    >
                      MATERIALS SCIENCE
                    </Link>
                    <Link
                      href="/blog/categories/quality-assurance"
                      className="inline-block bg-[#0a3b25] text-white text-sm px-3 py-1 rounded-sm mr-2 mb-2"
                    >
                      QUALITY ASSURANCE
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                From concept to creation,
                <br />
                we've got <span className="underline">you covered</span>.
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to experience precision engineering solutions tailored to your manufacturing needs!
              </p>
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                GET STARTED
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-[#0a3b25] py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold mb-4">White Rock Foundry</h2>
            <p className="max-w-md mx-auto text-gray-600">
              Precision engineering solutions for modern manufacturing challenges
            </p>
            <div className="mt-6 max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a3b25] rounded-l-sm"
              />
              <Button className="bg-black hover:bg-black/90 text-white font-medium rounded-r-sm rounded-l-none">
                SUBSCRIBE
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/about" className="text-gray-600 hover:text-[#0a3b25]">
                ABOUT US
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-[#0a3b25]">
                PRICING
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-[#0a3b25]">
                SERVICES
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-[#0a3b25]">
                PORTFOLIO
              </Link>
              <Link href="/career" className="text-gray-600 hover:text-[#0a3b25]">
                CAREER
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-[#0a3b25]">
                FAQ
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-[#0a3b25]">
                SHOP
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#0a3b25]">
                CONTACT US
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              © 2023 White Rock Foundry. All Rights Reserved.{" "}
              <Link href="#" className="underline">
                Licensing
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
