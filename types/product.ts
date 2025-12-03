// types/product.ts

// Restrict categories to the ones used in your Sanity schema
export type ProductCategory = "Headstones & Plaques" | "Tombstones & Gravestones"

export interface Product {
  id: string               // maps from _id in Sanity
  documentId: string        // optional in Sanity, but required here
  name: string
  description: string       // plain text
  category: ProductCategory // only allowed values
  material?: string
  customizationOptions?: string[]
  imageUrl: string          // generated via urlFor()
  featured?: boolean        
}
