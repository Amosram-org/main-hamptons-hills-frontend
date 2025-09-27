import ImageGallery from '@/components/clientComponents/ImageGallery';
import React from 'react'

const page = () => {
  return (
      <main>
      <div className="bg-white">
     
        <div className='w-full min-h-[30vh] flex items-center gap-4 bg-black bg-[url(/images/about-main-page-bg.jpg)] bg-cover bg-center bg-no-repeat'>
         <div className='w-full min-h-[30vh] py-12 pt-24 flex flex-col items-center gap-4 px-4 bg-black/20'>
            <h1 className="text-2xl md:text-3xl text-white font-semibold text-center">  Our Products Gallery</h1>
            <p className='text-white/80 text-center max-w-2xl'>
                   Click on any product image to view details and request it via WhatsApp
            </p>
        </div>
       </div>
        
        <ImageGallery images={images} businessNumber="254793810819"  />
      </div>
    </main>
  )
}

export default page

const images = [
  { 
    id: "1", 
    src: "/images/black-granito-tiles-and-granite-headstone.png", 
    alt: "Granite Tombstone", 
    title: "Granite Tombstone" 
},

];