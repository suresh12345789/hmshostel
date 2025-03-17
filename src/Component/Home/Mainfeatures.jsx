import React, { useState } from "react";

import mobile from "../../Asstes/images/Home/mobilehostel.png"
import { GoArrowUp } from "react-icons/go";
import { BsArrowDown } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

function Mainfeatures() {
  const data = [
    {
      id: 1,
      title: "Tenants",
      text: "The near-inflight spectrum is not visible to the human eye, and therefore any light that has a wavelength greater than around 750nm, you will not be able to see with your naked eye. Your body will still be feeling all the powers of the light wavelengths though!",
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
    <div className=" md:mx-10 mx-5 mt-10">
      <div className="bg-[#F2FDA7]  md:p-10 p-5 rounded-2xl flex  md:flex-row flex-col items-center px-10">
        <button className="text-white font-semibold flex justify-center text-center text-md bg-[#19467D]  py-2 lg:py-4  lg:px-16 px-10 rounded-full">
          Start with a free plan
        </button>
        <h1 className=" md:text-3xl text-xl mt-5 md:mt-0 font-semibold  md:ml-10 flex text-center justify-center">
          Experience our services with a free plan!
        </h1>
      </div>

     

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10   gap-5 lg:gap-10 ">
        <div className="relative">
          <img
            src={mobile}
            alt="Mobile view"
            className="rounded-2xl   h-[400px] md:h-[630px] lg:h-[600px] w-full object-cover"
          />
          <div className="flex items-center gap-3   left-5 md:left-10 absolute top-10">
            <div className="bg-[#F2FDA7] w-6 h-6 rounded-full shadow-md"></div>
            <h1 className="text-3xl text-[#34f8f8] md:text-[40px] font-semibold">
              Main features
            </h1>
          </div>
        </div>

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
                <h1 className=" text-lg">Map location</h1>
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

          <div className="space-y-5 mt-10">
            {data.map((service, index) => (
              <div key={service.id} className="rounded-xl bg-[#d7e4f2]">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full h-full  flex justify-between items-center p-5 bg-[#d7e4f2] text-slate-800 rounded-xl focus:outline-none"
                >
                  <span className="text-xl font-semibold">{service.title}</span>
                  <span className="transition-transform text-black font-bold duration-300">
                    {openIndex === index ? service.icon1 : service.icon2}
                  </span>
                </button>

                <div
                  className={`bg-[#d7e4f2] text-black text-sm px-5 pb-3 rounded-b-xl transition-all duration-300 ${
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
