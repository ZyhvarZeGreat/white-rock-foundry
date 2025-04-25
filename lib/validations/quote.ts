import { z } from "zod"

export const quoteRequestSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company_name: z.string().optional(),
  service_type: z.string().min(1, "Please select a service type"),
  industry: z.string().min(1, "Please select an industry"),
  timeline: z.string().min(1, "Please select a timeline"),
  budget: z.string().optional(),
  project_description: z.string().min(10, "Description must be at least 10 characters"),
  additional_comments: z.string().optional(),
  has_drawings: z.boolean().default(false),
  requires_nda: z.boolean().default(false),
  newsletter_subscription: z.boolean().default(true)
})

export type QuoteRequestFormData = z.infer<typeof quoteRequestSchema> 