import React from "react";
import firstdownload from "../../Asstes/images/Home/contact.png.png";

const Download = () => {
  return (
    <div
      id="Download"
      className=" mt-10 mx-5 md:mx-8 lg:mx-10 p-2 md:p-10 md:flex gap-10 items-center justify-center rounded-3xl shadow-sm"
    >
      <div className="flex justify-center items-center">
        <img
          src={firstdownload}
          alt="First Download"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="font-semibold  mt-10 md:mt-0 space-y-5 p-5 md:p-10 text-white">
        <h1 className="text-2xl md:text-[40px] font-bold text-center tracking-wide">
          Book Your Demo Now!
        </h1>
        <p className="text-lg text-center ">
          Fill in the form to book a demo and get started with our app.
        </p>

        <form className="mt-6 space-y-5">
          <div>
            <label className=" text-md ">Name</label>
            <input
              id="Name"
              type="text"
              className="outline-none border-b-[0.5px] border-white text-customblack text-sm mt-1 w-full bg-transparent"
            />
          </div>

          <div>
            <label className=" text-md ">E-mail</label>
            <input
              id="email"
              type="email"
              className="outline-none border-b-[0.5px] border-white text-customblack text-sm mt-1 w-full bg-transparent"
            />
          </div>

          <div>
            <label className=" text-md ">Phone Number</label>
            <input
              id="phone"
              type="Number"
              className="outline-none border-b-[0.5px] border-white text-customblack text-sm mt-1 p-3 w-full bg-transparent"
            />
          </div>

          <div className=" grid place-content-center">
            <button
              type="submit"
              className="bg-customwhite mt-5 hover:bg-orange-400 hover:text-white  text-white w-full md:w-[300px] px-5 py-3 font-semi rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Download;
