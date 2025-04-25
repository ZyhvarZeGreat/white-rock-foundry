import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
 

      <main className="flex-grow">
        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-full min-h-[400px]">
                <Image
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                  alt="Aerial view of manufacturing facility"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <ScrollAnimation type="fade-up">
                  <p className="text-sm text-[#0a3b25] font-medium mb-2">LET'S START A CONVERSATION</p>
                  <h1 className="text-4xl font-bold mb-8 font-heading">Connect with us</h1>
                  <form className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your name"
                        className="border-gray-300 focus:border-[#0a3b25] focus:ring-[#0a3b25] rounded-sm"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email"
                        className="border-gray-300 focus:border-[#0a3b25] focus:ring-[#0a3b25] rounded-sm"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your message"
                        className="min-h-[150px] border-gray-300 focus:border-[#0a3b25] focus:ring-[#0a3b25] rounded-sm"
                      />
                    </div>
                    <Button className="w-full bg-black hover:bg-black/90 text-white font-medium rounded-sm">
                      SUBMIT
                    </Button>
                  </form>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <ScrollAnimation type="fade-up">
                <p className="text-sm text-[#0a3b25] font-medium mb-2">STAY CONNECTED</p>
                <h2 className="text-3xl font-bold mb-4 font-heading">
                  Find all the ways to reach us
                  <br />
                  in one place
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600">
                  Get in touch with us through your preferred method. Whether by phone, email, or social media, we're
                  here to help. Visit us at our location or follow us online to stay updated.
                </p>
              </ScrollAnimation>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <ScrollAnimation type="fade-up">
                <div className="text-center">
                  <h3 className="font-bold mb-4">Location:</h3>
                  <p className="text-gray-600">
                    123 GREENFIELD AVENUE,
                    <br />
                    SPRINGFIELD, NY 10234, USA
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={100}>
                <div className="text-center">
                  <h3 className="font-bold mb-4">Phones:</h3>
                  <p className="text-gray-600">
                    +1 (555) 867-4321
                    <br />
                    +1 (555) 934-2876
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={200}>
                <div className="text-center">
                  <h3 className="font-bold mb-4">Email:</h3>
                  <p className="text-gray-600">INFO@EXAMPLE.COM</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={300}>
                <div className="text-center">
                  <h3 className="font-bold mb-4">Socials:</h3>
                  <div className="flex justify-center space-x-4">
                    <Link href="#" className="text-gray-600 hover:text-[#0a3b25]">
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
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-[#0a3b25]">
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
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-[#0a3b25]">
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
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-[#0a3b25]">
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
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative h-[500px]">
          <Image
            src="https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg"
            alt="Map view"
            width={1920}
            height={500}
            className="w-full h-full object-cover"
          />
        </section>

        {/* CTA Section */}
    
      </main>


    </div>
  )
}
