'use client'; 

import { useState } from 'react';;
import { ProductCard } from "@/components/ProductCard";
import { getAllProducts } from '@/data/product';

const PRODUCTS_PER_PAGE = 8;

export default function AllProductsPage() {
  const allProducts = getAllProducts();
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);

  const visibleProducts = allProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < allProducts.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + PRODUCTS_PER_PAGE);
  };

  return (
    <section className=" bg-black">

        <div className='py-12 pt-24 flex flex-col items-center gap-4 px-4 '>
            <h1 className="text-2xl md:text-3xl text-white font-semibold text-center">Our Products</h1>
            <p className='text-white/80 text-center max-w-2xl'>
            Explore our wide range of high-quality gravestones amd tombstones, designed to honor and remember loved ones. 
            </p>
        </div> 
      
      
      <div className='mx-auto px-4 lg:px-16 py-20 bg-white'>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        </div>

        {hasMoreProducts && (
            <div className="mt-12 text-center">
            <button
                onClick={loadMore}
                className="px-6 py-2 bg-black text-white rounded-full hover:bg-black/90 transition-colors cursor-pointer"
            >
                Load More
            </button>
            <p className="mt-2 text-sm text-gray-500">
                Showing {visibleProducts.length} of {allProducts.length} products
            </p>
            </div>
        )}
      </div>
    </section>
  );
}