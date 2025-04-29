"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

// Define project types
type ProjectCategory = "all" | "construction" | "furniture" | "interior" | "sustainability"

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
    title: "Sustainable Office Building",
    description:
      "Complete GLB structural system for a LEED-certified office building, featuring beams, columns, and flooring solutions.",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
    category: "construction",
    slug: "sustainable-office-building",
  },
  {
    id: "2",
    title: "Eco-Friendly Furniture Collection",
    description:
      "Custom GLB furniture collection for a high-end interior design project, showcasing sustainable materials and modern aesthetics.",
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    category: "furniture",
    slug: "eco-friendly-furniture-collection",
  },
  {
    id: "3",
    title: "Green Building Cladding",
    description:
      "Innovative GLB cladding system for a sustainable residential complex, combining aesthetics with environmental performance.",
    image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
    category: "construction",
    slug: "green-building-cladding",
  },
  {
    id: "4",
    title: "Interior Wall Panels",
    description:
      "Custom-designed GLB wall panels for a luxury hotel interior, creating a unique and sustainable design statement.",
    image: "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg",
    category: "interior",
    slug: "interior-wall-panels",
  },
  {
    id: "5",
    title: "Sustainable Decking System",
    description:
      "High-performance GLB decking solution for a waterfront development, offering durability and environmental benefits.",
    image: "https://images.pexels.com/photos/1769734/pexels-photo-1769734.jpeg",
    category: "construction",
    slug: "sustainable-decking-system",
  },
  {
    id: "6",
    title: "Custom Furniture Design",
    description:
      "Bespoke GLB furniture pieces for a corporate office, demonstrating the versatility and beauty of sustainable materials.",
    image: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg",
    category: "furniture",
    slug: "custom-furniture-design",
  },
  {
    id: "7",
    title: "Green Building Certification",
    description:
      "Comprehensive sustainability assessment and certification support for a GLB construction project.",
    image: "https://images.pexels.com/photos/1634278/pexels-photo-1634278.jpeg",
    category: "sustainability",
    slug: "green-building-certification",
  },
  {
    id: "8",
    title: "Interior Ceiling System",
    description:
      "Innovative GLB ceiling solution for a commercial space, combining acoustic performance with sustainable design.",
    image: "https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg",
    category: "interior",
    slug: "interior-ceiling-system",
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
              Explore our portfolio of sustainable GLB projects that showcase our commitment to environmental responsibility,
              innovation, and high-quality manufacturing.
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
                activeCategory === "construction" ? "underline decoration-2 underline-offset-8" : ""
              }`}
              onClick={() => setActiveCategory("construction")}
            >
              CONSTRUCTION
            </Button>
            <Button
              variant="ghost"
              className={`text-[#0a3b25] hover:bg-[#0a3b25]/10 font-medium ${
                activeCategory === "furniture" ? "underline decoration-2 underline-offset-8" : ""
              }`}
              onClick={() => setActiveCategory("furniture")}
            >
              FURNITURE
            </Button>
            <Button
              variant="ghost"
              className={`text-[#0a3b25] hover:bg-[#0a3b25]/10 font-medium ${
                activeCategory === "interior" ? "underline decoration-2 underline-offset-8" : ""
              }`}
              onClick={() => setActiveCategory("interior")}
            >
              INTERIOR
            </Button>
            <Button
              variant="ghost"
              className={`text-[#0a3b25] hover:bg-[#0a3b25]/10 font-medium ${
                activeCategory === "sustainability" ? "underline decoration-2 underline-offset-8" : ""
              }`}
              onClick={() => setActiveCategory("sustainability")}
            >
              SUSTAINABILITY
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
