import React from 'react'
import Image from 'next/image';
import { images } from '@/data';

const AboutUs = () => {
  return (
    <section className='p-4 lg:px-16 min-h-screen w-full py-20' id='about-us'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-4xl font-semiblod text-black/80'>About Us</h1>
          <div className='min-h-[60vh] bg-gray-200 rounded-2xl py-8 px-4 flex flex-col lg:flex-row items-center gap-10'>
            <div className='flex-1 order-2 lg:order-1 flex flex-col gap-4'>
              <h2 className='text-2xl font-semibold text-main-amber'>We supply and install Tombstones, Gravestones, Headstones and Memorial plaques across the country.</h2>
              <p className='text-black/60 font-medium text-base'>At Hampton Hills, we understand the importance of creating lasting tributes. With years of experience, our skilled artisans craft high-quality tombstones, gravestones, headstones, and memorial plaques that honor the memory of your loved ones. We provide compassionate service and nationwide installation, ensuring every detail is perfect.
              Our commitment to quality and care sets us apart, making us a trusted choice across the country.</p>
            </div> 
            <div className='flex-1  order-1 lg:order-2 '>
              <Image
                src={images.aboutImg}
                alt="About Us"
                className='w-full h-auto object-cover rounded-2xl'
              />
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutUs
