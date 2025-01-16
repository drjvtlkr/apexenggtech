"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Import local images
import image1 from "../images/intermediateRakeTypeCarriers.jpg";
import image2 from "../images/ffeFinProcess.jpg";
import image3 from "../images/continuousVacuumPan.jpg";

export default function Carousel() {
  const [index, setIndex] = useState(0);
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

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className="position-relative overflow-hidden" style={{ height: "500px" }}>
      {/* Image with linear gradient */}
      <div className="position-relative">
        <Image
          src={images[index].src}
          alt="Carousel Image"
          className="w-100 h-100"
          style={{
            objectFit: "cover",
            transition: "opacity 1s ease-in-out",
          }}
          width={1280}
          height={720}
        />
        <div
          className="position-absolute top-0 w-100 h-100"
          style={{
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))",
          }}
        ></div>
      </div>

      {/* Text overlay */}
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
        <h1 className="display-4 fw-bold">{images[index].text}</h1>
      </div>

      {/* Navigation buttons */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
        style={{ zIndex: 10 }}
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
        style={{ zIndex: 10 }}
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
}
