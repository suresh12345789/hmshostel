import React, { useState } from "react";
import mobile from "../../Asstes/images/Home/mobile frime1.png";
import { GoArrowUp } from "react-icons/go";
import { BsArrowDown } from "react-icons/bs";

function Mainfeatures() {
  const data = [
    {
      id: 1,
      title: "Hostel",
      text: "Manage hostels by assigning floors and rooms, editing the menu daily, handling tenant management, and ensuring visibility of vacant beds with detailed reports.",
      icon1: <GoArrowUp />,
      icon2: <BsArrowDown />,
    },
    {
      id: 2,
      title: "Book Bed",
      text: "Room Allocation simplifies the booking and assignment of rooms to tenants, ensuring efficient space management. It tracks occupancy in real time, helping avoid overbooking and ensuring a smooth stay for guests.",
      icon1: <GoArrowUp />,
      icon2: <BsArrowDown />,
    },
    {
      id: 3,
      title: "Payments",
      text: "Financial Tracking helps manage rent collection, payments, and expenses efficiently. It provides real-time insights into hostel finances, ensuring accurate and timely financial reporting.",
      icon1: <GoArrowUp />,
      icon2: <BsArrowDown />,
    },
    {
      id: 4,
      title: "Complainets & Help",
      text: "Tenant Communication streamlines interactions between hostel management and tenants through instant notifications and messaging. It helps keep tenants informed about updates, maintenance, and important announcements.",
      icon1: <GoArrowUp />,
      icon2: <BsArrowDown />,
    },
    {
      id: 5,
      title: "Reports",
      text: "Reports & Analytics provide detailed insights into occupancy, revenue, and operations. It helps hostel management make data-driven decisions to optimize performance and efficiency.",
      icon1: <GoArrowUp />,
      icon2: <BsArrowDown />,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    setClickedIndex(index);
  };

  return (
    <div className="md:mx-[30px] lg:px-20 mx-5 pt-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-24 gap-5 lg:gap-10">
        <div className="relative">
          <img
            src={mobile}
            alt="Mobile view"
            className="rounded-2xl h-[400px] md:h-[500px] lg:h-[500px] w-full object-cover"
          />
          <div className="flex items-center gap-3 left-5 md:left-0 absolute top-7 md:top-10">
            <h1 className="text-3xl text-white md:text-[35px] font-semibold">
              Main features
            </h1>
          </div>
        </div>

        <div>
          <div className="space-y-5">
            {data.map((service, index) => (
              <div key={service.id} className="rounded-xl">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full h-full flex justify-between items-center border-t-[1px] border-white  md:p-5 p-3 text-white  focus:outline-none relative`}
                >
                  <span
                    className={`md:text-xl text-md font-semibold ${
                      clickedIndex === index ? "" : ""
                    }`}
                  >
                    {service.title}
                  </span>
                  <span className="transition-transform text-white font-bold duration-300">
                    {openIndex === index ? service.icon1 : service.icon2}
                  </span>
                </button>

                <div
                  className={`text-[13px] md:text-lg text-white text-md px-5 md:pt-2 pt-1 pb-1 rounded-b-xl transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "max-h-screen opacity-100 visible"
                      : "max-h-0 opacity-0 invisible"
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
