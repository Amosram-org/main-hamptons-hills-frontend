import { MemorialPost } from '@/types/memorialPost';
import { images } from '.';

const mockPosts: MemorialPost[] = [
  {
    id: '1',
    title: 'Choosing the Right Granite for Headstones',
    excerpt: 'A guide to selecting the perfect granite material that will withstand the test of time and elements.',
    content: ' Granite has been the material of choice for memorials for centuries due to its exceptional durability and beauty. This comprehensive guide covers the different types of granite suitable for headstones, from absolute black to mahogany and blue pearl varieties. Learn about polish levels, thickness options, and how to select the right granite that will withstand weather elements while maintaining its beauty for generations to come.',
    slug: 'choosing-granite-headstones',
    imageUrl: "/images/blog-img1.png",
    date: 'September 3, 2025',
    author: 'Hamptons Hills',
    readTime: '5 min read',
    categories: ['headstones', 'materials', 'guide']
  },
  {
    id: '2',
    title: 'The History of Memorialization Practices',
    excerpt: 'Exploring how memorial practices have evolved from ancient times to modern day.',
    content: 'Choosing the right material for a memorial is an important decision. This comparison guide examines the characteristics of granite, bronze, and marble memorials. Discover how each material withstands different climate conditions, maintenance requirements, cost considerations, and aesthetic qualities. We help you understand which material best suits your needs, budget, and personal preferences for creating a lasting tribute.',
    slug: 'history-memorialization-practices',
    imageUrl: images.productImg2.src,
    date: 'August 28, 2025',
    author: 'Hamptons Hills',
    readTime: '8 min read',
    categories: ['history', 'memorials', 'stories']
  },
  {
    id: '3',
    title: 'Caring for Your Loved One\'s Memorial',
    excerpt: 'Essential maintenance tips to preserve the beauty and integrity of stone memorials.',
    content: 'Modern memorialization offers countless ways to honor your loved one&apos;s unique personality and interests. This article explores customization options including laser etchings of photographs, favorite symbols or hobbies, custom shapes, epitaph ideas, and incorporating meaningful quotes. We showcase inspiring examples of personalized memorials and provide guidance on working with artisans to create a truly one-of-a-kind tribute that captures the essence of your loved one&apos;s life.',
    slug: 'caring-for-memorials',
    imageUrl: images.productImg3.src,
    date: 'August 20, 2025',
    author: 'Hamptons Hills',
    readTime: '4 min read',
    categories: ['maintenance', 'care', 'guide']
  },

];

export async function getBlogPosts(limit?: number): Promise<MemorialPost[]> {
  // Simulating API fetch delay here
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Sorting posts by date (newest first)
  const sortedPosts = [...mockPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Returning limited posts if limit is specified
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
}

export async function getBlogPost(slug: string): Promise<MemorialPost | undefined> {
  // Simulating API fetch delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockPosts.find(post => post.slug === slug);
}