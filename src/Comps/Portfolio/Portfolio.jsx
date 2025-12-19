import React from "react";
import img1 from "../../assets/imgi_1_poert1.png";
import img2 from "../../assets/imgi_2_port2.png";
import img3 from "../../assets/imgi_3_port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-[40px] font-bold uppercase mb-3 text-[#2C3E50]">
          portfolio component
        </h2>
        <div className=" relative after:w-20 after:h-1 after:top-1/2 after:-translate-y-1/2 after:start-8 after:bg-[#2C3E50] before:w-20 before:h-1 before:top-1/2 before:-translate-y-1/2 before:end-8 before:bg-[#2C3E50] after:absolute before:absolute">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className=" container xl:max-w-6xl">
          <div className="flex flex-wrap">
            <div class=" w-full md:w-1/2 lg:w-1/3 p-5">
              <div className=" relative">
                <img src={img1} alt="hut" class="w-full h-full rounded-xl" />
                <div class="absolute inset-0 transition-all duration-500 hover:bg-[#1ABC9C]/80 cursor-pointer rounded-xl group">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center h-full">
                    <i className="fa-solid fa-plus fa-2xl text-white"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class=" w-full md:w-1/2 lg:w-1/3 p-5">
              <div className=" relative">
                <img src={img2} alt="hut" class="w-full h-full rounded-xl" />
                <div class="absolute inset-0 transition-all duration-500 hover:bg-[#1ABC9C]/80 cursor-pointer rounded-xl group">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center h-full">
                    <i className="fa-solid fa-plus fa-2xl text-white"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class=" w-full md:w-1/2 lg:w-1/3 p-5">
              <div className=" relative">
                <img src={img3} alt="hut" class="w-full h-full rounded-xl" />
                <div class="absolute inset-0 transition-all duration-500 hover:bg-[#1ABC9C]/80 cursor-pointer rounded-xl group">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center h-full">
                    <i className="fa-solid fa-plus fa-2xl text-white"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class=" w-full md:w-1/2 lg:w-1/3 p-5">
              <div className=" relative">
                <img src={img1} alt="hut" class="w-full h-full rounded-xl" />
                <div class="absolute inset-0 transition-all duration-500 hover:bg-[#1ABC9C]/80 cursor-pointer rounded-xl group">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center h-full">
                    <i className="fa-solid fa-plus fa-2xl text-white"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class=" w-full md:w-1/2 lg:w-1/3 p-5">
              <div className=" relative">
                <img src={img2} alt="hut" class="w-full h-full rounded-xl" />
                <div class="absolute inset-0 transition-all duration-500 hover:bg-[#1ABC9C]/80 cursor-pointer rounded-xl group">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center h-full">
                    <i className="fa-solid fa-plus fa-2xl text-white"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class=" w-full md:w-1/2 lg:w-1/3 p-5">
              <div className=" relative">
                <img src={img3} alt="hut" class="w-full h-full rounded-xl" />
                <div class="absolute inset-0 transition-all duration-500 hover:bg-[#1ABC9C]/80 cursor-pointer rounded-xl group">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center h-full">
                    <i className="fa-solid fa-plus fa-2xl text-white"></i>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
