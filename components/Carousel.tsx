"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


import Image from "next/image";
import image1 from "../images/intermediateRakeTypeCarriers.jpg";
import image2 from "../images/ffeFinProcess.jpg";
import image3 from "../images/continuousVacuumPan.jpg";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const images = [
  {
    src: image1,
    text: "Elevating Industries with Cutting Edge Technology",
  },
  {
    src: image2,
    text: "Elevating Industries with Innovation",
  },
  {
    src: image3,
    text: "Elevating Industries with Excellent Service",
  },
];

export default function Carousel() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="fade"
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx} className="relative h-full">
            {/* Image */}
            <Image
              src={image.src}
              alt={image.text}
              fill
              className="object-cover"
              priority={idx === 0}
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-start px-16">
              <div className="w-1/2">
                <h1 className="text-4xl font-bold text-white md:text-6xl animate-slide-down">
                  {image.text}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slideDown 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
