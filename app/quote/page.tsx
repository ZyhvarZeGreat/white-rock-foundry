"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollAnimation } from "@/components/scroll-animation"
import { submitQuoteRequest } from "@/app/actions/quote-actions"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import Image from "next/image"

export default function QuotePage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    service: "",
    industry: "",
    timeline: "",
    budget: "",
  })

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await submitQuoteRequest(formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        })
        // Reset form
        document.querySelector("form")?.reset()
        setFormData({
          service: "",
          industry: "",
          timeline: "",
          budget: "",
        })
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex-grow">
      <Toaster />
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fade-up">
            <h1 className="text-4xl font-bold text-center mb-4 font-heading">Request a Quote</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
              Fill out the form below to request a detailed quote for your engineering and manufacturing needs. Our team
              will get back to you within 24 hours.
            </p>
          </ScrollAnimation>

          {/* Quote Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <form action={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" placeholder="Enter your last name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" placeholder="Enter your company name (if applicable)" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading">Project Details</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type *</Label>
                    <Select
                      name="service"
                      value={formData.service}
                      onValueChange={(value) => handleSelectChange("service", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="precision-casting">Precision Casting</SelectItem>
                        <SelectItem value="cnc-machining">CNC Machining</SelectItem>
                        <SelectItem value="engineering-design">Engineering Design</SelectItem>
                        <SelectItem value="quality-assurance">Quality Assurance</SelectItem>
                        <SelectItem value="metal-fabrication">Metal Fabrication</SelectItem>
                        <SelectItem value="prototyping">Prototyping</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry *</Label>
                    <Select
                      name="industry"
                      value={formData.industry}
                      onValueChange={(value) => handleSelectChange("industry", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aerospace">Aerospace</SelectItem>
                        <SelectItem value="automotive">Automotive</SelectItem>
                        <SelectItem value="medical">Medical</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="energy">Energy</SelectItem>
                        <SelectItem value="consumer">Consumer Products</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline *</Label>
                    <Select
                      name="timeline"
                      value={formData.timeline}
                      onValueChange={(value) => handleSelectChange("timeline", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                        <SelectItem value="standard">Standard (2-4 weeks)</SelectItem>
                        <SelectItem value="flexible">Flexible (1-3 months)</SelectItem>
                        <SelectItem value="long-term">Long-term (3+ months)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Select
                      name="budget"
                      value={formData.budget}
                      onValueChange={(value) => handleSelectChange("budget", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="over-100k">Over $100,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Please describe your project in detail, including specifications, materials, quantities, and any other relevant information."
                      rows={6}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading">Additional Information</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="drawings" name="drawings" />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="drawings"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I have technical drawings or CAD files to share
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="nda" name="nda" />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="nda"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I require an NDA before sharing project details
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="newsletter" name="newsletter" defaultChecked />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="newsletter"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subscribe to our newsletter for industry insights and updates
                      </Label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comments">Additional Comments</Label>
                    <Textarea
                      id="comments"
                      name="comments"
                      placeholder="Any other information you'd like to share with us"
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT QUOTE REQUEST"}
                </Button>
              </div>
            </form>
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
              Need to discuss your project in detail?
              <br />
              <span className="underline">Contact our team directly</span>.
            </h2>
            <p className="mb-8 text-[#0a3b25]">
              Our engineering experts are available to answer your questions and provide guidance on your manufacturing
              needs.
            </p>
            <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
              CONTACT US
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
