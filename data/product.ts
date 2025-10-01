import { fetchProducts } from "@/lib/strapi"
import { Product } from "@/types/product"

let cachedProducts: Product[] | null = null

export async function getAllProducts(): Promise<Product[]> {
  if (!cachedProducts) {
    cachedProducts = await fetchProducts()
  }
  return cachedProducts
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getAllProducts()
  return products.find(p => p.id === id) || null
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products = await getAllProducts()
  return products.filter(p => p.category === category)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getAllProducts()
  return products.slice(0, 8) 
}
