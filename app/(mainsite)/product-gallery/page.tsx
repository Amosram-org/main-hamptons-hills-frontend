import ImageGallery from '@/components/clientComponents/ImageGallery';
import React from 'react'
import {Metadata} from 'next'
import { getGalleryImages } from '@/sanity/lib/sanity';

export const metadata: Metadata = {
  title: 'Product Gallery - Hamptons Hills',
  description: 'Explore our wide range of high-quality gravestones and tombstones at Hamptons Hills. Find the perfect memorial to honor your loved ones.',
};

const page = async () => {
  const images = await getGalleryImages();

  if (images.length === 0) {
    return (
      <main className="min-h-[60vh]">  
         <div className='w-full min-h-[30vh] flex items-center gap-4 bg-black bg-[url(/images/about-main-page-bg.jpg)] bg-cover bg-center bg-no-repeat'>
         <div className='w-full min-h-[30vh] py-12 pt-24 flex flex-col items-center gap-4 px-4 bg-black/20'>
            <h1 className="text-2xl md:text-3xl text-white font-semibold text-center">  Our Products Gallery</h1>
            <p className='text-white/80 text-center max-w-2xl'>
                   Click on any product image to view details and request it via WhatsApp
            </p>
        </div>
        </div>

        <div className="bg-white min-h-[70vh] flex items-center justify-center">
          <p className="text-gray-500 text-lg">No images available in the gallery.</p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="bg-white min-h-[70vh]">
     
        <div className='w-full min-h-[30vh] flex items-center gap-4 bg-black bg-[url(/images/about-main-page-bg.jpg)] bg-cover bg-center bg-no-repeat'>
         <div className='w-full min-h-[30vh] py-12 pt-24 flex flex-col items-center gap-4 px-4 bg-black/20'>
            <h1 className="text-2xl md:text-3xl text-white font-semibold text-center">  Our Products Gallery</h1>
            <p className='text-white/80 text-center max-w-2xl'>
                   Click on any product image to view details and request it via WhatsApp
            </p>
        </div>
        </div>
        
        <ImageGallery images={images} businessNumber="254721462076"  />
      </div>
    </main>
  )
}

export default page