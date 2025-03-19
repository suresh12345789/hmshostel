import React from "react";
import aboutImage from "../../Asstes/images/Home/about.png";

const About = () => {
  return (
    <>
      <div
        id="About"
        className="mx-5 md:mx-8 lg:mx-10 mt-10 lg:grid grid-cols-2 gap-10"
      >
        <div className="bg-secondary  p-5 md:p-8 lg:p-10 mt-5 rounded-3xl ">
          <div className="">
              <h1 className="text-3xl flex justify-center items-center  md:text-[40px] font-semibold  lg:mb-10 md:mb-8 mb-5">
                About Us
              </h1>

            <div className=" md:text-xl leading-7 text-white">
              <p>
                We are a vibrant and welcoming hostel dedicated to providing a
                safe, clean, and comfortable environment for all our guests.
                Whether you're traveling, studying, or seeking a temporary place
                to stay, we strive to offer an experience that feels like home.
                Our hostel offers a variety of accommodation options, ranging
                from dormitories to private rooms, all equipped with essential
                amenities to ensure your comfort. We prioritize the well-being
                of our guests, making sure each stay is pleasant and enjoyable.
                The friendly and professional staff at our hostel are always
                available to assist with your needs, from offering local tips to
                organizing activities that will help you explore the area. Our
                goal is to create a community where guests from all over the
                world can connect, share experiences, and learn from each other.
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
