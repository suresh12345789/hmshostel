import React from "react";
import { FaBookDead } from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
function Manage() {
  const data = [
    {
      id: 1,
      title: "	Admin Review Management ",
      icon: <MdBedroomParent />,
      text:"Hostel admins can manage bookings, room allocations, payments, and user details. They also handle feedback, services, and generate reports for efficient management."
    },
    {
      id: 1,
      title: "Admin Review Management",
      icon: <MdBedroomParent />,
      text:"Hostel admins can manage bookings, room allocations, payments, and user details. They also handle feedback, services, and generate reports for efficient management."

    },
    {
      id: 1,
      title: "Admin Review Management",
      icon: <MdBedroomParent />,
      text:"Hostel admins can manage bookings, room allocations, payments, and user details. They also handle feedback, services, and generate reports for efficient management."

    },
    {
      id: 1,
      title: "Admin Review Management",
      icon: <MdBedroomParent />,
      text:"Hostel admins can manage bookings, room allocations, payments, and user details. They also handle feedback, services, and generate reports for efficient management."

    },
    {
      id: 1,
      title: "Admin Review Management",
      icon: <MdBedroomParent />,
      text:"Hostel admins can manage bookings, room allocations, payments, and user details. They also handle feedback, services, and generate reports for efficient management."

    },
    {
      id: 1,
      title: "Admin Review Management",
      icon: <MdBedroomParent />,
      text:"Hostel admins can manage bookings, room allocations, payments, and user details. They also handle feedback, services, and generate reports for efficient management."

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
         <h1 className="text-xl text-blue-500"><FaArrowAltCircleRight /></h1>
            <h1 className="text-4xl font-semibold">Benefits</h1>
        </div>
        <div className="md:grid-cols-2 grid-cols-1 grid gap-5">
            
    
        {data.map((value) => (
          <div key={value.id}>
            <div className=" mt-6 rounded-3xl  h-[200px]  bg-white border-gray-500   p-7">
                <div className="flex">
                <h1 className="  text-3xl font-semibold text-orange-400">{value.icon}</h1>
                <h1 className="pl-5 text-xl font-semibold">{value.title}</h1>
                </div>
                <h1 className="text-md pt-5 text-gray-400">{value.text}</h1>

            </div>
            
          </div>
          
        ))}
            </div>
      </div>
    </div>
  );
}

export default Manage;
