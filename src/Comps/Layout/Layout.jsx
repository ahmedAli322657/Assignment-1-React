import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <main className="flex-1">
          <Navbar />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
