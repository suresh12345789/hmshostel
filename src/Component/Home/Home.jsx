import React from "react";
import banner from '../../Asstes/images/Home/hmshostel banner.png'

function Home() {
  return (
    <div className=" mt-5 relative  lg:mx-10 md:mx-8 mx-5 overflow-hidden">
      <img src={banner} alt="" className="w-full h-[300px] md:h-[570px] rounded-lg  object-cover" />
      <div className="absolute sm:top-[30px] md:top-[70px] top-[30px] sm:left-[20px]  left-20 md:left-[35px] w-full">
        <h1 className="md:text-4xl lg:text-5xl sm:text-2xl text-xs   leading-tight  w-1/2  font-bold text-white text-transparent" >Efficiently Mange Bookings, <br />  Payments, Tenants, </h1>
        <h1 className=" text-xl md:text-3xl w-1/2  absolute  top-[120px] md:top-[200px] ">Hostel & Staff Management simplifies staff monitoring, attendance </h1>
      </div>

      <button className=" bg-[#19197080]  left-[50px] absolute top-[450px] border-2  py-3 px-12 rounded-full text-white font-semibold text-xl">
            Start with a free plane
          </button>
    </div>
  );
}

export default Home;
