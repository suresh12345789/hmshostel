import React from "react";
import playstore from "../../Asstes/images/Home/download.png";
import firstdownload from '../../Asstes/images/Home/firstdownload.png'

const Download = () => {
  return (
    <div id="Download" className="mt-10 mx-5 md:mx-8 lg:mx-10 md:flex gap-10 items-center justify-center  ">
      <div className="md:w-1/2">
        <img src={firstdownload} alt="" className="" />
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 space-y-5 bg-customBlue rounded-3xl p-5 md:p-10 ">
        <h1 className="text-2xl md:text-[40px] font-semibold text-center text-[#2d3748]">
          Get the Hms app
        </h1>
        <h1 className="text-lgmd:text-xl font-semibold text-center text-gray-600 ">Download app from</h1>

        <div className="flex justify-center items-center gap-5">
          <div className="transform hover:scale-105">
            <img src={playstore} alt="" className="w-[180px] object-cover cursor-pointer" />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Download;
