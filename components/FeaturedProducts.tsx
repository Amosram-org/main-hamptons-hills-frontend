import React from "react"
import Link from "next/link"
import { RxArrowRight } from "react-icons/rx"
import { MdOutlineDesignServices, MdOutlineCurtainsClosed } from "react-icons/md"
import { SiPeakdesign } from "react-icons/si"
import { IoMdPhotos } from "react-icons/io"

import { ProductCard } from "./ProductCard"
import { getFeaturedProducts } from "@/sanity/lib/sanity"
import type { Product } from "@/types/product"

const FeaturedProducts = async () => {
  const products: Product[] = await getFeaturedProducts()

  return (
    <section className="min-h-screen w-full px-4 lg:px-16" id="featured-products">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl lg:text-4xl text-black/80 font-semibold text-center mb-8">
          Our Valuable Services
        </h2>

        {/* SERVICES GRID */}
        <div className="py-13">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Service 1 */}
            <div className="flex flex-col gap-3 bg-gray-100 border-4 border-main-amber/10 rounded-2xl p-4 py-8 items-center">
              <div className="py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm">
                <SiPeakdesign className="w-7 h-7 text-main-amber" />
              </div>
              <h1 className="text-xl font-medium text-black/90 mb-2">
                HEADSTONE CRAFTING AND DESIGNS
              </h1>
              <p className="text-black/70 text-sm text-center">
                We craft and design headstones with precision and care, combining skilled workmanship with thoughtful design. Every piece is tailored to reflect the life and memory of the individual being honored.
              </p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col gap-3 bg-gray-100 border-4 border-main-amber/10 rounded-2xl p-4 py-8 items-center">
              <div className="py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm">
                <MdOutlineCurtainsClosed className="w-7 h-7 text-main-amber" />
              </div>
              <h1 className="text-xl font-medium text-black/90 mb-2">INSCRIPTIONS</h1>
              <p className="text-black/70 text-sm text-center">
                We provide professional inscription services, engraving names, dates, and personal messages with durability and clarity.
              </p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col gap-3 bg-gray-100 border-4 border-main-amber/10 rounded-2xl p-4 py-8 items-center">
              <div className="py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm">
                <IoMdPhotos className="w-7 h-7 text-main-amber" />
              </div>
              <h1 className="text-xl font-medium text-black/90 mb-2">PHOTOS</h1>
              <p className="text-black/70 text-sm text-center">
                We produce long-lasting, high-quality memorial photos with accurate color balance and clarity to capture fine details.
              </p>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col gap-3 bg-gray-100 border-4 border-main-amber/10 rounded-2xl p-4 py-8 items-center">
              <div className="py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm">
                <MdOutlineDesignServices className="w-7 h-7 text-main-amber" />
              </div>
              <h1 className="text-xl font-medium text-black/90 mb-2">TOMBSTONES DESIGNS</h1>
              <p className="text-black/70 text-sm text-center">
                We create custom tombstone designs based on family wishes and traditions, crafted with precision and installed with care.
              </p>
            </div>

          </div>
        </div>

        {/* FEATURED PRODUCTS */}
        <h2 className="text-3xl lg:text-4xl text-black/80 font-semibold text-center mb-16">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-black/60 col-span-full">
              No featured products available.
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link
            href="/allProducts"
            className="mt-8 px-6 py-2 font-medium bg-black text-white rounded-full hover:bg-black/90 transition-colors flex items-center gap-2 w-fit"
          >
            <span>See More</span>
            <RxArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
