import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Fotter = () => {
  return (
    <div className="bg-[#19467D] text-white">
      <div className="mx-5 mt-10 p-5 md:p-10 md:flex md:justify-around flex-col md:flex-row">
        <ul className="text-center mb-6 md:mb-0">
          <li>
            <a href="#" className="text-[23px] md:text-2xl font-semibold">
              Hostel Management System
            </a>
          </li>
          <span className="grid place-content-center text-[13px]">
            MANAGE RENT EASY
          </span>
        </ul>

        <ul className="leading-10 font-light text-md text-center mb-6 md:mb-0">
          <li>
            <a href="#/">Features</a>
          </li>
          <li>
            <a href="#/">Pricing</a>
          </li>
          <li>
            <a href="#/">F&Q</a>
          </li>
          <li>
            <a href="#/">Contacts</a>
          </li>
        </ul>

        <ul className="leading-10 font-light text-center">
          <li className="flex justify-center items-center gap-2 mb-2">
            <button>
            <AiOutlineMail size={25} />
            </button>
            <a href="#/">hms@gmail.com</a>
          </li>

          <li className="flex justify-center items-center gap-2">
            <button>
              <FiPhoneCall size={25} />
            </button>
            <a href="#/">+370 640 27602</a>
          </li>
        </ul>
      </div>

      <div className="text-center bg-[#1c385a] py-3">
        <span className="text-xs md:text-sm">
          &#169; 2024 Hms. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Fotter;
