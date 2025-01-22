import React from "react";
import apexenggtechLogo from "@/images/apexenggtech.png";
import Carousel from "@/components/Carousel";
import aboutImg from "../images/ffeEvaporator.jpg";
import Image from "next/image";
import Button from "@/components/Buttons/Button";
import MissionVisionCard from "@/components/MissionVisionCard";
const Home = () => {
  return (
    <>
     <div className="bg-gray-50">
      <Carousel />
      {/* About Us Section */}
      <section className="mt-12 p-8 bg-gray-50">
        <h2 className="text-center text-4xl font-semibold mb-10 text-gray-800">
          Welcome to Abhishek Engg Works
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 h-96 relative">
            <Image
              src={aboutImg.src}
              alt="About Us"
              className="rounded-lg shadow-md object-cover"
              layout="fill"
            />
          </div>
          {/* Text content on the right */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              It’s a great pleasure to introduce our organization{" "}
              <strong>Abhishek Engg Works (AEW)</strong>, a latest design and technology-oriented company
              situated in Dharwad. We specialize in manufacturing and supplying world-class equipment for
              Sugar Plant, Jaggery Plant, and Allied industries.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
            We are committed to set high level standards in Design and Manufacturing of Complete Sugar
            Plant Machineries & equipment’s / Jaggery Plants on Turn Key basis.
            </p>
            <div className="mt-6 flex justify-start">
              <Button label="Explore" link="/explore" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mt-14 bg-gray-50 py-12 px-4">
      {/* Header */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        OUR VISION & MISSION
      </h2>

      {/* Vision & Mission Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Left Section: Vision Image */}
        <div className="flex flex-col items-center text-center md:w-1/3">
          <div className="relative w-full h-60 md:h-64">
            {/* Dummy Image Placeholder */}
            <Image
              src={aboutImg.src}
              alt="Vision Illustration"
              layout="fill"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, usu utinam inermis voluptua eu. Usu esse solet scripserit eu.
          </p>
        </div>

        {/* Mission A */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center md:w-1/3">
          <div className="relative w-full h-32 mb-4">
            {/* Dummy Image Placeholder */}
            <Image
              src={aboutImg.src}
              alt="Mission A Illustration"
              layout="fill"
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            At our core, we provide innovative engineering solutions designed to elevate our client’s success. We
            are committed to upholding the highest standards of quality and trust. Our work is driven by a passion
            for quality and excellence. Together, we craft the future of engineering excellence.
          </p>
        </div>

        {/* Mission B */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center md:w-1/3">
          <div className="relative w-full h-32 mb-4">
            {/* Dummy Image Placeholder */}
            <Image
              src={aboutImg.src}
              alt="Mission B Illustration"
              layout="fill"
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            We aim to lead with integrity and innovation, delivering top-tier engineering solutions. Our vision is
            to set the standard in the industry, ensuring client success and lasting partnerships. Excellence in
            Quality is our commitment, always.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Our Mission & Vision</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Mission Card */}
        <MissionVisionCard
          title="Our Mission"
          description="To inspire and nurture innovation for a better future."
          // imageUrl="https://example.com/mission-image.jpg"
          // link="/mission"
        />

        {/* Vision Card */}
        <MissionVisionCard
          title="Our Vision"
          description="To be a global leader in sustainable solutions."
          // imageUrl="https://example.com/vision-image.jpg"
          // link="/vision"
        />
      </div>
    </section>
    </div>
    </>
  );
};

export default Home;
