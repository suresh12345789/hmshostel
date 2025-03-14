import React, { useState } from "react";
import mobile from "../../Asstes/images/Home/houselpng.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { GoArrowRight } from 'react-icons/go';
import { GoArrowUp } from "react-icons/go";
import { BsArrowDown } from "react-icons/bs";

function Mainfeatures() {
  // const accordionItems = [
  //   {
  //     id: 1,
  //     title: "According to the manager",
  //     text: "A paragraph is a group of sentences that develop a single idea or topic. Paragraphs help organize writing, making it easier for readers to follow the author's ideas.",
  //   },
  //   {
  //     id: 2,
  //     title: "According to the manager",
  //     text: "A paragraph is a group of sentences that develop a single idea or topic. Paragraphs help organize writing, making it easier for readers to follow the author's ideas.",
  //   },
  //   {
  //     id: 3,
  //     title: "According to the manager",
  //     text: "A paragraph is a group of sentences that develop a single idea or topic. Paragraphs help organize writing, making it easier for readers to follow the author's ideas.",
  //   },
  // ];

  // const [activeIndex, setActiveIndex] = useState(null);

  // const handleToggle = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };


    const data = [
        {
            id: 1,
            title: "Tenants",
            text: "The near-infrared light spectrum is not visible to the human eye, and therefore any light that has a wavelength greater than around 750nm, you will not be able to see with your naked eye. Your body will still be feeling all the powers of the light wave lengths though!",
            icon1: <GoArrowUp />,
            icon2: <BsArrowDown />
        },

        {
          id: 1,
          title: "Contracts and bills",
          text: "The near-infrared light spectrum is not visible to the human eye, and therefore any light that has a wavelength greater than around 750nm, you will not be able to see with your naked eye. Your body will still be feeling all the powers of the light wave lengths though!",
          icon1: <GoArrowUp />,
          icon2: <BsArrowDown />
      },
        
        {
            id: 1,
            title: "Utilities and rates",
            text: "Both Red Light and NIR light are a part of the light spectrum of the sun. Red Light emits wavelengths of between 600-700 nm and near-Infrared Light (NIR) is invisible to the naked eye and has a wavelength of 700nm to 1000nm. NIR can penetrate the skin much deeper than red light, including all soft tissue, connective tissue, and bone. ",
            icon1: <GoArrowUp />,
            icon2: <BsArrowDown />
        },
        {
            id: 1,
            title: "Fixtures and inventary",
            text: "The near-infrared light spectrum is not visible to the human eye, and therefore any light that has a wavelength greater than around 750nm, you will not be able to see with your naked eye. Your body will still be feeling all the powers of the light wave lengths though!",
            icon1: <GoArrowUp />,
            icon2: <BsArrowDown />
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const [openTimes, setOpenTimes] = useState([]);

    const toggleAccordion = (index) => {
        const currentTime = new Date().getTime();

        if (openIndex === index) {

            const duration = currentTime - openTimes[index].openTime;
            console.log(`Accordion ${index + 1} was open for ${duration} ms`);
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
            setOpenTimes((prev) => {
                const newTimes = [...prev];
                newTimes[index] = { openTime: currentTime };
                return newTimes;
            });
        }
    };

  return (
    <div>
      <div className="mx-10 mt-10">
        <div className="bg-[#F2FDA7] h-28 rounded-2xl ">
          <div className="flex gap-10 items-center">
            <div className=" mt-7 ml-32">
              <button className=" text-white font-semibold text-md bg-gradient-to-r bg-[#19467D] py-4 px-16 rounded-full">
                Start whith a free plane
              </button>
            </div>
            <div>
              <h1 className="text-3xl font-semibold pt-5">
                Experience our services with a free plan!
              </h1>
            </div>
          </div>
        </div>


        <div className="flex gap-5 mt-10 ">
              <div className="bg-[#F2FDA7] mt-1 w-6 h-6 rounded-full shadow-md "></div>
              <h1 className="text-3xl  md:text-[40px] font-semibold">
                {" "}
                Main features
              </h1>
            </div>
        <div className="grid-cols-2 grid mt-5 gap-5">
          <div className="relative">
            <img
              src={mobile}
              alt=""
              className="rounded-2xl h-[550px] w-full object-cover"
            />
       

         
          </div>

          <div>
            <div className="bg-orange-100 w-full py-5 rounded-xl p-5">
              <h1 className="text-3xl font-semibold">Apartments</h1>

              <div className="flex gap-16">
                <div className="flex items-center gap-3 bg-white w-[180px] pl-5 py-1 mt-5 rounded-xl">
                  <h2 className="text-lg">
                    <FaArrowRightLong />
                  </h2>
                  <h1 className="text-lg">Public link</h1>
                </div>

                <div className="flex items-center gap-3 bg-white w-[180px] pl-5 py-1 mt-5 rounded-xl">
                  <h2 className="text-lg">
                    <FaArrowRightLong />
                  </h2>
                  <h1 className="text-lg">Maplocation</h1>
                </div>
              </div>

              <div className="flex gap-16">
                <div className="flex items-center gap-3 bg-white w-[220px] pl-5 py-1 mt-5 rounded-xl">
                  <h2 className="text-lg">
                    <FaArrowRightLong />
                  </h2>
                  <h1 className="text-lg">Tenant instructions</h1>
                </div>

                <div className="flex items-center gap-3 bg-white w-[140px] pl-5 py-1 mt-5 rounded-xl">
                  <h2 className="text-lg">
                    <FaArrowRightLong />
                  </h2>
                  <h1 className="text-lg">Tasks</h1>
                </div>
              </div>
            </div>

            {/* Accordion */}

<<<<<<< HEAD
            <div className="w-full h-auto bg-orange-400 flex justify-center mt-10">
=======
            {/* <div className="w-full h-auto bg-orange-400 flex justify-center mt-10">
>>>>>>> e11df2fac78cb62938117a2c037890726beac7f7
              <div className="w-full border rounded-lg overflow-hidden bg-white text-black">
                <div className="space-y-10">
                  {" "}
            
                  {accordionItems.map((item, index) => (
                    <div key={item.id}>
                      <div
                        className={`px-5 py-5 flex items-center justify-between cursor-pointer ${
                          activeIndex === index
                            ? "bg-green-500"
                            : "bg-orange-400"
                        }`}
                        onClick={() => handleToggle(index)}
                      >
                        <p className="flex-1">{item.title}</p>
                        <span>
                          {activeIndex === index ? (
                            <FaAngleUp />
                          ) : (
                            <FaAngleDown />
                          )}
                        </span>
                      </div>
                      {activeIndex === index && (
                        <div className="px-5 py-5">
                          <p>{item.text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div> */}


<div className="rounded-lg space-y-5">
                    {data.map((service, index) => (
                 
                        <div key={service.id} className="rounded-xl bg-[#f2ece2] overflow-hidden mt-5">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full space-x-6 rounded-t-xl flex justify-between p-5 bg-[#f2ece2] text-slate-800 focus:outline-none"
                            >
                                <span className="text-start text-xl font-semibold pr-10">{service.title}</span>
                                <span className="text-black transition-transform duration-300">
                                    {openIndex === index ? service.icon1 : service.icon2}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div
                                    className="text-gray-400 bg-[#f2ece2] text-sm px-5 pb-3 rounded-b-xl"
                                    style={{
                                        maxHeight: openIndex === index ? '200px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.3s ease-in-out',
                                    }}
                                >
                                    {service.text}
                                </div>
                            )}
                        </div>

                    ))}
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainfeatures;
