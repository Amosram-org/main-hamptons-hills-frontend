import React from 'react'
import { ProductCard } from './ProductCard'
import { getFeaturedProducts } from '@/data/product'
import Link from 'next/link';
import { RxArrowRight } from "react-icons/rx";


const FeaturedProducts = () => {
  const products = getFeaturedProducts();
  return (
    <section className='min-h-screen w-full px-4 lg:px-16' id='featured-products'> 
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl lg:text-4xl text-black/80 font-semibold text-center mb-8'>Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className='flex justify-center mt-12'>
          <Link href="/allProducts" className="mt-8 px-6 py-2 font-medium bg-black text-white rounded-full hover:bg-black/90 transition-colors flex items-center gap-2 w-fit">
            <span>view all products</span>
            <RxArrowRight className="" />
        </Link>
        </div>
     
      </div>
    </section>
  )
}

export default FeaturedProducts
