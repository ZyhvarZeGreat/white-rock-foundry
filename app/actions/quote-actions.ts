"use server"

import { getServerSupabaseClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function getQuoteRequests(): Promise<any[]> {
  try {
    const supabase = getServerSupabaseClient()
    const { data, error } = await supabase.from("quote_requests").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching quote requests:", error)
      return []
    }

    return data
  } catch (error) {
    console.error("Error in getQuoteRequests:", error)
    return []
  }
}

export async function updateQuoteStatus(quoteId: number, newStatus: string): Promise<boolean> {
  try {
    const supabase = getServerSupabaseClient()
    const { error } = await supabase.from("quote_requests").update({ status: newStatus }).eq("id", quoteId)

    if (error) {
      console.error("Error updating quote status:", error)
      return false
    }

    revalidatePath("/admin/quotes")
    return true
  } catch (error) {
    console.error("Error in updateQuoteStatus:", error)
    return false
  }
}
