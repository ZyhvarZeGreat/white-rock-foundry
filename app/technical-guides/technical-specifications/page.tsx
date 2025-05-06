import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const specifications = [
  {
    category: "Physical Properties",
    items: [
      { name: "Density", value: "650-750 kg/m³" },
      { name: "Moisture Content", value: "≤ 12%" },
      { name: "Color", value: "Natural bamboo" },
      { name: "Texture", value: "Smooth, uniform" }
    ]
  },
  {
    category: "Mechanical Properties",
    items: [
      { name: "Bending Strength", value: "≥ 35 MPa" },
      { name: "Modulus of Elasticity", value: "≥ 10,000 MPa" },
      { name: "Compression Strength", value: "≥ 40 MPa" },
      { name: "Shear Strength", value: "≥ 8 MPa" }
    ]
  },
  {
    category: "Environmental Properties",
    items: [
      { name: "Fire Resistance", value: "Class B-s1, d0" },
      { name: "Durability Class", value: "Class 1" },
      { name: "Formaldehyde Emission", value: "E0" },
      { name: "Sustainability", value: "FSC Certified" }
    ]
  }
]

const productStandards = [
  {
    title: "Quality Standards",
    items: [
      "ISO 9001:2015 certified manufacturing",
      "EN 13986 compliance for construction",
      "ASTM D7031 testing methods",
      "CE marking for European market"
    ]
  },
  {
    title: "Environmental Standards",
    items: [
      "FSC Chain of Custody certification",
      "LEED v4 compliant materials",
      "EPD (Environmental Product Declaration)",
      "Carbon negative manufacturing process"
    ]
  },
  {
    title: "Safety Standards",
    items: [
      "EN 13501-1 fire classification",
      "EN 350 durability testing",
      "EN 13986 formaldehyde emissions",
      "ISO 14001 environmental management"
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
    title: "Maintenance Guide",
    description: "View maintenance procedures",
    link: "/technical-guides/maintenance-care"
  },
  {
    title: "Sustainability Guide",
    description: "Understand environmental impact",
    link: "/technical-guides/sustainability-certification"
  }
]

const productResources = [
  {
    title: "Product Datasheets",
    description: "Download detailed specifications for all GLB products",
    link: "/resources/datasheets"
  },
  {
    title: "Certification Documents",
    description: "Access all product certifications and test reports",
    link: "/resources/certifications"
  },
  {
    title: "Technical Support",
    description: "Get expert assistance with technical questions",
    link: "/support"
  }
]

export default function TechnicalSpecificationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Technical Specifications
              </h1>
              <p className="text-lg mb-8">
                Comprehensive technical data and specifications for GLB products
              </p>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Product Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specifications.map((spec) => (
                <ScrollAnimation key={spec.category} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{spec.category}</h3>
                    <div className="space-y-4">
                      {spec.items.map((item) => (
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

        {/* Standards */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Product Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productStandards.map((standard) => (
                <ScrollAnimation key={standard.title} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{standard.title}</h3>
                    <ul className="space-y-3">
                      {standard.items.map((item, index) => (
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

        {/* Additional Resources */}
        {/* <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productResources.map((resource) => (
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
                Need Technical Support?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Our technical team is ready to help with your specifications questions.
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