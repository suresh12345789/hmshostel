import React from "react";
import aboutImage from "../../Asstes/images/Home/about.png";

const About = () => {
  return (
    <>
      <div
        id="About"
        className="mx-5 md:mx-8 lg:mx-10 mt-10 lg:grid grid-cols-2 gap-10"
      >
        <div className=" p-5 md:p-8 lg:p-10 mt-5 rounded-3xl bg-[#f3e2e2] ">
          <div className=" ">
              <h1 className="text-3xl flex justify-center text-customblack items-center  md:text-[40px] font-semibold  lg:mb-10 md:mb-8 mb-5">
                About Us
              </h1>

            <div className=" md:text-xl leading-7 text-customblack ">
              <p>
              Welcome to our vibrant and welcoming hostel, where comfort, cleanliness, and safety come first. Whether you're traveling, studying, or just passing through, we provide a home-like atmosphere with a variety of accommodation options, from dorms to private rooms. Our friendly staff is here to make your stay memorable, offering local tips and organizing activities to help you explore. Join our global community, connect with fellow travelers, and enjoy an unforgettable experience!
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
