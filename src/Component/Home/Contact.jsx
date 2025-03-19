import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import contact from "../../Asstes/images/Home/contact.png";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="mx-5 md:mx-8 lg:mx-10 mt-10  ">
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
                <a
                  href="tel:+919948333447"
                  className="text-lg md:text-xl text-white"
                >
                  +91 9948333447
                </a>
              </div>

              <div className="flex space-x-3 mt-5 md:mt-0 w-full">
                <button className="text-white">
                  <MdOutlineMail size={30} />
                </button>
                <a
                  href="mailto:shivakumar@cresolinfoserv.com"
                  className="text-lg text-start text-white md:text-xl"
                >
                  shivakumar@cresolinfoserv.com
                </a>
              </div>
            </div>

            <form className="md:mx-40">
              <div className="md:flex justify-between gap-5">
                <div className="w-full">
                  <label
                    htmlFor="fullName"
                    className="outline-none block text-md  font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="outline-none border-b-2 text-sm mt-1 p-3 w-full bg-transparent text-white font-semibold placeholder-gray-300"
                  />
                </div>
                <div className="w-full mt-5 md:mt-0">
                  <label htmlFor="email" className="block text-md font-medium">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your e-mail"
                    className="outline-none border-b-2 text-sm mt-1 p-3 w-full bg-transparent text-white font-semibold placeholder-gray-300"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-md font-medium">
                  Your message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message (optional)"
                  className="outline-none border-b-2 text-sm mt-1 p-3 w-full bg-transparent  font-semibold placeholder-gray-300"
                />
              </div>

              <div className="mt-5  flex gap-3">
                <input type="checkbox" className="w-5" />
                <p className="">
                  By submitting your request, you agree to our Privacy Policy
                </p>
              </div>

              <div className="mt-5 grid place-content-center">
                <button
                  type="submit"
                  className="bg-customRed text-white  w-[300px]  px-3 py-2 font-semibold"
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
