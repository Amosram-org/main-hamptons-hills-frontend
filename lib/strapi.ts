// lib/strapi.ts
import { Product, ProductCategory  } from "@/types/product"

interface StrapiDescriptionBlock {
  type: string
  children: { type: string; text: string }[]
}

// Define the image type
interface StrapiImage {
  url: string
}

// Extend StrapiProduct to include image
interface StrapiProduct {
  id: number
  documentId: string
  name: string
  description: StrapiDescriptionBlock[]
  price: number
  SubCategory?: string
  material?: string
  size?: string
  installationIncluded?: boolean
  warranty?: string
  customizationOptions?: string
  image?: StrapiImage   // 👈 added
  category?: string | { id: number; name: string }; 
}

interface StrapiResponse<T> {
  data: T[]
  meta: unknown
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=image`,
    { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  const json: StrapiResponse<StrapiProduct> = await res.json()

  return json.data.map((item): Product => {
    const descriptionText = Array.isArray(item.description)
      ? item.description.map(block =>
          block.children?.map(c => c.text).join(" ")
        ).join(" ")
      : ""

    return {
      id: String(item.id),
      name: item.name ?? "Untitled",
      description: descriptionText,
      category: (item.category ?? "Headstones & Plaques") as ProductCategory,
      material: item.material,
      customizationOptions: Array.isArray(item.customizationOptions)
        ? item.customizationOptions
        : [],
      imageUrl: item.image?.url
        ? `${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`
        : "/placeholder.png",
    }
  })
}
