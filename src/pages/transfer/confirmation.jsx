import React from "react";
import Image from "next/image";
import defaultPic from "@/assets/default-picture.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PinConfirm from "@/components/PinConfirm";
import SideBar from "@/components/SideBar";

export default function Confirmation() {
  return (
    <>
      <main className="bg-[#E5E5E5] h-full">
        <Navbar />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <SideBar />
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Transfer To</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
                  <div className="w-14 h-14">
                    <Image src={defaultPic} alt="Default picture" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Samuel Suhi</p>
                    <p className="text-sm text-[#6A6A6A]">+62 813-8492-9994</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-5">
                <p className="text-lg font-semibold">Details</p>
              </div>
              <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-[#6A6A6A]">Amount</p>
                  <p className="text-[22px] font-semibold">Rp.100.000</p>
                </div>
              </div>
              <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-[#6A6A6A]">Balance Left</p>
                  <p className="text-[22px] font-semibold">Rp.20.000</p>
                </div>
              </div>
              <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-[#6A6A6A]">Date & Time</p>
                  <p className="text-[22px] font-semibold">
                    May 11, 2020 - 12.20
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-[#6A6A6A]">Notes</p>
                  <p className="text-[22px] font-semibold">
                    For buying some socks
                  </p>
                </div>
              </div>
              <PinConfirm />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
