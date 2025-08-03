import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const products = [
  {
    id: "glb-beams",
    name: "GLB Beams",
    description: "High-strength engineered beams for superior structural performance",
    image: "/glubam8.png",
    features: [
      "Superior load-bearing capacity",
      "Dimensional stability",
      "Fire resistance",
      "Custom lengths available"
    ],
    specifications: {
      density: "650-750 kg/m³",
      moistureContent: "≤ 12%",
      standardLengths: "3m, 4m, 6m, 8m",
      customLengths: "Up to 12m",
      bendingStrength: "≥ 30 MPa",
      modulusOfElasticity: "≥ 11,000 MPa",
      compressionStrength: "≥ 40 MPa",
      shearStrength: "≥ 4 MPa",
      fireResistance: "Class B-s1, d0",
      durabilityClass: "Class 2",
      formaldehydeEmission: "E1",
      sustainability: "FSC Certified"
    }
  },
  {
    id: "glb-columns",
    name: "GLB Columns",
    description: "Engineered columns for structural support and architectural design",
    image: "/glubam7.png",
    features: [
      "High compressive strength",
      "Architectural versatility",
      "Sustainable material",
      "Custom dimensions"
    ],
    specifications: {
      density: "650-750 kg/m³",
      moistureContent: "≤ 12%",
      standardLengths: "3m, 4m, 6m",
      customLengths: "Up to 8m",
      compressionStrength: "≥ 45 MPa",
      modulusOfElasticity: "≥ 11,000 MPa",
      fireResistance: "Class B-s1, d0",
      durabilityClass: "Class 2",
      formaldehydeEmission: "E1",
      sustainability: "FSC Certified"
    }
  },
  {
    id: "glb-panels",
    name: "GLB Panels",
    description: "Versatile panels for walls, ceilings, and architectural features",
    image: "/glubam2.png",
    features: [
      "Excellent dimensional stability",
      "High impact resistance",
      "Easy installation",
      "Custom sizes available"
    ],
    specifications: {
      density: "650-750 kg/m³",
      moistureContent: "≤ 12%",
      standardSizes: "2440mm x 1220mm",
      thickness: "12mm, 18mm, 25mm",
      bendingStrength: "≥ 35 MPa",
      modulusOfElasticity: "≥ 11,000 MPa",
      fireResistance: "Class B-s1, d0",
      durabilityClass: "Class 2",
      formaldehydeEmission: "E1",
      sustainability: "FSC Certified"
    }
  },
  {
    id: "glb-decking",
    name: "GLB Decking",
    description: "Durable outdoor decking for residential and commercial applications",
    image: "/glubam2",
    features: [
      "Superior durability",
      "Weather resistance",
      "Low maintenance",
      "Slip-resistant surface"
    ],
    specifications: {
      density: "650-750 kg/m³",
      moistureContent: "≤ 12%",
      standardLengths: "3m, 4m, 6m",
      width: "140mm, 190mm",
      thickness: "20mm, 25mm",
      bendingStrength: "≥ 40 MPa",
      modulusOfElasticity: "≥ 11,000 MPa",
      fireResistance: "Class B-s1, d0",
      durabilityClass: "Class 2",
      formaldehydeEmission: "E1",
      sustainability: "FSC Certified"
    }
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
    description: "For cleaning and smoothing decking surface"
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
  },
  {
    code: "OIL-01",
    name: "Exterior Wood Oil",
    size: "2.5 ltr",
    description: "Preserves natural color and provides protection"
  },
  {
    code: "PRIMER-01",
    name: "Exterior Wood Primer",
    size: "2.5 ltr",
    description: "Provides additional protection for unfinished boards"
  }
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                GLB Products
              </h1>
              <p className="text-lg mb-8">
                High-performance engineered bamboo products for structural and architectural applications
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <ScrollAnimation key={product.id} type="fade-up">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-[#0a3b25] mr-2">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link href={`/products/${product.id}`}>
                        <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                          View Details
                        </Button>
                      </Link>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              src="/glubam8.png "
              alt="Background texture"
              fill
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                Ready to Use GLB Products in Your Project?
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