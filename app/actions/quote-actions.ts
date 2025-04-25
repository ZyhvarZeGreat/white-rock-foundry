"use server"

import { quoteRequestSchema } from "@/lib/validations/quote"
import { quoteApi } from "@/lib/api-client"
import { revalidatePath } from "next/cache"

export async function getQuoteRequests() {
  try {
    const data = await quoteApi.getRequests()
    return data
  } catch (error) {
    console.error("Error in getQuoteRequests:", error)
    return []
  }
}

export async function updateQuoteStatus(quoteId: number, newStatus: string) {
  try {
    await quoteApi.updateStatus(quoteId, newStatus)
    revalidatePath("/admin/quotes")
    return true
  } catch (error) {
    console.error("Error in updateQuoteStatus:", error)
    return false
  }
}

export async function submitQuoteRequest(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries())
    const validatedData = quoteRequestSchema.parse(data)
    

    await quoteApi.submitRequest(validatedData)
    // revalidatePath("/admin/quotes")
    return true
  } catch (error) {
    console.error("Error in submitQuoteRequest:", error)
    return false
  }
}
