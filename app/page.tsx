import React from "react";
import apexenggtechLogo from "@/images/apexenggtech.png";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">You are on dev domain</div>
      <div className="flex justify-center">
        <Image src={apexenggtechLogo} alt="Holder Image" className="w-full "/>
      </div>
    </>
  );
};

export default Home;
