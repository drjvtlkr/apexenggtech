import * as React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "./ui/card";

// Product images and text
import image1 from "../images/intermediateRakeTypeCarriers.jpg";
import image2 from "../images/ffeFinProcess.jpg";
import image3 from "../images/continuousVacuumPan.jpg";

const products = [
  {
    id: 1,
    name: "Elevating Industries with Cutting Edge Technology",
    image: image1,
  },
  {
    id: 2,
    name: "Elevating Industries with Innovation",
    image: image2,
  },
  {
    id: 3,
    name: "Elevating Industries with Excellent Service",
    image: image3,
  },
];

export const ProductCarousel: React.FC = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent className="flex gap-4">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="w-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-2">
              {/* Direct Link Usage */}
              <Link href="/products">
                <Card className="overflow-hidden rounded-lg shadow-lg cursor-pointer">
                  <div className="relative aspect-square">
                    {/* Display Image */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
                      <h3 className="text-sm font-medium">{product.name}</h3>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" />
      <CarouselNext className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" />
    </Carousel>
  );
};
