"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCogs, FaDraftingCompass, FaIndustry, FaProjectDiagram, FaChartLine, FaLeaf } from "react-icons/fa";

export const CustomerJourney: React.FC = () => {
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
    <div className="my-12">
      <h2 className="text-center text-5xl font-bold mb-8">Customer Journey</h2>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#f3f4f6",
              color: "#333",
            }}
            contentArrowStyle={{ borderRight: "7px solid #f3f4f6" }}
            iconStyle={{
              background: "#1e40af",
              color: "#fff",
            }}
            icon={item.icon}
          >
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};
