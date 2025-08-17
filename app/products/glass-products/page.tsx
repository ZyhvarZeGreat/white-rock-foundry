import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { GlassGallery } from "@/components/glass-gallery"

const specifications = [
  {
    category: "Physical Properties",
    items: [
      { name: "Material", value: "Tempered Glass" },
      { name: "Thickness", value: "6mm - 19mm" },
      { name: "Standard Sizes", value: "Custom sizes available" },
      { name: "Color Options", value: "Clear, Tinted, Frosted" }
    ]
  },
  {
    category: "Technical Specifications",
    items: [
      { name: "Impact Resistance", value: "Class 1" },
      { name: "Thermal Resistance", value: "Up to 400°C" },
      { name: "Sound Insulation", value: "Up to 50dB" },
      { name: "UV Protection", value: "99%" }
    ]
  },
  {
    category: "Safety & Standards",
    items: [
      { name: "Safety Standard", value: "EN 12600" },
      { name: "Fire Rating", value: "Class A1" },
      { name: "Quality Certification", value: "ISO 9001" },
      { name: "Warranty", value: "10 Years" }
    ]
  }
]

interface GlassProduct {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  image?: string;
}

const glassProducts: GlassProduct[] = [
  {
    id: "tempered",
    title: "Tempered Glass",
    description: "Heat-treated safety glass that's 4-5x stronger than standard glass, shattering into small, blunt pieces when broken",
    excerpt: "Premium safety glass for durability and security",
    image: "/glass1.jpg"
  },
  {
    id: "laminated",
    title: "Laminated Glass",
    description: "Multi-layered safety glass with a durable interlayer that holds the glass together when shattered, providing enhanced security and sound reduction",
    excerpt: "Impact-resistant glass with superior safety features",
    image: "/glass2.jpg"
  },
  {
    id: "tinted",
    title: "Tinted Glass",
    description: "Glass treated with a special coating to reduce heat and glare while maintaining excellent visibility and UV protection",
    excerpt: "Energy-efficient glass with solar control benefits",
    image: "/glass3.jpg"
  },
  {
    id: "frosted",
    title: "Frosted Glass",
    description: "Decorative glass with an etched surface that provides privacy while allowing natural light transmission",
    excerpt: "Elegant privacy solution with natural light diffusion",
    image: "/glass4.jpg"
  },
  {
    id: "ballistic",
    title: "Ballistic Glass",
    description: "High-security laminated glass designed to resist penetration from bullets and forced entry, available in various protection levels",
    excerpt: "Maximum security glass for high-risk environments",
    image: "/glass-ballistic.jpg"
  },
  {
    id: "mirrored",
    title: "Mirrored Glass",
    description: "Reflective glass surface that combines functionality with aesthetic appeal, perfect for decorative and practical applications",
    excerpt: "Stylish reflective glass for modern interiors",
    image: "/glass5.jpg"
  },
  {
    id: "smart",
    title: "Smart Glass",
    description: "Switchable privacy glass that can change from transparent to opaque with the flip of a switch, offering on-demand privacy and light control",
    excerpt: "Innovative glass with adjustable opacity",
    image: "/glass6.jpg"
  }
].map(product => ({
  ...product,
  image: product.image || "/placeholder-glass.png"
}));

const productFeatures = [
  {
    id: "tempered",
    title: "Tempered Glass",
    description: "Heat-treated for enhanced strength and safety",
    image: "/glass1.png"
  },
  {
    id: "laminated",
    title: "Laminated Glass",
    description: "Multiple layers bonded for safety and security",
    image: "/glass2.jpg"
  },
  {
    id: "tinted",
    title: "Tinted Glass",
    description: "Reduces heat and glare while maintaining visibility",
    image: "/glass3.jpg"
  },
  {
    id: "frosted",
    title: "Frosted Glass",
    description: "Provides privacy while allowing light transmission",
    image: "/glass4.jpg"
  }
]

export default function GlassProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Premium Glass Products
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Explore our collection of high-quality glass solutions for residential, commercial, and industrial applications.
              </p>
              <div className="flex flex-wrap gap-4">
                {glassProducts.map((product, index) => (
                  <Link 
                    key={index} 
                    href={`/products/glass-products/${product.id}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 text-sm font-medium transition-colors"
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/glass-hero.jpg"
                  alt="Premium Glass Products"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Glass Excellence</h2>
                <p className="text-gray-600 mb-6">
                  Our premium glass products combine cutting-edge technology with timeless elegance. 
                  Whether for architectural, commercial, or residential use, our glass solutions 
                  offer unmatched clarity, durability, and style. Each piece is crafted to meet 
                  the highest standards of quality and performance.
                </p>
                <div className="space-y-4">
                  {productFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✓</span>
                      <div>
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
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

        {/* Product Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Glass Collection</h2>
              <p className="text-gray-600">
                Explore our premium selection of glass products, each crafted with precision and designed to enhance your space.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {glassProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                  {product.image && (
                    <div className="relative h-64 w-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Link 
                      href={`/products/glass-products/${product.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Variants */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Glass Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {glassProducts.map((product, index) => (
                <ScrollAnimation key={product.title} type="fade-up" delay={index * 100}>
                  <Link href={`/products/glass-products/${product.id}`}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col group">
                      <div className="relative h-64">
                        {product.image && (
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                        <Button variant="outline" className="w-full mt-auto group-hover:bg-gray-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                          View Details
                          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/glass-pattern.jpg"
              alt="Glass pattern"
              fill
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                Transform Your Space with Our Glass Solutions
              </h2>
              <p className="mb-8 text-blue-100">
                Contact us today to discuss your project requirements and discover 
                how our premium glass products can enhance your space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center mt-12">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full text-lg">
                    <Link href="/quotes?product=glass">
                      Get a Free Quote
                    </Link>
                  </Button>
                </div>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium rounded-sm px-8 py-3">
                  View Gallery
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
