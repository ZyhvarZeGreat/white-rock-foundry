import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectDetailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
   

      <main className="flex-grow">
        {/* Project Header */}
        <section className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2 font-heading">Public park green space enhancement</h1>
                <p className="text-gray-600">
                  A comprehensive project to revitalize urban parks with sustainable landscaping and improved
                  facilities.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex space-x-2">
                  <Link href="/projects" className="flex items-center text-[#0a3b25] font-medium hover:underline">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    PREV PROJECT
                  </Link>
                  <Link href="/projects" className="flex items-center text-[#0a3b25] font-medium hover:underline">
                    NEXT PROJECT
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-2">Total Duration:</h3>
                <p className="text-gray-600">Approximately 18-24 months</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Estimated Cost:</h3>
                <p className="text-gray-600">Projected project budget: $1.5M-$2M</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Foot Traffic:</h3>
                <p className="text-gray-600">Aims to increase foot traffic by 30-40%</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Public Amenities:</h3>
                <p className="text-gray-600">Areas to host 50+ community events in year one</p>
              </div>
            </div>

            <div className="mb-12">
              <Image
                src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg"
                alt="Public park aerial view"
                width={1200}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">Project Overview</h2>
                <p className="text-gray-700 mb-4">
                  The "Public Park Green Space Enhancement" project aims to revitalize and upgrade urban parks and green
                  spaces throughout the city, transforming them into sustainable, accessible, and engaging public areas.
                  This initiative will focus on improving the park infrastructure, increasing plant diversity, promoting
                  environmental sustainability, and ensuring that green spaces serve as safe, welcoming places for the
                  community. The project aims to make public parks more functional, beautiful, and beneficial for all
                  residents.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">Project Objectives</h2>
                <p className="text-gray-700 mb-4">
                  This project focuses on improving cleanliness, modernizing facilities, implementing sustainable
                  practices, providing real-time information, and enhancing safety to create more comfortable and
                  efficient spaces for commuters.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-5xl font-bold text-[#0a3b25]/20 mb-4">01</div>
                  <h3 className="text-xl font-bold mb-2 font-heading">Green Space Expansion</h3>
                  <p className="text-gray-600">
                    Increasing green space coverage by adding more plants, trees, and garden areas while ensuring a
                    sustainable and vibrant environment.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-5xl font-bold text-[#0a3b25]/20 mb-4">02</div>
                  <h3 className="text-xl font-bold mb-2 font-heading">Sustainability Integration</h3>
                  <p className="text-gray-600">
                    Incorporating eco-friendly practices such as rainwater harvesting systems, native plants, and
                    low-impact landscaping techniques.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-5xl font-bold text-[#0a3b25]/20 mb-4">03</div>
                  <h3 className="text-xl font-bold mb-2 font-heading">Inclusive and Accessible Design</h3>
                  <p className="text-gray-600">
                    Ensuring that park spaces are accessible for people of all ages and abilities, with features
                    designed for universal use.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-5xl font-bold text-[#0a3b25]/20 mb-4">04</div>
                  <h3 className="text-xl font-bold mb-2 font-heading">Outdoor Recreation and Leisure</h3>
                  <p className="text-gray-600">
                    Creating more opportunities for outdoor activities like walking trails, sports fields, playgrounds,
                    and community gathering areas.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-5xl font-bold text-[#0a3b25]/20 mb-4">05</div>
                  <h3 className="text-xl font-bold mb-2 font-heading">Environmental Education</h3>
                  <p className="text-gray-600">
                    Integrating educational components such as signage, eco-friendly art installations, and interactive
                    elements about local ecology.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-5xl font-bold text-[#0a3b25]/20 mb-4">06</div>
                  <h3 className="text-xl font-bold mb-2 font-heading">Enhanced Safety and Security</h3>
                  <p className="text-gray-600">
                    Improving lighting, pathways, and ensuring the overall safety of park users, especially during
                    evening hours.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">
                  Key benefits of the public park green space enhancement project
                </h2>
                <p className="text-gray-700 mb-4">
                  This project will enhance the overall public transport experience by improving cleanliness,
                  accessibility, and environmental sustainability, while also contributing to the city's aesthetic
                  appeal and promoting public health.
                </p>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start">
                    <span className="text-[#0a3b25] mr-2">•</span>
                    <div>
                      <strong className="font-bold">Improved Urban Environment:</strong> Enhanced green spaces will
                      improve the comfort and satisfaction of public transport users, encouraging greater use of the
                      city's bus system.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0a3b25] mr-2">•</span>
                    <div>
                      <strong className="font-bold">Environmental Benefits:</strong> Increased vegetation and
                      eco-friendly design practices will contribute to reducing the city's carbon footprint and
                      improving air quality, supporting the city's sustainability goals.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0a3b25] mr-2">•</span>
                    <div>
                      <strong className="font-bold">Accessibility Improvements:</strong> Redesigning bus stops with
                      better seating, shelters, and accessibility features will ensure that people with disabilities,
                      elderly individuals, and parents with strollers can comfortably use public transport.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0a3b25] mr-2">•</span>
                    <div>
                      <strong className="font-bold">Public Health:</strong> Regular cleaning and maintenance will reduce
                      the spread of germs and waste-related health hazards at bus stops, creating a healthier
                      environment for city residents.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0a3b25] mr-2">•</span>
                    <div>
                      <strong className="font-bold">Aesthetic Appeal:</strong> Upgraded bus stops will contribute to the
                      overall visual appeal of the city, making it more attractive for both residents and tourists, and
                      reinforcing public spaces as a source of pride in the community.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 font-heading">Conclusion</h2>
                <p className="text-gray-700 mb-4">
                  The Public Park Green Space Enhancement project will contribute significantly to improving urban
                  living conditions by revitalizing public parks into vibrant, sustainable, and accessible spaces for
                  recreation, relaxation, and community engagement. By integrating sustainable practices, improving
                  safety, and enhancing accessibility, this project will create a network of green spaces that serve as
                  vital community hubs and encourage greater interaction with nature, helping to create a more
                  sustainable and livable urban environment.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/1769734/pexels-photo-1769734.jpeg"
                    alt="Park project image 1"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg"
                    alt="Park project image 2"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg"
                    alt="Park project image 3"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/1769734/pexels-photo-1769734.jpeg"
                    alt="Park project image 4"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-gray-200 pt-8">
                <Link href="/projects" className="flex items-center text-[#0a3b25] font-medium hover:underline">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  PREV PROJECT
                </Link>
                <div className="w-10 h-10 rounded-full bg-[#0a3b25] flex items-center justify-center text-white">
                  <span>1</span>
                </div>
                <Link href="/projects" className="flex items-center text-[#0a3b25] font-medium hover:underline">
                  NEXT PROJECT
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
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

      {/* Footer */}
    
    </div>
  )
}
