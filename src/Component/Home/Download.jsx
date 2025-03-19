import React from "react";
import firstdownload from "../../Asstes/images/Home/firstdownload.png";

const Download = () => {
  return (
    <div
      id="Download"
      className="bg-primary mt-10 mx-5 md:mx-8 lg:mx-10 p-2 md:p-10 md:flex gap-10 items-center justify-center rounded-3xl shadow-xl"
    >
      <div className="flex justify-center items-center">
        <img
          src={firstdownload}
          alt="First Download"
          className="w-full  rounded-lg  transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="font-semibold  mt-10 md:mt-0 space-y-5 p-5 md:p-10 text-customblack">
        <h1 className="text-2xl md:text-[40px] font-bold text-center tracking-wide">
          Book Your Demo Now!
        </h1>
        <p className="text-lg text-center ">
          Fill in the form to book a demo and get started with our app.
        </p>

        <form className="mt-6 space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-md font-medium ">
              Name
            </label>
            <input
              id="Name"
              type="text"
              placeholder="Enter Your Full Name"
              className="outline-none border-b-2 border-black text-customblack text-sm mt-1 p-3 w-full bg-transparent  placeholder-black-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-medium">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your e-mail"
              className="outline-none border-b-2 border-black text-customblack text-sm mt-1 p-3 w-full bg-transparent  placeholder-black-300"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-md font-medium ">
              Phone Number
            </label>
            <input
              id="phone"
              type="Number"
              placeholder="Phone Number"
              className="outline-none border-b-2 border-black text-customblack text-sm mt-1 p-3 w-full bg-transparent placeholder-black-300"
            />
          </div>

          <div className=" grid place-content-center">
            <button
              type="submit"
              className="bg-indigo-200 mt-5  text-customblack w-full md:w-[300px] px-5 py-3 font-semi rounded-lg shadow-md transform hover:scale-105 transition duration-300"
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
