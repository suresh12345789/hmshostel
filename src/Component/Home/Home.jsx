import React from "react";
import banner from '../../Asstes/images/Home/hostelbnner.png'

function Home() {
  return (
    <div className=" mt-5 relative  lg:mx-10 md:mx-8 mx-5 overflow-hidden">
      <img src={banner} alt="" className="w-full h-[300px] md:h-full rounded-lg  object-cover" />
      <div className="absolute sm:top-[30px] md:top-[70px] top-[30px] sm:left-[20px]  left-20 md:left-[35px] w-full">
        <h1 className="md:text-4xl lg:text-5xl sm:text-2xl text-xs   leading-tight  w-1/2  font-semibold text-white text-transparent" >Efficiently  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 ">Mange Bookings, </span>  <br />  Payments, Tenants </h1>
        <h1 className=" text-xl md:text-3xl w-1/2  absolute  top-[120px] md:top-[160px] ">Hostel & Staff Management simplifies staff monitoring, attendance </h1>
      </div>

      <button className=" bg-[#19197080]  left-[50px] absolute top-[400px] border-2  py-3 px-12 rounded-full text-white font-semibold text-xl">
            Start with a free plane
          </button>
    </div>
  );
}

export default Home;
