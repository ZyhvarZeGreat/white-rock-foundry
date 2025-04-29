"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Minus } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

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
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
              alt="FAQ"
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
                Frequently Asked Questions
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                Find answers to common questions about our GLB products, services, and solutions.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* FAQ Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Browse by Category</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Product FAQs</h3>
                  <p className="text-gray-600 mb-4">
                    Common questions about our GLB products, specifications, and applications.
                  </p>
                  <Link href="/resources/faq/category/products">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View FAQs
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Technical FAQs</h3>
                  <p className="text-gray-600 mb-4">
                    Technical questions about installation, maintenance, and performance.
                  </p>
                  <Link href="/resources/faq/category/technical">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View FAQs
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">General FAQs</h3>
                  <p className="text-gray-600 mb-4">
                    General questions about our company, services, and policies.
                  </p>
                  <Link href="/resources/faq/category/general">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View FAQs
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Popular Questions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Popular Questions</h2>
            </ScrollAnimation>
            <div className="max-w-3xl mx-auto space-y-6">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">What is GLB?</h3>
                  <p className="text-gray-600">
                    GLB (Glue Laminated Bamboo) is a sustainable building material made from bamboo strips that are glued together under pressure. It offers superior strength, durability, and environmental benefits compared to traditional building materials.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">How long does GLB last?</h3>
                  <p className="text-gray-600">
                    With proper installation and maintenance, GLB can last for decades. Our products are designed to withstand various environmental conditions and maintain their structural integrity over time.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Is GLB environmentally friendly?</h3>
                  <p className="text-gray-600">
                    Yes, GLB is an environmentally friendly building material. It's made from renewable bamboo resources, requires less energy to produce than traditional materials, and has a lower carbon footprint.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={600}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">What are the maintenance requirements for GLB?</h3>
                  <p className="text-gray-600">
                    GLB requires minimal maintenance. Regular inspections and basic cleaning are usually sufficient. We provide detailed maintenance guides for specific applications and environments.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={800}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Can GLB be used in outdoor applications?</h3>
                  <p className="text-gray-600">
                    Yes, GLB can be used in outdoor applications. Our products are treated to withstand various weather conditions and can be used for outdoor structures, decking, and other exterior applications.
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
                Still Have Questions?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Our team is here to help. Contact us for more information about our GLB products and services.
              </p>
              <Link href="/contact">
                <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
