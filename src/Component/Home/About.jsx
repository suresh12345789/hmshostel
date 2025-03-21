import React from "react";
import aboutImage from "../../Asstes/images/Home/about1.png";

const About = () => {
  return (
    <>
      <div
        id="About"
        className="mx-5 md:mx-8 lg:mx-10 mt-10 lg:grid grid-cols-2 gap-10"
      >
        <div className=" p-5 md:p-8 lg:p-6 mt-5 rounded-3xl bg-secondary ">
          <div className=" ">
              <h1 className="text-3xl flex justify-center text-customblack items-center  md:text-[40px] font-semibold  lg:mb-10 md:mb-8 mb-5">
                About Us
              </h1>

      

<div className="md:text-xl lg:leading-10 text-customblack">
  <p>
  <span className="text-orange-400 font-bold">  The Hostel Management System (HMS) </span> is an advanced software solution designed to streamline and automate the management of <span className="text-blue-400 font-bold">hostels , PGs, and hotels.</span> It provides hostel owners with a centralized platform to manage bookings, payments, tenant records, and staff assignments efficiently. With real-time availability updates, users can easily view and book available rooms and beds, minimizing the chances of overbooking. The system also includes features like complaint and maintenance tracking, ensuring that tenant grievances are addressed promptly. Additionally, it offers an online payment gateway (to be implemented in the second phase) that supports multiple payment methods such as UPI, cards, and wallets for smooth transactions. HMS enhances customer engagement by sending automated notifications and personalized updates, improving tenant satisfaction.
  </p>
</div>

          </div>
        </div>

        <div className="mt-5">
          <img
            src={aboutImage}
            className=" rounded-3xl w-full md:h-full  object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
