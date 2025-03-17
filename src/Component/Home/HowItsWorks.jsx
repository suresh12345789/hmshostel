import React from "react";
import works from "../../Asstes/images/Home/Works.png";

const HowItsWorks = () => {
  const data = [
    {
      Number: "01",
      Question: "Property public Link and contract offer",
      Answer:
        " Once a tenant expresses interest, the property’s public link is shared. This link provides potential tenants with comprehensive information about the apartment, including images, features, and detailed descriptions. If a tenant shows further interest, a preliminary contract offer is generated. This offer outlines the key terms and conditions of the lease, setting the groundwork before finalizing the formal agreement..",
    },
    {
      Number: "02",
      Question: "Contract And Billing",
      Answer:
        "The contract outlines the terms of each rental agreement, including start and end dates, payment schedules, and the condition of fixtures and inventory. Afterward, bills are generated on a monthly basis, allowing tenants to easily view charges, make payments, track fees, and monitor their payment history effortlessly.",
    },
    {
      Number: "03",
      Question: "Checkout process pr contract renewal",
      Answer:
        "The checkout process ensures a hassle-free tenant move-out by calculating final charges, performing property inspections, and processing refundable deposits. For contract renewals, the lease terms are updated, and the agreement is extended to continue without any disruption, providing a seamless transition for both the tenant and landlord.",
    },
  ];
  return (
    <>
      <div id="HowitsWorks" className="mx-5 md:mx-8 lg:mx-10 mt-5 ">
        <div className=" lg:flex gap-5">
          <div className="bg-customBlue p-5 md:p-8 rounded-3xl mt-5 ">
            <div className="flex gap-5">
              <div className="bg-[#F2FDA7] mt-1 w-6 h-6 rounded-full shadow-md "></div>
              <h1 className="text-3xl  md:text-[40px] font-customFonts mb-5 md:mb-8 lg:mb-10">
                How It Works
              </h1>
            </div>

            {data.map((item, index) => (
              <div
                key={index}
                className="mt-5 bg-white shadow-md p-5 md:p-7  md:w-full lg:w-[700px] rounded-3xl"
              >
                <div className="flex gap-5">
                  <div className="">
                    <h1 className="bg-customYellow  text-2xl rounded-md px-2 py-2 md:py-2  text-[#1D5861] font-medium">
                      {item.Number}
                    </h1>
                  </div>
                  <div className="">
                    <h2 className=" md:px-2 md:py-2 text-xl md:text-2xl font-semibold ">
                      {item.Question}
                    </h2>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="w-full  text-sm md:text-xl leading-7   text-gray-950  font-normal">
                    {item.Answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <img
              className="rounded-3xl md:h-[984px]  w-full"
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
