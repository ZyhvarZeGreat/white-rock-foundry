import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
              alt="Blog"
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
                Blog
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                Stay updated with the latest news, insights, and trends in GLB manufacturing and construction.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Latest Articles</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <ScrollAnimation type="fade-up">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="GLB manufacturing trends"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Latest Trends in GLB Manufacturing</h3>
                    <p className="text-gray-600 mb-4">
                      Explore the cutting-edge developments and innovations shaping the future of GLB manufacturing.
                    </p>
                    <Link href="/resources/blog/glb-manufacturing-trends">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Blog Post 2 */}
              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="Sustainable construction"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Sustainable Construction with GLB</h3>
                    <p className="text-gray-600 mb-4">
                      Learn how GLB materials are contributing to sustainable building practices and environmental conservation.
                    </p>
                    <Link href="/resources/blog/sustainable-construction">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Blog Post 3 */}
              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="GLB case study"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">GLB Success Story: Major Infrastructure Project</h3>
                    <p className="text-gray-600 mb-4">
                      A detailed case study of how GLB solutions were implemented in a large-scale infrastructure project.
                    </p>
                    <Link href="/resources/blog/infrastructure-case-study">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Browse by Category</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Industry News</h3>
                  <p className="text-gray-600 mb-4">
                    Stay informed about the latest developments and trends in the GLB manufacturing industry.
                  </p>
                  <Link href="/resources/blog/category/industry-news">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View Articles
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Technical Insights</h3>
                  <p className="text-gray-600 mb-4">
                    Deep dive into the technical aspects of GLB manufacturing and applications.
                  </p>
                  <Link href="/resources/blog/category/technical-insights">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View Articles
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Case Studies</h3>
                  <p className="text-gray-600 mb-4">
                    Real-world examples of GLB solutions in action across various projects and industries.
                  </p>
                  <Link href="/resources/blog/category/case-studies">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View Articles
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
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
                Stay Updated with Our Newsletter
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Subscribe to our newsletter to receive the latest articles, industry news, and updates directly in your inbox.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0a3b25]"
                />
                <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-2">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 