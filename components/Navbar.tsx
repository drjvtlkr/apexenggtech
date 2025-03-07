"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import abhiLogo from "@/images/apex.png";
import abhi from "@/images/AbhishEngg.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(1); // 1 for full size, 0 for half size
  const [isShrunk, setIsShrunk] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = Math.min(window.scrollY, 100);
      const progress = Math.max(1 - scrollY / 100, 0);
      setScrollProgress(progress);

      if (progress === 0) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full ">
        {/* Contact Bar */}
        <div className="hidden lg:flex justify-start gap-5 items-center w-full bg-gray-900 text-white px-10 py-2 text-sm">
          <div>
            📞{" "}
            <a href="tel:+919880954260" className="hover:text-orange-400 text-lg">
              +91 9880954260
            </a>
          </div>
          <strong>
            <span className="text-bold">|</span>
          </strong>

          <div>
            📧{" "}
            <a
              href="mailto:abhishengg@gmail.com "
              className="hover:text-orange-400 text-lg">
              abhishengg@gmail.com
            </a>
            <strong>
              <span className="mx-2 text-bold">|</span>
            </strong>
            <a
              href="mailto:abhishekengg.dwd@gmail.com"
              className="hover:text-orange-400 text-lg ">
              abhishekengg.dwd@gmail.com
            </a>
          </div>
        </div>
        <div className=" bg-transparent backdrop-blur-sm text-black flex items-center justify-between p-2 transition-all duration-300 shadow-md">
          <div className="flex items-center">
            {!isShrunk ? (
              <Image
                src={abhi}
                alt="Apex Logo"
                className="w-[100px] h-[40px] sm:w-[150px] sm:h-[60px] md:w-[200px] md:h-[80px] lg:w-[250px] lg:h-[100px] transition-transform duration-300 ease-in-out"
                style={{ transform: `scale(${scrollProgress})` }}
                width={250}
                height={100}
              />
            ) : (
              <Image
                src={abhiLogo}
                alt="Abhi Logo"
                className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] transition-opacity duration-500 ease-in-out"
                width={40}
                height={40}
              />
            )}
          </div>

          {/* Hamburger Menu */}
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

          {/* Desktop Navbar */}
          <div className="hidden lg:flex lg:space-x-14 lg:mx-10">
            <Link href="/" passHref>
              <ul
                className={`relative group ${
                  isActive("/") ? "text-orange-500" : "text-gray-400"
                }`}>
                <span
                  className={`text-3xl font-semibold transition duration-300 ${
                    isActive("/") ? "" : "group-hover:text-orange-500"
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
                  isActive("/about") ? "text-orange-500" : "text-gray-400"
                }`}>
                <span
                  className={`text-3xl font-semibold transition duration-300 ${
                    isActive("/about") ? "" : "group-hover:text-orange-500"
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
                  isActive("/products") ? "text-orange-500" : "text-gray-400"
                }`}>
                <span
                  className={`text-3xl font-semibold transition duration-300 ${
                    isActive("/products") ? "" : "group-hover:text-orange-500"
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

          {/* Mobile Dropdown */}
          <div
            className={`${
              menuOpen ? "max-h-screen" : "max-h-0"
            } overflow-hidden lg:hidden absolute top-full left-0 w-full bg-transparent shadow-md transition-all duration-500`}>
            <div className="flex flex-col space-y-5 p-5">
              <Link href="/" passHref>
                <ul
                  className={`relative group ${
                    isActive("/") ? "text-orange-500" : "text-blue-400"
                  }`}>
                  <span className="text-xl font-semibold transition duration-500">
                    Home
                  </span>
                </ul>
              </Link>
              <Link href="/about" passHref>
                <ul
                  className={`relative group ${
                    isActive("/about") ? "text-orange-500" : "text-blue-400"
                  }`}>
                  <span className="text-xl font-semibold transition duration-500">
                    About Us
                  </span>
                </ul>
              </Link>
              <Link href="/products" passHref>
                <ul
                  className={`relative group ${
                    isActive("/products") ? "text-orange-500" : "text-blue-400"
                  }`}>
                  <span className="text-xl font-semibold transition duration-500">
                    Our Products
                  </span>
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
