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

import { quoteRequestSchema } from "@/lib/validations/quote"

import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import type { QuoteRequestFormData } from "@/lib/validations/quote"
import { quoteApi } from "@/lib/api-client"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<QuoteRequestFormData>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      service_type: "",
      industry: "",
      timeline: "",
      budget: "",
      has_drawings: false,
      requires_nda: false,
      newsletter_subscription: true
    }
  })

  const handleSelectChange = (name: keyof QuoteRequestFormData, value: string) => {
    setValue(name, value)
  }

  async function onSubmit(data: QuoteRequestFormData) {
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value.toString())
      })

      

      await quoteApi.submitRequest(data)
      toast({
        title: "Quote request submitted successfully",
        description: "We will get back to you within 24 hours.",
        className: "bg-green-500/40 text-white"
      })
      reset()
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error submitting quote request",
          description: error.message,
          variant: "destructive",
          className: "bg-red-500/40 text-white"
        })
      } else {
        toast({
          title: "Error submitting quote request",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
          className: "bg-red-500/40 text-white"
        })
      }
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
              Fill out the form below to request a detailed quote for your sustainable GLB project. Our team
              will get back to you within 24 hours to discuss your requirements and sustainability goals.
            </p>
          </ScrollAnimation>

          {/* Quote Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first_name">First Name *</Label>
                    <Input 
                      id="first_name" 
                      {...register("first_name")} 
                      placeholder="Enter your first name" 
                    />
                    {errors.first_name && (
                      <p className="text-sm text-red-500">{errors.first_name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last_name">Last Name *</Label>
                    <Input 
                      id="last_name" 
                      {...register("last_name")} 
                      placeholder="Enter your last name" 
                    />
                    {errors.last_name && (
                      <p className="text-sm text-red-500">{errors.last_name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      {...register("email")} 
                      placeholder="Enter your email address" 
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      {...register("phone")} 
                      placeholder="Enter your phone number" 
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input 
                      id="company" 
                      {...register("company_name")} 
                      placeholder="Enter your company name (if applicable)" 
                    />
                    {errors.company_name && (
                      <p className="text-sm text-red-500">{errors.company_name.message}</p>
                    )}
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
                      value={watch("service_type")}
                      onValueChange={(value) => handleSelectChange("service_type", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="structural-glb">Structural GLB</SelectItem>
                        <SelectItem value="furniture-glb">Furniture GLB</SelectItem>
                        <SelectItem value="interior-glb">Interior GLB</SelectItem>
                        <SelectItem value="custom-solutions">Custom Solutions</SelectItem>
                        <SelectItem value="sustainability-services">Sustainability Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service_type && (
                      <p className="text-sm text-red-500">{errors.service_type.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry *</Label>
                    <Select
                      value={watch("industry")}
                      onValueChange={(value) => handleSelectChange("industry", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="architecture">Architecture</SelectItem>
                        <SelectItem value="furniture">Furniture Manufacturing</SelectItem>
                        <SelectItem value="interior-design">Interior Design</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.industry && (
                      <p className="text-sm text-red-500">{errors.industry.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline *</Label>
                    <Select
                      value={watch("timeline")}
                      onValueChange={(value) => handleSelectChange("timeline", value)}
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
                    {errors.timeline && (
                      <p className="text-sm text-red-500">{errors.timeline.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Select
                      value={watch("budget")}
                      onValueChange={(value) => handleSelectChange("budget", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under £10,000</SelectItem>
                        <SelectItem value="10k-50k">£10,000 - £50,000</SelectItem>
                        <SelectItem value="50k-100k">£50,000 - £100,000</SelectItem>
                        <SelectItem value="100k-500k">£100,000 - £500,000</SelectItem>
                        <SelectItem value="over-500k">Over £500,000</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.budget && (
                      <p className="text-sm text-red-500">{errors.budget.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project_description">Project Description *</Label>
                    <Textarea
                      id="project_description"
                      {...register("project_description")}
                      placeholder="Describe your project requirements, sustainability goals, and any specific GLB applications you're considering"
                      className="min-h-[150px]"
                    />
                    {errors.project_description && (
                      <p className="text-sm text-red-500">{errors.project_description.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading">Additional Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="has_drawings" {...register("has_drawings")} />
                    <Label htmlFor="has_drawings">I have technical drawings or specifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="requires_nda" {...register("requires_nda")} />
                    <Label htmlFor="requires_nda">I require an NDA before sharing project details</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter_subscription" {...register("newsletter_subscription")} />
                    <Label htmlFor="newsletter_subscription">Subscribe to our sustainability newsletter</Label>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </Button>
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
