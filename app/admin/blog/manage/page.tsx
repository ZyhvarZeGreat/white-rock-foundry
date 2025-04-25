"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Loader2, Search, Plus, Edit, Trash2, Eye, FileText, Filter } from "lucide-react"
import { getBlogPosts, deleteBlogPost } from "@/app/actions/blog-actions"
import { useToast } from "@/hooks/use-toast"
import type { BlogPost, BlogAuthor, BlogCategory } from "@/types/blog"

export default function BlogManagePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<(BlogPost & { author: BlogAuthor; category: BlogCategory })[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft" | "archived">("all")
  const [isDeleting, setIsDeleting] = useState<number | null>(null)

  useEffect(() => {
    loadPosts()
  }, [statusFilter])

  async function loadPosts() {
    setIsLoading(true)
    try {
      const data = await getBlogPosts({ status: statusFilter === "all" ? "all" : statusFilter })
      console.log('Data',data)
      setPosts(data)
    } catch (error) {
      console.error("Error loading posts:", error)
      toast({
        title: "Error",
        description: "Failed to load blog posts. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function handleDeletePost(id: number) {
    if (!confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      return
    }

    setIsDeleting(id)
    try {
      await deleteBlogPost(id)
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting post:", error)
      toast({
        title: "Error",
        description: "Failed to delete blog post. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(null)
    }
  }

  const filteredPosts = posts.filter((post) => {
    if (!searchQuery) return true
    return (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category?.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-500">Published</Badge>
      case "draft":
        return <Badge className="bg-yellow-500">Draft</Badge>
      case "archived":
        return <Badge className="bg-gray-500">Archived</Badge>
      default:
        return <Badge className="bg-blue-500">{status}</Badge>
    }
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
    

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold font-heading">Blog Management</h1>
              <p className="text-gray-600">Manage your blog posts, drafts, and archives</p>
            </div>
            <Link href="/admin/blog/upload">
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Create New Post
              </Button>
            </Link>
          </div>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <CardTitle>Blog Posts</CardTitle>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search posts..."
                      className="pl-8 w-full sm:w-[250px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as any)}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <div className="flex items-center">
                        <Filter className="h-4 w-4 mr-2" />
                        <span>Filter by Status</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Posts</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="draft">Drafts</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-[#0a3b25]" />
                  <span className="ml-2">Loading posts...</span>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium">No posts found</h3>
                  <p className="mt-1 text-gray-500">
                    {searchQuery
                      ? "No posts match your search criteria."
                      : statusFilter !== "all"
                        ? `You don't have any ${statusFilter} posts yet.`
                        : "You haven't created any blog posts yet."}
                  </p>
                  <Link href="/admin/blog/upload">
                    <Button className="mt-4 bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Post
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Title</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Author</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Category</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Published</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPosts.map((post) => (
                        <tr key={post.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-4">
                            <div className="font-medium">{post.title}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{post.excerpt}</div>
                          </td>
                          <td className="px-4 py-4">{post.author?.name || "Unknown"}</td>
                          <td className="px-4 py-4">{post.category?.name || "Uncategorized"}</td>
                          <td className="px-4 py-4">{getStatusBadge(post.status)}</td>
                          <td className="px-4 py-4">{formatDate(post.published_at)}</td>
                          <td className="px-4 py-4">
                            <div className="flex space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => router.push(`/blog/${post.slug}`)}
                                title="View Post"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => router.push(`/admin/blog/edit/${post.id}`)}
                                title="Edit Post"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDeletePost(post.id)}
                                disabled={isDeleting === post.id}
                                title="Delete Post"
                                className="text-red-500 hover:text-red-700 hover:border-red-200"
                              >
                                {isDeleting === post.id ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Trash2 className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  )
}
