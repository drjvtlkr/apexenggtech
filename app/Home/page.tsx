"use client";
import Carousel from "@/components/Carousel";
import aboutImg from "../../images/ffeEvaporator.jpg";
import Image from "next/image";
import Button from "@/components/Buttons/Button";


export default function Home() {
  return (
    <div className="bg-gray-100">
      <h1 className="text-center text-2xl font-bold">Welcome to Home Page</h1>
      <Carousel />
      <section className="mt-12 p-8 bg-gray-50 shadow-sm">
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
    </div>
  );
}
