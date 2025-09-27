'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;   // relative path (e.g. /images/img1.jpg) or absolute URL
  alt: string;
  title: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  businessNumber: string; // WhatsApp number in international format, e.g. "254712345678"
}

export default function ImageGallery({ images, businessNumber }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const requestProductOnWhatsApp = (image: GalleryImage) => {
    const imageUrl = image.src.startsWith('http')
      ? image.src
      : `${window.location.origin}${image.src}`;

    const message = `Hello! I'm interested in this product: ${image.title}\n\nProduct Image: ${imageUrl}`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => openModal(image, index)}
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="h-full w-full object-cover object-center transition-opacity group-hover:opacity-75"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium truncate">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative max-w-4xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute -top-2 right-0 text-white hover:text-gray-300 transition-colors z-10 cursor-pointer bg-white/20 rounded-full p-1 m-2"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image & Info */}
            <div className="flex flex-col items-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={800}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />

              <div className="bg-white rounded-lg mt-4 p-6 w-full max-w-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">
                  Click below to request this product on WhatsApp
                </p>

                <button
                  onClick={() => requestProductOnWhatsApp(selectedImage)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Share2 size={20} />
                  Request this Product on WhatsApp
                </button>
              </div>
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
