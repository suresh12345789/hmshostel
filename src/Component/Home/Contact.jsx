import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import contact from "../../Asstes/images/Home/contact.png";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="mx-5 md:mx-8 lg:mx-10 mt-10 shadow-lg shadow-gray-300 rounded-3xl  ">
        <div
          className="relative rounded-3xl shadow-sm p-5"
          style={{
            backgroundImage: `url(${contact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
          <div className="relative  text-white">
            <div className="text-3xl text-customwhite flex justify-center md:text-[40px] font-semibold">
              <h1>Contact Us</h1>
            </div>

            <div className="md:flex justify-between gap-5 md:mx-40 mt-10 mb-5">
              <div className="flex items-center space-x-3 w-full">
                <button className="text-white">
                  <FaPhoneAlt size={25} />
                </button>
                <a href="tel:+919948333447" className="text-[15px] :text-xl text-white">
                  +91 9948333447
                </a>
              </div>

              <div className="flex space-x-3 mt-5 md:mt-0 w-full">
                <button className="text-white">
                  <MdOutlineMail size={30} />
                </button>
                <a
                  href="mailto:shivakumar@cresolinfoserv.com"
                  className=" text-start text-white text-[15px] md:text-xl"
                >
                  shivakumar@cresolinfoserv.com
                </a>
              </div>
            </div>

            <form className="md:mx-40">
              <div className="md:flex justify-between gap-5">
                <div className="w-full">
                  <label htmlFor="fullName" className="outline-none  text-md  ">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="outline-none border-b-[0.5px] text-sm mt-1 w-full bg-transparent text-white  "
                  />
                </div>
                <div className="w-full mt-5 md:mt-0">
                  <label htmlFor="email" className=" text-md ">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="outline-none border-b-[0.5px] text-sm mt-1 w-full bg-transparent text-white "
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className=" text-md ">
                  Your message
                </label>
                <textarea
                  id="message"
                  className="outline-none border-b-[0.5px] text-sm mt-1 w-full bg-transparent  "
                />
              </div>

              <div className="mt-5 text-[12px] md:text-[14px] flex gap-3">
                <input type="checkbox" className="w-6 md:w-4" />
                <p className="">
                  By submitting your request, you agree to our Privacy Policy
                </p>
              </div>

              <div className="mt-5 grid place-content-center">
                <button
                  type="submit"
                  className="bg-customwhite  shadow-md transform hover:scale-105 transition duration-300  hover:text-white hover:bg-orange-600 text-customblack rounded-lg  w-[200px]  px-3 py-2 font-semibold"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
