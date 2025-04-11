import React from "react";
import firstdownload from "../../Asstes/images/Home/contact2.png";
export default function BookDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const number = e.target.number.value.trim();

    // Basic validation
    if (!name || !email || !number) {
      alert("All fields are required.");
      return;
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const numberRegex = /^\d{10}$/;
    if (!numberRegex.test(number)) {
      alert(
        "Phone number must be exactly 10 digits and should consist digits only"
      );
      return;
    }

    const url =
      "https://script.google.com/macros/s/AKfycbxjv9jAQiSmr3mnXrMOpQv3dbvUdTRyDIfbSIM36QlRH0G2ymZ8DfFDLcENrmjJVhfx/exec";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${name}&Email=${email}&Number=${number}`,
    })
      .then((res) => res.text())
      .then((data) => {
        alert("Your request has been submitted successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Submission error:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div
      id="Download"
      className=" mt-10 mx-5 md:mx-8 lg:mx-10 p-2 md:p-10 lg:flex gap-10 items-center justify-center rounded-3xl shadow-sm"
    >
      <div className="flex justify-center items-center">
        <img
          src={firstdownload}
          alt="First Download"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="font-semibold  mt-10 md:mt-0 space-y-5 p-5 md:p-10 text-white">
        <h1 className="text-2xl md:text-[40px] font-bold text-center tracking-wide">
          Book Your Demo Now!
        </h1>
        <p className="text-lg text-center ">
          Fill in the form to book a demo and get started with our app.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className=" text-md ">Name</label>
            <input
              name="name"
              className="outline-none border-b-[0.5px] border-white text-white text-sm mt-1 w-full bg-transparent"
            />
          </div>

          <div>
            <label className=" text-md ">E-mail</label>
            <input
              name="email"
              className="outline-none border-b-[0.5px] border-white text-white text-sm mt-1 w-full bg-transparent"
            />
          </div>

          <div>
            <label className=" text-md ">Phone Number</label>
            <input
              name="number"
              className="outline-none border-b-[0.5px] border-white text-white text-sm mt-1 p-3 w-full bg-transparent"
            />
          </div>

          <div className=" grid place-content-center">
            <button
              type="submit"
              className="bg-customwhite mt-5 hover:bg-orange-400 hover:text-white  text-white w-full md:w-[300px] px-5 py-3 font-semi rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
