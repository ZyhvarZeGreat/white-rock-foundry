import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { notFound } from 'next/navigation';

// Define the glass product types and their details
const glassTypes: Record<GlassType, GlassProduct> = {
  'tempered': {
    id: 'tempered',
    title: "Tempered Glass",
    description: "Heat-treated for enhanced strength and safety, tempered glass is up to five times stronger than standard glass. When broken, it shatters into small, blunt pieces, making it a safer option for various applications.",
    excerpt: "Premium safety glass for durability and security",
    features: [
      "5x stronger than standard glass",
      "Shatters into small, blunt pieces",
      "Heat resistant up to 250°C",
      "Ideal for shower doors, glass doors, and tabletops"
    ],
    applications: [
      "Shower enclosures",
      "Glass doors and partitions",
      "Tabletops and shelves",
      "Display cases"
    ],
    specifications: {
      "Thickness": "4mm - 19mm",
      "Max Size": "3300mm x 8000mm",
      "Standard": "EN 12150",
      "Color": "Clear, Tinted, or Custom"
    },
    image: "/glass1.jpg"
  },
  'ballistic': {
    id: 'ballistic',
    title: "Ballistic Glass",
    description: "High-security laminated glass designed to resist penetration from bullets and forced entry. Our ballistic glass combines multiple layers of glass and polycarbonate to provide maximum protection while maintaining excellent visibility.",
    excerpt: "Maximum security glass for high-risk environments",
    features: [
      "Multiple layers of glass and polycarbonate",
      "Bullet-resistant to various threat levels (UL 752)",
      "Forced entry protection",
      "Optional one-way vision available",
      "UV protection"
    ],
    applications: [
      "Bank teller windows",
      "Government buildings",
      "Retail security",
      "High-risk facilities",
      "VIP vehicles"
    ],
    specifications: {
      "Thickness": "25mm - 75mm",
      "Protection Levels": "UL 752 Level 1-10",
      "Transparency": "70-90%",
      "Weight": "40-120 kg/m²",
      "Standard": "EN 1063, UL 752"
    },
    image: "/glass-ballistic.jpg"
  },
  'laminated': {
    id: 'laminated',
    title: "Laminated Glass",
    excerpt: "Enhanced safety glass with PVB interlayer for security and sound reduction",
    description: "Consisting of two or more glass layers bonded with a PVB interlayer, laminated glass offers enhanced safety and security. Even when broken, the glass remains adhered to the interlayer, reducing the risk of injury.",
    features: [
      "Enhanced safety and security",
      "UV protection (blocks 99% of UV rays)",
      "Sound reduction properties",
      "Available in various thicknesses"
    ],
    applications: [
      "Skylights and overhead glazing",
      "Balustrades and railings",
      "Security glazing",
      "Soundproof windows"
    ],
    specifications: {
      "Thickness": "6.38mm - 60mm+",
      "Interlayer": "PVB, SGP, or EVA",
      "Standard": "EN 14449",
      "Color": "Clear, Tinted, or Custom"
    },
    image: "/glass2.jpg"
  },
  'tinted': {
    id: 'tinted',
    title: "Tinted Glass",
    excerpt: "Heat and glare reducing glass available in various colors and darkness levels",
    description: "Tinted glass is produced by adding color pigments during manufacturing, reducing heat and glare while maintaining visibility. It's available in various colors and darkness levels to suit different aesthetic and functional requirements.",
    features: [
      "Reduces heat and glare",
      "Enhances privacy",
      "Energy efficient",
      "UV protection"
    ],
    applications: [
      "Commercial facades",
      "Windows and doors",
      "Automotive glass",
      "Decorative panels"
    ],
    specifications: {
      "Colors": "Bronze, Gray, Blue, Green, etc.",
      "Thickness": "4mm - 19mm",
      "Light Transmission": "15% - 80%",
      "Solar Control": "Excellent"
    },
    image: "/glass3.jpg"
  },
  'frosted': {
    id: 'frosted',
    title: "Frosted Glass",
    excerpt: "Translucent glass providing privacy while allowing light transmission",
    description: "Frosted glass is created by acid-etching or sandblasting clear glass to create a translucent surface that diffuses light while providing privacy. It's perfect for spaces where both light transmission and privacy are desired.",
    features: [
      "Provides privacy while allowing light",
      "Available in various patterns",
      "Easy to clean and maintain",
      "Scratch-resistant surface"
    ],
    applications: [
      "Bathroom windows",
      "Office partitions",
      "Cabinet doors",
      "Decorative panels"
    ],
    specifications: {
      "Thickness": "4mm - 12mm",
      "Finish": "Acid-etched or sandblasted",
      "Patterns": "Multiple options available",
      "Customization": "Custom designs possible"
    },
    image: "/glass4.jpg"
  },
  'mirrored': {
    id: 'mirrored',
    title: "Mirrored Glass",
    excerpt: "Reflective glass that adds depth and dimension to any space",
    description: "Mirrored glass features a reflective coating on one side, creating a mirror effect. It's not only functional but also adds depth and dimension to any space, making it appear larger and more open.",
    features: [
      "Creates illusion of space",
      "Available in various reflectivity levels",
      "Can be tempered or laminated",
      "Decorative and functional"
    ],
    applications: [
      "Wardrobe doors",
      "Wall panels",
      "Furniture",
      "Decorative elements"
    ],
    specifications: {
      "Thickness": "4mm - 12mm",
      "Reflectivity": "40% - 95%",
      "Backing": "Silver, Copper, or Aluminum",
      "Customization": "Various shapes and sizes"
    },
    image: "/glass5.jpg"
  },
  'smart': {
    id: 'smart',
    title: "Smart Glass",
    excerpt: "Switchable glass that changes between transparent and opaque states",
    description: "Smart glass, or switchable glass, can change its light transmission properties when voltage, light, or heat is applied. It offers the flexibility of switching between transparent and opaque states, providing privacy on demand.",
    features: [
      "Switches between clear and opaque",
      "Energy efficient",
      "UV protection",
      "Touch or remote control operation"
    ],
    applications: [
      "Conference rooms",
      "Hospitality industry",
      "Residential windows",
      "Medical facilities"
    ],
    specifications: {
      "Switching Time": "< 1 second",
      "Transparency": "5% - 80%",
      "Power Consumption": "4-5W/m²",
      "Lifespan": "100,000+ cycles"
    },
    image: "/glass6.jpg"
  }
} as const;

