import React from "react";
import works from "../../Asstes/images/Home/Works.png";

const HowItsWorks = () => {
  const data = [
    {
      Number: "01",
      Question: "Property public Link and contract offer",
      Answer:
        " Once a tenant expresses interest, the property’s public link is shared. This link provides potential tenants with comprehensive information about the apartment, including images, features, and detailed descriptions. If a tenant shows further interest, a preliminary contract offer is generated.",
    },
    {
      Number: "02",
      Question: "Contract And Billing",
      Answer:
        "The contract outlines the terms of each rental agreement, including start and end dates, payment schedules, and the condition of fixtures and inventory. Afterward, bills are generated on a monthly basis, allowing tenants to easily view charges, make payments, track fees, and monitor their payment history effortlessly.",
    },
    {
      Number: "03",
      Question: "Checkout process contract renewal",
      Answer:
        "The checkout process ensures a hassle-free tenant move-out by calculating final charges, performing property inspections, and processing refundable deposits. For contract renewals, the lease terms are updated, and the agreement is extended to continue without any disruption, providing a seamless transition for both the tenant and landlord.",
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
