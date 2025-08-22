"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "././ui/images-slider";
import Link from "next/link";

export function ImagesSliderDemo() {
  const images = [
    "/images/bg-slider-1.webp",
    "/images/bg-slider-2.webp",
    "/images/bg-slider-3.webp",
    "/images/bg-slider-4.webp",
    "/images/bg-slider-5.webp",
  ];
  return (
    <ImagesSlider className="h-[40rem] lg:h-screen 2xl:h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Honoring Memories 
            <br /> with Dignity
        </motion.p>
        <motion.p className="font-bold text-base text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 max-w-[80vw]">
          Crafting timeless tombstones, gravestones, and memorial plaques nationwide
        </motion.p>
        <Link href='/#featured-products' className="px-4 py-2 bg-white text-black rounded-full mt-4 hover:bg-neutral-200 transition-colors font-medium cursor-pointer">
          <span>Get Started →</span>
          {/* <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" /> */}
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
