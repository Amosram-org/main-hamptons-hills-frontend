// src/components/blog/BlogSection.tsx
'use client';

import BlogCard from './BlogCard';
import { MemorialPost } from '@/types/memorialPost';

interface BlogSectionProps {
  posts: MemorialPost[];
  title?: string;
  description?: string;
}

export default function BlogSection({ 
  posts, 
  title = "Memorial Insights & Stories",
  description = "Explore our collection of articles on memorial traditions, stone care, and heartfelt stories."
}: BlogSectionProps) {
  return (
    <section className="py-16 bg-gray-50" id='blogs'>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Blog Posts Grid - Only showing the first 3 posts */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts available.</p>
          </div>
        )}
      </div>
    </section>
  );
}