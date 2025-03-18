import React from "react";
import image from "../../Asstes/images/Home/contact.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="mx-5 md:mx-8 lg:mx-10 mt-10">
        <div className="lg:flex lg:gap-10 font-normal">
          <div className="mt-5 bg-customBlue lg:w-[700px] px-5 md:px-8 lg:px-10 py-5 md:py-8 lg:py-10 rounded-3xl">
            <div className="text-3xl mb-5 md:mb-8 lg:mb-10 md:text-[40px] font-customFonts">
              <h1>Contact Us</h1>
            </div>

            <div className="md:flex gap-5">
              <div className="flex items-center space-x-3 mb-3 md:mb-0">
                <button className="text-customRed">
                  <MdOutlineMail size={30} />
                </button>
                <a
                  href="mailto:shivakumar@cresolinfoserv.com"
                  className="text-lg md:text-xl"
                >
                  shivakumar@cresolinfoserv.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <button className="text-customRed">
                  <FaPhoneAlt size={30} />
                </button>
                <a href="tel:+919948333447" className="text-lg md:text-xl">
                  +91 9948333447
                </a>
              </div>
            </div>

            <div className="mt-10">
              <img
                src={image}
                alt="Contact Us"
                className="hover:scale-105 rounded-3xl h-[30vh] md:h-[50vh] w-full object-cover"
              />
            </div>
          </div>

          <form className="mt-5 bg-[#EAF5FC] w-full lg:w-[700px] px-5 md:px-8 lg:px-10 rounded-3xl py-8 md:py-10 lg:py-14">
            <div>
              <label
                htmlFor="fullName"
                className="block text-md text-gray-600 font-medium"
              >
                Full Name*
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter Your Full Name"
                className=" outline-none text-sm mt-1 p-3 w-full rounded-2xl border-2 border-[#417ABE] bg-customBlue font-semibold"
              />
            </div>
            <div className="mt-8">
              <label
                htmlFor="email"
                className="block text-md text-gray-600 font-medium"
              >
                E-mail*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your e-mail"
                className=" outline-none text-sm mt-1 p-3 w-full  rounded-2xl border-2 border-[#417ABE] bg-customBlue font-semibold"
              />
            </div>

            <div className="mt-8">
              <label
                htmlFor="message"
                className="block text-md text-gray-600 font-medium"
              >
                Your message
              </label>
              <input
                id="message"
                placeholder="Enter your message (optional)"
                className=" outline-none text-sm mt-1 px-2 py-5  w-full rounded-2xl border-2 border-[#417ABE] bg-customBlue font-semibold"
              />
            </div>

            <div className="mt-10">
              <p className="text-sm text-gray-400">
                By submitting your request you agree to our Privacy Policy
              </p>
            </div>
            <div className="mt-14">
              <button
                type="submit"
                className="bg-customRed text-white w-full text-center px-3 py-2 rounded-3xl font-semibold"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
