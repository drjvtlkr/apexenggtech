"use client";

import React from "react";
import Image from "next/image";
import image3 from "../images/continuousVacuumPan.jpg";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface MissionVisionCardProps {
  title: string;
  description: string;
  // link: string;
}

const MissionVisionCard = ({ title, description }: MissionVisionCardProps) => {
  return (
    <CardContainer>
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image3.src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Mission Vision"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            // href={link}
            // target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Learn More →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default MissionVisionCard;
