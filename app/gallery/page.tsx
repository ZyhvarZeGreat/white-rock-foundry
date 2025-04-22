import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow bg-gray-50">
        {/* Gallery Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4 font-heading">Our best works</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
              Explore our gallery to see our work in action.
              <br />
              Discover how we transform urban spaces.
            </p>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {/* First column */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                    alt="Manufacturing facility"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                    alt="Precision machining"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg"
                    alt="Metal casting"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Second column */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg"
                    alt="Engineering design"
                    width={400}
                    height={350}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg"
                    alt="Quality control"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg"
                    alt="CNC machining"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg"
                    alt="Metal fabrication"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Third column */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg"
                    alt="Engineering workshop"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
                    alt="Industrial equipment"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                    alt="Precision parts"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg"
                    alt="Engineering tools"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <p className="text-sm text-[#0a3b25] font-medium text-center mb-2">OUR LATEST ARTICLES</p>
              <h2 className="text-3xl font-bold text-center mb-4 font-heading">
                Your guide to cleaner,
                <br />
                greener communities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                    alt="Precision Metal Casting"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="mr-4">March 6, 2023</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Eco-friendly waste management for cities</h3>
                  <p className="text-gray-600 mb-4">
                    Learn about the best environmental practices for waste management that can be implemented in modern
                    cities.
                  </p>
                  <Link
                    href="/blog/eco-friendly-waste-management"
                    className="text-[#0a3b25] font-medium hover:underline uppercase text-sm"
                  >
                    READ POST →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                    alt="Sustainable Manufacturing"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="mr-4">March 6, 2023</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">10 ways modern cities stay clean and green</h3>
                  <p className="text-gray-600 mb-4">
                    Learn about innovative methods and technologies used to keep city streets clean while protecting the
                    environment.
                  </p>
                  <Link
                    href="/blog/modern-cities-clean-green"
                    className="text-[#0a3b25] font-medium hover:underline uppercase text-sm"
                  >
                    READ POST →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                    alt="Digital Transformation"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="mr-4">March 6, 2023</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    How regular infrastructure maintenance saves cities millions
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Why is regular maintenance of roads, sidewalks, and drainage systems key to reducing costs?
                  </p>
                  <Link
                    href="/blog/infrastructure-maintenance-savings"
                    className="text-[#0a3b25] font-medium hover:underline uppercase text-sm"
                  >
                    READ POST →
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button className="bg-white border border-gray-300 hover:bg-gray-100 text-[#0a3b25] font-medium rounded-sm px-6 py-2">
                ALL BLOG POSTS
              </Button>
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
                From streets to infrastructure,
                <br />
                we've got <span className="underline">you covered</span>.
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to experience professional solutions tailored to your community's needs!
              </p>
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                GET STARTED
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
