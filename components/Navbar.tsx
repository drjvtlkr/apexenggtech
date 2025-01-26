"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import apexLogo from "@/images/apex.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 bg-white shadow-md text-black flex items-center justify-between p-5">
      <div className="flex items-center">
        <Image
          src={apexLogo}
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-2xl sm:text-5xl font-bold ml-3">
          Abhishek Engineering Works
        </span>
      </div>

      {/* hamburger menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* desktop Navbar */}
      <div className="hidden lg:flex lg:space-x-14 lg:mx-10">
        <Link href="/" passHref>
          <ul
            className={`relative group ${
              isActive("/") ? "text-orange-500" : "text-gray-500"
            }`}>
            <span
              className={`text-3xl font-semibold transition duration-300 ${
                isActive("/") ? "" : "group-hover:text-black"
              }`}>
              Home
            </span>
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 transform ${
                isActive("/")
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              } transition-transform duration-300 origin-left`}></span>
          </ul>
        </Link>

        <Link href="/about" passHref>
          <ul
            className={`relative group ${
              isActive("/about") ? "text-orange-500" : "text-gray-500"
            }`}>
            <span
              className={`text-3xl font-semibold transition duration-300 ${
                isActive("/about") ? "" : "group-hover:text-black"
              }`}>
              About Us
            </span>
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 transform ${
                isActive("/about")
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              } transition-transform duration-300 origin-left`}></span>
          </ul>
        </Link>

        <Link href="/products" passHref>
          <ul
            className={`relative group ${
              isActive("/products") ? "text-orange-500" : "text-gray-500"
            }`}>
            <span
              className={`text-3xl font-semibold transition duration-300 ${
                isActive("/products") ? "" : "group-hover:text-black"
              }`}>
              Our Products
            </span>
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 transform ${
                isActive("/products")
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              } transition-transform duration-300 origin-left`}></span>
          </ul>
        </Link>
      </div>

      {/* mobile dropdown */}
      <div
        className={`${
          menuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-500`}>
        <div className="flex flex-col space-y-5 p-5">
          <Link href="/" passHref>
            <ul
              className={`relative group ${
                isActive("/") ? "text-orange-500" : "text-gray-500"
              }`}>
              <span className="text-xl font-semibold group-hover:text-black transition duration-500">
                Home
              </span>
            </ul>
          </Link>
          <Link href="/about" passHref>
            <ul
              className={`relative group ${
                isActive("/about") ? "text-orange-500" : "text-gray-500"
              }`}>
              <span className="text-xl font-semibold group-hover:text-black transition duration-500">
                About Us
              </span>
            </ul>
          </Link>
          <Link href="/products" passHref>
            <ul
              className={`relative group ${
                isActive("/products") ? "text-orange-500" : "text-gray-500"
              }`}>
              <span className="text-xl font-semibold group-hover:text-black transition duration-500">
                Our Products
              </span>
            </ul>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
