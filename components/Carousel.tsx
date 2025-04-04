"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

import Image, { StaticImageData } from "next/image";
import image1 from "../images/epc_banner1.jpg";
import image2 from "../images/boiler-banner4 (1).jpg";
import image3 from "../images/epc_banner.jpg";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// ✅ Fix: Change 'src' type to 'StaticImageData'
interface ImageData {
  src: StaticImageData; 
  dynamicText: string;
}

// Image array
const images: ImageData[] = [
  {
    src: image1,
    dynamicText: "Cutting Edge Technology",
  },
  {
    src: image2,
    dynamicText: "Innovation",
  },
  {
    src: image3,
    dynamicText: "Excellent Service",
  },
];

// Type definition for TypeWriter props
interface TypeWriterProps {
  text: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="block">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx} className="relative h-full">
            <Image
              src={image.src}
              alt={`Elevating Industries with ${image.dynamicText}`}
              fill
              className="object-bottom brightness-30"
              priority={idx === 0}
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />

            <div className="absolute inset-0 flex items-center justify-start px-16">
              <div className="w-1/2">
                <h1 className="text-4xl font-bold text-white md:text-7xl">
                  <span className="block animate-fade-in">
                    Elevating Industries with
                  </span>
                  <span className="block mt-2 min-h-[1.5em]">
                    {idx === activeIndex && <TypeWriter text={image.dynamicText} />}
                  </span>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-in-out forwards;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}
