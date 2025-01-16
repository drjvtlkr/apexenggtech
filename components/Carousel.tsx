"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../images/intermediateRakeTypeCarriers.jpg";
import image2 from "../images/ffeFinProcess.jpg";
import image3 from "../images/continuousVacuumPan.jpg";

export default function Carousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    let carousel: any = null;
    
    const initCarousel = async () => {
      try {
        // Import Bootstrap
        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        
        // Initialize carousel only after Bootstrap is loaded
        if (carouselRef.current && bootstrap.Carousel) {
          carousel = new bootstrap.Carousel(carouselRef.current, {
            interval: 3000,
            ride: true,
            touch: true
          });
        }
      } catch (error) {
        console.error('Error initializing carousel:', error);
      }
    };

    // Initialize
    initCarousel();

    // Cleanup
    return () => {
      if (carousel) {
        carousel.dispose();
      }
    };
  }, []);

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

  return (
    <div
      id="carouselExampleFade"
      ref={carouselRef}
      className="carousel slide carousel-fade relative overflow-hidden"
      data-bs-ride="carousel"
    >
      {/* Carousel Items */}
      <div className="carousel-inner h-screen">
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`carousel-item h-full ${idx === 0 ? "active" : ""}`}
          >
            {/* Image Container with Animation */}
            <div className="relative h-full w-full animate-zoom-in">
              <Image
                src={image.src}
                alt={`Slide ${idx + 1}`}
                className="d-block w-full object-cover"
                fill
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
            </div>

            {/* Text Container with Animation */}
            <div className="absolute inset-0 flex items-center justify-start px-16">
              <div className="w-1/2 animate-slide-down">
                <h1 className="text-4xl font-bold text-white md:text-6xl">
                  {image.text}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

      {/* Add indicators for better control */}
      <div className="carousel-indicators">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to={idx}
            className={idx === 0 ? "active" : ""}
            aria-current={idx === 0 ? "true" : undefined}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes zoomIn {
          from {
            transform: scale(1.2);
          }
          to {
            transform: scale(1);
          }
        }

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

        .animate-zoom-in {
          animation: zoomIn 1s ease-out forwards;
        }

        .animate-slide-down {
          animation: slideDown 0.8s ease-out forwards;
        }

        .carousel-fade .carousel-item {
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
        }

        .carousel-fade .carousel-item.active {
          opacity: 1;
        }

        .carousel-item {
          height: 100vh;
        }

        .carousel-fade .carousel-item:not(.active) {
          position: absolute;
          top: 0;
        }
      `}</style>
    </div>
  );
}