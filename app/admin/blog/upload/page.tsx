"use client"

import type React from "react"

import { useState, useRef, type FormEvent, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Upload,
  ImageIcon,
  Check,
  AlertCircle,
  Loader2,
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Code,
  Quote,
  Undo,
  Redo,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  createBlogPost,
  getBlogCategories,
  getBlogAuthors,
  getOrCreateTag,
  updatePostTags,
} from "@/app/actions/blog-actions"
import { getClientSupabaseClient } from "@/lib/supabase"
import type { BlogCategory, BlogAuthor } from "@/types/blog"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import TiptapLink from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import { Toggle } from "@/components/ui/toggle"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"

export default function BlogUploadPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [categories, setCategories] = useState<BlogCategory[]>([])
  const [authors, setAuthors] = useState<BlogAuthor[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const [isMediaDialogOpen, setIsMediaDialogOpen] = useState(false)
  const [mediaItems, setMediaItems] = useState<any[]>([])
  const [loadingMedia, setLoadingMedia] = useState(false)

  // Form state
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [categoryId, setCategoryId] = useState<string>("")
  const [authorId, setAuthorId] = useState<string>("")
  const [tags, setTags] = useState("")
  const [altText, setAltText] = useState("")
  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [publishNow, setPublishNow] = useState(true)
  const [isFeatured, setIsFeatured] = useState(false)
  const [allowComments, setAllowComments] = useState(true)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      TiptapLink,
      Placeholder.configure({
        placeholder: "Write your blog post content here...",
      }),
    ],
    content: "",
    onUpdate: ({ editor }) => {
      // You can access the HTML content with editor.getHTML()
      console.log(editor.getHTML())
    },
  })

  // Load categories and authors on mount
  useEffect(() => {
    async function loadData() {
      try {
        const [categoriesData, authorsData] = await Promise.all([getBlogCategories(), getBlogAuthors()])
        setCategories(categoriesData)
        setAuthors(authorsData)
      } catch (err) {
        setError("Failed to load categories and authors")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    setSlug(generateSlug(newTitle))
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      const supabase = getClientSupabaseClient()
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`
      const filePath = `blog/${fileName}`

      const { error, data } = await supabase.storage.from("images").upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
        onUploadProgress: (progress) => {
          setUploadProgress(Math.round((progress.loaded / progress.total) * 100))
        },
      })

      if (error) {
        throw error
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("images").getPublicUrl(filePath)
      return publicUrl
    } catch (error) {
      console.error("Error uploading image:", error)
      return null
    }
  }

  const fetchMediaItems = async () => {
    setLoadingMedia(true)
    try {
      const supabase = getClientSupabaseClient()
      const { data, error } = await supabase.storage.from("images").list("", {
        sortBy: { column: "created_at", order: "desc" },
      })

      if (error) {
        console.error("Error fetching media items:", error)
        toast({
          title: "Error",
          description: "Failed to fetch media items",
          variant: "destructive",
        })
        return
      }

      // Filter out folders and get only images
      const files = data.filter((item) => {
        const extension = item.name.split(".").pop()?.toLowerCase() || ""
        return !item.id.endsWith("/") && ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(extension)
      })

      // Get URLs for each file
      const mediaWithUrls = await Promise.all(
        files.map(async (file) => {
          const { data: urlData } = supabase.storage.from("images").getPublicUrl(file.name)
          return {
            id: file.id,
            name: file.name,
            url: urlData.publicUrl,
            size: file.metadata.size,
            created_at: file.created_at,
          }
        }),
      )

      setMediaItems(mediaWithUrls)
    } catch (error) {
      console.error("Error in fetchMediaItems:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setLoadingMedia(false)
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setUploadProgress(0)

    try {
      if (!editor) {
        throw new Error("Editor not initialized")
      }

      // Upload image if selected
      let imageUrl = null
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile)
        if (!imageUrl) {
          throw new Error("Failed to upload image")
        }
      }

      // Process tags
      const tagNames = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag)

      // Create the blog post
      const post = await createBlogPost({
        title,
        slug,
        excerpt,
        content: editor.getHTML(),
        featured_image_url: imageUrl,
        author_id: Number.parseInt(authorId),
        category_id: Number.parseInt(categoryId),
        status: publishNow ? "published" : "draft",
        published_at: publishNow ? new Date().toISOString() : null,
        meta_title: metaTitle || title,
        meta_description: metaDescription || excerpt,
        is_featured: isFeatured,
        allow_comments: allowComments,
      })

      // Handle tags if any
      if (tagNames.length > 0) {
        const tagPromises = tagNames.map((name) => getOrCreateTag(name))
        const createdTags = await Promise.all(tagPromises)
        await updatePostTags(
          post.id,
          createdTags.map((tag) => tag.id),
        )
      }

      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.reset()
        }
        setTitle("")
        setSlug("")
        setExcerpt("")
        if (editor) {
          editor.commands.setContent("")
        }
        setCategoryId("")
        setAuthorId("")
        setTags("")
        setAltText("")
        setMetaTitle("")
        setMetaDescription("")
        setSelectedFile(null)
        setPreview(null)
        setIsSuccess(false)

        // Redirect to manage page
        router.push("/admin/blog/manage")
      }, 2000)
    } catch (err: any) {
      console.error("Error creating blog post:", err)
      setError(err.message || "Failed to create blog post")
    } finally {
      setIsSubmitting(false)
    }
  }

  const insertImage = (url: string) => {
    if (editor) {
      editor
        .chain()
        .focus()
        .setImage({ src: url, alt: altText || "Blog image" })
        .run()
      setIsMediaDialogOpen(false)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-[#0a3b25] text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              White Rock Foundry
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/admin" className="text-white hover:text-yellow-300">
              Admin Dashboard
            </Link>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-4 py-2">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold font-heading">Upload New Blog Post</h1>
              <p className="text-gray-600">Create and publish a new article to the company blog</p>
            </div>
            <Link href="/admin/blog/manage">
              <Button variant="outline" className="border-[#0a3b25] text-[#0a3b25]">
                Back to Blog Management
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-[#0a3b25]" />
              <span className="ml-2">Loading...</span>
            </div>
          ) : (
            <>
              {isSuccess && (
                <Alert className="mb-6 bg-green-50 border-green-200">
                  <Check className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Success!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Your blog post has been successfully uploaded and is now{" "}
                    {publishNow ? "published" : "saved as draft"}.
                  </AlertDescription>
                </Alert>
              )}

              {error && (
                <Alert className="mb-6 bg-red-50 border-red-200">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertTitle className="text-red-800">Error</AlertTitle>
                  <AlertDescription className="text-red-700">{error}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Tabs defaultValue="content" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="content">Content</TabsTrigger>
                      <TabsTrigger value="media">Media</TabsTrigger>
                      <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>

                    <form ref={formRef} onSubmit={handleSubmit}>
                      <TabsContent value="content" className="space-y-6">
                        <Card>
                          <CardHeader>
                            <CardTitle>Blog Content</CardTitle>
                            <CardDescription>Enter the main content for your blog post</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="space-y-2">
                              <Label htmlFor="title">Blog Title *</Label>
                              <Input
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                                placeholder="Enter a compelling title for your blog post"
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="slug">URL Slug *</Label>
                              <Input
                                id="slug"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                placeholder="url-friendly-slug"
                                required
                              />
                              <p className="text-xs text-gray-500">
                                This will be used in the URL: /blog/{slug || "your-slug"}
                              </p>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="excerpt">Excerpt *</Label>
                              <Textarea
                                id="excerpt"
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                                placeholder="Write a short summary (150-200 characters)"
                                rows={3}
                                required
                              />
                              <p className="text-xs text-gray-500">
                                This will appear in blog listings and search results
                              </p>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="content">Main Content *</Label>
                              <div className="border rounded-md">
                                <div className="flex flex-wrap items-center gap-1 p-1 border-b">
                                  <Toggle
                                    size="sm"
                                    pressed={editor?.isActive("bold")}
                                    onPressedChange={() => editor?.chain().focus().toggleBold().run()}
                                    aria-label="Toggle bold"
                                  >
                                    <Bold className="h-4 w-4" />
                                  </Toggle>
                                  <Toggle
                                    size="sm"
                                    pressed={editor?.isActive("italic")}
                                    onPressedChange={() => editor?.chain().focus().toggleItalic().run()}
                                    aria-label="Toggle italic"
                                  >
                                    <Italic className="h-4 w-4" />
                                  </Toggle>
                                  <Toggle
                                    size="sm"
                                    pressed={editor?.isActive("heading", { level: 2 })}
                                    onPressedChange={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                                    aria-label="Toggle heading"
                                  >
                                    <Heading2 className="h-4 w-4" />
                                  </Toggle>
                                  <Toggle
                                    size="sm"
                                    pressed={editor?.isActive("bulletList")}
                                    onPressedChange={() => editor?.chain().focus().toggleBulletList().run()}
                                    aria-label="Toggle bullet list"
                                  >
                                    <List className="h-4 w-4" />
                                  </Toggle>
                                  <Toggle
                                    size="sm"
                                    pressed={editor?.isActive("orderedList")}
                                    onPressedChange={() => editor?.chain().focus().toggleOrderedList().run()}
                                    aria-label="Toggle ordered list"
                                  >
                                    <ListOrdered className="h-4 w-4" />
                                  </Toggle>
                                  <Toggle
                                    size="sm"
                                    pressed={editor?.isActive("code")}
                                    onPressedChange={() => editor?.chain().focus().toggleCodeBlock().run()}
                                    aria-label="Toggle code block"
                                  >
                                    <Code className="h-4 w-4" />
                                  </Toggle>
                                  <Toggle
                                    size="sm"
                                    pressed={editor?.isActive("blockquote")}
                                    onPressedChange={() => editor?.chain().focus().toggleBlockquote().run()}
                                    aria-label="Toggle blockquote"
                                  >
                                    <Quote className="h-4 w-4" />
                                  </Toggle>
                                  <Dialog
                                    open={isMediaDialogOpen}
                                    onOpenChange={(open) => {
                                      setIsMediaDialogOpen(open)
                                      if (open) fetchMediaItems()
                                    }}
                                  >
                                    <DialogTrigger asChild>
                                      <Button variant="outline" size="sm" className="h-8">
                                        <ImageIcon className="h-4 w-4 mr-2" /> Insert Image
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                                      <DialogHeader>
                                        <DialogTitle>Insert Image</DialogTitle>
                                        <DialogDescription>
                                          Select an image from your media library to insert into the post
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="py-4">
                                        {loadingMedia ? (
                                          <div className="flex justify-center items-center py-12">
                                            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                                          </div>
                                        ) : mediaItems.length === 0 ? (
                                          <div className="text-center py-12 text-muted-foreground">
                                            No images found. Upload some images first.
                                          </div>
                                        ) : (
                                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            {mediaItems.map((item) => (
                                              <div
                                                key={item.id}
                                                className="border rounded-md overflow-hidden cursor-pointer hover:border-primary transition-colors"
                                                onClick={() => insertImage(item.url)}
                                              >
                                                <div className="aspect-square">
                                                  <img
                                                    src={item.url || "/placeholder.svg"}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                  />
                                                </div>
                                                <div className="p-2">
                                                  <p className="text-xs font-medium truncate">{item.name}</p>
                                                  <p className="text-xs text-muted-foreground">
                                                    {formatFileSize(item.size)}
                                                  </p>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                      <DialogFooter>
                                        <Button variant="outline" onClick={() => setIsMediaDialogOpen(false)}>
                                          Cancel
                                        </Button>
                                      </DialogFooter>
                                    </DialogContent>
                                  </Dialog>
                                  <div className="ml-auto flex items-center gap-1">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => editor?.chain().focus().undo().run()}
                                      disabled={!editor?.can().undo()}
                                    >
                                      <Undo className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => editor?.chain().focus().redo().run()}
                                      disabled={!editor?.can().redo()}
                                    >
                                      <Redo className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="p-4 min-h-[300px]">
                                  <EditorContent editor={editor} className="prose max-w-none" />
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="media" className="space-y-6">
                        <Card>
                          <CardHeader>
                            <CardTitle>Featured Image</CardTitle>
                            <CardDescription>Upload a high-quality image for your blog post</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                              {preview ? (
                                <div className="space-y-4">
                                  <div className="relative w-full h-64 mx-auto">
                                    <img
                                      src={preview || "/placeholder.svg"}
                                      alt="Preview"
                                      className="w-full h-full object-cover rounded-md"
                                    />
                                  </div>
                                  <p className="text-sm text-gray-500">
                                    {selectedFile?.name} ({Math.round(selectedFile?.size / 1024)} KB)
                                  </p>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                      setSelectedFile(null)
                                      setPreview(null)
                                    }}
                                  >
                                    Remove Image
                                  </Button>
                                </div>
                              ) : (
                                <div className="space-y-4">
                                  <div className="flex justify-center">
                                    <ImageIcon className="h-12 w-12 text-gray-400" />
                                  </div>
                                  <div className="space-y-2">
                                    <p className="text-sm font-medium">Drag and drop an image, or click to browse</p>
                                    <p className="text-xs text-gray-500">PNG, JPG or WEBP up to 5MB</p>
                                  </div>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    className="relative"
                                    onClick={() => document.getElementById("file-upload")?.click()}
                                  >
                                    <Upload className="h-4 w-4 mr-2" />
                                    Upload Image
                                    <input
                                      id="file-upload"
                                      type="file"
                                      accept="image/*"
                                      className="sr-only"
                                      onChange={handleFileChange}
                                    />
                                  </Button>
                                </div>
                              )}

                              {uploadProgress > 0 && uploadProgress < 100 && (
                                <div className="mt-4">
                                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                      className="bg-[#0a3b25] h-2.5 rounded-full"
                                      style={{ width: `${uploadProgress}%` }}
                                    ></div>
                                  </div>
                                  <p className="text-xs text-gray-500 mt-1">Uploading: {uploadProgress}%</p>
                                </div>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="alt-text">Alt Text</Label>
                              <Input
                                id="alt-text"
                                value={altText}
                                onChange={(e) => setAltText(e.target.value)}
                                placeholder="Describe the image for accessibility"
                              />
                              <p className="text-xs text-gray-500">
                                Provide a text description of the image for screen readers
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="settings" className="space-y-6">
                        <Card>
                          <CardHeader>
                            <CardTitle>Publication Settings</CardTitle>
                            <CardDescription>Configure how and when your post will be published</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="space-y-2">
                              <Label htmlFor="category">Category *</Label>
                              <Select value={categoryId} onValueChange={setCategoryId} required>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                  {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.id.toString()}>
                                      {category.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="tags">Tags</Label>
                              <Input
                                id="tags"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                placeholder="Enter tags separated by commas"
                              />
                              <p className="text-xs text-gray-500">
                                Example: metal casting, precision engineering, quality control
                              </p>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="author">Author *</Label>
                              <Select value={authorId} onValueChange={setAuthorId} required>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an author" />
                                </SelectTrigger>
                                <SelectContent>
                                  {authors.map((author) => (
                                    <SelectItem key={author.id} value={author.id.toString()}>
                                      {author.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-4">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="publish-now"
                                  checked={publishNow}
                                  onCheckedChange={(checked) => setPublishNow(checked as boolean)}
                                />
                                <Label htmlFor="publish-now">Publish immediately</Label>
                              </div>

                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="featured"
                                  checked={isFeatured}
                                  onCheckedChange={(checked) => setIsFeatured(checked as boolean)}
                                />
                                <Label htmlFor="featured">Feature this post</Label>
                              </div>

                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="comments"
                                  checked={allowComments}
                                  onCheckedChange={(checked) => setAllowComments(checked as boolean)}
                                />
                                <Label htmlFor="comments">Allow comments</Label>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>SEO Settings</CardTitle>
                            <CardDescription>Optimize your post for search engines</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="space-y-2">
                              <Label htmlFor="seo-title">SEO Title</Label>
                              <Input
                                id="seo-title"
                                value={metaTitle}
                                onChange={(e) => setMetaTitle(e.target.value)}
                                placeholder="Enter SEO title (if different from post title)"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="meta-description">Meta Description</Label>
                              <Textarea
                                id="meta-description"
                                value={metaDescription}
                                onChange={(e) => setMetaDescription(e.target.value)}
                                placeholder="Enter a meta description for search engines"
                                rows={3}
                              />
                              <p className="text-xs text-gray-500">Recommended length: 150-160 characters</p>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <div className="mt-6 flex justify-end space-x-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="border-gray-300"
                          onClick={() => {
                            setPublishNow(false)
                            if (formRef.current) formRef.current.requestSubmit()
                          }}
                        >
                          Save as Draft
                        </Button>
                        <Button
                          type="submit"
                          className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              {publishNow ? "Publishing..." : "Saving..."}
                            </>
                          ) : (
                            "Publish Post"
                          )}
                        </Button>
                      </div>
                    </form>
                  </Tabs>
                </div>

                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Publishing Guide</CardTitle>
                      <CardDescription>Tips for creating effective blog content</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm">Best Practices</h4>
                        <ul className="text-sm text-gray-600 list-disc pl-5 mt-2 space-y-1">
                          <li>Use clear, concise headlines</li>
                          <li>Include relevant keywords naturally</li>
                          <li>Break content into scannable sections</li>
                          <li>Use high-quality, relevant images</li>
                          <li>Provide actionable insights for readers</li>
                          <li>End with a clear call-to-action</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm">Image Guidelines</h4>
                        <ul className="text-sm text-gray-600 list-disc pl-5 mt-2 space-y-1">
                          <li>Recommended size: 1200 x 630 pixels</li>
                          <li>Maximum file size: 5MB</li>
                          <li>Supported formats: JPG, PNG, WEBP</li>
                          <li>Always include descriptive alt text</li>
                          <li>Avoid text-heavy images</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm">Content Review Process</h4>
                        <p className="text-sm text-gray-600 mt-2">
                          All posts will be reviewed by an editor before publication. Please allow 24-48 hours for the
                          review process.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="text-[#0a3b25] w-full">
                        View Full Content Guidelines
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Recent Posts</CardTitle>
                      <CardDescription>Latest articles on the blog</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="border-b pb-3">
                          <p className="font-medium text-sm">Advancements in Metal Casting Technology</p>
                          <p className="text-xs text-gray-500">Published 3 days ago</p>
                        </li>
                        <li className="border-b pb-3">
                          <p className="font-medium text-sm">How Precision Engineering is Transforming Aerospace</p>
                          <p className="text-xs text-gray-500">Published 1 week ago</p>
                        </li>
                        <li className="border-b pb-3">
                          <p className="font-medium text-sm">The Future of Sustainable Manufacturing</p>
                          <p className="text-xs text-gray-500">Published 2 weeks ago</p>
                        </li>
                        <li>
                          <p className="font-medium text-sm">Quality Control in Modern Foundries</p>
                          <p className="text-xs text-gray-500">Published 3 weeks ago</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a3b25] text-white py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">© 2023 White Rock Foundry Admin Portal. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
