// src/components/blog/BlogCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MemorialPost } from '@/types/memorialPost';
import MotionDiv from '../ui/MotionDiv';

interface BlogCardProps {
  post: MemorialPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 bg-white text-gray-800 text-xs font-medium rounded">
              {post.readTime}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-amber-800 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories?.slice(0, 3).map((category) => (
              <span 
                key={category} 
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {category}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-amber-800 font-medium">
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}