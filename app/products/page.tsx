import Image from "next/image";
import React from "react";
import ffeImg from "@/images/Cane unloader .jpg";
import verticalImg from "@/images/ffeFinProcess.jpg";
import interImg from "@/images/milkOfLimeTank.jpg";
import p4 from "@/images/p4.jpg";
import contVacPan from "@/images/continuousVacuumPan.jpg";
import bagasseBeltCon from "@/images/bagasseBeltConveyor.jpg";

const Products = () => {
  return (
    <>
      <section className="mt-12 md:mt-20 lg:mt-32 p-8 bg-gray-50">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold mb-10 text-gray-800">
          Our Products
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="group w-full lg:w-1/2 h-96 lg:h-[500px] relative overflow-hidden">
            <Image
              src={ffeImg.src}
              alt="About Us"
              className="rounded-lg shadow-md object-cover transform transition-transform duration-500 group-hover:scale-105"
              layout="fill"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              MILL HOUSE EQUIPMENTS
            </h3>
            <ul className="list-disc pl-5 text-gray-700 text-lg md:text-xl lg:text-2xl space-y-2">
              <li>Cane Unloader</li>
              <li>Feeder Table</li>
              <li>Cane Carrier</li>
              <li>Chopper / Leveler</li>
              <li>Swing Type Heavy Duty Fibrizor</li>
              <li>Rake Elevator / Rake Type Inter Carriers</li>
              <li>T.R.P.F./G.R.P.F.</li>
              <li>Multi Misalignment Rope Coupling</li>
              <li>Rotary Juice Screen</li>
              <li>Mill House Crane</li>
              <li>Bagasse Elevator</li>
              <li>Return Bagasse Carrier</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center mt-8 gap-10">
          <div className="group w-full lg:w-1/2 h-96 lg:h-[500px] relative overflow-hidden">
            <Image
              src={verticalImg.src}
              alt="About Us"
              className="rounded-lg shadow-md object-cover transform transition-transform duration-500 group-hover:scale-105"
              layout="fill"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              BOILING HOUSE EQUIPMENTS
            </h3>
            <ul className="list-disc pl-5 text-gray-700 text-lg md:text-xl lg:text-2xl space-y-2">
              <li>
                Conventional Multi-Pass Tubular Juice Heaters, Dynamic / VLJH
              </li>
              <li>Direct Contact Heaters for Juice & Imbibition Water</li>
              <li>Robert Type / Radial Flow Type Evaporators & Vapor Cells</li>
              <li>Rising / Falling Film Evaporator</li>
              <li>Tubular Condensate Heaters</li>
              <li>
                Low Head Batch Type Vacuum Pan / Multi Down Take Type Batch Pans
              </li>
              <li>
                Continuous Vacuum Pans for B & C Massecuite with Automation
              </li>
              <li>Juice Heater / Dynamic Juice Heater</li>
              <li>Vertical Continuous Crystallizer</li>
              <li>Air / Water Cooled Crystallizer</li>
              <li>Pug Mill / Magma Mixers</li>
              <li>Molasses Conditioners - Conventional & DCH Type</li>
              <li>Sugar Melters - Vertical / Horizontal Type</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center mt-8 gap-10">
          <div className="group w-full lg:w-1/2 h-96 lg:h-[500px] relative overflow-hidden">
            <Image
              src={interImg.src}
              alt="About Us"
              className="rounded-lg shadow-md object-cover transform transition-transform duration-500 group-hover:scale-105"
              layout="fill"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              CLARIFICATION HOUSE EQUIPMENTS
            </h3>
            <ul className="list-disc pl-5 text-gray-700 text-lg md:text-xl lg:text-2xl space-y-2">
              <li>Lime Slacker</li>
              <li>Lime Classifier – Koran / Twin Rake Type</li>
              <li>Milk of Lime Tanks</li>
              <li>Juice Sulphiter</li>
              <li>Syrup Sulphiter</li>
              <li>Continuous Sulphur Burner</li>
              <li>
                Juice Clarifiers - Conventional 444 and Short Retention Type
                (SRI)
              </li>
              <li>Film Type Sulphur Burners</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center mt-8 gap-10">
          <div className="group w-full lg:w-1/2 h-96 lg:h-[500px] relative overflow-hidden">
            <Image
              src={p4.src}
              alt="About Us"
              className="rounded-lg shadow-md object-cover transform transition-transform duration-500 group-hover:scale-105"
              layout="fill"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              SUGAR HANDLING EQUIPMENT
            </h3>
            <ul className="list-disc pl-5 text-gray-700 text-lg md:text-xl lg:text-2xl space-y-2">
              <li>Plain Tray Hopper, Multi-tray Hoppers</li>
              <li>
                Sugar Dryers - Fluidized Bed Type (FBD) & Rotary Drum Dryer cum
                Cooler Type
              </li>
              <li>Sugar Elevator</li>
              <li>Sugar Bag Handling Systems</li>
              <li>Mechanized Sugar Handling with Sugar Bin / Silo System</li>
              <li>Portable Belt Conveyors</li>
              <li>Sugar Bag Stackers</li>
              <li>Truck Loaders</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center mt-8 gap-10">
          <div className="group w-full lg:w-1/2 h-96 lg:h-[500px] relative overflow-hidden">
            <Image
              src={contVacPan.src}
              alt="About Us"
              className="rounded-lg shadow-md object-cover transform transition-transform duration-500 group-hover:scale-105"
              layout="fill"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              OUR SPECIAL EQUIPMENTS
            </h3>
            <ul className="list-disc pl-5 text-gray-700 text-lg md:text-xl lg:text-2xl space-y-2">
              <li>
                Condensate Flash Heat Recovery System / Steam Saving System
              </li>
              <li>Super-Heated Wash Water System</li>
              <li>Transient Heaters for Continuous Centrifugal Machines</li>
              <li>Pug-Mill & Magma Mixers with Planetary Drives</li>
              <li>
                S.S. Single Entry Condenser / Table Top Spray Pond with
                Effective Cooling System
              </li>
              <li>
                S.S. Poly-baffle Internal / External Catchalls for Evaporator &
                Pans
              </li>
              <li>Water Jet Air Extractor</li>
              <li>Pan Discharge Valves – Pneumatic / Hydraulic Type</li>
              <li>
                M.S. Fabricated Right Angle Type & Straight / Globe Type Valves
              </li>
              <li>Static Mixer for Juice Sulphiters</li>
              <li>Screw Conveyors with Planetary Drive</li>
              <li>Molasses Cooler</li>
              <li>All Types of M.S. / S.S. Fabricated Tankages</li>
              <li>Molasses Storage Tanks, Fermentation / Distillation Tanks</li>
              <li>Shell & Tube Type Heat Exchangers</li>
              <li>Bio-Gas Plants & Spent Wash Evaporation System</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center mt-8 gap-10">
          <div className="group w-full lg:w-1/2 h-96 lg:h-[500px] relative overflow-hidden">
            <Image
              src={bagasseBeltCon.src}
              alt="About Us"
              className="rounded-lg shadow-md object-cover transform transition-transform duration-500 group-hover:scale-105"
              layout="fill"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              BULK MATERIAL HANDLING SYSTEMS WITH EQUIPMENTS
            </h3>
            <ul className="list-disc pl-5 text-gray-700 text-lg md:text-xl lg:text-2xl space-y-2">
              <li>Bagasse Handling System</li>
              <li>Coal Handling System</li>
              <li>Ash Handling System</li>
            </ul>
          </div>
        </div>
      </section>
      {/* here please add images as per products page doc, and a button to redirect to contactus section */}
    </>
  );
};

export default Products;
