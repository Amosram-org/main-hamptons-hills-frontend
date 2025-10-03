export type ProductCategory = "Headstones & Plaques" | "Tombstones & Gravestones";

export interface Product {
  id: string;
  documentId: string;
  name: string;
  description: string;
  category: ProductCategory;
  material?: string;
  customizationOptions?: string[];
  imageUrl: string;
  featured?: boolean;
}
