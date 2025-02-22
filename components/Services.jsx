import React from "react";

const servicesData = [
  {
    title: "Cutting-Edge Infrastructure",
    description:
      "AEW operates with advanced facilities, ensuring precision and excellence in every project from design to delivery.",
  },
  {
    title: "Material Quality",
    description:
      "We trust only the highest quality materials to ensure superior durability, strength, and consistent performance throughout the entire production process.",
  },
  {
    title: "Expert Team",
    description:
      "Our skilled professionals bring years of experience and deep industry knowledge, ensuring exceptional craftsmanship in every project.",
  },
  {
    title: "On-Time, Every Time",
    description:
      "We prioritize punctuality and reliability, consistently delivering projects on schedule without compromising on quality.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We provide customized engineering and fabrication solutions that meet the unique needs of each client, driving optimal results.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform hover:-translate-y-2 duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
