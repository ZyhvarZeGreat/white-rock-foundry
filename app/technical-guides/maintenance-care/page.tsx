import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const maintenanceProcedures = [
  {
    title: "Regular Cleaning",
    items: [
      "Use soft, dry cloth for daily dusting",
      "Clean with mild soap and water solution",
      "Avoid harsh chemicals and abrasive cleaners",
      "Dry thoroughly after cleaning"
    ]
  },
  {
    title: "Preventive Maintenance",
    items: [
      "Inspect for signs of wear or damage",
      "Check for loose fasteners",
      "Monitor moisture levels",
      "Maintain proper ventilation"
    ]
  },
  {
    title: "Seasonal Care",
    items: [
      "Adjust maintenance for weather conditions",
      "Protect from direct sunlight",
      "Monitor humidity levels",
      "Apply protective coatings as needed"
    ]
  }
]

const maintenanceProducts = [
  {
    category: "Cleaning Products",
    items: [
      { name: "GLB Cleaner", value: "500ml bottle" },
      { name: "Microfiber Cloths", value: "Pack of 5" },
      { name: "Soft Brushes", value: "Set of 3" },
      { name: "Cleaning Solution", value: "1L concentrate" }
    ]
  },
  {
    category: "Protective Products",
    items: [
      { name: "GLB Sealer", value: "1L can" },
      { name: "UV Protection", value: "500ml spray" },
      { name: "Anti-slip Treatment", value: "1L bottle" },
      { name: "Fire Retardant", value: "2L can" }
    ]
  },
  {
    category: "Maintenance Tools",
    items: [
      { name: "Inspection Kit", value: "Complete set" },
      { name: "Repair Kit", value: "Standard set" },
      { name: "Moisture Meter", value: "Digital" },
      { name: "Safety Equipment", value: "Basic set" }
    ]
  }
]

const relatedGuides = [
  {
    title: "Installation Guide",
    description: "Learn proper installation techniques",
    link: "/technical-guides/installation-guide"
  },
  {
    title: "Technical Specifications",
    description: "View detailed product specifications",
    link: "/technical-guides/technical-specifications"
  },
  {
    title: "Sustainability Guide",
    description: "Understand environmental impact",
    link: "/technical-guides/sustainability-certification"
  }
]

export default function MaintenanceCarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Maintenance & Care Guide
              </h1>
              <p className="text-lg mb-8">
                Best practices for maintaining and preserving GLB products
              </p>
            </div>
          </div>
        </section>

        {/* Maintenance Procedures */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Maintenance Procedures</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {maintenanceProcedures.map((procedure) => (
                <ScrollAnimation key={procedure.title} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{procedure.title}</h3>
                    <ul className="space-y-3">
                      {procedure.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#0a3b25] mr-2">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Products */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Recommended Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {maintenanceProducts.map((product) => (
                <ScrollAnimation key={product.category} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{product.category}</h3>
                    <div className="space-y-4">
                      {product.items.map((item) => (
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

        {/* Related Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedGuides.map((guide) => (
                <ScrollAnimation key={guide.title} type="fade-up">
                  <Link href={guide.link}>
                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                      <p className="text-gray-600">{guide.description}</p>
                    </div>
                  </Link>
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
                Need Maintenance Support?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Our technical support team is ready to help with your maintenance questions.
              </p>
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 