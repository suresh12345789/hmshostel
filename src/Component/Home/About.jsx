import React from "react";
import aboutImage from "../../Asstes/images/Home/about.png";

const About = () => {
  return (
    <>
      <div
        id="About"
        className="mx-5 md:mx-8 lg:mx-10 mt-10 lg:grid grid-cols-2 gap-10"
      >
        <div className=" p-5 md:p-8 lg:p-10 mt-5 rounded-3xl bg-secondary ">
          <div className=" ">
              <h1 className="text-3xl flex justify-center text-customblack items-center  md:text-[40px] font-semibold  lg:mb-10 md:mb-8 mb-5">
                About Us
              </h1>

            <div className=" md:text-xl leading-7 text-customblack ">
              <p>
             Welcome to our vibrant and welcoming hostel, where comfort, cleanliness, and safety come first. Whether you're traveling, studying, or just passing through, we provide a home-like atmosphere with a variety of accommodation options, from dorms to private rooms. Enjoy modern amenities such as free Wi-Fi, secure lockers, a fully equipped kitchen, and cozy common areas perfect for socializing. Our friendly staff is available 24/7, ready to offer local tips and organize activities, from city tours to cultural experiences. Located in a prime area, we provide easy access to major attractions, public transport, and vibrant nightlife. Start your day with a complimentary breakfast, relax in our outdoor spaces, or join exciting evening events. Connect with fellow travelers, make lifelong memories, and experience true hospitality!
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
