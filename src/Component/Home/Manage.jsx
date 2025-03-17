import React from "react";
import { MdBedroomParent } from "react-icons/md";

function Manage() {
  const data = [
    {
      id: 1,
      title: "	Easy Bed & Room Booking ",
      icon: <MdBedroomParent />,
      text: "Hostel admins can manage bookings, room allocations, payments, and user details. They also handle feedback, services, and generate reports for efficient management.",
    },
    {
      id: 1,
      title: "Admin Review Management",
      icon: <MdBedroomParent />,
      text: "Hostel admins can manage bookings, room allocations, payments, and user details. They also handle feedback, services, and generate reports for efficient management.",
    },
    {
      id: 1,
      title: "Admin Review Management",
      icon: <MdBedroomParent />,
      text: "Hostel admins can manage bookings, room allocations, payments, and user details. They also handle feedback, services, and generate reports for efficient management.",
    },
    {
      id: 1,
      title: "Admin Review Management",
      icon: <MdBedroomParent />,
      text: "Hostel admins can manage bookings, room allocations, payments, and user details. They also handle feedback, services, and generate reports for efficient management.",
    },
  ];

  return (
    <div>
      <div className="text-center  lg:px-60   px-10 sm:px-20  md:px-40 pt-10">
        <h1 className=" lg:text-5xl md:text-4xl text-xl   font-semibold text-gray-400 leading-snug">
          Manage bookings, room assignments, payments, user profiles, feedback,
          services, reports, and notifications efficiently.
        </h1>
      </div>

      <div className=" lg:mx-10 md:mx-8  mx-5 mt-10">
        <div className="  mt-5 rounded-3xl  bg-[#eaf5fc]   relative   p-5   lg::p-12 md:p-8   gap-3 ">
          <div className="flex items-center gap-3   left-5 md:left-10 absolute top-6">
            <div className="bg-[#F2FDA7] w-6 h-6 rounded-full shadow-md"></div>
            <h1 className="text-3xl md:text-[40px] font-semibold">Benefits</h1>
          </div>

          <div className="md:grid-cols-2 grid-cols-1 grid gap-5 mt-14">
            {data.map((value) => (
              <div key={value.id}>
                <div className="  rounded-3xl     shadow-md  bg-white md:w-full lg:w-fit   md:p-10 lg:p-10            border-gray-500   p-5">
                  <div className="flex items-center">
                    <h1 className="   text-4xl  lg:text-5xl font-semibold text-yellow-200">
                      {value.icon}
                    </h1>
                    <h1 className=" md:pl-5 pl-3   text-xl md:text-2xl   font-semibold">
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
