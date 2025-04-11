import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logo from "../Asstes/images/Home/Hmslog.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (hash) => {
    return location.hash === hash ? "text-[#F97316]" : "";
  };

  const handleScroll = (hash) => {
    setIsMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const navbarHeight = document.querySelector("header").offsetHeight;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight - 20,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <header
      className={`shadow-lg w-full z-10 sticky top-0 transition-all duration-300 ${
        isScrolled ? "bg-[#001324]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between md:py-4 py-2 px-5 md:px-10">
        <div>
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="md:w-[120px] md:h-[70px] w-[90px] h-[65px] object-cover"
            />
          </a>
        </div>

        <nav className="items-center hidden lg:space-x-12 text-white space-x-4 md:flex text-lg ">
          {/* Home link now uses <a href="/"> */}
          <a href="/" className={`group w-max ${isActive("#")}`}>
            <h1 className="hover:border-b-2 border-orange-400">Home</h1>
          </a>

          <HashLink
            smooth
            to="#About"
            className={`group w-max duration-700 ${isActive("#About")}`}
            onClick={() => handleScroll("#About")}
          >
            <h1 className="hover:border-b-2 border-orange-400">About Us</h1>
          </HashLink>

          <HashLink
            smooth
            to="#HowitsWorks"
            className={`group w-max ${isActive("#HowitsWorks")}`}
            onClick={() => handleScroll("#HowitsWorks")}
          >
            <h1 className="hover:border-b-2 border-orange-400">How it works</h1>
          </HashLink>

          <HashLink
            smooth
            to="#Contact"
            className={`group w-max bg-customRed rounded-lg ${isActive(
              "#Contact"
            )}`}
            onClick={() => handleScroll("#Contact")}
          >
            <h1 className="hover:border-b-2 border-orange-400">Contact Us</h1>
          </HashLink>

          <HashLink
            smooth
            to="#Download"
            className={`group text-white rounded-3xl px-5 border-2 border-transparent bg-clip-padding hover:border-gradient-to-r border-orange-500 py-2 w-max duration-700 ${isActive(
              "#Download"
            )}`}
            onClick={() => handleScroll("#Download")}
          >
            Book a Demo
          </HashLink>
        </nav>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white"
        >
          <IoMenu className="text-4xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-opacity-50 z-50 text-blue-400 font-semibold text-xl transition-transform transform ${
          isMenuOpen
            ? "translate-x-0 duration-700"
            : "translate-x-full duration-700"
        } md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className="absolute right-0 w-full h-full bg-white text-center p-5 transition-transform transform shadow-lg bg-darkGrey text-tan"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute text-tan focus:outline-none top-4 right-7"
          >
            <MdClose size={30} />
          </button>

          <nav className="mt-8 space-y-10 text-lg flex flex-col items-center">
            {/* Home link now uses <a href="/"> */}
            <a
              href="/"
              className={`${isActive("#")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>

            <HashLink
              smooth
              to="#HowitsWorks"
              className={`${isActive("#HowitsWorks")}`}
              onClick={() => handleScroll("#HowitsWorks")}
            >
              How it works
            </HashLink>

            <HashLink
              smooth
              to="#About"
              className={`${isActive("#About")}`}
              onClick={() => handleScroll("#About")}
            >
              About Us
            </HashLink>

            <HashLink
              smooth
              to="#Contact"
              className={`${isActive("#Contact")}`}
              onClick={() => handleScroll("#Contact")}
            >
              Contact Us
            </HashLink>

            <HashLink
              smooth
              to="#Download"
              className={`group bg-orange-500 text-white rounded-3xl px-5 py-3 w-max duration-700 ${isActive(
                "#Download"
              )}`}
              onClick={() => handleScroll("#Download")}
            >
              Book a Demo
            </HashLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
