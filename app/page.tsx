import React from "react";
import apexenggtechLogo from "../images/apexenggtech.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="flex justify-center">
        <Image src={apexenggtechLogo} alt="Holder Image" className="w-full "/>
      </div>
      <Footer />
    </>
  );
};

export default Home;
