// src/components/ui/card.tsx

import * as React from "react";
import { cn } from "@/lib/utils"; // Optional utility for conditional classNames

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
