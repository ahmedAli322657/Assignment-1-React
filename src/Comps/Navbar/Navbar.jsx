import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#2C3E50] z-50">
        <div className="container xl:max-w-6xl py-8 mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <h1 className="text-4xl font-bold text-white uppercase mb-10 sm:mb-0 ">Start Framwork</h1>
            <ul className="flex justify-center gap-x-5 items-center text-white ">
              <li>
                <NavLink to={""} className="font-bold uppercase p-2 rounded-xl">About</NavLink>
              </li>
              <li>
                <NavLink to={"portfolio"} className="font-bold uppercase p-2 rounded-xl">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to={"contact"} className="font-bold uppercase p-2 rounded-xl">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
