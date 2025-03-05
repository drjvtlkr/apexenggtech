import React from "react";
import Image from "next/image";
import AboutCarousel from "@/components/AboutCarousel";
import ffeImg from "@/images/welding.jpg";
import verticalImg from "@/images/MetalFabricationIllinoi.jpg";
import interImg from "@/images/fabricationManufacturers.jpg";
import mdImg from "@/images/MDSir .jpg";
import {
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaCog,
  FaComments,
  FaLeaf,
  FaLightbulb,
  FaThumbsUp,
  FaTools,
} from "react-icons/fa";
import { Button } from "@/components/uis/button";
import Link from "next/link";

const About = () => {
  return (
    <>
      <AboutCarousel />

      <section className="mt-12 p-8">
        <div className="h-screen mb-32 lg:mb-10">
          <h2 className="text-center text-2xl md:text-3xl lg:text-6xl font-bold m-8 text-gray-800">
            Who we are
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-10 bg-slate-100 p-8 rounded">
            <div className="group w-full lg:w-1/2 h-96 lg:h-[500px] relative overflow-hidden">
              <Image
                src={ffeImg.src}
                alt="About Us"
                className="rounded-lg shadow-md object-cover transform transition-transform duration-500 group-hover:scale-105"
                layout="fill"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <p className="text-gray-700 text-lg md:text-xl lg:text-4xl leading-relaxed">
                It&apos;s a great pleasure to introduce our organization
                <strong> Abhishek Engg Works (AEW)</strong>, a latest design and
                technology-oriented company situated in Dharwad. We specialize
                in manufacturing and supplying world-class equipment for Sugar
                Plant, Jaggery Plant, and Allied industries.
              </p>
              <p className="text-gray-700 text-lg md:text-xl lg:text-4xl leading-relaxed mt-4">
                Founded in 2012, our mission is to provide energy-efficient,
                reliable, and innovative solutions to Sugar Plant, Jaggery Plant
                and Allied industries. Our ability to fabricate, erect and
                commission a complete sugar plant with intelligent design and
                precision contract manufacturing, maximizes prosperity for our
                clients and enables better products, performance, and quality.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col lg:flex-row items-center mt-8 mb-8 gap-10 h-screen bg-gray-200 p-4 rounded-lg">
        <div className="group w-full lg:w-1/2 h-96 lg:h-[500px] relative overflow-hidden">
              <Image
                src={ffeImg.src}
                alt="About Us"
                className="rounded-lg shadow-md object-cover transform transition-transform duration-500 group-hover:scale-105"
                layout="fill"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <p className="text-gray-700 text-lg md:text-xl lg:text-4xl leading-relaxed">
                It’s a great pleasure to introduce our organization
                <strong> Abhishek Engg Works (AEW)</strong>, a latest design and
                technology-oriented company situated in Dharwad. We specialize
                in manufacturing and supplying world-class equipment for Sugar
                Plant, Jaggery Plant, and Allied industries.
              </p>
              <p className="text-gray-700 text-lg md:text-xl lg:text-4xl leading-relaxed mt-4">
                Founded in 2012, our mission is to provide energy-efficient,
                reliable, and innovative solutions to Sugar Plant, Jaggery Plant
                and Allied industries. Our ability to fabricate, erect and
                commission a complete sugar plant with intelligent design and
                precision contract manufacturing, maximizes prosperity for our
                clients and enables better products, performance, and quality.
              </p>
            </div>
        </div> */}

        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 h-screen bg-orange-100 p-8 rounded-lg">
          <div className="group w-full lg:w-1/2 h-96 lg:h-[500px] relative overflow-hidden">
            <Image
              src={verticalImg.src}
              alt="About Us"
              className="rounded-lg shadow-md object-cover transform transition-transform duration-500 group-hover:scale-105"
              layout="fill"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="text-gray-700 text-lg md:text-xl lg:text-4xl leading-relaxed">
              <strong>
                AEW is located in the Belur Industrial Area of Dharwad,
                Karnataka, strategically positioned along the Golden
                Quadrilateral Road (NH4).
              </strong>{" "}
              <br />
              This Prime location offers excellent infrastructure, including
              access to reliable water, power, skilled and unskilled labor, as
              well as efficient transport and communication networks.
              Additionally, our location benefits from various fiscal incentives
              provided by the Karnataka Government, making it an ideal base for
              growth and development.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center mt-8 gap-10 h-screen bg-gray-200 p-4 rounded-lg">
          <div className="group w-full lg:w-1/2 h-96 lg:h-[500px] relative overflow-hidden">
            <Image
              src={interImg.src}
              alt="About Us"
              className="rounded-lg shadow-md object-cover transform transition-transform duration-500 group-hover:scale-105"
              layout="fill"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="text-gray-700 text-lg md:text-xl lg:text-4xl leading-relaxed">
              The company is equipped with cutting-edge infrastructure and
              advanced machinery, ensuring the design and production of
              high-performance, heavy-duty equipment with unmatched precision
              and reliability.
            </p>
            <p className="text-gray-700 text-lg md:text-xl lg:text-4xl leading-relaxed mt-4">
              The total factory area is <strong>7300 Sq. Mtr </strong> and
              Workshop Shed Area:{" "}
              <strong>30 Mtr long x 16 Mtr. wide x 8.00 Mtr.</strong> Crane
              Level.
            </p>
          </div>
        </div>
      </section>

      <section className="h-screen flex flex-col justify-center items-center p-8 bg-gray-50">
        <h2 className="w-full text-center text-2xl md:text-3xl lg:text-5xl font-bold mb-6 text-gray-800">
          Leading with Vision
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 h-9/10 w-9/10 max-w-6xl">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={mdImg}
              alt="Md"
              className="rounded-lg md:rounded-xl mt-20 lg:mt-0 w-2/3 object-cover md:h-full md:w-full lg:h-full lg:w-full transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Mr. V M Kamatar
            </h3>
            <h4 className="text-lg md:text-xl font-semibold mb-4">
              Managing Director
            </h4>
            <p className="text-xl text-center">
              With over 30+ years of extensive experience in Mechanical
              Engineering, Mr. V M Kamatar serves as Managing Director at
              Abhishek Engg Works (AEW). He has held key roles as a Design
              Manager in several prestigious Indian organizations, leading the
              design and manufacturing of cutting-edge equipment. Throughout his
              distinguished career, he has successfully delivered numerous
              high-profile projects, both domestically and internationally.{" "}
              <br />
              Under his expert leadership, AEW is well-positioned for continued
              growth and success driven by his commitment to Quality,
              Innovation, and Excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center mt-12 p-8 bg-gray-100">
        <div className="flex flex-col justify-center items-center flex-1 p-8">
          <h2 className="text-4xl rainbow-underline mb-4">Quality</h2>
          <p className="text-md md:text-lg lg:text-xl leading-7">
            At AEW,{" "}
            <strong>Quality is at the heart of everything we do.</strong> We go
            beyond just meeting standards—our commitment extends to meticulous
            testing, constant innovation, and a strong focus on customer
            satisfaction. Each product we deliver is not just a piece of
            equipment, but a testament to our dedication to durability,
            reliability, and peak performance. We believe quality is the
            foundation that drives our growth, ensuring that every solution we
            provide contributes to the continued success and advancement of our
            clients and industry.
          </p>
        </div>
        <hr className="text-4xl text-gray-700 rotate-90" />
        <div className="flex flex-col justify-center items-center flex-1 p-8">
          <h2 className="text-4xl rainbow-underline mb-4">Service</h2>
          <p className="text-md md:text-lg lg:text-xl leading-7">
            At AEW,{" "}
            <strong>
              {" "}
              Our commitment to Service is as strong as our dedication to
              Quality.
            </strong>{" "}
            We recognize that the value of our products extends well beyond
            their production. Our expert team is always on standby, ready to
            provide seamless installation, ongoing maintenance, and quick
            troubleshooting to ensure uninterrupted performance. We believe in
            forging long-term partnerships with our clients, offering tailored
            solutions that adapt to their evolving needs. With a focus on
            reliability, efficiency, and exceptional customer care, we are
            dedicated to providing unparalleled support at every step of our
            clients&apos; journey with us.
          </p>
        </div>
      </section>

      <section className="mt-12 p-8 bg-gray-50 min-h-screen flex flex-col justify-center">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-gray-800">
          Why Trust ABHISHEK ENGINEERING WORKS with Your Project Needs?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full">
          {[
            {
              title: "Uncompromising Quality",
              description:
                "We deliver top-tier craftsmanship in every project, ensuring precision and excellence in design and execution.",
              icon: <FaCheckCircle className="text-orange-500" size={32} />,
            },
            {
              title: "Innovative Solutions",
              description:
                "Our forward-thinking approach brings the latest in engineering technology to solve complex challenges.",
              icon: <FaLightbulb className="text-orange-500" size={32} />,
            },
            {
              title: "Tailored to Your Needs",
              description:
                "We provide customized, cost-effective solutions that cater to a wide range of industries.",
              icon: <FaCog className="text-orange-500" size={32} />,
            },
            {
              title: "On-Time, Every Time",
              description:
                "A 99.99% success rate in meeting quality standards and deadlines means you can trust us to deliver on time, every time.",
              icon: <FaClock className="text-orange-500" size={32} />,
            },
            {
              title: "End-to-End Service",
              description:
                "From concept to completion, we offer seamless support in design, fabrication, and maintenance.",
              icon: <FaTools className="text-orange-500" size={32} />,
            },
            {
              title: "Proactive Communication",
              description:
                "Our responsive team ensures open lines of communication and fast responses at every stage of your project.",
              icon: <FaComments className="text-orange-500" size={32} />,
            },
            {
              title: "Sustainable Practices",
              description:
                "We are committed to eco-friendly processes and materials, ensuring sustainability without compromising on quality.",
              icon: <FaLeaf className="text-orange-500" size={32} />,
            },
            {
              title: "Comprehensive Industry Knowledge",
              description:
                "We specialize in process equipment and steel fabrication for the sugar industry, bringing specialized insights to every project.",
              icon: <FaBookOpen className="text-orange-500" size={32} />,
            },
            {
              title: "Client Satisfaction Guarantee",
              description:
                "Your satisfaction is our top priority, with a proven track record of happy clients and repeat business.",
              icon: <FaThumbsUp className="text-orange-500" size={32} />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 max-h-[80vh]">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                {typeof item.icon === "string" ? (
                  <img src={item.icon} alt={item.title} className="w-10 h-10" />
                ) : (
                  item.icon
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2 transform group-hover:scale-110 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-gray-700 text-center text-sm md:text-base transform group-hover:scale-105 transition-transform duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex justify-center mt-12 p-8 bg-gray-50">
        <Link href="/#contactus">
          <Button className="bg-orange-400 w-52 h-12 text-4xl hover:bg-orange-500 hover:text-black">
            Contact us
          </Button>
        </Link>
      </section>
    </>
  );
};

export default About;
