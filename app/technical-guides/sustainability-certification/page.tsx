import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const sustainabilityInitiatives = [
  {
    title: "Environmental Impact",
    items: [
      "Carbon-negative manufacturing process",
      "Zero waste production",
      "Renewable energy usage",
      "Water conservation practices"
    ]
  },
  {
    title: "Sustainable Sourcing",
    items: [
      "FSC certified bamboo plantations",
      "Local sourcing where possible",
      "Ethical harvesting practices",
      "Biodiversity preservation"
    ]
  },
  {
    title: "Product Lifecycle",
    items: [
      "Long product lifespan",
      "Recyclable materials",
      "Biodegradable components",
      "Low maintenance requirements"
    ]
  }
]

const certifications = [
  {
    category: "Environmental Certifications",
    items: [
      { name: "FSC Certification", value: "Chain of Custody" },
      { name: "LEED v4", value: "Material credits" },
      { name: "EPD", value: "Environmental Product Declaration" },
      { name: "ISO 14001", value: "Environmental Management" }
    ]
  },
  {
    category: "Quality Certifications",
    items: [
      { name: "ISO 9001", value: "Quality Management" },
      { name: "CE Marking", value: "European Standards" },
      { name: "ASTM Standards", value: "Material Testing" },
      { name: "EN Standards", value: "European Norms" }
    ]
  },
  {
    category: "Safety Certifications",
    items: [
      { name: "Fire Safety", value: "Class B-s1, d0" },
      { name: "Durability", value: "Class 1" },
      { name: "Formaldehyde", value: "E0 Emission" },
      { name: "Health & Safety", value: "ISO 45001" }
    ]
  }
]

const relatedGuides = [
  {
    title: "Technical Specifications",
    description: "View detailed product specifications",
    link: "/technical-guides/technical-specifications"
  },
  {
    title: "Installation Guide",
    description: "Learn proper installation techniques",
    link: "/technical-guides/installation-guide"
  },
  {
    title: "Maintenance Guide",
    description: "View maintenance procedures",
    link: "/technical-guides/maintenance-care"
  }
]

const sustainabilityResources = [
  {
    title: "Sustainability Report",
    description: "Download our latest sustainability report",
    link: "/resources/sustainability-report"
  },
  {
    title: "Certification Documents",
    description: "Access all environmental certifications",
    link: "/resources/certifications"
  },
  {
    title: "Environmental Impact",
    description: "Learn about our environmental initiatives",
    link: "/about/environmental-impact"
  }
]

export default function SustainabilityCertificationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Sustainability & Certification
              </h1>
              <p className="text-lg mb-8">
                Our commitment to environmental responsibility and quality assurance
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability Initiatives */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Sustainability Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sustainabilityInitiatives.map((initiative) => (
                <ScrollAnimation key={initiative.title} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{initiative.title}</h3>
                    <ul className="space-y-3">
                      {initiative.items.map((item, index) => (
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

        {/* Certifications */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Product Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                <ScrollAnimation key={cert.category} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{cert.category}</h3>
                    <div className="space-y-4">
                      {cert.items.map((item) => (
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

        {/* Sustainability Resources */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Sustainability Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sustainabilityResources.map((resource) => (
                <ScrollAnimation key={resource.title} type="fade-up">
                  <Link href={resource.link}>
                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                      <p className="text-gray-600">{resource.description}</p>
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
                Learn More About Our Sustainability
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Download our sustainability report or contact us for more information.
              </p>
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                Download Report
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 