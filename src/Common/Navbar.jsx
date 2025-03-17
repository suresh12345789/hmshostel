import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logo from "../Asstes/images/Hmsllogo1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    const currentPath = location.pathname + location.hash;
    return currentPath === path ? "text-blue-700" : "";
  };
  const navbarHeight=80;

  return (
    <header className="text-brown bg-gray-100 w-full z-10 sticky top-0 px-5">
      <div className="flex items-center justify-between md:py-4 py-2 mx-5 md:px-10 lg:px-10">
        <div>
          <a href="#">
            <img
              src={logo}
              alt="images"
              className="md:w-[120px] md:h-[80px] w-[90px] h-[65px] object-cover"
            />
          </a>
        </div>

        <nav className="items-center hidden lg:space-x-16 space-x-4 md:flex text-lg font-semibold">
          <HashLink smooth to="#"
            className={`group  w-max hover:text-primary ${isActive(
              "/"
            )} group`}
          >
            Home
          </HashLink>

          <HashLink
            smooth
            to="#About"
            className={`group  w-max duration-700 hover:text-blue-700 ${isActive(
              "/#About"
            )} group`}
          >
            About
          </HashLink>

          <HashLink
            smooth
            to="#HowitsWorks"
            className={`group  w-max hover:text-blue-700 ${isActive(
              "/#HowitsWorks"
            )} group`}
          >
            How it works
          </HashLink>

          <HashLink
            smooth
            to="#Contact"
            className={`group w-max hover:text-blue-700 ${isActive(
              "/#Contact"
            )} group`}
          >
            Contact
          </HashLink>
        </nav>

        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <IoMenu className="text-4xl" />
        </button>
      </div>

    
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 text-black font-semibold text-xl transition-transform transform ${
          isMenuOpen ? "translate-x-0 duration-700" : "translate-x-full duration-700"
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

          <nav className="mt-8 space-y-10 text-xl flex flex-col items-center">
            <HashLink
              smooth
              to="#"
              className={`${isActive("/")}`}
              onClick={() => setIsMenuOpen(false)} 
            >
              Home
            </HashLink>

            <HashLink
              smooth
              to="#About"
              className={`${isActive("/#About")}`}
              onClick={() => setIsMenuOpen(false)} 
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="#HowitsWorks"
              className={`${isActive("/#HowitsWorks")}`}
              onClick={() => setIsMenuOpen(false)} 
            >
              How it works
            </HashLink>
            <HashLink
              smooth
              to="#Contact"
              className={`${isActive("/#Contact")}`}
              onClick={() => setIsMenuOpen(false)} 
            >
              Contact
            </HashLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
