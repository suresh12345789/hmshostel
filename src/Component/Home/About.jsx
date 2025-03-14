import React from "react";
import aboutImage from "../../Asstes/images/Home/about.png";

const About = () => {
  return (
    <>
      <div className="mx-5 md:mx-8 lg:mx-10 mt-10">
        <div className="">
          <div className="flex gap-5">
            <div className="bg-[#F2FDA7] w-6 h-6 mt-1 rounded-full shadow-md "></div>
            <div className="">
              <h1 className="text-2xl md:text-4xl lg:text-[40px] font-semibold">
                About Us
              </h1>
            </div>
          </div>
          <div className="bg-[#EAF5FC] p-5 md:p-8 lg:p-10 mt-5 rounded-3xl ">
           <div className="bg-white rounded-3xl shadow-2xl">
           <p className="md:text-[17px]   leading-7 mt-7 p-5 md:p-8 lg:p-10">
              We are a vibrant and welcoming hostel dedicated to providing a
              safe, clean, and comfortable environment for all our guests.
              Whether you're traveling, studying, or seeking a temporary place
              to stay, we strive to offer an experience that feels like home.
              Our hostel offers a variety of accommodation options, ranging from
              dormitories to private rooms, all equipped with essential
              amenities to ensure your comfort. We prioritize the well-being of
              our guests, making sure each stay is pleasant and enjoyable. The
              friendly and professional staff at our hostel are always available
              to assist with your needs, from offering local tips to organizing
              activities that will help you explore the area. Our goal is to
              create a community where guests from all over the world can
              connect, share experiences, and learn from each other. We believe
              in creating a space where everyone feels welcome, respected, and
              part of the family. Whether you're here for a short visit or an
              extended stay, we are committed to making your time with us as
              comfortable and memorable as possible.
            </p>
           </div>
          </div>
        </div>

        <div className="mt-10">
          <img src={aboutImage} className="w-full rounded-3xl md:h-[80vh] object-cover" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
