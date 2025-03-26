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

import image1 from "../images/intermediateRakeTypeCarriers.jpg";
import image2 from "../images/ffeFinProcess.jpg";
import image3 from "../images/continuousVacuumPan.jpg";
import image4 from "../images/p1.jpg";
import image5 from "../images/p4.jpg";
import image6 from "../images/p3.jpg";

const products = [
  { id: 1, name: "Intermediate Rake Type Carriers", image: image1 },
  { id: 2, name: "Falling Film Evaporator", image: image2 },
  { id: 3, name: "Continuous Vacuum Pan", image: image3 },
  { id: 4, name: "Cane Unloader", image: image4 },
  { id: 5, name: "Sugar Bag Handling System", image: image5 },
  { id: 6, name: "Milk of Lime Tank", image: image6 },
];

export const ProductCarousel: React.FC = () => {
  const [api, setApi] = React.useState<any>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Autoplay function
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative w-full px-12 max-w-7xl mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Link href="/products">
                <Card className="overflow-hidden rounded-lg shadow-lg cursor-pointer h-full">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      priority
                    />
                    <div className="">
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black to-transparent p-4">
                        <h3 className="text-xl font-medium text-white">{product.name}</h3>
                      </div>
                    </div>

                  </div>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-4 bg-white" />
        <CarouselNext className="absolute -right-4 bg-white" />
      </Carousel>
    </div>
  );
};