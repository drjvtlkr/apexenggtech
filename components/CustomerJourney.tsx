"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCogs, FaDraftingCompass, FaIndustry, FaProjectDiagram, FaChartLine, FaLeaf } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export const CustomerJourney: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = gsap.utils.toArray(".timeline-content") as HTMLElement[];

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const timelineData = [
    {
      title: "Preparation of Technical Specifications",
      icon: <FaDraftingCompass />,
      description:
        "Meticulously prepare technical specifications to align with industry standards and customer requirements.",
    },
    {
      title: "Design Latest Technology Sugar Machinery",
      icon: <FaCogs />,
      description:
        "Innovative design to integrate the latest technologies for efficient sugar production.",
    },
    {
      title: "Manufacture and Supply of Sugar Plant",
      icon: <FaIndustry />,
      description:
        "Seamlessly manufacture and deliver high-quality sugar plants to customers worldwide.",
    },
    {
      title: "Expand/Increase In-Built Capacity of the Plant",
      icon: <FaProjectDiagram />,
      description:
        "Enhance existing infrastructure to increase capacity and boost overall efficiency.",
    },
    {
      title: "Optimize Factory Operations to Achieve Full Capacity",
      icon: <FaChartLine />,
      description:
        "Implement strategic measures to maximize output and minimize resource wastage.",
    },
    {
      title: "Improve Sugar Output Quality and Lower Energy Costs",
      icon: <FaLeaf />,
      description:
        "Ensure superior sugar quality while adopting energy-efficient solutions to reduce operational costs.",
    },
  ];

  return (
    <div className="my-12" ref={timelineRef}>
      <h2 className="text-center text-5xl font-bold mb-8">Customer Journey</h2>
      <div className="custom-timeline">
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: "#f3f4f6",
                color: "#333",
              }}
              contentArrowStyle={{ borderRight: "7px solid orange" }}
              iconStyle={{
                background: "#1e40af",
                color: "#fff",
              }}
              icon={item.icon}
            >
              <div className="timeline-content">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <style jsx global>{`
        .vertical-timeline::before {
          background: orange !important;
          width: 4px !important;
        }
        .vertical-timeline-element-icon {
          transform: none !important;
        }
      `}</style>
    </div>
  );
};
