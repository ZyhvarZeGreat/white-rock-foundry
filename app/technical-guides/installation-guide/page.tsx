import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const installationSteps = [
  {
    title: "Pre-Installation Planning",
    items: [
      "Review project specifications and requirements",
      "Verify material quantities and dimensions",
      "Check site conditions and access",
      "Prepare necessary tools and equipment"
    ]
  },
  {
    title: "Site Preparation",
    items: [
      "Ensure proper ventilation and temperature control",
      "Protect surrounding areas from dust and debris",
      "Verify structural support and load capacity",
      "Mark installation points and reference lines"
    ]
  },
  {
    title: "Installation Process",
    items: [
      "Follow manufacturer's recommended installation sequence",
      "Use appropriate fasteners and adhesives",
      "Maintain proper spacing and alignment",
      "Check for level and plumb during installation"
    ]
  }
]

const safetyGuidelines = [
  {
    category: "Personal Protection",
    items: [
      { name: "Eye Protection", value: "Safety glasses or goggles" },
      { name: "Hand Protection", value: "Work gloves" },
      { name: "Respiratory Protection", value: "Dust mask when needed" },
      { name: "Foot Protection", value: "Steel-toed boots" }
    ]
  },
  {
    category: "Tool Safety",
    items: [
      { name: "Power Tools", value: "Regular inspection and maintenance" },
      { name: "Hand Tools", value: "Proper storage and handling" },
      { name: "Ladders", value: "Secure placement and inspection" },
      { name: "Lifting Equipment", value: "Certified and inspected" }
    ]
  },
  {
    category: "Site Safety",
    items: [
      { name: "Signage", value: "Clear warning signs" },
      { name: "Barriers", value: "Proper cordoning of work areas" },
      { name: "Ventilation", value: "Adequate air circulation" },
      { name: "Emergency", value: "First aid kit available" }
    ]
  }
]

export default function InstallationGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                GLB Installation Guide
              </h1>
              <p className="text-lg mb-8">
                Comprehensive guide for proper installation of GLB products
              </p>
            </div>
          </div>
        </section>

        {/* Installation Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Installation Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {installationSteps.map((step) => (
                <ScrollAnimation key={step.title} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <ul className="space-y-3">
                      {step.items.map((item, index) => (
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

        {/* Safety Guidelines */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Safety Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {safetyGuidelines.map((guideline) => (
                <ScrollAnimation key={guideline.category} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{guideline.category}</h3>
                    <div className="space-y-4">
                      {guideline.items.map((item) => (
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

        {/* Additional Resources */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-bold mb-4">Product Datasheets</h3>
                  <p className="text-gray-600 mb-4">Download detailed specifications for all GLB products</p>
                  <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                    Download PDF
                  </Button>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-bold mb-4">Video Tutorials</h3>
                  <p className="text-gray-600 mb-4">Watch step-by-step installation videos</p>
                  <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                    Watch Videos
                  </Button>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-bold mb-4">Technical Support</h3>
                  <p className="text-gray-600 mb-4">Get expert assistance with your installation</p>
                  <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
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
                Our technical support team is ready to help with your installation questions.
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