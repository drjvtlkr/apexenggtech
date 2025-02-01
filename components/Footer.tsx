"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import apexLogo from "@/images/AbhishEngg.png";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <>
      <footer className="bg-orange-200 flex justify-center rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={apexLogo}
                  className="w-40 h-auto m-2 md:m-4 lg:h-auto lg:w-72 "
                  alt="Apex Logo"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase ">
                  Links
                </h2>
                <ul className="text-xl text-gray-700 font-semibold">
                <li className="mb-4">
                    <Link
                      href="/"
                      className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="hover:underline"
                      href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="hover:underline">
                      Our Products
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white">
                  Product
                </h2>
                <ul className="text-gray-500 text-xl dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      href="https://github.com/drjvtlkr"
                      className="hover:underline ">
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline">
                      Dandiya
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white">
                  Social Media
                </h2>
                <ul className="flex space-x-6 text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center"
                      aria-label="Facebook">
                      <FaFacebookSquare />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center"
                      aria-label="Instagram">
                      <FaSquareXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center"
                      aria-label="YouTube">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
              ©{currentYear}{" "}
              <Link href="#" className="hover:underline">
                Abhishek Engineering Works™
              </Link>
              . All Rights Reserved.
            </span>
            <span>
              Made with ❤️, by{" "}
              <Link href="https://docyard.co.in" className="underline" target="_blank">
                Docyard HQ
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
