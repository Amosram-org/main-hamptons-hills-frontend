import { GalleryImage } from "@/types/gallery";
import { Product, ProductCategory } from "@/types/product"

interface StrapiDescriptionBlock {
  type: string
  children: { type: string; text: string }[]
}

interface StrapiImage {
  url: string
}

interface StrapiCategory {
  id: number
  name: string
}

interface StrapiProduct {
  id: number
  documentId: string
  name: string
  description: StrapiDescriptionBlock[] | string
  price?: number
  SubCategory?: string
  material?: string
  size?: string
  installationIncluded?: boolean
  warranty?: string
  customizationOptions?: string[] | string
  image?: StrapiImage
  category?: string | StrapiCategory
  featured?: boolean
}


//Strapi image gallery types
interface StrapiGallery {
  id: number
  title: string
  alt?: string
  image: {
    url: string
    alternativeText?: string | null
    formats?: {
      thumbnail?: { url: string }
      small?: { url: string }
      medium?: { url: string }
    }
  }
}


interface StrapiResponse<T> {
  data: T[]
  meta: unknown
}

// Fetch products function from Strapi CMS
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=image`,
    {
      next: { revalidate: 60 }, // ISR enabled (rebuilding every 60s)
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  const json: StrapiResponse<StrapiProduct> = await res.json()

  return json.data.map((item): Product => {
    const descriptionText = Array.isArray(item.description)
      ? item.description
          .map(block => block.children?.map(c => c.text).join(" "))
          .join(" ")
      : typeof item.description === "string"
        ? item.description
        : ""

    const categoryName =
      typeof item.category === "string"
        ? item.category
        : item.category?.name ?? "Headstones & Plaques"

    return {
      id: String(item.id),
      documentId: item.documentId,
      name: item.name ?? "Untitled",
      description: descriptionText,
      category: categoryName as ProductCategory,
      material: item.material ?? "",
      customizationOptions: Array.isArray(item.customizationOptions)
        ? item.customizationOptions
        : item.customizationOptions
          ? [item.customizationOptions]
          : [],
      imageUrl: item.image?.url
        ? `${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`
        : "/placeholder.png",
      featured: item.featured ?? false,
    }
  })
}

// Fetch gallery images function from Strapi CMS
export async function fetchGalleryImages(): Promise<GalleryImage[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/galleries?populate=image`,
    { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch gallery images")
  }

  const json: StrapiResponse<StrapiGallery> = await res.json()

  return json.data.map(item => ({
    id: String(item.id),
    src: item.image?.url
      ? `${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`
      : "/placeholder.png",
    alt: item.image?.alternativeText || item.title,
    title: item.title,
  }))
}

