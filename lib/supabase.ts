import { createClient as supabaseCreateClient } from "@supabase/supabase-js"

// Create a singleton instance of the Supabase client for client-side usage
let clientInstance: ReturnType<typeof supabaseCreateClient> | null = null

export function getClientSupabaseClient() {
  if (!clientInstance) {
    clientInstance = supabaseCreateClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
  }
  return clientInstance
}

// Create a server-side Supabase client (for use in Server Components and Server Actions)
export function getServerSupabaseClient() {
  return supabaseCreateClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

export const createClient = supabaseCreateClient
