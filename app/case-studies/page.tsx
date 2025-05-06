import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const caseStudies = [
  {
    id: "commercial-office",
    title: "Modern Office Complex",
    description: "A sustainable office building featuring GLB beams and panels for structural support and interior finishes",
    image: "/bamboo pic 5.jpg",
    category: "Commercial",
    location: "New York, USA",
    year: "2023",
    link: "/case-studies/modern-office-complex"
  },
  {
    id: "residential-tower",
    title: "Luxury Residential Tower",
    description: "High-rise residential project utilizing GLB columns and decking for sustainable construction",
    image: "/bamboo pic 4.jpg",
    category: "Residential",
    location: "London, UK",
    year: "2023",
    link: "/case-studies/luxury-residential-tower"
  },
  {
    id: "industrial-park",
    title: "Sustainable Industrial Park",
    description: "Large-scale industrial facility showcasing GLB's versatility in heavy-duty applications",
    image: "/bamboo pic 3.jpg",
    category: "Industrial",
    location: "Singapore",
    year: "2022",
    link: "/case-studies/sustainable-industrial-park"
  },
  {
    id: "public-infrastructure",
    title: "Public Transportation Hub",
    description: "Major transportation center featuring GLB products in structural and aesthetic applications",
    image: "/bamboo pic2.jpeg.jpg",
    category: "Infrastructure",
    location: "Tokyo, Japan",
    year: "2023",
    link: "/case-studies/public-transportation-hub"
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Case Studies
              </h1>
              <p className="text-lg mb-8">
                Explore our successful GLB implementations across various sectors
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <ScrollAnimation key={study.id} type="fade-up">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="relative h-64">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-[#0a3b25] bg-[#0a3b25]/10 px-3 py-1 rounded-full">
                          {study.category}
                        </span>
                        <span className="text-sm text-gray-500">{study.year}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{study.location}</span>
                        <Link href={study.link}>
                          <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Project Categories */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Project Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-bold mb-4">Commercial</h3>
                  <p className="text-gray-600">
                    Office buildings, retail spaces, and commercial complexes
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-bold mb-4">Residential</h3>
                  <p className="text-gray-600">
                    Apartments, houses, and residential developments
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-bold mb-4">Industrial</h3>
                  <p className="text-gray-600">
                    Factories, warehouses, and industrial facilities
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-bold mb-4">Infrastructure</h3>
                  <p className="text-gray-600">
                    Public buildings, transportation hubs, and infrastructure projects
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

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
                Start Your Project
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Let's discuss how GLB products can enhance your next project
              </p>
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 