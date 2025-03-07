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

import image1 from "@/images/verticalCrystalizer.jpg";
import image2 from "@/images/ffeEvaporator.jpg";
import image3 from "@/images/bagasseConveyor.jpg";
import image4 from "@/images/interRackCarrier.jpg";

const products = [
  { id: 1, name: "Vertical Crystallizer", image: image1 },
  { id: 2, name: "Falling Film Evaporator", image: image2 },
  { id: 3, name: "Bagasse Conveyor", image: image3 },
  { id: 4, name: "Inter-Rack-Carrier", image: image4 },
];

export const OurProductCarousel: React.FC = () => {
  const [api, setApi] = React.useState<any>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

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
        }}>
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
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
                        <h3 className="text-xl font-medium text-white">
                          {product.name}
                        </h3>
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
