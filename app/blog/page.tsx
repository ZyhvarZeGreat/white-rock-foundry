import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
   

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

        <ScrollAnimation type="fade-up">
          <h1 className="text-4xl font-bold text-center mb-4 font-heading">Our Blog</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Stay informed about the latest developments in sustainable GLB manufacturing, green building practices,
            and environmental responsibility in construction and design.
          </p>
        </ScrollAnimation>

        {/* Featured Post */}
        <ScrollAnimation type="fade-up">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <Image
                  src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                  alt="Featured post"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-[#0a3b25] font-medium">FEATURED</span>
                  <span className="text-sm text-gray-500">March 15, 2024</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  The Future of Sustainable Construction: GLB's Role in Green Building
                </h2>
                <p className="text-gray-600 mb-6">
                  Explore how Glue Laminated Bamboo is revolutionizing sustainable construction practices and
                  contributing to the global push for environmentally responsible building materials.
                </p>
                <Link
                  href="/blog/the-future-of-sustainable-construction"
                  className="text-[#0a3b25] font-medium hover:underline uppercase text-sm flex items-center"
                >
                  READ MORE <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Post 1 */}
          <ScrollAnimation type="fade-up">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                  alt="Blog post 1"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-[#0a3b25] font-medium">SUSTAINABILITY</span>
                  <span className="text-sm text-gray-500">March 10, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Ethical Sourcing: The Journey of Our Bamboo from Nigeria to the UK
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how we ensure ethical and sustainable sourcing of bamboo from our partner farms in Nigeria.
                </p>
                <Link
                  href="/blog/ethical-sourcing-bamboo"
                  className="text-[#0a3b25] font-medium hover:underline uppercase text-sm flex items-center"
                >
                  READ MORE <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* Post 2 */}
          <ScrollAnimation type="fade-up" delay={200}>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                  alt="Blog post 2"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-[#0a3b25] font-medium">TECHNOLOGY</span>
                  <span className="text-sm text-gray-500">March 5, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Advanced GLB Manufacturing: Our State-of-the-Art UK Facility
                </h3>
                <p className="text-gray-600 mb-4">
                  A behind-the-scenes look at our advanced manufacturing processes and quality control systems.
                </p>
                <Link
                  href="/blog/advanced-glb-manufacturing"
                  className="text-[#0a3b25] font-medium hover:underline uppercase text-sm flex items-center"
                >
                  READ MORE <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* Post 3 */}
          <ScrollAnimation type="fade-up" delay={400}>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg"
                  alt="Blog post 3"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-[#0a3b25] font-medium">DESIGN</span>
                  <span className="text-sm text-gray-500">February 28, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Innovative GLB Applications in Modern Interior Design
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploring creative ways to incorporate GLB products in contemporary interior spaces.
                </p>
                <Link
                  href="/blog/innovative-glb-applications"
                  className="text-[#0a3b25] font-medium hover:underline uppercase text-sm flex items-center"
                >
                  READ MORE <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </main>

  
    </div>
  )
}
