import Link from "next/link";
import { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link 
      href={`/product/${product.documentId || product.id} `}
      className="group block overflow-hidden rounded-2xl md:rounded-lg border border-gray-200 shadow-sm bg-gray-100 transition-shadow hover:shadow-md"
    >
      <div className="h-48 overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105 rounded-2xl md:rounded-lg"
          width={200}
          height={200}
        />
      </div>
      <div className="px-2 py-4 md:p-4">
        <p className="text-gray-700 py-0.5 text-xs font-semibold bg-gray-100 mb-3">
          {product.category}
        </p>
        <h3 className="text-sm lg:text-base line-clamp-3 font-semibold capitalize text-gray-800">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
      </div>
    </Link>
  );
};
