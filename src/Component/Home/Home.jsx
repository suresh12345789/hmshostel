import React from "react";
import banner from '../../Asstes/images/Home/hostelbanner.png'

function Home() {
  return (


    <div>
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
