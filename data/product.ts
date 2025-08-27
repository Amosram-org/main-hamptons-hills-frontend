import { Product } from "@/types/product";
import {images} from '@/data/index';

export const allProducts: Product[] = [
 
    {
      id: "1",
      name: "Classic Granite Headstone",
      description: "Traditional polished granite headstone with elegant engraving",
      category: "Headstones",
      price: 1200,
      imageUrl: images.productImg1.src,
      material: "Premium granite",
      size: "24\" x 12\" x 4\"",
      installationIncluded: true,
      warranty: "10 years against weathering",
      customizationOptions: ["Name", "Dates", "Epitaph", "Symbols"]
    },
    {
      id: "2",
      name: "Marble Memorial Plaque",
      description: "Beautiful white marble plaque for wall mounting",
      category: "Plaques",
      price: 850,
      imageUrl: images.productImg2.src,
      material: "Italian marble",
      size: "18\" x 12\" x 2\"",
      installationIncluded: true
    },
    {
      id: "3",
      name: "Modern Slant Marker",
      description: "Contemporary slant grave marker with polished finish",
      category: "Tombstones",
      price: 950,
      imageUrl: images.productImg3.src,
      material: "Black granite",
      size: "20\" x 10\" x 6\"",
      installationIncluded: true,
      customizationOptions: ["Name", "Dates", "Small icon"]
    },
    {
      id: "4",
      name: "Modern Slant Marker",
      description: "Contemporary slant grave marker with polished finish",
      category: "Tombstones",
      price: 950,
      imageUrl: images.productImg4.src,
      material: "Black granite",
      size: "20\" x 10\" x 6\"",
      installationIncluded: true,
      customizationOptions: ["Name", "Dates", "Small icon"]
    },
    {
      id: "5",
      name: "Modern Slant Marker",
      description: "Contemporary slant grave marker with polished finish",
      category: "Tombstones",
      price: 950,
      imageUrl: images.productImg5.src,
      material: "Black granite",
      size: "20\" x 10\" x 6\"",
      installationIncluded: true,
      customizationOptions: ["Name", "Dates", "Small icon"]
    },
    {
      id: "6",
      name: "Modern Slant Marker",
      description: "Contemporary slant grave marker with polished finish",
      category: "Gravestones",
      price: 950,
      imageUrl: images.productImg1.src,
      material: "Black granite",
      size: "20\" x 10\" x 6\"",
      installationIncluded: true,
      customizationOptions: ["Name", "Dates", "Small icon"]
    },
    {
      id: "7",
      name: "Modern Slant Marker",
      description: "Contemporary slant grave marker with polished finish",
      category: "Plaques",
      price: 950,
      imageUrl: images.productImg1.src,
      material: "Black granite",
      size: "20\" x 10\" x 6\"",
      installationIncluded: true,
      customizationOptions: ["Name", "Dates", "Small icon"]
    },
    {
      id: "8",
      name: "Modern Slant Marker",
      description: "Contemporary slant grave marker with polished finish",
      category: "Headstones",
      price: 950,
      imageUrl: images.productImg1.src,
      material: "Black granite",
      size: "20\" x 10\" x 6\"",
      installationIncluded: true,
      customizationOptions: ["Name", "Dates", "Small icon"]
    },
    {
      id: "9",
      name: "Modern Slant Marker",
      description: "Contemporary slant grave marker with polished finish",
      category: "Plaques",
      price: 950,
      imageUrl: images.productImg1.src,
      material: "Black granite",
      size: "20\" x 10\" x 6\"",
      installationIncluded: true,
      customizationOptions: ["Name", "Dates", "Small icon"]
    },
    {
      id: "10",
      name: "Modern Slant Marker",
      description: "Contemporary slant grave marker with polished finish",
      category: "Gravestones",
      price: 950,
      imageUrl: images.productImg1.src,
      material: "Black granite",
      size: "20\" x 10\" x 6\"",
      installationIncluded: true,
      customizationOptions: ["Name", "Dates", "Small icon"]
    }
   
  ];


// For Featured Products (max 8)
export const getFeaturedProducts = (): Product[] => {
  return allProducts.slice(0, 8);
};

// For All Products (no pagination, just get all)
export const getAllProducts = (): Product[] => {
  return allProducts;
};

export function getProductById(id: string): Product | undefined {
  return allProducts.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(product => product.category === category);
}