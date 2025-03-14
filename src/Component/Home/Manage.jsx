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
<<<<<<< HEAD
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
=======
>>>>>>> e11df2fac78cb62938117a2c037890726beac7f7
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

<<<<<<< HEAD
      {/* <div className="bg-[#eaf5fc]  h-[500px] mx-10 rounded-lg mt-10 ">
        <div>
          {manger.map((manger) => (
            <div
              key={manger.id}
              className="hover:drop-shadow-3xl w-full rounded-lg"
            >
              <h1 className="text-red-500">{manger.text}</h1>
            </div>
          ))}
        </div>
      </div> */}

      <div className="  mt-10 rounded-lg  bg-[#eaf5fc]   mx-5 md:mx-20 p-12 lg:mx-10 gap-3 ">
        <div className="flex items-center gap-2 ">
          <h1 className="text-xl text-blue-500">
            <FaArrowAltCircleRight />
          </h1>
          <h1 className="text-4xl font-semibold">Benefits</h1>
        </div>
        <div className="md:grid-cols-2 grid-cols-1 grid gap-5">
          {data.map((value) => (
            <div key={value.id}>
              <div className=" mt-6 rounded-3xl  h-[200px]  bg-white border-gray-500   p-7">
                <div className="flex">
                  <h1 className="  text-3xl font-semibold text-orange-400">
                    {value.icon}
                  </h1>
                  <h1 className="pl-5 text-xl font-semibold">{value.title}</h1>
                </div>
                <h1 className="text-md pt-5 text-gray-400">{value.text}</h1>
              </div>
            </div>
          ))}
=======
    

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
>>>>>>> e11df2fac78cb62938117a2c037890726beac7f7
        </div>
      </div>
    </div>
  );
}

export default Manage;
