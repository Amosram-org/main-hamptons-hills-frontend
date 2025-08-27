// app/products/[id]/page.tsx
import { getProductById, getFeaturedProducts, getProductsByCategory } from '@/data/product'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ProductCard } from '@/components/ProductCard'
import Link from 'next/link'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)
  
  // Get related products from the same category, excluding the current product
  const relatedProducts = product 
    ? getProductsByCategory(product.category).filter(p => p.id !== id)
    : []
  
  // Fallback to featured products if no related products found in same category
  const featuredProducts = getFeaturedProducts().filter(p => p.id !== id)
  const displayProducts = relatedProducts.length > 0 ? relatedProducts : featuredProducts

  if (!product) {
    return notFound()
  }

  const adminPhoneNumber: number = 254721462076;

  // WhatsApp message template with product details
  const whatsappMessage = `Hello, I'm interested in this product:
  
    *Product Name:* ${product.name}
    *Product ID:* ${product.id}
    *Price:* $${product.price.toLocaleString()}
    ${product.material ? `*Material:* ${product.material}\n` : ''}
    ${product.size ? `*Dimensions:* ${product.size}\n` : ''}

    Could you please provide more information and availability?`

  // URL-encode the message
  const encodedMessage = encodeURIComponent(whatsappMessage)
  const whatsappUrl = `https://wa.me/+${adminPhoneNumber}?text=${encodedMessage}`

  return (
    <section className='bg-black w-full min-h-screen pt-16 '>
        <div className="bg-gray-50">
            {/* Main Product Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-2">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-md">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    </div>
                   
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                    <div>
                    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                    <h3 className='my-2.5 text-sm font-medium text-black/70 '>Product Category: <strong>{product.category}</strong></h3>
                    <div className="mt-2 flex items-center">
                        <span className="text-2xl font-semibold text-gray-800">
                        KSH {product.price.toLocaleString()}
                        </span>
                        {product.installationIncluded && (
                        <span className="ml-3 rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            Installation Included
                        </span>
                        )}
                    </div>
                    </div>

                    <div className="prose prose-sm text-gray-600">
                        <p>{product.description}</p>
                    </div>

                    {/* Specifications */}
                    <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h2 className="mb-3 text-lg font-medium">Specifications</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <h3 className="text-sm font-medium text-gray-500">Material</h3>
                        <p className="text-sm text-gray-900">{product.material || 'N/A'}</p>
                        </div>
                        <div>
                        <h3 className="text-sm font-medium text-gray-500">Dimensions</h3>
                        <p className="text-sm text-gray-900">{product.size || 'N/A'}</p>
                        </div>
                        {product.warranty && (
                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Warranty</h3>
                            <p className="text-sm text-gray-900">{product.warranty}</p>
                        </div>
                        )}
                    </div>
                    </div>

                    {/* Customization Options */}
                    {product.customizationOptions && (
                    <div className="rounded-lg border border-gray-200 bg-white p-4">
                        <h2 className="mb-3 text-lg font-medium">Customization Options</h2>
                        <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                        {product.customizationOptions.map((option) => (
                            <li key={option}>{option}</li>
                        ))}
                        </ul>
                    </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 rounded-full bg-green-600 px-6 py-3 text-white hover:bg-green-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-center flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Request This Product
                        </Link>
                        
                        <Link href='/#customized-service' className="flex-1 rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-center font-medium">
                            Contact About Customization
                        </Link>
                    </div>
                </div>
                </div>

                {/* Related Products */}
                {displayProducts.length > 0 && (
                    <div className="mt-16">
                        <h2 className="mb-6 text-2xl font-semibold text-black/90">
                        {relatedProducts.length > 0 ? 'Related Products' : 'Featured Products'}
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {displayProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

//  <div className="grid grid-cols-4 gap-2">
//     {/* Thumbnail images here */}
//     {[1, 2, 3, 4].map((i) => (
//         <div key={i} className="relative aspect-square bg-gray-200 rounded">
//         {/*additional images */}
//         </div>
//     ))}
// </div>