import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="mx-5 md:mx-8 lg:mx-10 mt-10">
        <div className="mt-5 bg-secondary rounded-3xl shadow-lg p-5">
          <div className="text-3xl flex justify-center p-10 md:text-[40px] font-customFonts text-white">
            <h1>Contact Us</h1>
          </div>

          <div className="md:flex justify-center items-center gap-5 p-5">
            <div className="flex items-center space-x-3">
              <button className="text-white">
                <FaPhoneAlt size={25} />
              </button>
              <a href="tel:+919948333447" className="text-lg md:text-xl text-white">
                +91 9948333447
              </a>
            </div>

            <div className="flex items-center space-x-3 mb-3 md:mb-0">
              <button className="text-white">
                <MdOutlineMail size={30} />
              </button>
              <a
                href="mailto:shivakumar@cresolinfoserv.com"
                className="text-lg text-white md:text-xl"
              >
                shivakumar@cresolinfoserv.com
              </a>
            </div>
          </div>

          <form className=" rounded-3xl mx-20">
            <div className="flex justify-between gap-5">
              <div className="w-full">
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
                  className="outline-none text-sm mt-1 p-3 w-full rounded-2xl border-2 bg-white text-black font-semibold focus:ring-2 focus:ring-customRed"
                />
              </div>
              <div className="w-full">
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
                  className="outline-none text-sm mt-1 p-3 w-full rounded-2xl border-2 bg-white text-black font-semibold focus:ring-2 focus:ring-customRed"
                />
              </div>
            </div>

            <div className="mt-8">
              <label
                htmlFor="message"
                className="block text-md text-gray-600 font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message (optional)"
                className="outline-none text-sm mt-1 px-2 py-5 w-full rounded-2xl border-2 bg-white text-black font-semibold focus:ring-2 focus:ring-customRed"
              />
            </div>

            <div className="mt-10">
              <p className="text-lg text-gray-600 ">
                By submitting your request, you agree to our Privacy Policy
              </p>
            </div>

            <div className="mt-14">
              <button
                type="submit"
                className="bg-customRed text-white w-full text-center px-3 py-2 rounded-3xl font-semibold hover:bg-customRedDark focus:ring-2 focus:ring-customRed"
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
