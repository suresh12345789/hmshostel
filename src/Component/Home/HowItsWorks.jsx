import React from "react";

const HowItsWorks = () => {
  const data = [
    {
      Number: "01",
      Question: "  Property public Link and contract offer",
      Answer:
        " After tenant inquiry, the property public link is sent, which provides potential tenants with comprehensive apartment information, including images and details. When a tenant shows interest, a preliminary contract offer is created, outlining essential terms before finalizing the agreement.",
    },
    {
      Number: "02",
      Question: "Contract And Billing",
      Answer:
        " Contract details the terms  of each rental agreements,including start and end dates,payment schedules,fixtures and inventoary condtions Afterwards,bill are generated monthly,allowing teneants to view charges,pay,feesand track their payment history effortlessy",
    },
    {
      Number: "03",
      Question: "Checkout process pr contract renewal",
      Answer:
        "The checkout process records final fees, inspections, and any refundable deposit for a smooth tenant exit. For lease extensions, a contract renewal updates terms and reactivates the agreement without interrupting the rental cycle.",
    },
  ];
  return (
    <>
      <div className="mx-3 md:mx-8 lg:mx-10 mt-5 ">
        <div className="flex gap-5">
            <div className="bg-[#F2FDA7] mt-1 w-7 h-7 rounded-full shadow-md "></div>
          <h1 className="text-3xl  md:text-[40px] font-semibold"> How It Works</h1>
        </div>

        <div className=" lg:flex">
          <div className="bg-[#EAF5FC] md:w-full lg:w-fit p-5 md:p-8 lg:p-10 rounded-3xl mt-5 ">
            {data.map((item, index) => (
              <div
                key={index}
                className=" mt-5 bg-white shadow-md p-5 md:p-8 lg:p-10  md:w-full lg:w-[700px] rounded-3xl"
              >
                <div className="flex gap-5">
                  <div className="">
                  <h1 className="bg-[#F2FDA7]  text-2xl rounded-md px-2 py-2 md:py-2  text-[#1D5861] font-medium">
                    {item.Number}
                  </h1>
                  </div>
                  <div className="">
                  <h2 className=" md:px-2 md:py-2 text-xl md:text-[28px] font-semibold ">{item.Question}</h2>
                  </div>
                </div>

                <div className="mt-5 md:mt-8">
                  <p className="w-full md:w-full lg:w-[580px] text-sm md:text-md lg:text-[17px] text-gray-950 leading-6 font-normal">{item.Answer}</p>
                </div>
              </div>
            ))}

           

          </div>
           <div className="px-3 mt-5">
              <img className="rounded-3xl h-[60vh] object-cover"
                src="https://cdn.internationalstudent.com/images/stock-images/youth-hostel.jpg"
                alt=""
              />
               <div className="px-3 mt-5">
              <img className="rounded-3xl h-[60vh] object-cover"
                src="https://img.freepik.com/free-photo/backpacker-using-her-phone-hostel-varanasi-india_53876-65346.jpg?t=st=1741867210~exp=1741870810~hmac=ddaf59aee537f3a98261a8c982e2baa4aa32e8239cf0a338f4ddbaffa0d3c6a6&w=1380"
                alt=""
              />
            </div>
            </div>
            


        </div>
      </div>
    </>
  );
};

export default HowItsWorks;
