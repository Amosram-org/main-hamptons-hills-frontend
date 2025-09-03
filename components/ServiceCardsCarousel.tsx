import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from 'next/image'
import { images } from "@/data";

//types for the card data
interface ServiceCardData {
  category: string;
  title: string;
  src: string;
  description?: string;
  features?: string[];
  contentImage: string;
}

interface ServiceCardContentProps {
  card: ServiceCardData;
}

const ServiceCardContent: React.FC<ServiceCardContentProps> = ({ card }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        {card.title}
      </h3>
      
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mb-5">
        {card.description || `Our premium ${card.category.toLowerCase()} services offer exceptional quality and craftsmanship.`}
      </p>

      {card.features && card.features.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
            Key Features:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-400">
            {card.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}


      <Image
        src={card.contentImage} // You might want to make this dynamic too
        alt={`${card.category} service example`}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl"
      />
    </div>
  );
};

export function ServiceCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card 
      key={card.src} 
      card={{
        ...card,
        content: <ServiceCardContent card={card} />
      }} 
      index={index} 
    />
  ));

  return (
    <div className="w-full h-full over">
      <h1 className="max-w-7xl pl-4 mx-auto w-full text-center text-2xl lg:text-3xl text-black/90 font-medium">
        Explore Our Quality Services
      </h1>
      <Carousel items={cards} />
    </div>
  );
}

const data: ServiceCardData[] = [
  {
    category: "Tombstones",
    title: "Premium Tombstone Craftsmanship",
    src: images.tombstonesService.src,
    description: "Handcrafted tombstones with personalized designs and durable materials that stand the test of time.",
    contentImage: images.tombstonesService.src,
    features: [
      "Custom engravings and designs",
      "Weather-resistant granite and marble",
      "Lifetime warranty available",
      "Personalized consultation"
    ],
  },
  {
    category: "Gravestones",
    title: "Elegant Gravestone Memorials",
    src: images.gravestonesService.src,
    description: "Traditional and modern gravestones designed to honor your loved ones with dignity and respect.",
    contentImage: images.gravestonesService.src,
    features: [
      "Classic and contemporary styles",
      "Professional installation services",
      "Maintenance packages",
      "Family discount options"
    ],
  },
  {
    category: "Headstones",
    title: "Custom Headstone Designs",
    src: images.headstonesService.src,
    description: "Beautifully crafted headstones that serve as lasting tributes to cherished memories.",
    contentImage: images.headstonesService.src,
    features: [
      "3D design preview",
      "Eco-friendly materials available",
      "Quick turnaround times",
      "Nationwide delivery"
    ],
  },
  {
    category: "Memorial Plaques",
    title: "Memorial Plaque Services",
    src: images.plaquesService.src,
    description: "Dignified memorial plaques for various settings including parks, buildings, and special locations.",
    contentImage: images.plaquesService.src,
    features: [
      "Bronze, brass, and stainless steel options",
      "Indoor and outdoor suitable",
      "Corporate and personal memorials",
      "Custom sizing available"
    ],
  }
];