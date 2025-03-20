import React from "react";
import banner from "../../Asstes/images/Home/adminmana.png";
import mobile from "../../Asstes/images/Home/tenents.png";

function Home() {
  return (
    <div id="#">
      <div className=" mt-5 relative  lg:mx-10 md:mx-8 mx-5 overflow-hidden md:block hidden">
        <img
          src={banner}
          alt=""
          className="w-full h-[300px]  md:h-[400px]  lg:h-[500px] rounded-3xl  object-cover"
        />
        <div className="absolute sm:top-[30px] lg:top-[70px] md:top-[40px] top-[30px] sm:left-[20px]  left-20 md:left-[30px] w-full">
          <h1 className="md:text-3xl lg:text-4xl sm:text-xl text-lg w-1/2 font-semi    text-black ">
            Effortless{" "}
            <span className="text-orange-500">Hostel Management,</span> Seamless
            Operations, Anytime{" "}
          </h1>
          <h1 className=" text-xl md:text-2xl  lg:text-2xl w-1/2 font-semi absolute  top-[120px] md:top-[160px] ">
            Streamline Hostel Management on <br /> the Go, Anytime
          </h1>
        </div>

        <button className=" bg-white    md:left-[30px] lg:left-[30px] absolute  md:top-[300px] lg:top-[350px]   py-3  lg:px-12 md:px-8 rounded-3xl text-black font-semibold  text-md lg:text-xl">
          Start with a free plane
        </button>
      </div>

      <div className="mt-2  mx-5 block md:hidden relative">
        <img src={mobile} alt="" className="w-full object-cover rounded-3xl" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black rounded-3xl bg-opacity-50 flex flex-col items-center justify-center px-5">
          <h1 className="sm:text-4xl text-sm leading-5 font-semi text-white text-center">
            Effortless Hostel Management, Seamless Operations, Anytime
          </h1>
          <button className="bg-[#ca3b03cc] px-4 sm:px-10 sm:py-3 py-1 rounded-full text-white font-semi text-sm mt-2 sm:mt-5">
            Start with a Free Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
