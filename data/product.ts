import { fetchProducts } from "@/lib/strapi"
import { Product } from "@/types/product"

export async function getAllProducts(): Promise<Product[]> {
  return await fetchProducts() // ISR-enabled
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await fetchProducts()
  return products.find(p => String(p.id) === id) || null
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products = await fetchProducts()
  return products.filter(p => p.category === category)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await fetchProducts()
  const featured = products.filter(p => p.featured)
  return featured.length > 0 ? featured : products.slice(0, 8)
}
