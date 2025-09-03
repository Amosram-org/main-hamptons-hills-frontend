import React from 'react'
import CloseBar from './clientComponents/CloseBar'
import { useSidebar } from '@/context/SidebarContext'
import Link from 'next/link'
import { FaHome  } from "react-icons/fa";
import { TbGrave2 } from "react-icons/tb";
import { GrStatusUnknown } from "react-icons/gr";
import { MdContactPage } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { TbLogs } from "react-icons/tb";




const Sidebar = () => {
    const {isSidebarOpen, toggleSidebar} = useSidebar();
  return (
   <div className={`fixed top-0 left-0 bg-black w-full min-h-screen ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out z-20` }>
    <div className='py-4 px-6 flex items-center justify-between border-b border-gray-700'>
          <Link href="/" className='text-xl font-semibold'>
          <h1 className='flex items-center gap-0.5 text-sm '>
            HAMPTONS HILLS
          </h1>
        </Link>
        <CloseBar/>
    </div>

    <nav className='pt-6'>
        <Link onClick={toggleSidebar} href="/" className=' px-6 py-2 text-lg font-medium hover:bg-gray-500 transition-colors flex items-center gap-3'>
          <FaHome/>
          <span>Home</span>
        </Link>
        <Link onClick={toggleSidebar} href="/allProducts" className=' px-6 py-2 text-lg font-medium hover:bg-gray-500 transition-colors flex items-center gap-3'>
          <TbGrave2/>
          <span>Products</span>
        </Link>
        <Link onClick={toggleSidebar} href="/our-services" className=' px-6 py-2 text-lg font-medium hover:bg-gray-500 transition-colors flex items-center gap-3'>
          <MdHomeRepairService/>
          <span>Services</span>
        </Link>
        <Link onClick={toggleSidebar} href="/" className=' px-6 py-2 text-lg font-medium hover:bg-gray-500 transition-colors flex items-center gap-2'>
          <GrStatusUnknown/>
          <span>About Us</span>
        </Link>
        <Link onClick={toggleSidebar} href="/#blogs" className=' px-6 py-2 text-lg font-medium hover:bg-gray-500 transition-colors flex items-center gap-2'>
          <TbLogs/>
          <span>Blogs</span>
        </Link>
        <Link onClick={toggleSidebar} href="/#contact-us" className=' px-6 py-2 text-lg font-medium hover:bg-gray-500 transition-colors flex items-center gap-3'>
          <MdContactPage/>
          <span>Contact</span>
        </Link>
      
    </nav>
   </div>
  )
}

export default Sidebar
