"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Plus, Edit, Trash2, Save, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { getServerSupabaseClient } from "@/lib/supabase"
import type { BlogCategory } from "@/types/blog"

export default function BlogCategoriesPage() {
  const { toast } = useToast()
  const [categories, setCategories] = useState<BlogCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)

  // Form state
  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")
  const [description, setDescription] = useState("")

  // Edit form state
  const [editName, setEditName] = useState("")
  const [editSlug, setEditSlug] = useState("")
  const [editDescription, setEditDescription] = useState("")

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    loadCategories()
  }, [])

  async function loadCategories() {
    setIsLoading(true)
    try {
      const supabase = getServerSupabaseClient()
      const { data, error } = await supabase.from("blog_categories").select("*").order("name")

      if (error) throw error
      setCategories(data || [])
    } catch (error) {
      console.error("Error loading categories:", error)
      toast({
        title: "Error",
        description: "Failed to load categories. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    setName(newName)
    setSlug(generateSlug(newName))
  }

  const handleEditNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    setEditName(newName)
    setEditSlug(generateSlug(newName))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const supabase = getServerSupabaseClient()
      const { data, error } = await supabase.from("blog_categories").insert([{ name, slug, description }]).select()

      if (error) throw error

      setCategories([...categories, data[0]])
      resetForm()

      toast({
        title: "Success",
        description: "Category created successfully",
      })
    } catch (error: any) {
      console.error("Error creating category:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to create category",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const startEditing = (category: BlogCategory) => {
    setEditingId(category.id)
    setEditName(category.name)
    setEditSlug(category.slug)
    setEditDescription(category.description || "")
  }

  const cancelEditing = () => {
    setEditingId(null)
  }

  const saveEdit = async (id: number) => {
    try {
      const supabase = getServerSupabaseClient()
      const { data, error } = await supabase
        .from("blog_categories")
        .update({ name: editName, slug: editSlug, description: editDescription })
        .eq("id", id)
        .select()

      if (error) throw error

      setCategories(categories.map((cat) => (cat.id === id ? data[0] : cat)))
      setEditingId(null)

      toast({
        title: "Success",
        description: "Category updated successfully",
      })
    } catch (error: any) {
      console.error("Error updating category:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to update category",
        variant: "destructive",
      })
    }
  }

  const deleteCategory = async (id: number) => {
    if (!confirm("Are you sure you want to delete this category? This may affect blog posts using this category.")) {
      return
    }

    try {
      const supabase = getServerSupabaseClient()
      const { error } = await supabase.from("blog_categories").delete().eq("id", id)

      if (error) throw error

      setCategories(categories.filter((cat) => cat.id !== id))

      toast({
        title: "Success",
        description: "Category deleted successfully",
      })
    } catch (error: any) {
      console.error("Error deleting category:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to delete category",
        variant: "destructive",
      })
    }
  }

  const resetForm = () => {
    setName("")
    setSlug("")
    setDescription("")
    if (formRef.current) {
      formRef.current.reset()
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold font-heading">Blog Categories</h1>
              <p className="text-gray-600">Manage categories for your blog posts</p>
            </div>
            <Link href="/admin/blog/manage">
              <Button variant="outline" className="border-[#0a3b25] text-[#0a3b25]">
                Back to Blog Management
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Category</CardTitle>
                  <CardDescription>Create a new blog category</CardDescription>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Category Name *</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="e.g. Industry News"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="slug">URL Slug *</Label>
                      <Input
                        id="slug"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        placeholder="e.g. industry-news"
                        required
                      />
                      <p className="text-xs text-gray-500">Used in URLs: /blog/category/{slug || "example-slug"}</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe this category"
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        <>
                          <Plus className="mr-2 h-4 w-4" />
                          Add Category
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Categories</CardTitle>
                  <CardDescription>Edit or delete existing categories</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex justify-center items-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-[#0a3b25]" />
                      <span className="ml-2">Loading categories...</span>
                    </div>
                  ) : categories.length === 0 ? (
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium">No categories found</h3>
                      <p className="mt-1 text-gray-500">Create your first category to get started.</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-500">Slug</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-500">Description</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-500">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories.map((category) => (
                            <tr key={category.id} className="border-b hover:bg-gray-50">
                              <td className="px-4 py-4">
                                {editingId === category.id ? (
                                  <Input value={editName} onChange={handleEditNameChange} className="max-w-[200px]" />
                                ) : (
                                  category.name
                                )}
                              </td>
                              <td className="px-4 py-4">
                                {editingId === category.id ? (
                                  <Input
                                    value={editSlug}
                                    onChange={(e) => setEditSlug(e.target.value)}
                                    className="max-w-[200px]"
                                  />
                                ) : (
                                  category.slug
                                )}
                              </td>
                              <td className="px-4 py-4">
                                {editingId === category.id ? (
                                  <Textarea
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                    rows={2}
                                    className="max-w-[300px]"
                                  />
                                ) : (
                                  <div className="max-w-xs truncate">{category.description || "-"}</div>
                                )}
                              </td>
                              <td className="px-4 py-4">
                                {editingId === category.id ? (
                                  <div className="flex space-x-2">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => saveEdit(category.id)}
                                      className="text-green-600"
                                    >
                                      <Save className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={cancelEditing}
                                      className="text-gray-500"
                                    >
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ) : (
                                  <div className="flex space-x-2">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => startEditing(category)}
                                      title="Edit Category"
                                    >
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => deleteCategory(category.id)}
                                      title="Delete Category"
                                      className="text-red-500 hover:text-red-700 hover:border-red-200"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                )}
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
          </div>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  )
}
