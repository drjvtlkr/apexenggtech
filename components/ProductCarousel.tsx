"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/uis/carousel";
import { Card } from "./card";

// Product images and text
import image1 from "../images/intermediateRakeTypeCarriers.jpg";
import image2 from "../images/ffeFinProcess.jpg";
import image3 from "../images/continuousVacuumPan.jpg";
import image4 from "../images/p1.jpg";
import image5 from "../images/p4.jpg";
import image6 from "../images/p3.jpg";

const products = [
  { id: 1, name: "Elevating Industries with Cutting Edge Technology", image: image1 },
  { id: 2, name: "Elevating Industries with Innovation", image: image2 },
  { id: 3, name: "Elevating Industries with Excellent Service", image: image3 },
  { id: 4, name: "Elevating Industries with Cutting Edge Technology", image: image4 },
  { id: 5, name: "Elevating Industries with Innovation", image: image5 },
  { id: 6, name: "Elevating Industries with Excellent Service", image: image6 },
];

export const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerView = 3;
  const totalItems = products.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalItems]);

  const translateX = `-${(currentIndex % totalItems) * (100 / itemsPerView)}%`;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl mx-auto overflow-hidden"
    >
      <CarouselContent
        className="flex gap-1 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="w-full sm:basis-full lg:basis-1/3"
          >
            <div className="p-2">
              <Link href="/products">
                <Card className="overflow-hidden rounded-lg shadow-lg cursor-pointer">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
                      <h3 className="text-xl font-medium">{product.name}</h3>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalItems - 1 : prevIndex - 1
          )
        }
        className="absolute top-1/2 -left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      />
      <CarouselNext
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
        }
        className="absolute top-1/2 -right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      />
    </Carousel>
  );
};
