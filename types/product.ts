export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  material?: string;
  size?: string;
  installationIncluded?: boolean;
  warranty?: string;
  customizationOptions?: string[];
}