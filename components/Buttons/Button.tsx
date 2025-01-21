import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  label: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ label, link }) => {
  return (
    <Link href={link} passHref className='outline-none'>
      <div
        className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-black bg-white backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#f69b3f] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group outline-none focus:outline-none"
      >
        {label}
        <FaArrowRight className="w-8 h-8 justify-end group-hover:-rotate-2 group-hover:bg-white text-black ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 -rotate-45" />
      </div>
    </Link>
  );
};

export default Button;
