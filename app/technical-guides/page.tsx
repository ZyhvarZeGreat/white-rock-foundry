import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const guides = [
  {
    id: "installation-guide",
    title: "GLB Installation Guide",
    description: "Comprehensive guide for installing GLB products in various applications",
    image: "/bamboo pic 5.jpg",
    category: "Installation",
    readTime: "15 min read"
  },
  {
    id: "maintenance-guide",
    title: "Maintenance & Care",
    description: "Best practices for maintaining and preserving GLB products",
    image: "/bamboo pic 4.jpg",
    category: "Maintenance",
    readTime: "10 min read"
  },
  {
    id: "technical-specifications",
    title: "Technical Specifications",
    description: "Detailed technical specifications for all GLB products",
    image: "/bamboo pic 3.jpg",
    category: "Specifications",
    readTime: "20 min read"
  },
  {
    id: "sustainability",
    title: "Sustainability & Certification",
    description: "Information about our sustainable practices and certifications",
    image: "/bamboo pic2.jpeg.jpg",
    category: "Sustainability",
    readTime: "8 min read"
  }
]

export default function TechnicalGuidesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Technical Guides
              </h1>
              <p className="text-lg mb-8">
                Comprehensive guides and documentation for GLB products
              </p>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide) => (
                <ScrollAnimation key={guide.id} type="fade-up">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="relative h-64">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-[#0a3b25] bg-[#0a3b25]/10 px-3 py-1 rounded-full">
                          {guide.category}
                        </span>
                        <span className="text-sm text-gray-500">{guide.readTime}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{guide.title}</h2>
                      <p className="text-gray-600 mb-6">{guide.description}</p>
                      <Link href={`/technical-guides/${guide.id}`}>
                        <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                          Read Guide
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        {/* <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Product Datasheets</h3>
                  <p className="text-gray-600 mb-4">
                    Download detailed technical specifications and product information.
                  </p>
                  <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                    Download
                  </Button>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Installation Videos</h3>
                  <p className="text-gray-600 mb-4">
                    Watch step-by-step installation guides for GLB products.
                  </p>
                  <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                    Watch Videos
                  </Button>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Technical Support</h3>
                  <p className="text-gray-600 mb-4">
                    Get expert assistance with your GLB product questions.
                  </p>
                  <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                    Contact Support
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 bg-yellow-400 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/bamboo pic.jpg"
              alt="Background texture"
              fill
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                Need Technical Assistance?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Our technical team is ready to help with your questions.
              </p>
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                Contact Technical Support
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 