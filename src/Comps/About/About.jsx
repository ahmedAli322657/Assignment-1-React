import React from "react";

export default function About() {
  return (
    <>
      <section className="bg-[#1ABC9C]">
        <div className="container xl:max-w-6xl m-auto ">
          <div className="flex flex-col items-center py-50 text-white ">
            <h2 className="text-[40px] text-center font-bold uppercase mb-3">
              about component
            </h2>
            <div className=" relative after:w-20 after:h-1 after:top-1/2 after:-translate-y-1/2 after:start-8 after:bg-white before:w-20 before:h-1 before:top-1/2 before:-translate-y-1/2 before:end-8 before:bg-white after:absolute before:absolute">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="flex flex-wrap pt-5 justify-center">
              <p className="w-full md:w-1/2 p-3">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="w-full md:w-1/2 p-3">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
