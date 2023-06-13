import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default function Layout({ children, token: userToken }) {
  return (
    <div className="bg-[#E5E5E5] h-full">
      <Navbar token={userToken} />
      <div className="flex w-full px-[150px] py-10 gap-5">
        <SideBar />
        <div className="flex flex-col w-full h-full gap-5">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
