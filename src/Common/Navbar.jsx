import React from "react";
import { useState } from "react";
import {MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useLocation } from "react-router-dom";

import logo from "../Asstes/images/HMSLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "text-white" : "");
  return (
    <header className="text-brown  bg-gray-100   w-full z-10  sticky top-0  px-5  ">
      <div className="flex items-center justify-between  md:py-4 py-2   mx-5 md:px-10 lg:px-10">
        <div className="">
          <a href="/">
            <img
              src={logo}
              alt="images"
              className=" md:w-[120px]  md:h-[70px] w-[75px] h-[65px] object-cover"
            />
          </a>
        </div>

        <nav className="items-center hidden lg:space-x-16   space-x-4 md:flex md:text-lg lg:text-lg font-semibold">
          <a
            href="/"
            className={`group relative w-max hover:text-primary hover:text-blue-700 ${isActive(
              "/HomePages"
            )} group`}
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600   group-hover:w-full"></span>
          </a>

          <a
            href="/AboutUsPages"
            className={`group relative w-max hover:text-blue-700 ${isActive(
              "/AboutUsPages"
            )} group`}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600   group-hover:w-full"></span>
          </a>

          <a
            href="/EventsPages"
            className={`group relative w-max hover:text-blue-700 ${isActive(
              "/EventsPages"
            )} group`}
          >
            Application
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600   group-hover:w-full"></span>
          </a>

          <a
            href="/Contact"
            className={`group relative w-max hover:text-blue-700 ${isActive(
              "/ContactPages"
            )} group`}
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600    group-hover:w-full"></span>
          </a>
        </nav>
        <div>
          <button className=" bg-gradient-to-r from-[#787BFF] via-[#D67DFF] to-[#F39A55]  border-2 border-white py-2 px-10 rounded-full text-white text-lg">
            Sign in
          </button>
        </div>

        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <IoMenu className="text-4xl" />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 text-black font-semibold text-xl transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className="absolute right-0 w-full h-full text-xl bg-white text-center p-5 transition-transform transform shadow-lg bg-darkGrey text-tan"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute text-tan focus:outline-none top-4 right-7"
          >
            <MdClose size={30} />
          </button>

          <nav className="mt-8 space-y-10 text-2xl flex flex-col items-center ">
            <a href="/" className={` ${isActive("/")}`}>
              Home
            </a>

            <a
              href="/AboutUsPages"
              className={`  ${isActive("/AboutUsPages")}`}
            >
              About
            </a>
            <a href="/EventsPages" className={` ${isActive("/EventsPages")}`}>
              Event
            </a>

            <a href="/BlogPages" className={` ${isActive("/BLOG")}`}>
              BLOG
            </a>
            <a href="/Contactpages" className={` ${isActive("/Contactpages")}`}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
