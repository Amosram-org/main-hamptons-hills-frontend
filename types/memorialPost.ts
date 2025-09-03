export interface MemorialPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  imageUrl: string;
  date: string;
  author: string;
  readTime: string;
  categories?: string[];
}