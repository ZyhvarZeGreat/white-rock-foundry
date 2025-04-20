import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-[#0a3b25] text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Street Care
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-yellow-300">
              HOME
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-300">
              ABOUT
            </Link>
            <Link href="/services" className="text-white hover:text-yellow-300 font-medium">
              SERVICES
            </Link>
            <Link href="/projects" className="text-white hover:text-yellow-300">
              PORTFOLIO
            </Link>
            <Link href="#" className="text-white hover:text-yellow-300">
              ALL PAGES
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-4 py-2">
              CONTACT
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4 font-heading">Our Services</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
              Our services provide high-quality infrastructure maintenance, ranging from keeping the streets clean to
              maintaining streets and sidewalks in good condition.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Street lighting maintenance"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Street lighting maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Maintaining and repairing street lighting to ensure visibility and safety for pedestrians and
                    vehicles.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Inspection and Diagnostics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Lamp Replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Wiring and Fixture Repairs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Cleaning and Upkeep</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                  >
                    EXPLORE SERVICE
                  </Button>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Facade and stop cleaning"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Facade and stop cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Cleaning facades, bus stops, and other infrastructure to remove dirt, grime, and graffiti.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Facade Washing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Graffiti Removal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Bus Stop Cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Window Cleaning</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                  >
                    EXPLORE SERVICE
                  </Button>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Drainage maintenance"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Drainage maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Cleaning drains, repairing sewage systems, and ensuring proper water flow to prevent flooding.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Drain Cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Pipe Cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Inspection & Diagnostics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Repair Services</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                  >
                    EXPLORE SERVICE
                  </Button>
                </div>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Green area care"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Green area care</h3>
                  <p className="text-gray-600 mb-4">
                    Maintaining parks, gardens, and other green spaces to enhance public spaces.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Lawn Maintenance & Mowing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Tree & Shrub Care</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Seasonal Planting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Irrigation System Maintenance</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                  >
                    EXPLORE SERVICE
                  </Button>
                </div>
              </div>

              {/* Service 5 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Seasonal maintenance"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Seasonal maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized services for different seasons, including snow removal and leaf clearing for safer
                    public spaces.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Leaf Cleaning & Removal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Snow & Ice Removal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Seasonal Planting & Landscaping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Storm Cleanup</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                  >
                    EXPLORE SERVICE
                  </Button>
                </div>
              </div>

              {/* Service 6 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Public area cleaning"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Public area cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive cleaning of public spaces, beaches, and coastal areas, including cleaning and
                    sanitation.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Park & Beach Cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Square & Coastal Area Maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Cemetery Care & Landscaping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Playground Cleaning</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                  >
                    EXPLORE SERVICE
                  </Button>
                </div>
              </div>

              {/* Service 7 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Road maintenance"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Road maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Repairing potholes, surface damage, and sidewalks ensuring for safer streets.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Pothole & Crack Repair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Sidewalk Repair & Restoration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Street Marking & Sign Maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Drainage System Upkeep</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                  >
                    EXPLORE SERVICE
                  </Button>
                </div>
              </div>

              {/* Service 8 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Urban pest management"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Urban pest management</h3>
                  <p className="text-gray-600 mb-4">
                    Safe and eco-friendly pest prevention to keep public spaces clean and healthy.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Rodent Control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Insect Management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Eco-Friendly Pest Prevention</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Public Sanitation & Disinfection</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                  >
                    EXPLORE SERVICE
                  </Button>
                </div>
              </div>

              {/* Service 9 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Waste disposal"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Waste disposal</h3>
                  <p className="text-gray-600 mb-4">
                    Collection, transportation, and eco-disposal of household and construction waste.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Public Trash Collection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Construction Waste Removal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Bulk & Hazardous Waste Disposal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0a3b25] mr-2">•</span>
                      <span>Smart Bin Management</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-[#0a3b25] text-[#0a3b25] hover:bg-[#0a3b25] hover:text-white rounded-sm w-full"
                  >
                    EXPLORE SERVICE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-center mb-8">Trusted over 25+ company</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <Image
                src="/placeholder.svg?height=50&width=120"
                alt="Client logo"
                width={120}
                height={50}
                className="h-8 w-auto object-contain opacity-70"
              />
              <Image
                src="/placeholder.svg?height=50&width=120"
                alt="Client logo"
                width={120}
                height={50}
                className="h-8 w-auto object-contain opacity-70"
              />
              <Image
                src="/placeholder.svg?height=50&width=120"
                alt="Client logo"
                width={120}
                height={50}
                className="h-8 w-auto object-contain opacity-70"
              />
              <Image
                src="/placeholder.svg?height=50&width=120"
                alt="Client logo"
                width={120}
                height={50}
                className="h-8 w-auto object-contain opacity-70"
              />
              <Image
                src="/placeholder.svg?height=50&width=120"
                alt="Client logo"
                width={120}
                height={50}
                className="h-8 w-auto object-contain opacity-70"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-sm text-[#0a3b25] font-medium text-center mb-2">OUR PRICING PLANS</p>
            <h2 className="text-3xl font-bold text-center mb-4 font-heading">
              Affordable plans
              <br />
              for a cleaner city
            </h2>
            <div className="flex justify-center mb-12">
              <Button className="bg-black hover:bg-black/90 text-white font-medium rounded-sm px-6 py-2">
                ALL PRICING PLANS
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <span className="text-xs">1</span>
                  </div>
                  <span className="text-sm text-gray-600">For Small-Scale Needs</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Ideal for small offices & homes
                  <br />
                  Billed monthly
                </p>
                <div className="text-3xl font-bold mb-6">$500</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Street & sidewalk cleaning (limited area)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Waste collection & disposal (standard schedule)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Green space maintenance (basic care)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Monthly service reports</span>
                  </li>
                </ul>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm w-full">
                  SIGN UP FOR BASIC
                </Button>
              </div>

              {/* Standard Plan */}
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <span className="text-xs">2</span>
                  </div>
                  <span className="text-sm text-gray-600">Enhanced Coverage for Most Areas</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Ideal for mid-sized areas
                  <br />
                  Billed monthly
                </p>
                <div className="text-3xl font-bold mb-6">$1,200</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Everything in the Basic Plan, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Extended cleaning coverage (parks, public areas)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Seasonal maintenance (leaf & snow removal)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Pest control in public spaces</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Priority response for service requests</span>
                  </li>
                </ul>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm w-full">
                  SIGN UP FOR STANDARD
                </Button>
              </div>

              {/* Premium Plan */}
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <span className="text-xs">3</span>
                  </div>
                  <span className="text-sm text-gray-600">Comprehensive City Care</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Ideal for large-scale urban areas
                  <br />
                  Billed monthly
                </p>
                <div className="text-3xl font-bold mb-6">$2,500</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Everything in the Standard Plan, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Full-scale waste management & sorting programs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Advanced landscaping & tree care</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>24/7 emergency response</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0a3b25] mr-2 shrink-0" />
                    <span>Custom service scheduling & dedicated support</span>
                  </li>
                </ul>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm w-full">
                  SIGN UP FOR PREMIUM
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-400 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/placeholder.svg?height=600&width=1920"
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
              <div className="flex justify-center">
                <div className="relative">
                  <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                    GET STARTED
                  </Button>
                  <div className="absolute -right-16 -top-16">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full border-2 border-[#0a3b25] animate-spin-slow"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-[#0a3b25] font-bold">GET STARTED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-[#0a3b25] py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold mb-4">Street Care</h2>
            <p className="max-w-md mx-auto text-gray-600">
              Let's make the city cleaner together – get in touch with us!
            </p>
            <div className="mt-6 max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a3b25] rounded-l-sm"
              />
              <Button className="bg-black hover:bg-black/90 text-white font-medium rounded-r-sm rounded-l-none">
                SUBSCRIBE
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/about" className="text-gray-600 hover:text-[#0a3b25]">
                ABOUT US
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-[#0a3b25]">
                PRICING
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-[#0a3b25]">
                SERVICES
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-[#0a3b25]">
                PORTFOLIO
              </Link>
              <Link href="/career" className="text-gray-600 hover:text-[#0a3b25]">
                CAREER
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-[#0a3b25]">
                FAQ
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-[#0a3b25]">
                SHOP
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#0a3b25]">
                CONTACT US
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              © 2023 Street Care. All Rights Reserved.{" "}
              <Link href="#" className="underline">
                Licensing
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
