import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const bambooImages = [
  {
    src: "/glubam8.png",
    label: "Bamboo Profile 5"
  },
  {
    src: "/glubam7.png",
    label: "Bamboo Profile 4"
  },
  {
    src: "/glubam2.png",
    label: "Bamboo Profile 3"
  },
  {
    src: "/glubam6.png",
    label: "Bamboo Profile 2"
  },
  {
    src: "/glubam1.png",
    label: "Bamboo Profile 1"
  },
]

export default function BambooProfilesPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">
          Bamboo Profiles Showcase
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bambooImages.map((img, idx) => (
            <div key={img.src} className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center">
              <div className="relative w-full h-64 mb-4 rounded overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2 text-center">{img.label}</h2>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-2 mt-2">
                Select
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline" className="rounded-sm">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 