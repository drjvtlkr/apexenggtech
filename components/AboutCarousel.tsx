"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/uis/carousel";
import Image from "next/image";
import { aboutImages, CustomImage } from "@/images/bg";
import Autoplay from "embla-carousel-autoplay";

const AboutCarousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel
        plugins={[Autoplay({ delay: 5000 })]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="relative w-full h-full">
        <CarouselContent>
          {aboutImages.map((image: CustomImage, index: number) => (
            <CarouselItem key={index} className="relative w-full h-screen">
              <Image
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
                layout="fill"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 flex flex-col items-center justify-center pb-60 z-10 bg-black bg-opacity-50">
        <span className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold px-4">
          Where Innovation Sparks Precision &amp; Drives Performance
        </span>
      </div>
    </div>
  );
};

export default AboutCarousel;
