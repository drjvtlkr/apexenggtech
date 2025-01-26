"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { CardBody, CardContainer, CardItem } from "./uis/3d-card";

interface MissionVisionCardProps {
  title: string;
  description: string;
  image: StaticImageData; 
}

const MissionVisionCard = ({ title, description, image }: MissionVisionCardProps) => {
  return (
    <CardContainer>
      <CardBody className="bg-white shadow-lg relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-3xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-xl max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default MissionVisionCard;
