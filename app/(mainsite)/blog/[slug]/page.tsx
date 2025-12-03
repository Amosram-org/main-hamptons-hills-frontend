import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/sanity/lib/sanity';
import MotionDiv from '@/components/ui/MotionDiv';
import PortableTextContent from '@/components/blogs/PortableTextContent';
import ShareButtons from '@/components/blogs/ShareButtons';

// Define the expected params structure
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage(props: PageProps) {
  // Await the params promise
  const params = await props.params;
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  // Generate the full URL for sharing
  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hamptonshills.com'}/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-white">
      <div className='w-full min-h-[30vh] flex items-center gap-4 bg-black bg-[url(/images/about-main-page-bg.jpg)] bg-cover bg-center bg-no-repeat'>
        <div className='w-full min-h-[30vh] py-12 pt-24 flex flex-col items-center gap-4 px-4 bg-black/20'>
          <h1 className="text-2xl md:text-3xl text-white font-semibold text-center">Blog</h1>
          <p className='text-white/80 text-center max-w-2xl'>
            Read more about our blog.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <Link 
            href="/#blogs" 
            className="inline-flex items-center text-amber-800 hover:text-amber-900 font-medium cursor-pointer"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </nav>

      <article className="pb-20">
        {/* Header */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pt-12 pb-10"
        >
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-4">
              {post.categories?.map((category) => (
                <span 
                  key={category} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
              {post.title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center text-gray-500">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </MotionDiv>

        {/* Featured Image */}
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12"
        >
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </MotionDiv>

        {/* Content */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <PortableTextContent content={post.content} />

          {/* Share Buttons */}
          <ShareButtons 
            title={post.title}
            url={postUrl}
            excerpt={post.excerpt}
          />
        </MotionDiv>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Update the generateMetadata function to handle Promise params
export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Memorial Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}