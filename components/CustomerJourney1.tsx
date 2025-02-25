"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCogs,
  FaDraftingCompass,
  FaIndustry,
  FaProjectDiagram,
  FaChartLine,
  FaLeaf,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
  {
    title: "Preparation of Technical Specifications",
    icon: <FaDraftingCompass className="text-yellow-400 text-5xl" />,
    description:
      "Meticulously prepare technical specifications to align with industry standards and customer requirements.",
  },
  {
    title: "Design Latest Technology Sugar Machinery",
    icon: <FaCogs className="text-green-400 text-5xl" />,
    description:
      "Innovative design to integrate the latest technologies for efficient sugar production.",
  },
  {
    title: "Manufacture and Supply of Sugar Plant",
    icon: <FaIndustry className="text-blue-400 text-5xl" />,
    description:
      "Seamlessly manufacture and deliver high-quality sugar plants to customers worldwide.",
  },
  {
    title: "Expand/Increase In-Built Capacity of the Plant",
    icon: <FaProjectDiagram className="text-purple-400 text-5xl" />,
    description:
      "Enhance existing infrastructure to increase capacity and boost overall efficiency.",
  },
  {
    title: "Optimize Factory Operations to Achieve Full Capacity",
    icon: <FaChartLine className="text-pink-400 text-5xl" />,
    description:
      "Implement strategic measures to maximize output and minimize resource wastage.",
  },
  {
    title: "Improve Sugar Output Quality and Lower Energy Costs",
    icon: <FaLeaf className="text-red-400 text-5xl" />,
    description:
      "Ensure superior sugar quality while adopting energy-efficient solutions to reduce operational costs.",
  },
];

const CustomerJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = containerRef.current;
    const timeline = timelineRef.current;

    if (!section || !timeline) return;

    gsap.to(timeline, {
      x: () => -(timeline.scrollWidth - section.clientWidth - window.innerWidth * 0),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${timeline.scrollWidth}`,
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-16 px-4"
    >
      {/* Title */}
      <h1 className="text-center text-5xl font-bold mb-12">Customer Journey</h1>

      {/* Scrolling Section */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div
          ref={timelineRef}
          className="flex gap-12 w-max md:gap-6 lg:gap-12 flex-col md:flex-row justify-center items-center px-4 md:px-0"
        >
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[350px] lg:w-[400px] bg-white bg-opacity-10 rounded-xl p-6 shadow-lg backdrop-blur-md flex flex-col items-center text-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="text-gray-300 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerJourney;
