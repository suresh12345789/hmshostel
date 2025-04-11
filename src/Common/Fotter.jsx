import React, {useState, useEffect} from "react";
import { MdEmail } from "react-icons/md";
import logo from "../Asstes/images/Home/Hmslog.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";





const Fotter = () => {
  const [year, setYear] = useState(new Date().getFullYear()); 

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-white ">
      <div className=" mt-10 p-5 bg-[#02162a]  md:p-10 grid  md:grid-cols-2 grid-cols-1  lg:grid-cols-3  rounded-xl   ">
        <ul className=" mb-6 md:mb-0  ">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="w-[150px]  h-[150px]   object-cover"
            />
          </a>
          <li className="mt-5">
            <a href="#home" className="text-lg md:text-2xl     ">
              Hostel Management System
            </a>
          </li>

          <li className="pt-3">
            <a href="https://maps.app.goo.gl/QCyNbRabUNhSDA5Q9" target="_blank">
              <div className="flex  gap-2 hover:text-orange-600">
                <h1 className="text-2xl">
                  <FaLocationDot />
                </h1>
                <h1 className=" text-[14px] md:text-lg ">
                  Office Address:Cresol Infoserv Pvt. Ltd, Flat no. 303 Fortune
                  Chambers, Silicon Valley, Image Gardens Road, Madhapur,
                  Hyderabad-500081.
                </h1>
              </div>
            </a>
          </li>
        </ul>

        <ul className=" leading-10  text-md  mb-6 md:mb-0    md:pl-36   md:text-start">
          <li>
            <a href="/" className="hover:border-b-2 hover:border-orange-500">
              Home
            </a>
          </li>

          <li>
            <a
              href="#HowitsWorks"
              className="hover:border-b-2 hover:border-orange-500"
            >
              How it Works
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="hover:border-b-2 hover:border-orange-500"
            >
              Abouts Us
            </a>
          </li>
          <li>
            <a
              href="#Download"
              className="hover:border-b-2 hover:border-orange-500"
            >
              Download
            </a>
          </li>

          <li>
            <a
              href="#Contact"
              className="hover:border-b-2 hover:border-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <ul className="leading-10">
          <li className="flex  items-center gap-2 mb-2 hover:text-orange-600 md:text-lg text-md">
            <button className="">
            
              <MdEmail size={25}  />
            </button>
            <a href="mailto:shivakumar@cresolinfoserv.com">
              shivakumar@cresolinfoserv.com
            </a>
          </li>

          <li className="flex  gap-2 hover:text-orange-600 ">
            <button className="">
           
              <FaPhoneVolume  size={25}  />
            </button>
            <a href="tel:+919948333447">+91 9948333447</a>
          </li>

          <div className="mt-5">
            <h1 className="text-xl">Follow Us:</h1>

            <div className="flex text-3xl pt-3 gap-3 ">
              <li className=" hover:text-orange-600">
                <a href="https://www.instagram.com/cresol_infoserv/?igshid=MzRlODBiNWFlZA%3D%3D">
                  <FaInstagramSquare />{" "}
                </a>
              </li>
              <li className="hover:text-orange-600"> <a href="https://www.linkedin.com/company/cresol-infoserv-pvt-ltd/"><FaLinkedin /> </a> </li>

              <h1 className="hover:text-orange-600"> <a href="https://www.facebook.com/cresolinfoservpvtltd/"><FaFacebook /> </a> </h1>

            </div>

            <div></div>
          </div>
        </ul>
      </div>

      <div className="text-center bg-[#001324] text-orange-500 py-4">
        <span className="">&#169; {year} Hms. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Fotter;
