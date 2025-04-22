"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

// Define project types
type ProjectCategory = "all" | "aerospace" | "automotive" | "medical" | "industrial"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: ProjectCategory
  slug: string
}

// Project data
const projects: Project[] = [
  {
    id: "1",
    title: "Aerospace component manufacturing",
    description:
      "Precision-engineered components for the aerospace industry, meeting rigorous quality and performance standards.",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
    category: "aerospace",
    slug: "aerospace-component-manufacturing",
  },
  {
    id: "2",
    title: "Automotive powertrain components",
    description:
      "High-performance engine and transmission components engineered for durability and efficiency in demanding automotive applications.",
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    category: "automotive",
    slug: "automotive-powertrain-components",
  },
  {
    id: "3",
    title: "Medical device components",
    description:
      "Ultra-precise components for medical devices and surgical instruments, manufactured in our ISO 13485 certified facility.",
    image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
    category: "medical",
    slug: "medical-device-components",
  },
  {
    id: "4",
    title: "Industrial equipment parts",
    description:
      "Durable, high-performance components for industrial machinery and equipment, designed for reliability in demanding environments.",
    image: "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg",
    category: "industrial",
    slug: "industrial-equipment-parts",
  },
  {
    id: "5",
    title: "Aerospace structural components",
    description:
      "Lightweight yet strong structural components for aircraft, optimized for weight reduction and performance.",
    image: "https://images.pexels.com/photos/1769734/pexels-photo-1769734.jpeg",
    category: "aerospace",
    slug: "aerospace-structural-components",
  },
  {
    id: "6",
    title: "Automotive sensor housings",
    description:
      "Precision-cast housings for automotive sensors, providing protection and optimal positioning for critical electronic components.",
    image: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg",
    category: "automotive",
    slug: "automotive-sensor-housings",
  },
  {
    id: "7",
    title: "Medical implant components",
    description:
      "Biocompatible components for medical implants, manufactured with exceptional precision and surface finish.",
    image: "https://images.pexels.com/photos/1634278/pexels-photo-1634278.jpeg",
    category: "medical",
    slug: "medical-implant-components",
  },
  {
    id: "8",
    title: "Industrial valve components",
    description:
      "High-performance valve components for industrial applications, engineered for reliability in extreme conditions.",
    image: "https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg",
    category: "industrial",
    slug: "industrial-valve-components",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fade-up">
            <h1 className="text-4xl font-bold text-center mb-4 font-heading">Our Projects</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
              Explore our portfolio of completed and ongoing projects that showcase our commitment to quality,
              innovation, and precision engineering.
            </p>
          </ScrollAnimation>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="ghost"
              className={`text-[#0a3b25] hover:bg-[#0a3b25]/10 font-medium ${
                activeCategory === "all" ? "underline decoration-2 underline-offset-8" : ""
              }`}
              onClick={() => setActiveCategory("all")}
            >
              ALL PROJECTS
            </Button>
            <Button
              variant="ghost"
              className={`text-[#0a3b25] hover:bg-[#0a3b25]/10 font-medium ${
                activeCategory === "aerospace" ? "underline decoration-2 underline-offset-8" : ""
              }`}
              onClick={() => setActiveCategory("aerospace")}
            >
              AEROSPACE
            </Button>
            <Button
              variant="ghost"
              className={`text-[#0a3b25] hover:bg-[#0a3b25]/10 font-medium ${
                activeCategory === "automotive" ? "underline decoration-2 underline-offset-8" : ""
              }`}
              onClick={() => setActiveCategory("automotive")}
            >
              AUTOMOTIVE
            </Button>
            <Button
              variant="ghost"
              className={`text-[#0a3b25] hover:bg-[#0a3b25]/10 font-medium ${
                activeCategory === "medical" ? "underline decoration-2 underline-offset-8" : ""
              }`}
              onClick={() => setActiveCategory("medical")}
            >
              MEDICAL
            </Button>
            <Button
              variant="ghost"
              className={`text-[#0a3b25] hover:bg-[#0a3b25]/10 font-medium ${
                activeCategory === "industrial" ? "underline decoration-2 underline-offset-8" : ""
              }`}
              onClick={() => setActiveCategory("industrial")}
            >
              INDUSTRIAL
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ScrollAnimation key={project.id} type="fade-up" className="h-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full">
                  <div className="relative h-64">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-[#0a3b25] font-medium hover:underline uppercase text-sm flex items-center"
                    >
                      ABOUT PROJECT <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
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
              From concept to creation,
              <br />
              we've got <span className="underline">you covered</span>.
            </h2>
            <p className="mb-8 text-[#0a3b25]">
              Contact us today to discuss how our precision engineering solutions can meet your manufacturing needs!
            </p>
            <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
              GET A QUOTE
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
