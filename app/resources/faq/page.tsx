"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Minus } from "lucide-react"

// FAQ Item component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? <Minus className="h-5 w-5 text-[#0a3b25]" /> : <Plus className="h-5 w-5 text-[#0a3b25]" />}
      </button>
      <div
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  // FAQ categories and items
  const faqCategories = [
    {
      title: "Services & Capabilities",
      items: [
        {
          question: "What manufacturing services does White Rock Foundry offer?",
          answer:
            "White Rock Foundry offers a comprehensive range of precision engineering and manufacturing services, including precision casting, CNC machining, engineering design, prototyping, quality assurance, and more. Our capabilities span from concept development through to final production and quality certification.",
        },
        {
          question: "What industries do you serve?",
          answer:
            "We serve a wide range of industries including aerospace, automotive, medical, industrial equipment, defense, and energy. Our expertise in precision manufacturing makes us an ideal partner for any industry requiring high-quality, precision-engineered components.",
        },
        {
          question: "Can you handle small production runs or prototypes?",
          answer:
            "Yes, we specialize in both prototype development and production runs of all sizes. Our flexible manufacturing capabilities allow us to efficiently produce anything from one-off prototypes to high-volume production runs while maintaining consistent quality.",
        },
        {
          question: "What materials can you work with?",
          answer:
            "We work with a wide range of materials including various metals (steel, aluminum, titanium, nickel alloys, etc.), plastics, composites, and specialty materials. Our metallurgists can also help develop custom alloys for specific applications if needed.",
        },
      ],
    },
    {
      title: "Process & Timelines",
      items: [
        {
          question: "What is your typical production timeline?",
          answer:
            "Production timelines vary based on project complexity, material requirements, and current capacity. Simple components might be completed in 2-3 weeks, while more complex projects can take 6-8 weeks or longer. We provide detailed timeline estimates during the quoting process and keep you updated throughout production.",
        },
        {
          question: "How do I request a quote?",
          answer:
            "You can request a quote through our website by filling out our quote request form, or by contacting us directly via phone or email. For the most accurate quote, please provide detailed specifications, drawings if available, material requirements, quantity needed, and your timeline.",
        },
        {
          question: "Do you offer expedited services?",
          answer:
            "Yes, we offer expedited services for urgent projects, subject to our current production capacity. Expedited services may incur additional costs, which will be clearly outlined in your quote. Please let us know about your timeline requirements when requesting a quote.",
        },
        {
          question: "What information do you need to provide an accurate quote?",
          answer:
            "To provide an accurate quote, we typically need: detailed technical drawings or 3D models, material specifications, surface finish requirements, tolerance requirements, quantity needed, quality certification requirements, and your timeline. The more information you can provide, the more accurate our quote will be.",
        },
      ],
    },
    {
      title: "Quality & Certifications",
      items: [
        {
          question: "What quality certifications does White Rock Foundry hold?",
          answer:
            "White Rock Foundry maintains ISO 9001:2015 certification for our quality management system. We also hold AS9100D certification for aerospace manufacturing, ISO 13485 for medical device manufacturing, and various industry-specific certifications. Our quality systems are regularly audited and updated to meet the highest standards.",
        },
        {
          question: "How do you ensure quality control?",
          answer:
            "Quality is built into every step of our process. We employ a comprehensive quality management system that includes incoming material verification, in-process inspections, and final quality checks. We utilize advanced metrology equipment including CMMs, optical measurement systems, and non-destructive testing methods to verify that all components meet specifications.",
        },
        {
          question: "Do you provide material certifications?",
          answer:
            "Yes, we provide material certifications for all components upon request. These certifications verify the chemical composition and physical properties of the materials used in your components, ensuring traceability and compliance with specifications.",
        },
        {
          question: "Can you meet aerospace or medical industry standards?",
          answer:
            "Absolutely. We have extensive experience manufacturing components for both aerospace and medical applications. We maintain AS9100D certification for aerospace manufacturing and ISO 13485 for medical devices, and our quality systems are designed to meet the stringent requirements of these industries.",
        },
      ],
    },
    {
      title: "Logistics & Support",
      items: [
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to customers worldwide. Our logistics team can arrange shipping to virtually any location and will work with you to determine the most cost-effective and reliable shipping method for your components.",
        },
        {
          question: "What support do you offer after production?",
          answer:
            "We provide comprehensive post-production support including technical documentation, quality certificates, and assistance with any issues that may arise. For ongoing production, we also offer inventory management services to ensure you always have components when needed.",
        },
        {
          question: "Do you offer design assistance?",
          answer:
            "Yes, our engineering team can provide design assistance at any stage of your project. Whether you need help optimizing an existing design for manufacturability or developing a concept from scratch, our experienced engineers can help create solutions that meet your functional requirements while being cost-effective to manufacture.",
        },
        {
          question: "Can you sign NDAs for proprietary projects?",
          answer:
            "Absolutely. We routinely work with proprietary designs and technologies and are happy to sign non-disclosure agreements to protect your intellectual property. Client confidentiality is a cornerstone of our business practices.",
        },
      ],
    },
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0a3b25] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Frequently Asked Questions</h1>
            <p className="text-lg mb-8">
              Find answers to common questions about our services, processes, and capabilities
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search questions..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#0a3b25]">{category.title}</h2>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <FAQItem key={itemIndex} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="mb-6">
                If you couldn't find the answer to your question, please don't hesitate to contact us directly. Our team
                is ready to assist you with any inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white w-full sm:w-auto">Contact Us</Button>
                </Link>
                <Link href="/quote">
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white w-full sm:w-auto"
                  >
                    Request a Quote
                  </Button>
                </Link>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">Ready to start your project?</h2>
            <p className="mb-8 text-[#0a3b25]">
              Contact us today to discuss how our precision engineering solutions can help your business.
            </p>
            <Link href="/quote">
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                GET A QUOTE
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
