import React from "react";
import banner from "../../Asstes/images/Home/adminmana.png";
import mobile from "../../Asstes/images/Home/tenents.png";

function Home() {
  return (
    <div id="#">
      {/* Desktop Version */}
      <div className="mt-5 relative lg:mx-10 md:mx-8 mx-5 overflow-hidden md:block hidden">
        <img
          src={banner}
          alt="Hostel Management Banner"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl object-cover"
        />
        <div className="absolute sm:top-[30px] lg:top-[50px] md:top-[40px] top-[30px] sm:left-[20px] left-20 md:left-[30px] w-full">
          <h1 className="md:text-2xl lg:text-4xl font-semibold text-blue-700">
            INTRODUCING
          </h1>
          <h1 className="md:text-xl lg:text-4xl sm:text-xl text-lg font-semibold text-gray-900">
            Hostel Management Software
          </h1>
          <h1 className="md:text-xl lg:text-4xl sm:text-xl text-lg w-1/2 font-semibold md:mt-3 lg:mt-10 text-black">
            Effortless{" "}
            <span className="text-orange-500 mx-2">Hostel Management</span>
          </h1>
          <h1 className="md:text-xl lg:text-4xl md:mx-28 lg:mx-60 font-semibold text-black">
            &
          </h1>
          <h1 className="md:text-xl lg:text-4xl font-semibold text-black">
            Seamless <span className="text-orange-500">Operations</span>
          </h1>

          <h1 className="text-xl md:text-xl lg:text-2xl font-semibold absolute top-[120px] md:top-[180px] lg:top-[280px]">
            Manage Your Hostels
            <h1>Anytime, Anywhere</h1>
          </h1>
        </div>

        <a
          href="#Contact" 
          className="bg-orange-500 text-white md:left-[30px] lg:left-[30px] absolute md:top-[300px] lg:top-[430px] py-3 lg:px-12 md:px-8 rounded-3xl font-semibold text-md lg:text-xl"
        >
          Start with a Free Trial Today!
        </a>
      </div>

      {/* Mobile Version */}
      <div className="mt-2 mx-5 block md:hidden relative">
        <img
          src={mobile}
          alt="Mobile View"
          className="w-full object-cover rounded-3xl"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black rounded-3xl bg-opacity-50 flex flex-col items-center justify-center px-5">
          <h1 className="sm:text-2xl text-sm leading-5 font-semibold text-white text-center">
            Effortless Hostel Management & Seamless Operations.
          </h1>
          <a href="#Contact" className="bg-orange-500 px-4 py-2 sm:px-10 sm:py-3 rounded-full text-white font-semibold text-sm mt-3 sm:mt-5">
            Start with a Free Trial Today!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
