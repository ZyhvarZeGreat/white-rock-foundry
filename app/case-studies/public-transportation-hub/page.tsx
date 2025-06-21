import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const projectDetails = [
  {
    category: "Project Overview",
    items: [
      { name: "Location", value: "Chicago, USA" },
      { name: "Year", value: "2023" },
      { name: "Category", value: "Infrastructure" },
      { name: "Client", value: "Chicago Transit Authority" }
    ]
  },
  {
    category: "GLB Products Used",
    items: [
      { name: "GLB Beams", value: "Structural elements" },
      { name: "GLB Panels", value: "Interior finishes" },
      { name: "GLB Decking", value: "Platform surfaces" },
      { name: "GLB Columns", value: "Support structures" }
    ]
  },
  {
    category: "Project Impact",
    items: [
      { name: "Energy Savings", value: "45%" },
      { name: "Carbon Reduction", value: "50%" },
      { name: "LEED Rating", value: "Platinum" },
      { name: "Daily Users", value: "50,000+" }
    ]
  }
]

const challenges = [
  {
    title: "Public Safety",
    description: "Ensuring durability and safety in a high-traffic public space",
    solution: "GLB products were specially treated for enhanced durability and fire resistance, meeting all public safety requirements."
  },
  {
    title: "Accessibility",
    description: "Creating an accessible environment for all users",
    solution: "GLB products were integrated with accessibility features, including slip-resistant surfaces and clear wayfinding."
  },
  {
    title: "Maintenance",
    description: "Minimizing maintenance requirements in a 24/7 facility",
    solution: "GLB products were selected for their low maintenance requirements and long-term durability in high-traffic areas."
  }
]

export default function PublicTransportationHubPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Public Transportation Hub
              </h1>
              <p className="text-lg mb-8">
                A sustainable transportation center in downtown Chicago
              </p>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/bamboo pic 5.jpg"
                  alt="Public Transportation Hub"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-gray-600 mb-6">
                  This state-of-the-art transportation hub demonstrates how sustainable materials 
                  can be effectively used in public infrastructure. The project showcases the 
                  versatility and durability of GLB products in a high-traffic public space while 
                  achieving significant environmental benefits.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>LEED Platinum certification</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>45% energy savings</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>50,000+ daily users</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>50% carbon reduction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectDetails.map((detail) => (
                <ScrollAnimation key={detail.category} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{detail.category}</h3>
                    <div className="space-y-4">
                      {detail.items.map((item) => (
                        <div key={item.name} className="flex justify-between">
                          <span className="text-gray-600">{item.name}</span>
                          <span className="font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Challenges & Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((challenge) => (
                <ScrollAnimation key={challenge.title} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
                    <p className="text-gray-600 mb-4">{challenge.description}</p>
                    <p className="text-[#0a3b25] font-medium">{challenge.solution}</p>
                  </div>
                </ScrollAnimation>
              ))}
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
                Ready to Transform Your Space?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss how GLB products can enhance your next project.
              </p>
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                Get a Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 