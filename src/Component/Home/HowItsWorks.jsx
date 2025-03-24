import React from "react";
import works from "../../Asstes/images/Home/Works.png";

const HowItsWorks = () => {
  const data = [
    {
      Number: "01",
      Question: "Admin app",
      Answer:
        "A Hostel Management System (HMS) Admin App streamlines hostel operations by managing student admissions, room allocation, payments, staff, and inventory. It handles facility bookings, maintenance requests, security through access control and visitor management, and automates billing. The app also enables communication via notifications and generates financial and occupancy reports. It enhances efficiency, security, and transparency, making hostel management seamless and well-organized.",
    },
    {
      Number: "02",
      Question: "User app",
      Answer:
        "A Hostel Management System (HMS) User App helps students manage their hostel stay efficiently. It allows them to view room details, pay fees, request maintenance, and book facilities. Users can receive important notifications, track meal plans, and access visitor logs. The app also enables complaint submissions, view hostel rules, and communicate with the administration. It ensures convenience, transparency, and a smooth hostel experience for students.",
    },
    {
      Number: "03",
      Question: "Workers App",
      Answer:
        "A Hostel Management System (HMS) Warden App helps wardens oversee hostel operations efficiently. It enables room allocation, maintenance tracking, visitor management, and security monitoring. Wardens can send notices, manage complaints, monitor hostel facilities, and coordinate with staff. The app also provides real-time updates and reports for better decision-making. It enhances security, communication, and overall hostel administration, ensuring a well-managed living environment for students.",
    },
  ];
  return (
    <>
      <div id="HowitsWorks" className="mx-5 md:mx-8 lg:mx-10 mt-10 ">
        <div className=" lg:flex gap-5">
          <div className="bg-primary lg:w-1/2  p-5 md:p-8 rounded-3xl mt-5 ">
            <div className="flex gap-5">
              <h1 className="text-3xl text-customblack  md:text-[40px] font-customFonts mb-5 md:mb-8">
                How It Works
              </h1>
            </div>

            {data.map((item, index) => (
              <div
                key={index}
                className="mt-5 bg-white shadow-md p-5 md:p-7    rounded-3xl"
              >
                <div className="flex gap-5">
                  <div className="">
                    <h1 className="bg-blue-100 text-customblack  text-2xl rounded-md px-2 py-2 md:py-2 font-medium">
                      {item.Number}
                    </h1>
                  </div>
                  <div className="">
                    <h2 className=" md:px-2 md:py-2 text-lg md:text-2xl font-semibold ">
                      {item.Question}
                    </h2>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="w-full  md:text-xl leading-7   text-gray-950  font-normal">
                    {item.Answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 lg:w-1/2">
            <img
              className="rounded-3xl h-full  w-full"
              src={works}
              alt="images"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItsWorks;
