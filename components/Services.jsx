"use client";

import React from "react";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Cutting-Edge Infrastructure",
    description:
      "AEW operates with advanced facilities, ensuring precision and excellence in every project from design to delivery.",
  },
  {
    title: "Material Quality",
    description:
      "We trust only the highest quality materials to ensure superior durability, strength, and consistent performance throughout the entire production process.",
  },
  {
    title: "Expert Team",
    description:
      "Our skilled professionals bring years of experience and deep industry knowledge, ensuring exceptional craftsmanship in every project.",
  },
  {
    title: "On-Time, Every Time",
    description:
      "We prioritize punctuality and reliability, consistently delivering projects on schedule without compromising on quality.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We provide customized engineering and fabrication solutions that meet the unique needs of each client, driving optimal results.",
  },
];

const Meteors = ({ number = 10, className }) => {
  const meteors = new Array(number).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={`animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent ${className}`}
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};

const Services = () => {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden font-sans">
      <h1 className="text-5xl font-bold text-center mb-10 text-white relative inline-block">
        Exceptional Services We Offer
        {/* <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 animate-underline" /> */}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, backgroundColor: "#1f2937", color: "#fff" }}
            className="relative bg-gray-900 text-white shadow-xl rounded-xl p-6 transform transition-all duration-300 border border-gray-700 hover:shadow-2xl hover:border-blue-500 font-sans overflow-hidden"
          >
            <Meteors number={5} className="opacity-30" />
            <h3 className="text-2xl font-bold relative z-10">{service.title}</h3>
            <p className="text-gray-300 mt-3 relative z-10">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;