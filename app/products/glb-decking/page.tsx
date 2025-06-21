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
      { name: "Standard Width", value: "140mm, 190mm" },
      { name: "Standard Length", value: "3m, 4m, 6m" }
    ]
  },
  {
    category: "Mechanical Properties",
    items: [
      { name: "Bending Strength", value: "≥ 40 MPa" },
      { name: "Modulus of Elasticity", value: "≥ 12,000 MPa" },
      { name: "Hardness", value: "≥ 4,500 N" },
      { name: "Wear Resistance", value: "Class 1" }
    ]
  },
  {
    category: "Environmental Properties",
    items: [
      { name: "Fire Resistance", value: "Class B-s1, d0" },
      { name: "Durability Class", value: "Class 2" },
      { name: "Slip Resistance", value: "R11" },
      { name: "Sustainability", value: "FSC Certified" }
    ]
  }
]

const applications = [
  {
    title: "Outdoor Decking",
    description: "Durable decking for residential and commercial outdoor spaces",
    image: "/bamboo pic 5.jpg"
  },
  {
    title: "Pool Surrounds",
    description: "Water-resistant decking for pool areas and wet environments",
    image: "/bamboo pic 4.jpg"
  },
  {
    title: "Public Spaces",
    description: "High-traffic decking for public areas and walkways",
    image: "/bamboo pic 3.jpg"
  },
  {
    title: "Rooftop Terraces",
    description: "Weather-resistant decking for elevated outdoor spaces",
    image: "/bamboo pic2.jpeg.jpg"
  }
]

const maintenanceProducts = [
  {
    code: "SEALER-05",
    name: "Sealer for ends of boards",
    size: "250 ml",
    description: "Protects end grains from moisture absorption"
  },
  {
    code: "DISK-02",
    name: "16\" Silicon carbide disk",
    size: "N/A",
    description: "For cleaning and smoothing surface"
  },
  {
    code: "BROOM-02",
    name: "Silicon carbide broom",
    size: "N/A",
    description: "For cleaning and removing weathered fibers"
  },
  {
    code: "CLEANER-01",
    name: "Exterior Wood Cleaner",
    size: "2.5 ltr",
    description: "Removes dirt without damaging the surface"
  }
]

export default function GLBDeckingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                GLB Decking
              </h1>
              <p className="text-lg mb-8">
                Premium engineered bamboo decking for outdoor applications
              </p>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/bamboo pic2.jpeg.jpg"
                  alt="GLB Decking"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our GLB (Glued Laminated Bamboo) decking combines durability with natural beauty. 
                  These engineered decking boards are designed to withstand harsh outdoor conditions 
                  while maintaining their structural integrity and aesthetic appeal.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>Superior durability</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>Slip resistance</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>Weather resistance</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>Custom sizes available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
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

        {/* Applications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Common Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app) => (
                <ScrollAnimation key={app.title} type="fade-up">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="relative h-48">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                      <p className="text-gray-600">{app.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Products */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Maintenance Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenanceProducts.map((product) => (
                <ScrollAnimation key={product.code} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">Code: {product.code}</p>
                    <p className="text-sm text-gray-500 mb-4">Size: {product.size}</p>
                    <p className="text-gray-600">{product.description}</p>
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
                Ready to Use GLB Decking in Your Project?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss your requirements and get a quote.
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