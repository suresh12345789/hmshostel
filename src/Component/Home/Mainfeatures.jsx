import React, { useState } from "react";
import mobile from "../../Asstes/images/Home/houselpng.png";

import { GoArrowUp } from "react-icons/go";
import { BsArrowDown } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

function Mainfeatures() {
  const data = [
    {
      id: 1,
      title: "Tenants",
      text: "The near-infrared light spectrum is not visible to the human eye, and therefore any light that has a wavelength greater than around 750nm, you will not be able to see with your naked eye. Your body will still be feeling all the powers of the light wavelengths though!",
      icon1: <GoArrowUp />,
      icon2: <BsArrowDown />,
    },
    {
      id: 2,
      title: "Contracts and bills",
      text: "The near-infrared light spectrum is not visible to the human eye, and therefore any light that has a wavelength greater than around 750nm, you will not be able to see with your naked eye. Your body will still be feeling all the powers of the light wavelengths though!",
      icon1: <GoArrowUp />,
      icon2: <BsArrowDown />,
    },
    {
      id: 3,
      title: "Utilities and rates",
      text: "Both Red Light and NIR light are a part of the light spectrum of the sun. Red Light emits wavelengths of between 600-700 nm and near-Infrared Light (NIR) is invisible to the naked eye and has a wavelength of 700nm to 1000nm.",
      icon1: <GoArrowUp />,
      icon2: <BsArrowDown />,
    },
    {
      id: 4,
      title: "Fixtures and inventory",
      text: "The near-infrared light spectrum is not visible to the human eye, and therefore any light that has a wavelength greater than around 750nm, you will not be able to see with your naked eye.",
      icon1: <GoArrowUp />,
      icon2: <BsArrowDown />,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-10 mt-10">
      {/* Header */}
      <div className="bg-[#F2FDA7] h-28 rounded-2xl flex items-center px-10">
        <button className="text-white font-semibold text-md bg-[#19467D] py-4 px-16 rounded-full">
          Start with a free plan
        </button>
        <h1 className="text-3xl font-semibold ml-10">
          Experience our services with a free plan!
        </h1>
      </div>

      {/* Main Features Section */}
      <div className="flex items-center gap-3 mt-10">
        <div className="bg-[#F2FDA7] w-6 h-6 rounded-full shadow-md"></div>
        <h1 className="text-3xl md:text-[40px] font-semibold">Main features</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        {/* Image Section */}
        <div className="relative">
          <img
            src={mobile}
            alt="Mobile view"
            className="rounded-2xl h-[550px] w-full object-cover"
          />
        </div>

        {/* Features & Accordion Section */}
        <div>
          <div className="bg-orange-100 w-full py-5 rounded-xl p-5">
            <h1 className="text-3xl font-semibold">Apartments</h1>

            <div className="grid grid-cols-2 gap-5 mt-5">
              <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-xl">
                <FaArrowRightLong />
                <h1 className="text-lg">Public link</h1>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-xl">
                <FaArrowRightLong />
                <h1 className="text-lg">Map location</h1>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-xl">
                <FaArrowRightLong />
                <h1 className="text-lg">Tenant instructions</h1>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-xl">
                <FaArrowRightLong />
                <h1 className="text-lg">Tasks</h1>
              </div>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="space-y-5 mt-10">
            {data.map((service, index) => (
              <div key={service.id} className="rounded-xl bg-[#f2ece2]">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-5 bg-[#f2ece2] text-slate-800 rounded-t-xl focus:outline-none"
                >
                  <span className="text-xl font-semibold">{service.title}</span>
                  <span className="transition-transform duration-300">
                    {openIndex === index ? service.icon1 : service.icon2}
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`bg-[#f2ece2] text-gray-600 text-sm px-5 pb-3 rounded-b-xl transition-all duration-300 ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  {service.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainfeatures;
