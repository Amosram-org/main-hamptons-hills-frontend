import Link from 'next/link'
import React from 'react'
import ClientNavbar from './clientComponents/clientNavbar'


const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-4 md:px-16 py-5 absolute top-0 left-0 right-0 z-50 text-white'>
        <Link href="/" className='text-xl font-semibold text-white'>
          <h1 className='flex items-center gap-0.5 text-sm '>
              HAMPTONS HILLS
          </h1>
        </Link>

        <nav className='hidden lg:flex items-center gap-8 text-sm font-medium'>
            <Link className='hover:underline transition duration-150 ease-out' href="/">Home</Link>
            <Link className='hover:underline transition duration-150 ease-out' href='/allProducts'>Products</Link>
            <Link className='hover:underline transition duration-150 ease-out' href='/our-services'>Services</Link>
            <Link className='hover:underline transition duration-150 ease-out' href="/#about-us">About</Link>
            <Link className='hover:underline transition duration-150 ease-out' href="/#blogs">Blogs</Link>
            <Link className='hover:underline transition duration-150 ease-out' href="/product-gallery">Gallery</Link>
            <Link className='hover:underline transition duration-150 ease-out' href="/#contact-us">Contact</Link>
        </nav>

        <ClientNavbar/>
    </header>
  )
}

export default Navbar
