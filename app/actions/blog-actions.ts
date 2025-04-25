"use server"

import { revalidatePath } from "next/cache"
import { getServerSupabaseClient } from "@/lib/supabase"
import type { BlogPost, BlogCategory, BlogAuthor, BlogTag } from "@/types/blog"

// Get all blog posts with optional filtering
export async function getBlogPosts({
  status = "published",
  limit = 10,
  offset = 0,
  categorySlug,
  authorId,
  featured,
}: {
  status?: "draft" | "published" | "archived" | "all"
  limit?: number
  offset?: number
  categorySlug?: string
  authorId?: number
  featured?: boolean
} = {}) {
  const supabase = getServerSupabaseClient()

  let query = supabase.from("blog_posts").select(`
      *,
      author:author_id(id, name, avatar_url),
      category:category_id(id, name, slug)
    `)

  // Apply filters
  if (status !== "all") {
    query = query.eq("status", status)
  }

  if (categorySlug) {
    query = query.eq("category.slug", categorySlug)
  }

  if (authorId) {
    query = query.eq("author_id", authorId)
  }

  if (featured !== undefined) {
    query = query.eq("is_featured", featured)
  }

  // Apply pagination
  query = query.order("published_at", { ascending: false }).range(offset, offset + limit - 1)

  const { data, error } = await query

  if (error) {
    console.error("Error fetching blog posts:", error)
    throw new Error("Failed to fetch blog posts")
  }
  console.log('Blog Data', data)

  return data as (BlogPost & { author: BlogAuthor; category: BlogCategory })[]
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  const supabase = getServerSupabaseClient()

  const { data, error } = await supabase
    .from("blog_posts")
    .select(`
      *,
      author:author_id(id, name, bio, avatar_url),
      category:category_id(id, name, slug)
    `)
    .eq("slug", slug)
    .single()

  if (error) {
    console.error("Error fetching blog post:", error)
    return null
  }

  // Get tags for this post
  const { data: tagsData } = await supabase
    .from("blog_posts_tags")
    .select(`
      tag:tag_id(id, name, slug)
    `)
    .eq("post_id", data.id)

  const tags = tagsData?.map((item) => item.tag) || []

  return { ...data, tags } as BlogPost & {
    author: BlogAuthor
    category: BlogCategory
    tags: BlogTag[]
  }
}

// Create a new blog post
export async function createBlogPost(postData: Omit<BlogPost, "id" | "created_at" | "updated_at">) {
  const supabase = getServerSupabaseClient()

  // Set published_at if status is published
  if (postData.status === "published" && !postData.published_at) {
    postData.published_at = new Date().toISOString()
  }

  const { data, error } = await supabase.from("blog_posts").insert(postData).select().single()

  if (error) {
    console.error("Error creating blog post:", error)
    throw new Error("Failed to create blog post")
  }

  revalidatePath("/blog")
  revalidatePath("/admin/blog/manage")

  return data as BlogPost
}

// Update an existing blog post
export async function updateBlogPost(id: number, postData: Partial<BlogPost>) {
  const supabase = getServerSupabaseClient()

  // Set published_at if status is changing to published
  if (postData.status === "published") {
    const { data: existingPost } = await supabase
      .from("blog_posts")
      .select("status, published_at")
      .eq("id", id)
      .single()

    if (existingPost && existingPost.status !== "published" && !existingPost.published_at) {
      postData.published_at = new Date().toISOString()
    }
  }

  // Always update the updated_at timestamp
  postData.updated_at = new Date().toISOString()

  const { data, error } = await supabase.from("blog_posts").update(postData).eq("id", id).select().single()

  if (error) {
    console.error("Error updating blog post:", error)
    throw new Error("Failed to update blog post")
  }

  revalidatePath("/blog")
  revalidatePath(`/blog/${data.slug}`)
  revalidatePath("/admin/blog/manage")

  return data as BlogPost
}

// Delete a blog post
export async function deleteBlogPost(id: number) {
  const supabase = getServerSupabaseClient()

  const { error } = await supabase.from("blog_posts").delete().eq("id", id)

  if (error) {
    console.error("Error deleting blog post:", error)
    throw new Error("Failed to delete blog post")
  }

  revalidatePath("/blog")
  revalidatePath("/admin/blog/manage")

  return true
}

// Get all blog categories
export async function getBlogCategories() {
  const supabase = getServerSupabaseClient()

  const { data, error } = await supabase.from("blog_categories").select("*").order("name")

  if (error) {
    console.error("Error fetching blog categories:", error)
    return [] // Return empty array instead of throwing error
  }

  return data as BlogCategory[]
}

// Get all blog authors
export async function getBlogAuthors() {
  const supabase = getServerSupabaseClient()

  const { data, error } = await supabase.from("blog_authors").select("*").order("name")

  if (error) {
    console.error("Error fetching blog authors:", error)
    return [] // Return empty array instead of throwing error
  }

  return data as BlogAuthor[]
}

// Get all blog tags
export async function getBlogTags() {
  const supabase = getServerSupabaseClient()

  const { data, error } = await supabase.from("blog_tags").select("*").order("name")

  if (error) {
    console.error("Error fetching blog tags:", error)
    return [] // Return empty array instead of throwing error
  }

  return data as BlogTag[]
}

// Create or get a tag by name
export async function getOrCreateTag(name: string) {
  const supabase = getServerSupabaseClient()
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")

  // First try to get the existing tag
  const { data: existingTag, error: getError } = await supabase.from("blog_tags").select("*").eq("slug", slug).single()

  if (!getError && existingTag) {
    return existingTag as BlogTag
  }

  // If not found, create a new tag
  const { data: newTag, error: createError } = await supabase.from("blog_tags").insert({ name, slug }).select().single()

  if (createError) {
    console.error("Error creating tag:", createError)
    throw new Error("Failed to create tag")
  }

  return newTag as BlogTag
}

// Associate tags with a post
export async function updatePostTags(postId: number, tagIds: number[]) {
  const supabase = getServerSupabaseClient()

  // First delete all existing associations
  const { error: deleteError } = await supabase.from("blog_posts_tags").delete().eq("post_id", postId)

  if (deleteError) {
    console.error("Error deleting existing tags:", deleteError)
    throw new Error("Failed to update post tags")
  }

  // If no tags to add, we're done
  if (!tagIds.length) return true

  // Create new associations
  const tagAssociations = tagIds.map((tagId) => ({
    post_id: postId,
    tag_id: tagId,
  }))

  const { error: insertError } = await supabase.from("blog_posts_tags").insert(tagAssociations)

  if (insertError) {
    console.error("Error associating tags with post:", insertError)
    throw new Error("Failed to update post tags")
  }

  return true
}
