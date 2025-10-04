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
        src={card.contentImage} 
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
    category: "INSTALLATION",
    title: "Professional, Respectful, Nationwide Installation",
    src: '/images/installation-service.png',
    description: "Our installation process is handled with utmost professionalism and respect. From site preparation to secure placement, we ensure each tombstone or memorial plaque is firmly and accurately installed. We use quality materials and tested methods to guarantee stability and durability, while treating every resting place with the dignity it deserves.",
    contentImage: "/images/instalation-service.png",
    features: [
      "Professional Site Preparation",
      "Secure & Accurate Placement.",
      "Quality Materials.",
      "Tested Installation Method."
    ],
  },

  {
    category: "HEADSTONE CRAFTING AND DESIGNS",
    title: "Where Artistry Meets Lasting Tribute",
    src: "/images/headstone-design-service.png",
    description: "We craft and design headstones with precision and care, combining skilled workmanship with thoughtful design. Every piece is tailored to reflect the life, values, and memory of the individual being honored. From selecting quality stone to engraving details and finishes, our team ensures each headstone is both durable and deeply meaningful.",
    contentImage: "/images/headstone-crafting-service.png",
    features: [
      "Personalised Designs",
      "Skilled Workmanship",
      "Enduring Memorials",
      "Quality Materials"
    ],
  },

  {
    category: "INSCRIPTIONS",
    title: "Elegant, Lasting Engravings",
    src: '/images/inscription-service.png',
    description: "Beautifully crafted headstones that serve as lasting tributes to cherished memories.",
    contentImage: "/images/inscription-service.png",
    features: [
      "Personalized Engravings",
      "Lasting Durability",
      "Respectful Service"      
    ],
  },

  {
    category: "TOMBSTONES DESIGNS",
    title: "Where Tradition Meets Compassion in Design",
    src: "/images/tombstones-design-service.png",
    description: " Every tombstone begins with listening. We take time to understand each family’s wishes, traditions, and ideas. From there, our team designs and customizes a memorial that reflects their vision,  choosing the right stone, shape, and inscription. Once the family approves the design, skilled craftsmen bring it to life with precise carving and finishing. The completed piece is then carefully installed at the gravesite, with respect and attention to detail. Even after installation, we remain available to guide families on care and maintenance, ensuring the memorial stands with dignity for years to come.",
    contentImage: "/images/tombstones-design-service.png",
    features: [
      "Personalized Consultation",
      "Custom Design",
      "Ongoing Support"
    ],
  },

  {
    category: "PHOTOS",
    title: "Where Tradition Meets Compassion in Design",
    src: "/images/photos-service.png",
    description: " Our photos are crafted to reflect the true beauty of every memorial. With high-quality resolution and accurate color balance, each image brings out fine details clearly. They are produced to last—whether in print or digital form—ensuring durability over time. Every shot captures inscriptions and finishes with clarity, so families can see the workmanship exactly as it is.",
    contentImage: "/images/photos-service.png",
    features: [
      "True-to-Life Representation",
      "Detail-Focused",
      "Trusted Presentation"
    ],
  }
];