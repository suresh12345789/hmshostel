import React from "react";
import mobile from "../../Asstes/images/Home/mobileseeing.jpg";

function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 mt-3 mx-10 gap-5 ">
        <div className="bg-[#efd4d4] rounded-lg p-10">
          <h1 className="text-4xl  font-semibold leading-tight">
            Efficiently manage bookings, rooms, payments, users, feedback, and
            services.
          </h1>
          <h2 className="text-2xl pt-10">
            Manage bookings, rooms, payments, users, feedback, services, and
            reports.
          </h2>
          <button className=" bg-gradient-to-r from-[#787BFF] via-[#D67DFF] to-[#F39A55] px-10 py-3 mt-12 rounded-full">
            <h1 className="text-lg text-white font-semibold">
              Start with a free palne
            </h1>
          </button>
          <h1 className="text-md pt-10">
            Experience our Start with a free palne!
          </h1>
        </div>

        <div>
          <img
            src={mobile}
            alt=""
            className="w-full h-[500px] object-cover rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
