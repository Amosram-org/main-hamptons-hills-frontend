'use client';

import { useState, useEffect } from 'react';
import { ProductCard } from "@/components/ProductCard";
import { getAllProducts } from '@/data/product';
import { Product } from '@/types/product';

const PRODUCTS_PER_PAGE = 9;

// Default categories (will merge with Strapi categories)
const DEFAULT_CATEGORIES = [
  'All',
  'Headstones & Plaques',
  'Tombstones & Gravestones',
];

export default function AllProductsPage() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const products = await getAllProducts(); //fetching from Strapi
      setAllProducts(products);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center w-full min-h-[70vh] flex flex-col items-center justify-center">
        <div className='w-full min-h-[30vh] flex items-center gap-4 bg-black bg-[url(/images/about-main-page-bg.jpg)] bg-cover bg-center bg-no-repeat'>
          <div className='w-full min-h-[30vh] py-12 pt-24 flex flex-col items-center gap-4 px-4 bg-black/20'>
            <h1 className="text-2xl md:text-3xl text-white font-semibold text-center">Our Products</h1>
            <p className='text-white/80 text-center max-w-2xl'>
              Explore our wide range of high-quality gravestones and tombstones, designed to honor and remember loved ones.
            </p>
          </div>
        </div>

        {/* Spinner */}
        <div className="flex flex-col items-center justify-center mt-12 min-h-[50vh]">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-500">Loading products...</p>
        </div>
      </section>
    );
  }

  // ✅ collect unique categories from products
  const dynamicCategories = Array.from(
    new Set(allProducts.map((p) => p.category).filter(Boolean))
  );

  // ✅ merge with defaults (and remove duplicates)
  const CATEGORIES = Array.from(new Set([...DEFAULT_CATEGORIES, ...dynamicCategories]));

  // ✅ filter by category
  const filteredProducts =
    selectedCategory === 'All'
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < filteredProducts.length;

  const loadMore = () => setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(PRODUCTS_PER_PAGE);
  };

  return (
    <section className="bg-black">
      {/* Hero Banner */}
      <div className='w-full min-h-[30vh] flex items-center gap-4 bg-black bg-[url(/images/about-main-page-bg.jpg)] bg-cover bg-center bg-no-repeat'>
        <div className='w-full min-h-[30vh] py-12 pt-24 flex flex-col items-center gap-4 px-4 bg-black/20'>
          <h1 className="text-2xl md:text-3xl text-white font-semibold text-center">Our Products</h1>
          <p className='text-white/80 text-center max-w-2xl'>
            Explore our wide range of high-quality gravestones and tombstones, designed to honor and remember loved ones.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-20">
        <div className="mx-auto px-4 lg:px-16 w-full">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <aside className="w-full lg:w-1/4">
              <div className="flex flex-col gap-3 bg-gray-200 p-4 rounded-md">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-md transition-colors cursor-pointer w-full text-left ${
                      selectedCategory === category
                        ? 'bg-black text-white font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <p className="text-gray-600 mt-6 text-sm">
                {selectedCategory === 'All'
                  ? `Showing all ${filteredProducts.length} products`
                  : `Showing ${filteredProducts.length} product${
                      filteredProducts.length !== 1 ? 's' : ''
                    } in ${selectedCategory}`}
              </p>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
                        Showing {visibleProducts.length} of {filteredProducts.length} products
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
