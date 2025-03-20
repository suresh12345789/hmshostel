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
      text: "Hostel & Staff Management simplifies staff tracking, attendance, and payroll. Automate routine tasks to improve efficiency and reduce errors. Ensure smooth operations and keep your team organized effortlessly.",
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
      <div className="text-center mx-5  md:mx-10  md:pt-10 rounded-3xl bg-secondary p-5  md:p-10 mt-10">
        <h1 className=" lg:text-4xl md:text-3xl text-xl font-semibold leading-7">
          Manage bookings, room assignments, payments, user profiles, feedback,
          <span> services, reports, and notifications efficiently.</span>
        </h1>
      </div>

      <div className=" lg:mx-10 md:mx-8  mx-5 mt-10">
        <div className="  mt-5 rounded-3xl  bg-primary   relative   p-5   lg::p-10 md:p-8   gap-3 ">
          <div className="flex items-center gap-3   left-5 md:left-10 absolute top-6">
            <h1 className="text-3xl md:text-[40px] text-customblack font-semi">
              Benefits
            </h1>
          </div>

          <div className="md:grid-cols-2 grid-cols-1  grid gap-5 mt-14">
            {data.map((value) => (
              <div key={value.id}>
                <div className="  rounded-3xl      shadow-md    bg-white md:w-full lg:w-fit   md:p-10 lg:p-10            border-gray-500   p-5">
                  <div className="flex items-center">
                    <h1 className="   text-4xl  lg:text-5xl font-semibold text-[#9FFCF2]">
                      {value.icon}
                    </h1>
                    <h1 className=" md:pl-5 pl-3   text-lg md:text-2xl   font-semibold">
                      {value.title}
                    </h1>
                  </div>
                  <h1 className="text-sm md:text-md lg:text-xl  md:pt-5 pt-3  leading-6 text-black ">
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
