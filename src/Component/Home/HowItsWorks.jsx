
import React from "react";
import works from "../../Asstes/images/Home/Works..png";

const HowItsWorks = () => {
  const data = [
    {
      Number: "01",
      Question: "Admin app",
      Answer:
        "A Hostel Management System (HMS) Admin App streamlines hostel operations by managing student admissions, room allocation, payments, staff, and inventory. It handles facility bookings, maintenance requests, security through access control and visitor management, and automates billing. The app also enables communication via notifications and generates financial and occupancy reports. It enhances efficiency, security, and transparency, making hostel management seamless and well-organized.",
    },
    {
      Number: "02",
      Question: "User app",
      Answer:
        "A Hostel Management System (HMS) User App helps students manage their hostel stay efficiently. It allows them to view room details, pay fees, request maintenance, and book facilities. Users can receive important notifications, track meal plans, and access visitor logs. The app also enables complaint submissions, view hostel rules, and communicate with the administration. It ensures convenience, transparency, and a smooth hostel experience for students.",
    },
    {
      Number: "03",
      Question: "Workers App",
      Answer:
        "A Hostel Management System (HMS) Warden App helps wardens oversee hostel operations efficiently. It enables room allocation, maintenance tracking, visitor management, and security monitoring. Wardens can send notices, manage complaints, monitor hostel facilities, and coordinate with staff. The app also provides real-time updates and reports for better decision-making. It enhances security, communication, and overall hostel administration, ensuring a well-managed living environment for students.",
    },
  ];

  return (
    <div id="HowitsWorks" className="px-5 md:px-10 lg:px-24 pt-24">
      <div className="flex flex-col-reverse lg:flex-row gap-10 ">
    
        <div className="lg:w-1/2 mt-5">
          <h1 className="text-3xl text-white md:text-[40px] font-customFonts mb-5 md:mb-8">
            How It Works
          </h1>

          {data.map((item, index) => (
            <div
              key={index}
              className="mt-5 bg-white shadow-md p-5 md:p-7 rounded-3xl"
            >
              <div className="flex gap-5 items-start">
                <h1 className="bg-orange-400 text-customblack text-2xl rounded-md px-3 py-2 font-medium">
                  {item.Number}
                </h1>
                <h2 className="text-lg md:text-2xl font-semibold">
                  {item.Question}
                </h2>
              </div>
              <p className="mt-3 text-[12px] md:text-xl text-gray-950 font-normal">
                {item.Answer}
              </p>
            </div>
          ))}
        </div>

   
        <div className="lg:w-1/2 mt-5">
          <img
            src={works}
            alt="How it works"
            className="w-full h-full rounded-3xl "
          />
        </div>
      </div>
    </div>
  );
};

export default HowItsWorks;

