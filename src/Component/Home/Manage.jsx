import React from "react";
import { MdBedroomParent } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
function Manage() {
  const data = [
    {
      id: 1,
      title: "	Admin Review Management ",
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
      <div className="text-center px-60 pt-10">
        <h1 className="text-5xl font-semibold text-gray-400 leading-snug">
          Manage bookings, room assignments, payments, user profiles, feedback,
          services, reports, and notifications efficiently.
        </h1>
      </div>

    

      <div className="mx-10 mt-10">
        <div className="flex gap-5">
          <div className="bg-[#F2FDA7] mt-1 w-6 h-6 rounded-full shadow-md "></div>
          <h1 className="text-3xl  md:text-[40px] font-semibold"> Benefits</h1>
        </div>

        <div className="  mt-5 rounded-3xl  bg-[#eaf5fc]   mx-5  p-12  gap-3 ">
  
          <div className="md:grid-cols-2 grid-cols-1 grid gap-10">
            {data.map((value) => (
              <div key={value.id}>
                <div className="  rounded-3xl  h-[200px]   shadow-md  bg-white md:w-full lg:w-fit  md:p-8 lg:p-10            border-gray-500   p-7">
                  <div className="flex items-center">
                    <h1 className="  text-5xl font-semibold text-yellow-200">
                      {value.icon}
                    </h1>
                    <h1 className="pl-5 text-2xl font-semibold">
                      {value.title}
                    </h1>
                  </div>
                  <h1 className="text-xl pt-5 text-black leading-tight">
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
