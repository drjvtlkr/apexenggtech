import React from "react";
import Carousel from "@/components/Carousel";
import Services from "@/components/Services";
import aboutImg from "../images/epc_banner3.jpg";
import imageVision from "../images/industryIndustrialFabricChimneys.jpg";
import imagemission from "../images/BatchPanAuto.png";
import Image from "next/image";
import Button from "@/components/Buttons/Button";
import MissionVisionCard from "@/components/MissionVisionCard";
import { ProductCarousel } from "@/components/ProductCarousel";
import CustomerJourney1 from "@/components/CustomerJourney1";
import ContactForm from "@/components/ContactUs";
const Home = () => {
  return (
    <>
      <div className="bg-gray-50">
        {/* Carousel */}
        <Carousel />

        {/* About Us Section */}
        <section className="mt-12 p-8 bg-gray-50">
          <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold mb-10 text-gray-800">
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
              <p className="text-gray-700 text-lg md:text-xl lg:text-3xl leading-relaxed">
                It&apos;s a great pleasure to introduce our organization
                <strong> Abhishek Engg Works (AEW)</strong>, a latest design and
                technology-oriented company situated in Dharwad. We specialize
                in manufacturing and supplying world-class equipment for Sugar
                Plant, Jaggery Plant, and Allied industries.
              </p>
              <p className="text-gray-700 text-lg md:text-xl lg:text-3xl leading-relaxed mt-4">
                We are committed to set high level standards in Design and
                Manufacturing of Complete Sugar Plant Machineries & equipment&apos;s
                / Jaggery Plants on Turn Key basis.
              </p>
              <div className="mt-6 flex justify-start">
                <Button label="Explore" link="/about" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-10 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-5">
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center mb-2 md:mb-8 lg:mb-8">
            Our Mission & Vision
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {/* Mission Card */}
            <MissionVisionCard
              title="Our Mission"
              description="At our core, we provide innovative engineering solutions designed to elevate our client&apos;s 
      success. We are committed to upholding the highest standards of quality and trust. Our work is 
      driven by a passion for quality and excellence. Together, we craft the future of engineering 
      excellence."
              image={imagemission}
            />

            {/* Vision Card */}
            <MissionVisionCard
              title="Our Vision"
              description="We aim to lead with integrity and innovation, delivering top-tier engineering solutions. Our 
      vision is to set the standard in the industry, ensuring client success and lasting partnerships. 
      Excellence in Quality is our commitment, always."
              image={imageVision}
            />
          </div>
        </section>

        {/* Products */}
        <div className="mt-10 lg:mt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Our Products
          </h1>
          <ProductCarousel />
        </div>

        {/* Customer Journey */}
        <div className="mt-12">
          {/* <h1 className="text-5xl font-bold text-center mb-6">Customer Journey</h1> */}
          {/* <CustomerJourney /> */}
          <CustomerJourney1 />
        </div>

        {/* Services */}
        <div className="">
          {/* <AnimatedTestimonialsDemo /> */}
          <Services />
        </div>

        <section
          id="contactus"
          className="flex flex-col justify-center items-center p-8 font-sans bg-[#111828] w-full">
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default Home;
