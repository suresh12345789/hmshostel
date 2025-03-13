// import React, { useState } from "react";
// import mobile from "../../Asstes/images/Home/houselpng.png";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

// function Mainfeatures() {

//   const accordionItems = [
//     {
//       id: 1,
//       title:
//         "According to the manager",
//       text: "A paragraph is a group of sentences that develop a single idea or topic. Paragraphs help organize writing, making it easier for readers to follow the author's ideas.",
//     },
//     {
//       id: 2,
//       title:
//         "According to the manager",
//       text: "A paragraph is a group of sentences that develop a single idea or topic. Paragraphs help organize writing, making it easier for readers to follow the author's ideas.",
//     },
//     {
//       id: 3,
//       title:
//         "According to the manager",
//       text: "A paragraph is a group of sentences that develop a single idea or topic. Paragraphs help organize writing, making it easier for readers to follow the author's ideas.",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleToggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div>
//       <div className="mx-10 mt-10">
//         <div className="bg-orange-400 h-28 rounded-2xl ">
//           <div className="flex gap-10 items-center">
//             <div className=" mt-7 ml-32">
//               <button className=" text-white font-semibold text-xl bg-gradient-to-r from-[#787BFF] via-[#D67DFF] to-[#ed4654] py-4 px-16 rounded-full">
//                 Start whith a free plane
//               </button>
//             </div>
//             <div>
//               <h1 className="text-4xl font-semibold pt-5">
//                 Experience our services with a free plan!
//               </h1>
//             </div>
//           </div>
//         </div>

// {/* -----------------hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh-------------------- */}

//         <div className="grid-cols-2 grid mt-10 gap-5">
//           <div className="relative">
//             <img
//               src={mobile}
//               alt=""
//               className="rounded-2xl h-[550px] w-full object-cover"
//             />
//             <div className="flex items-center gap-2  absolute left-10 top-10">
//               <h1 className="text-3xl text-blue-500">
//                 <FaArrowAltCircleRight />
//               </h1>
//               <h1 className="text-4xl font-semibold">Main features</h1>
//             </div>
//           </div>

//           <div>
//             <div className="bg-yellow-300 w-full py-5 rounded-xl p-5">
//               <h1 className="text-2xl font-semibold">Apartments</h1>

//               <div className="flex gap-16">
//                 <div className="flex items-center gap-3 bg-white w-[180px] pl-5 py-1 mt-5 rounded-xl">
//                   <h2 className="text-lg">
//                     <FaArrowRightLong />
//                   </h2>
//                   <h1 className="text-lg">Public link</h1>
//                 </div>

//                 <div className="flex items-center gap-3 bg-white w-[180px] pl-5 py-1 mt-5 rounded-xl">
//                   <h2 className="text-lg">
//                     <FaArrowRightLong />
//                   </h2>
//                   <h1 className="text-lg">Maplocation</h1>
//                 </div>
//               </div>

//               <div className="flex gap-16">
//                 <div className="flex items-center gap-3 bg-white w-[220px] pl-5 py-1 mt-5 rounded-xl">
//                   <h2 className="text-lg">
//                     <FaArrowRightLong />
//                   </h2>
//                   <h1 className="text-lg">Tenant instructions</h1>
//                 </div>

//                 <div className="flex items-center gap-3 bg-white w-[140px] pl-5 py-1 mt-5 rounded-xl">
//                   <h2 className="text-lg">
//                     <FaArrowRightLong />
//                   </h2>
//                   <h1 className="text-lg">Tasks</h1>
//                 </div>
//               </div>
//             </div>

// {/* ------------------according----------------- */}
//             <div className="w-full h-auto  bg-orange-400 flex justify-center  mt-10">
//       <div className="w-full border rounded-lg overflow-hidden bg-white">
//         {accordionItems.map((item, index) => (
//           <div key={item.id} className="border-b last:border-b-2 mt-10">
//             <div
//               className="px-5 py-5 flex items-center justify-between cursor-pointer bg-orange-400"
//               onClick={() => handleToggle(index)}
//             >
//               <p className="flex-1">{item.title}</p>
//               <span>{activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}</span>
//             </div>
//             {activeIndex === index && (
//               <div className="px-5 py-5">
//                 <p>{item.text}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Mainfeatures;

