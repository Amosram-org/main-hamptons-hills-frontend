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
import { getBlogPosts } from '@/sanity/lib/sanity';


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
    name: " Wanjiku M",
    location: "Nairobi",
    body: "Perfect for my mum in Nairobi. The engraving is so clear and beautiful. Asante.",
    img: images.userTestimonialImage.src,
  },
  {
    name: "Otieno A",
    location: "Kisumu",
    body: "They delivered to Kisumu with no stress. The granite quality is top.",
    img: images.userSvgrepoCom.src,
  },
  {
    name: "Kipchoge T",
    location: "Eldoret",
    body: "Respectful service, fair price. The plaque we got is very strong.",
    img: images.userSvgrepoCom.src,
  },
  {
    name: "Jane",
    location: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images.userSvgrepoCom.src,
  },
  {
    name: "Hassan Ali",
    location: "Mombasa",
    body: "From Mombasa, ordered online. Very smooth process and good communication.",
    img: images.userSvgrepoCom.src,
  },
  {
    name: "Nyokabi D.",
    location: "Nakuru",
    body: "Customized our design exactly how we wanted. Family is very pleased.",
    img: images.userSvgrepoCom.src,
  },
];