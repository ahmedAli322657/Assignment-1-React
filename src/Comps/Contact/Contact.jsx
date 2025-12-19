import React from "react";

export default function Contact() {
  return (
    <>
      <section className="bg-white">
        <div className="container xl:max-w-6xl m-auto ">
          <div className="flex flex-col items-center">
            <h2 className="text-[40px] font-bold uppercase mb-3 text-[#2C3E50]">
              conatct section
            </h2>
            <div className=" relative after:w-20 after:h-1 after:top-1/2 after:-translate-y-1/2 after:start-8 after:bg-[#2C3E50] before:w-20 before:h-1 before:top-1/2 before:-translate-y-1/2 before:end-8 before:bg-[#2C3E50] after:absolute before:absolute">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="w-full mt-30">
              <form action="" className="flex flex-col gap-y-10 w-2/3 mx-auto mb-15">
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="border-b border-[#d5d9dc] py-4 px-3"
                  placeholder="userName"
                />
                <input
                  type="text"
                  name="userAge"
                  id="userAge"
                  className="border-b border-[#d5d9dc] py-4 px-3"
                  placeholder="userAge"
                />
                <input
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  className="border-b border-[#d5d9dc] py-4 px-3"
                  placeholder="userEmail"
                />
                <input
                  type="password"
                  name="userPass"
                  id="userPassword"
                  className="border-b border-[#d5d9dc] py-4 px-3"
                  placeholder="userPassword"
                />
                <button className="py-2 px-3 cursor-pointer hover: bg-[#1ABC9C] text-white w-fit rounded-md">send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
