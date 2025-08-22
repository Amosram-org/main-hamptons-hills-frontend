import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import CustomizedService from '@/components/CustomizedService';
import FeaturedProducts from '@/components/FeaturedProducts';
import Hero from '@/components/Hero';
import React from 'react';


export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutUs/>
      <FeaturedProducts/>
      <CustomizedService/>
      <ContactUs/>
    </main>
  );
}
