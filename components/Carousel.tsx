"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../images/intermediateRakeTypeCarriers.jpg";
import image2 from "../images/ffeFinProcess.jpg";
import image3 from "../images/continuousVacuumPan.jpg";

const Carousel = () => {
  const images = [
    {
      src: image1,
      text: "Welcome to Apex Engineering Technology",
    },
    {
      src: image2,
      text: "We are a work in progress...",
    },
    {
      src: image3,
      text: "Stay tuned for more updates!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Images */}
      <div className="relative h-full">
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.text}
              fill
              className="object-cover"
              priority={idx === currentIndex}
              loading={idx === currentIndex ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-start px-16">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-white md:text-6xl animate-slide-down">
            {images[currentIndex].text}
          </h1>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50"
        aria-label="Next Slide"
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slideDown 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