import React, { useState } from "react";
import mobile from "../../Asstes/images/Home/houselpng.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

function Mainfeatures() {
  const accordionItems = [
    {
      id: 1,
      title: "According to the manager",
      text: "A paragraph is a group of sentences that develop a single idea or topic. Paragraphs help organize writing, making it easier for readers to follow the author's ideas.",
    },
    {
      id: 2,
      title: "According to the manager",
      text: "A paragraph is a group of sentences that develop a single idea or topic. Paragraphs help organize writing, making it easier for readers to follow the author's ideas.",
    },
    {
      id: 3,
      title: "According to the manager",
      text: "A paragraph is a group of sentences that develop a single idea or topic. Paragraphs help organize writing, making it easier for readers to follow the author's ideas.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="mx-10 mt-10">
        <div className="bg-orange-400 h-28 rounded-2xl ">
          <div className="flex gap-10 items-center">
            <div className=" mt-7 ml-32">
              <button className=" text-white font-semibold text-xl bg-gradient-to-r from-[#787BFF] via-[#D67DFF] to-[#ed4654] py-4 px-16 rounded-full">
                Start whith a free plane
              </button>
            </div>
            <div>
              <h1 className="text-4xl font-semibold pt-5">
                Experience our services with a free plan!
              </h1>
            </div>
          </div>
        </div>

        <div className="grid-cols-2 grid mt-10 gap-5">
          <div className="relative">
            <img
              src={mobile}
              alt=""
              className="rounded-2xl h-[550px] w-full object-cover"
            />
            <div className="flex items-center gap-2  absolute left-10 top-10">
              <h1 className="text-3xl text-blue-500">
                <FaArrowAltCircleRight />
              </h1>
              <h1 className="text-4xl font-semibold">Main features</h1>
            </div>
          </div>

          <div>
            <div className="bg-yellow-300 w-full py-5 rounded-xl p-5">
              <h1 className="text-2xl font-semibold">Apartments</h1>

              <div className="flex gap-16">
                <div className="flex items-center gap-3 bg-white w-[180px] pl-5 py-1 mt-5 rounded-xl">
                  <h2 className="text-lg">
                    <FaArrowRightLong />
                  </h2>
                  <h1 className="text-lg">Public link</h1>
                </div>

                <div className="flex items-center gap-3 bg-white w-[180px] pl-5 py-1 mt-5 rounded-xl">
                  <h2 className="text-lg">
                    <FaArrowRightLong />
                  </h2>
                  <h1 className="text-lg">Maplocation</h1>
                </div>
              </div>

              <div className="flex gap-16">
                <div className="flex items-center gap-3 bg-white w-[220px] pl-5 py-1 mt-5 rounded-xl">
                  <h2 className="text-lg">
                    <FaArrowRightLong />
                  </h2>
                  <h1 className="text-lg">Tenant instructions</h1>
                </div>

                <div className="flex items-center gap-3 bg-white w-[140px] pl-5 py-1 mt-5 rounded-xl">
                  <h2 className="text-lg">
                    <FaArrowRightLong />
                  </h2>
                  <h1 className="text-lg">Tasks</h1>
                </div>
              </div>
            </div>

            {/* Accordion */}
      
            <div className="w-full h-auto bg-orange-400 flex justify-center mt-10">
              <div className="w-full border rounded-lg overflow-hidden bg-white text-black">
                {/* Add gap-10 to this container to create spacing between each accordion item */}
                <div className="space-y-10">
                  {" "}
                  {/* Use space-y-10 for vertical spacing */}
                  {accordionItems.map((item, index) => (
                    <div key={item.id}>
                      <div
                        className={`px-5 py-5 flex items-center justify-between cursor-pointer ${
                          activeIndex === index
                            ? "bg-green-500"
                            : "bg-orange-400"
                        }`}
                        onClick={() => handleToggle(index)}
                      >
                        <p className="flex-1">{item.title}</p>
                        <span>
                          {activeIndex === index ? (
                            <FaAngleUp />
                          ) : (
                            <FaAngleDown />
                          )}
                        </span>
                      </div>
                      {activeIndex === index && (
                        <div className="px-5 py-5">
                          <p>{item.text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainfeatures;
