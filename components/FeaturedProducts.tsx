import React from "react"
import { ProductCard } from "./ProductCard"
import { getFeaturedProducts } from "@/data/product"
import Link from "next/link"
import { RxArrowRight } from "react-icons/rx"
import { MdOutlineDesignServices } from "react-icons/md"
import { SiPeakdesign } from "react-icons/si"
import { MdOutlineCurtainsClosed } from "react-icons/md"
import { IoMdPhotos } from "react-icons/io"

const FeaturedProducts = async () => {
  // ✅ Await the async function
  const products = await getFeaturedProducts();
  

  return (
    <section className="min-h-screen w-full px-4 lg:px-16" id="featured-products">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl text-black/80 font-semibold text-center mb-8">
          Our Valuable Services
        </h2>

        {/* Services Grid */}
        <div className="py-13">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 bg-gray-100 border-4 border-main-amber/10 rounded-2xl p-4 py-8 items-center ">
              <div className="py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm">
                <SiPeakdesign className="w-7 h-7 text-main-amber" />
              </div>
              <h1 className="text-xl lg:text-xl font-medium text-black/90 mb-2">
                HEADSTONE CRAFTING AND DESIGNS
              </h1>
              <p className="text-black/70 text-sm text-center">
                We craft and design headstones with precision and care, combining skilled workmanship with thoughtful design. Every piece is tailored to reflect the life, values, and memory of the individual being honored. From selecting quality stone to engraving details and finishes, our team ensures each headstone is both durable and deeply meaningful.
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-gray-100 border-4 border-main-amber/10 rounded-2xl p-4 py-8 items-center">
              <div className="py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm">
                <MdOutlineCurtainsClosed className="w-7 h-7 text-main-amber" />
              </div>
              <h1 className="text-xl lg:text-xl font-medium text-black/90 mb-2">INSCRIPTIONS</h1>
              <p className="text-black/70 text-sm text-center">
                We provide professional inscription services, carefully engraving names, dates, and personalized messages that honor loved ones. Using durable techniques and precise craftsmanship, we ensure each inscription is clear, lasting, and a true reflection of the memory it carries.
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-gray-100 border-4 border-main-amber/10 rounded-2xl p-4 py-8 items-center">
              <div className="py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm">
                <IoMdPhotos className="w-7 h-7 text-main-amber" />
              </div>
              <h1 className="text-xl lg:text-xl font-medium text-black/90 mb-2">PHOTOS</h1>
              <p className="text-black/70 text-sm text-center">
                Our photos are crafted to reflect the true beauty of every memorial. With high-quality resolution and accurate color balance, each image brings out fine details clearly. They are produced to last, whether in print or digital form, ensuring durability over time. Every shot captures inscriptions and finishes with clarity, so families can see the workmanship exactly as it is.
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-gray-100 border-4 border-main-amber/10 rounded-2xl p-4 py-8 items-center">
              <div className="py-2 px-4 bg-gray-50 rounded-md w-fit shadow-sm">
                <MdOutlineDesignServices className="w-7 h-7 text-main-amber" />
              </div>
              <h1 className="text-xl lg:text-xl font-medium text-black/90 mb-2">TOMBSTONES DESIGNS.</h1>
              <p className="text-black/70 text-sm text-center">
                Every tombstone begins with listening. We take time to understand each family’s wishes, traditions, and ideas. From there, our team designs and customizes a memorial that reflects their vision, choosing the right stone, shape, and inscription. Once the family approves the design, skilled craftsmen bring it to life with precise carving and finishing. The completed piece is then carefully installed at the gravesite, with respect and attention to detail. Even after installation, we remain available to guide families on care and maintenance, ensuring the memorial stands with dignity for years to come
              </p>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <h2 className="text-3xl lg:text-4xl text-black/80 font-semibold text-center mb-16">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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
