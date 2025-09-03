import AboutUs from '@/components/AboutUs';
import BlogSection from '@/components/blogs/BlogSection';
import ContactUs from '@/components/ContactUs';
import CustomizedService from '@/components/CustomizedService';
import FeaturedProducts from '@/components/FeaturedProducts';
import Hero from '@/components/Hero';
import { TestimonialsCards } from '@/components/TestimonialsCards';
import WhyChooseUs from '@/components/WhyChooseUs';
import { images } from '@/data';
import React from 'react';
import { getBlogPosts } from '@/data/blogData';


export default async function Home() {
  const posts = await getBlogPosts();
  return (
    <main>
      <Hero/>
      <AboutUs/>
      <FeaturedProducts/>
      <WhyChooseUs/>
      <CustomizedService/>
      <div className='w-full min-h-[70vh] flex flex-col items-center justify-center gap-20'>
        <h2 className='px-4 text-4xl font-medium text-black/80 text-center'>What Our Customers Say</h2>
          <TestimonialsCards testimonials={userTestimonials}/>
      </div>
      <BlogSection 
        posts={posts}
        title="Latest Memorial Insights"
        description="Discover our newest articles on memorial traditions, stone care, and heartfelt stories."
        />
      <ContactUs/>
    </main>
  );
}

const userTestimonials = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: images.userTestimonialImage.src,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: images.userTestimonialImage.src
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images.userTestimonialImage.src
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images.userTestimonialImage.src
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images.userTestimonialImage.src,
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images.userTestimonialImage.src,
  },
];