type GlassType = 'tempered' | 'laminated' | 'tinted' | 'frosted' | 'mirrored' | 'smart' | 'ballistic';

interface GlassProduct {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
  image: string;
}

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function GlassTypePage({ params }: PageProps) {
  // Ensure we have a valid slug
  if (!params?.slug) {
    notFound();
  }

  // Get the current glass type
  const currentGlass = glassTypes[params.slug as GlassType] as GlassProduct | undefined;
  
  // Ensure the glass type exists
  if (!currentGlass) {
    notFound();
  }
  
  // Get related products (excluding current)
  const relatedProducts = Object.entries(glassTypes)
    .filter(([key]) => key !== params.slug)
    .slice(0, 3)
    .map(([_, product]) => ({
      ...product,
      id: product.id as GlassType
    }));

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/products/glass-products" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Glass Products
          </Link>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentGlass.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{currentGlass.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Product Image */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-96 w-full">
                <Image
                  src={currentGlass.image}
                  alt={currentGlass.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
              
              <div className="space-y-6">
                {/* Features */}
                <div>
                  <h3 className="text-lg font-medium mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    {currentGlass.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="text-lg font-medium mb-2">Specifications</h3>
                  <div className="space-y-2">
                    {Object.entries(currentGlass.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-1 border-b border-gray-100">
                        <span className="text-gray-600">{key}:</span>
                        <span className="font-medium">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-lg font-medium mb-2">Common Applications</h3>
                  <ul className="space-y-1">
                    {currentGlass.applications.map((application: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 space-y-3">
                  <Button asChild className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 py-6 text-lg">
                    <Link href={`/quote`}>
                      Request a Quote
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full py-6 text-lg">
                    <Link href={`/contact`}>
                      Contact Sales
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Explore Other Glass Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
                <Link key={product.id} href={`/products/glass-products/${product.id}`} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0a3b25] transition-colors mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600">{product.excerpt || product.description}</p>
                    </div>
                    <div className="px-4 pb-4">
                      <span className="text-[#0a3b25] text-sm font-medium inline-flex items-center">
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
