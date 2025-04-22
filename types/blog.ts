export type BlogCategory = {
  id: number
  name: string
  slug: string
  description: string | null
  created_at: string
  updated_at: string
}

export type BlogAuthor = {
  id: number
  name: string
  email: string
  bio: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string | null
  content: string
  featured_image_url: string | null
  author_id: number
  category_id: number
  status: "draft" | "published" | "archived"
  published_at: string | null
  meta_title: string | null
  meta_description: string | null
  is_featured: boolean
  allow_comments: boolean
  created_at: string
  updated_at: string
  // Joined fields
  author?: BlogAuthor
  category?: BlogCategory
  tags?: BlogTag[]
}

export type BlogTag = {
  id: number
  name: string
  slug: string
  created_at: string
}

export type BlogComment = {
  id: number
  post_id: number
  name: string
  email: string
  content: string
  is_approved: boolean
  created_at: string
}
