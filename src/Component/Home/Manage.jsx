import React from "react";
import { GrUserManager } from "react-icons/gr";
import { MdPayments } from "react-icons/md";
import { IoMdBed } from "react-icons/io";
import { RiCustomerServiceFill } from "react-icons/ri";

function Manage() {
  const data = [
    {
      id: 1,
      title: "	Easy Bed & Room Booking ",
      icon: <IoMdBed />,
      text: "Easy Bed & Room Booking simplifies reservations for  PGs and hotels with an intuitive interface. It enables fast room allotments and real-time availability tracking. Owners and tenants benefit from seamless management and booking.",
    },
    {
      id: 1,
      title: "Hostel & Staff Management",
      icon: <GrUserManager />,
      text: "Hostel & Staff Management simplifies staff tracking, automates routine tasks, and enhances efficiency while reducing errors. Ensure smooth operations and keep your team effortlessly organized."
    },
    {
      id: 1,
      title: "Payments & Security",
      icon: <MdPayments />,
      text: "Payments & Security simplifies rent collection with automated reminders and multiple payment options. It ensures data protection through robust security measures. Enhance trust and streamline transactions with a secure, easy-to-use system.",
    },
    {
      id: 1,
      title: "Customer Engagement & Experience",
      icon: <RiCustomerServiceFill />,
      text: "Customer Engagement & Experience enhances tenant satisfaction with seamless communication, instant updates, and feedback management. Provide 24/7 booking access and location-based services to build stronger relationships and improve retention.",
    },
  ];

  return (
    <div>
      

      <div className=" lg:mx-10 md:mx-8  mx-5 mt-8 md:mt-14">
        <div className="  mt-5 rounded-3xl           gap-3 ">
          <div className="flex items-center gap-3   left-5 md:left-10 ">
            <h1 className="text-3xl md:text-[40px] text-white font-semi">
              Benefits
            </h1>
          </div>

          <div className="md:grid-cols-2 grid-cols-1  grid  md:gap-5 space-y-5 md:space-y-0 lg:gap-10 mt-7 md:mt-14">
            {data.map((value) => (
              <div key={value.id}>
                <div className="  rounded-3xl      shadow-md    bg-white md:w-full lg:w-fit   md:p-10 lg:p-10            border-gray-500   p-5">
                  <div className="flex items-center">
                    <h1 className="   text-4xl  lg:text-5xl font-semibold text-orange-500">
                      {value.icon}
                    </h1>
                    <h1 className=" md:pl-5 pl-3   text-md md:text-2xl   font-semibold">
                      {value.title}
                    </h1>
                  </div>
                  <h1 className="text-[12px] md:text-lg lg:text-xl  md:pt-5 pt-3  leading-5 text-black ">
                    {value.text}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
