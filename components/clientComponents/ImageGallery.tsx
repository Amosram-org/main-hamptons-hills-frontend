'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  width?: number;
  height?: number;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  businessNumber: string;
}

export default function ImageGallery({ images, businessNumber }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden'; // prevent background scroll
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = useCallback(
    (direction: 'prev' | 'next') => {
      if (!selectedImage) return;

      const newIndex =
        direction === 'prev'
          ? (currentIndex - 1 + images.length) % images.length
          : (currentIndex + 1) % images.length;

      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    },
    [currentIndex, images, selectedImage]
  );

  const requestProductOnWhatsApp = (image: GalleryImage) => {
    const imageUrl = image.src.startsWith('http')
      ? image.src
      : `${window.location.origin}${image.src}`;

    const message = `Hello! I'm interested in this product: ${image.title}\n\nProduct Image: ${imageUrl}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigate('prev');
          break;
        case 'ArrowRight':
          navigate('next');
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, selectedImage]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-zoom-in group"
            onClick={() => openModal(image, index)}
          >
            <Image
              src={image.src || '/images/logo-white.png'}
              alt={image.alt}
              width={image.width || 400}
              height={image.height || 400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(image.width || 400, image.height || 400)
              )}`}
            />
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm font-medium truncate">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-white/20 rounded-full p-1 cursor-pointer"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={() => navigate('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 cursor-pointer"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image & Info */}
          <div className="flex flex-col items-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={800}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
              priority
            />

            <div className="bg-white rounded-lg mt-4 p-6 w-full max-w-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-4">
                Click below to request this product on WhatsApp
              </p>
              <button
                onClick={() => requestProductOnWhatsApp(selectedImage)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2"
              >
                <Share2 size={20} />
                Request this Product on WhatsApp
              </button>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={() => navigate('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 cursor-pointer"
          >
            <ChevronRight size={32} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}

// --- Shimmer Effect Helpers ---
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
