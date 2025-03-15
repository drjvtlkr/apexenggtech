import Image from "next/image";
import React, { ReactNode } from "react";
import { FaIndustry, FaCogs, FaBoxes, FaCubes } from "react-icons/fa";
import ffeImg from "@/images/Cane unloader .jpg";
import verticalImg from "@/images/ffeFinProcess.jpg";
import interImg from "@/images/milkOfLimeTank.jpg";
import p4 from "@/images/p4.jpg";
import p5 from "@/images/continuousVacuumPan.jpg";
import p6 from "@/images/bagasseBeltConveyor.jpg";
import { OurProductCarousel } from "@/components/OurProductsCarousel";
import Link from "next/link";

interface ProductSectionProps {
  title: string;
  items: string[];
  imgSrc: string;
  bgColor: string;
  icon: ReactNode;
  reverse?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  items,
  imgSrc,
  bgColor,
  icon,
  reverse = false,
}) => {
  return (
    <section
      className={`min-h-screen flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center gap-10 p-8 ${bgColor}`}>
      <div className="group w-full lg:w-1/2 relative h-72 md:h-96 lg:h-[500px] overflow-hidden rounded-lg">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="rounded-lg shadow-lg object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex items-center gap-4">
          <span className="text-4xl text-gray-700">{icon}</span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            {title}
          </h3>
        </div>
        <ul className="list-disc pl-5 text-gray-700 text-lg md:text-xl lg:text-2xl space-y-2 mt-4">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const Products: React.FC = () => {
  return (
    <>
      <h2 className="text-center text-3xl md:text-4xl lg:text-6xl font-bold mt-12 md:mt-20 lg:mt-32 p-8 text-gray-800">
        Our Products
      </h2>

      <ProductSection
        title="MILL HOUSE EQUIPMENTS"
        items={[
          "Cane Unloader",
          "Feeder Table",
          "Cane Carrier",
          "Chopper / Leveler",
          "Swing Type Heavy Duty Fibrizor",
          "Rake Elevator / Rake Type Inter Carriers",
          "T.R.P.F./G.R.P.F.",
          "Multi Misalignment Rope Coupling",
          "Rotary Juice Screen",
          "Mill House Crane",
          "Bagasse Elevator",
          "Return Bagasse Carrier",
        ]}
        imgSrc={ffeImg.src}
        bgColor="bg-[#F0F4F8]"
        icon={<FaIndustry />}
      />

      <ProductSection
        title="BOILING HOUSE EQUIPMENTS"
        items={[
          "Conventional Multi-Pass Tubular Juice Heaters, Dynamic / VLJH",
          "Direct Contact Heaters for Juice & Imbibition Water",
          "Robert Type / Radial Flow Type Evaporators & Vapor Cells",
          "Rising / Falling Film Evaporator",
          "Tubular Condensate Heaters",
          "Low Head Batch Type Vacuum Pan / Multi Down Take Type Batch Pans",
          "Continuous Vacuum Pans for B & C Massecuite with Automation",
          "Juice Heater / Dynamic Juice Heater",
          "Vertical Continuous Crystallizer",
          "Air / Water Cooled Crystallizer",
          "Pug Mill / Magma Mixers",
          "Molasses Conditioners - Conventional & DCH Type",
          "Sugar Melters - Vertical / Horizontal Type",
        ]}
        imgSrc={verticalImg.src}
        bgColor="bg-[#D9EAFD]"
        icon={<FaCogs />}
        reverse
      />

      <ProductSection
        title="CLARIFICATION HOUSE EQUIPMENTS"
        items={[
          "Lime Slacker",
          "Lime Classifier – Koran / Twin Rake Type",
          "Milk of Lime Tanks",
          "Juice Sulphiter",
          "Syrup Sulphiter",
          "Continuous Sulphur Burner",
          "Juice Clarifiers - Conventional 444 and Short Retention Type (SRI)",
          "Film Type Sulphur Burners",
        ]}
        imgSrc={interImg.src}
        bgColor="bg-[#F5E6CC]"
        icon={<FaBoxes />}
      />

      <ProductSection
        title="SUGAR HANDLING EQUIPMENT"
        items={[
          "Plain Tray Hopper, Multi-Tray Hoppers",
          "Sugar Dryers - Fluidized Bed Type (FBD) & Rotary Drum Dryer cum Cooler Type",
          "Sugar Elevator",
          "Sugar Bag Handling Systems",
          "Mechanized Sugar Handling with Sugar Bin / Silo System",
          "Portable Belt Conveyors",
          "Sugar Bag Stackers",
          "Truck Loaders",
        ]}
        imgSrc={p4.src}
        bgColor="bg-[#E3F4E3]"
        icon={<FaCubes />}
        reverse
      />

      <ProductSection
        title="OUR SPECIAL EQUIPMENTS"
        items={[
          "Condensate Flash Heat Recovery System / Steam Saving System",
          "Super-Heated Wash Water System",
          "Transient Heaters for Continuous Centrifugal Machines",
          "Pug-Mill & Magma Mixers with Planetary Drives",
          "S.S. Single Entry Condenser / Table Top Spray Pond with Effective Cooling System",
          "S.S. Poly-Baffle Internal / External Catchalls for Evaporator & Pans",
          "Water Jet Air Extractor",
          "Pan Discharge Valves – Pneumatic / Hydraulic Type",
          "M.S. Fabricated Right Angle Type & Straight / Globe Type Valves",
          "Static Mixer for Juice Sulphiters",
          "Screw Conveyors with Planetary Drive",
          "Molasses Cooler",
          "All Types of M.S. / S.S. Fabricated Tankages",
          "Molasses Storage Tanks, Fermentation / Distillation Tanks",
          "Shell & Tube Type Heat Exchangers",
          "Bio-Gas Plants & Spent Wash Evaporation System",
        ]}
        imgSrc={p5.src}
        bgColor="bg-[#FCE4EC]"
        icon={<FaBoxes />}
      />

      <ProductSection
        title="BULK MATERIAL HANDLING SYSTEMS WITH EQUIPMENTS"
        items={[
          "Bagasse Handling System",
          "Coal Handling System",
          "Ash Handling System",
        ]}
        imgSrc={p6.src}
        bgColor="bg-[#EAEAEA]"
        icon={<FaCubes />}
        reverse
      />

      <div className="flex justify-center py-12">
        <Link
          href="/#contactus"
          className="px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
          REQUEST FOR A QUOTE
        </Link>
      </div>
    </>
  );
};

export default Products;
