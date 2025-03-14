import React from "react";
import mobile from "../../Asstes/images/Home/mobileseeing.jpg";
import banner from '../../Asstes/images/Home/hostelbanner.png'

function Home() {
  return (


    <div>
    {/* <div>
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
    </div> */}


    <div>
    <div className=" mt-5 mx-10 relative">
      <img src={banner} alt="" className="w-full    rounded-s-lg  object-cover" />
      <div className="absolute top-[70px] left-[50px]">
        <h1 className="text-5xl   leading-tight  w-1/2 font-bold bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500 bg-clip-text text-transparent" >Efficiently Mange Bookings, <br /> Payments, Tenants, </h1>
      </div>
    </div>

    <div>

    </div>
    </div>



    </div>
  );
}

export default Home;
