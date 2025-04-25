import axios from "axios"
import { toast } from "sonner"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  headers: {
    "Content-Type": "application/json",
    "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
})

export const quoteApi = {
  getRequests: async () => {
    try {
      const { data } = await api.get("/rest/v1/quote_requests?select=*&order=created_at.desc")
      return data
    } catch (error) {
      toast.error("Failed to fetch quote requests")
      throw error
    }
  },

  updateStatus: async (quoteId: number, newStatus: string) => {
    try {
      await api.patch(`/rest/v1/quote_requests?id=eq.${quoteId}`, { status: newStatus })
      toast.success("Quote status updated successfully")
      return true
    } catch (error) {
      toast.error("Failed to update quote status")
      throw error
    }
  },

  submitRequest: async (data: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    service_type: string;
    industry: string;
    timeline: string;
    project_description: string;
    has_drawings: boolean;
    requires_nda: boolean;
    newsletter_subscription: boolean;
    company_name?: string;
    budget?: string;
    additional_comments?: string;
  }) => {
    try {
      await api.post("/rest/v1/quote_requests", {
        ...data,
        status: "pending",
        created_at: new Date().toISOString()
      })
      toast.success("Quote request submitted successfully")
      return true
    } catch (error) {
      toast.error("Failed to submit quote request")
      throw error
    }
  }
} 