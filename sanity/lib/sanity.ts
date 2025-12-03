// lib/sanity.ts
import { client } from "./client"
import imageUrlBuilder from "@sanity/image-url"
import type { PortableTextBlock } from "@portabletext/types"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import type { Product, ProductCategory } from "@/types/product"

const builder = imageUrlBuilder(client)

// Generate image URL safely
export const urlFor = (src: SanityImageSource): string => {
  return builder.image(src).url()
}

// -----------------------------
// Sanity Raw Types
// -----------------------------
export interface SanityImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
}

export interface SanityProduct {
  _id: string
  documentId?: string
  name: string
  description?: PortableTextBlock[]
  category?: ProductCategory
  material?: string
  customizationOptions?: string[]
  image?: SanityImage
  featured?: boolean
}

export interface SanityGalleryImage {
  _id: string
  title: string
  image: SanityImage
  alt: string
  description?: string
  order: number
  featured?: boolean
  width?: number
  height?: number
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
  description?: string
  order: number
  featured?: boolean
  width?: number
  height?: number
}

export interface SanityBlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  author: string
  excerpt: string
  image: SanityImage
  categories?: string[]
  content: PortableTextBlock[]
  readTime?: string
  publishedAt: string
  featured?: boolean
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  author: string
  excerpt: string
  imageUrl: string
  categories?: string[]
  content: PortableTextBlock[]
  readTime: string
  date: string
  featured: boolean
}

// -----------------------------
// Convert Sanity Product → App Product
// -----------------------------
function blocksToText(blocks: PortableTextBlock[] = []): string {
  return blocks
    .map((block) =>
      block.children?.map((child) => child.text).join("") ?? ""
    )
    .join("\n")
}

function mapSanityProductToAppProduct(p: SanityProduct): Product {
  return {
    id: p._id,
    documentId: p.documentId ?? p._id,
    name: p.name,
    description: blocksToText(p.description),
    category: p.category ?? "Headstones & Plaques",
    material: p.material,
    customizationOptions: p.customizationOptions ?? [],
    imageUrl: p.image ? urlFor(p.image) : "",
    featured: p.featured ?? false,
  }
}

// -----------------------------
// Convert Sanity Gallery Image → App Gallery Image
// -----------------------------
function mapSanityGalleryImage(img: SanityGalleryImage): GalleryImage {
  return {
    id: img._id,
    src: urlFor(img.image),
    alt: img.alt,
    title: img.title,
    description: img.description,
    order: img.order,
    featured: img.featured ?? false,
    width: img.width ?? 400,
    height: img.height ?? 400,
  }
}

// -----------------------------
// Convert Sanity Blog Post → App Blog Post
// -----------------------------
function mapSanityBlogPost(post: SanityBlogPost): BlogPost {
  return {
    id: post._id,
    slug: post.slug.current,
    title: post.title,
    author: post.author,
    excerpt: post.excerpt,
    imageUrl: urlFor(post.image),
    categories: post.categories ?? [],
    content: post.content,
    readTime: post.readTime ?? "5 min read",
    date: new Date(post.publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    featured: post.featured ?? false,
  }
}

// -----------------------------
// Fetch All Products
// -----------------------------
export async function getProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    _id,
    documentId,
    name,
    description,
    category,
    material,
    customizationOptions,
    image,
    featured
  }`

  const products = await client.fetch<SanityProduct[]>(query)
  return products.map(mapSanityProductToAppProduct)
}

// -----------------------------
// Fetch Featured Products
// -----------------------------
export async function getFeaturedProducts(): Promise<Product[]> {
  const query = `*[_type == "product" && featured == true]{
    _id,
    documentId,
    name,
    description,
    category,
    material,
    customizationOptions,
    image,
    featured
  }`

  const products = await client.fetch<SanityProduct[]>(query)
  return products.map(mapSanityProductToAppProduct)
}

// -----------------------------
// Fetch Product by documentId
// -----------------------------
export async function getProductByDocumentId(id: string) {
  const query = `*[_type == "product" && (documentId == $id || _id == $id)][0]{
    _id,
    documentId,
    name,
    description,
    category,
    material,
    customizationOptions,
    image,
    featured
  }`

  const product = await client.fetch(query, { id })
  return product ? mapSanityProductToAppProduct(product) : null
}

// -----------------------------
// Fetch Product by Category
// -----------------------------
export async function getProductsByCategory(category: string): Promise<Product[]> {
  const query = `*[_type == "product" && category == $category]{
    _id,
    documentId,
    name,
    description,
    category,
    material,
    customizationOptions,
    image,
    featured
  }`

  const products = await client.fetch<SanityProduct[]>(query, { category })
  return products.map(mapSanityProductToAppProduct)
}

// -----------------------------
// Fetch All Gallery Images
// -----------------------------
export async function getGalleryImages(): Promise<GalleryImage[]> {
  const query = `*[_type == "galleryImage"] | order(order asc){
    _id,
    title,
    image,
    alt,
    description,
    order,
    featured,
    width,
    height
  }`

  const images = await client.fetch<SanityGalleryImage[]>(query)
  return images.map(mapSanityGalleryImage)
}

// -----------------------------
// Fetch All Blog Posts
// -----------------------------
export async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(publishedAt desc){
    _id,
    title,
    slug,
    author,
    excerpt,
    image,
    categories,
    content,
    readTime,
    publishedAt,
    featured
  }`

  const posts = await client.fetch<SanityBlogPost[]>(query)
  return posts.map(mapSanityBlogPost)
}

// -----------------------------
// Fetch Featured Blog Posts
// -----------------------------
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && featured == true] | order(publishedAt desc){
    _id,
    title,
    slug,
    author,
    excerpt,
    image,
    categories,
    content,
    readTime,
    publishedAt,
    featured
  }`

  const posts = await client.fetch<SanityBlogPost[]>(query)
  return posts.map(mapSanityBlogPost)
}

// -----------------------------
// Fetch Blog Post by Slug
// -----------------------------
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    author,
    excerpt,
    image,
    categories,
    content,
    readTime,
    publishedAt,
    featured
  }`

  const post = await client.fetch<SanityBlogPost | null>(query, { slug })
  return post ? mapSanityBlogPost(post) : null
}

// -----------------------------
// Fetch Featured Gallery Images
// -----------------------------
export async function getFeaturedGalleryImages(): Promise<GalleryImage[]> {
  const query = `*[_type == "galleryImage" && featured == true] | order(order asc){
    _id,
    title,
    image,
    alt,
    description,
    order,
    featured,
    width,
    height
  }`

  const images = await client.fetch<SanityGalleryImage[]>(query)
  return images.map(mapSanityGalleryImage)
}