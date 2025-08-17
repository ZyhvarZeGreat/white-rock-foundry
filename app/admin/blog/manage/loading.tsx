import { Loader2 } from "lucide-react"

export default function BlogManageLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#0a3b25] text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center">
            <div className="text-xl font-bold">Verdantlam</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-white">Admin Dashboard</div>
            <div className="bg-yellow-400 text-black font-medium rounded-sm px-4 py-2">Logout</div>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold font-heading">Blog Management</h1>
              <p className="text-gray-600">Manage your blog posts, drafts, and archives</p>
            </div>
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-center items-center py-24">
              <Loader2 className="h-12 w-12 animate-spin text-[#0a3b25]" />
              <span className="ml-3 text-lg">Loading blog management...</span>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  )
}
