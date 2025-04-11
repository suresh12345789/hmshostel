import React from "react";
import aboutImage from "../../Asstes/images/Home/threefrimes.png";

const About = () => {
  return (
    <>
      <div id="About" className="mx-5 md:px-10 flex flex-col-reverse lg:flex-row lg:px-24 mt-10  md:gap-5  lg:gap-10"
      >
        <div className="lg:w-1/2 flex flex-col-reverse lg:flex-row   mt-5 rounded-3xl ">
          <div className="">
            <h1 className="text-3xl flex  text-white items-center  md:text-[40px] font-semibold  lg:mb-10 md:mb-8 mb-5">
              About Us
            </h1>

            <div className=" text-[12px] md:text-xl  leading-5 md:leading-8 text-white">
              <p>
                <span className="text-orange-400 ">
                  
                  The Hostel Management System (HMS)
                </span>
                is an advanced software solution designed to streamline and
                automate the management of
                <span className="text-orange-400 ">
                  hostels , PGs, and hotels.
                </span>
                It provides hostel owners with a centralized platform to manage
                bookings, payments, tenant records, and staff assignments
                efficiently. With real-time availability updates, users can
                easily view and book available rooms and beds, minimizing the
                chances of overbooking. The system also includes features like
                complaint and maintenance tracking, ensuring that tenant
                grievances are addressed promptly. Additionally, it offers an
                online payment gateway (to be implemented in the second phase)
                that supports multiple payment methods such as UPI, cards, and
                wallets for smooth transactions. HMS enhances customer
                engagement by sending automated notifications and personalized
                updates, improving tenant satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 lg:w-1/2">
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
