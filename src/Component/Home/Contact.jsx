import React from 'react';
import image from '../../Asstes/images/Home/contact.png';

const Contact = () => {

  return (
    <>
      <div className="mx-5 md:mx-8 lg:mx-10 mt-10">
        <div className="flex">
        <div className="flex gap-5">
        <div className="bg-[#F2FDA7] w-6 h-6 mt-1 rounded-full shadow-md "></div>
        <div className="text-2xl md:text-4xl lg:text-[40px] font-semibold">
          <h1>Contact Us</h1>
        </div>
        </div>
        </div>
        <div className="lg:flex lg:gap-10 font-normal">
          <div className="mt-5 bg-[#EAF5FC] lg:w-fit px-5 md:px-8 lg:px-10 py-5 md:py-8 lg:py-10 rounded-3xl">
            <h1 className='text-xl md:text-4xl font-semibold md:w-[400px] '>
              Please contact us for more about <span className='text-[#0C3B75]'>Rentooler!</span>
            </h1>
            <div className="mt-10">
              <img src={image} alt="Contact Us" className='rounded-3xl h-[50vh] w-[700px] object-cover' />
            </div>
          </div>

          <form  className="mt-5 bg-[#EAF5FC] w-full lg:w-fit px-5 md:px-8 lg:px-10 rounded-3xl py-8 md:py-10 lg:py-14">
            <div>
              <label htmlFor="fullName" className="block text-md text-gray-600 font-medium">Full Name*</label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter Your Full Name"
                className=" outline-none text-sm mt-1 p-3 w-full md:w-full lg:w-[500px] rounded-full border-2 border-[#417ABE] bg-[#EAF5FC] font-semibold"
                
              />
            </div>
            <div className="mt-8">
              <label htmlFor="email" className="block text-md text-gray-600 font-medium">E-mail*</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your e-mail"
                className=" outline-none text-sm mt-1 p-3 w-full md:w-full lg:w-[500px] rounded-full border-2 border-[#417ABE] bg-[#EAF5FC] font-semibold"
               
              />
            </div>

            <div className="mt-8">
              <label htmlFor="message" className="block text-md text-gray-600 font-medium">Your message </label>
              <input
                id="message"
                placeholder="Enter your message (optional)"
                className=" outline-none text-sm mt-1 px-2 py-5  w-full md:w-full lg:w-full rounded-full border-2 border-[#417ABE] bg-[#EAF5FC] font-semibold"
               
              />
            </div>

            <div className="mt-10">
              <p className="text-sm text-gray-400">By submitting your request you agree to our Privacy Policy</p>
            </div>
            <div className="mt-14">
              <button
                type="submit"
                className="bg-[#E0F555] w-[200px] md:w-[250px] px-3 py-2 rounded-full font-semibold"
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
