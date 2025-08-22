import Link from 'next/link'
import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='w-full bg-black text-white px-6 lg:px-16 min-h-[20vh] rounded-tl-2xl rounded-tr-2xl pt-10'>
      <div className='flex flex-col lg:flex-row justify-between pb-10'>
        <div className='flex flex-col gap-3 mb-4'>
          <h1 className='uppercase font-medium text-xl'>Hamptons Hiils</h1>
          <p className='text-white/60 max-w-[70vw] lg:max-w-[20vw]'>Tombstones & Grave stones for sale in Nairobi Kenya. </p>
        </div>

        <div>
        </div>
        
        <div className='flex flex-col gap-3 mt-6 lg:mt-0'>
          <h1 className='font-medium text-white/90 uppercase'>Follow Us</h1>
          <div className='text-white/60 flex flex-col gap-2'>
            <Link href='#' className='flex items-center gap-2 hover:text-white transition duration-100 ease-in-out'>
              <span className='capitalize'>facebook</span>
              <RxArrowTopRight className='mt-0.5'/>
            </Link>
            <Link href='#' className='flex items-center gap-2 hover:text-white transition duration-100 ease-in-out'>
              <span className='capitalize'>instagram</span>
              <RxArrowTopRight className='mt-0.5'/>
            </Link>
            <Link href='#' className='flex items-center gap-2 hover:text-white transition duration-100 ease-in-out'>
              <span className='capitalize'>linkedin</span>
              <RxArrowTopRight className='mt-0.5'/>
            </Link>
            <Link href='#' className='flex items-center gap-2 hover:text-white transition duration-100 ease-in-out'>
              <span className='capitalize'>you tube</span>
              <RxArrowTopRight className='mt-0.5'/>
            </Link>
          </div>  
        </div>

        <div className='flex flex-col gap-3 mt-6 lg:mt-0'>
            <h1 className='font-medium text-white/90 uppercase'>quick links</h1>
            <div className='text-white/60 flex flex-col gap-2'>
              <Link href='/#about-us' className='hover:text-white transition duration-100 ease-in-out'> 
                <span className='capitalize'>Our Story</span>
              </Link>
              <Link href='/#featured-products' className='hover:text-white transition duration-100 ease-in-out'> 
                <span className='capitalize'>Our Products</span>
              </Link>
              <Link href='/#customized-service' className='hover:text-white transition duration-100 ease-in-out'> 
                <span className='capitalize'>Customized Service</span>
              </Link>
              <Link href='/#contact-us' className='hover:text-white transition duration-100 ease-in-out'> 
                <span className='capitalize'>Contact Us</span>
              </Link>
            </div>
        </div>

      </div>
      <hr className='w-full h-[0.2px] border-none bg-gray-700'/>
      <div className='flex items-center justify-center text-white/60 text-sm py-5'>
        <p>&copy;{year} Hamptons Hills, All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
