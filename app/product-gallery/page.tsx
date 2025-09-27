import ImageGallery from '@/components/clientComponents/ImageGallery';
import React from 'react'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Product Gallery - Hamptons Hills',
  description: 'Explore our wide range of high-quality gravestones and tombstones at Hamptons Hills. Find the perfect memorial to honor your loved ones.',
};

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
    src: "/images/black-granite-terrazo-base-and-red-gray-bricks.png", 
    alt: "Black granite, terrazo base and red gray bricks", 
    title: "Black granite, terrazo base and red gray bricks" 
},
  { 
    id: "2", 
    src: "/images/black-granito-tiles-and-granite-headstone.png", 
    alt: "Granite Tombstone", 
    title: "Granite Tombstone" 
},
  { 
    id: "3", 
    src: "/images/Terrazzo-headstone.png", 
    alt: "Granite Terrazzo headstone", 
    title: "Granite Terrazzo headstone" 
},
  { 
    id: "4", 
    src: "/images/gray-black-open-top-granite-white-pebbles-and-flowers.png", 
    alt: "Gray black open top granite white pebbles and flowers", 
    title: "Gray black open top granite white pebbles and flowers" 
},
  
  { 
    id: "5", 
    src: "/images/white-terrazo-top-black-tile.png", 
    alt: "white Terrazo Top Black Tile", 
    title: "white Terrazo Top Black Tile" 
},
  

];