import React from "react";
import { FiDownload } from "react-icons/fi";
import { HiCheck } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import defaultPic from "@/assets/default-picture.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

export default function Status() {
  return (
    <>
      <main className="bg-[#E5E5E5] h-full">
        <Navbar />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <SideBar />
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div className="flex flex-col justify-center items-center w-full p-[30px] gap-7">
                <div className="flex justify-center items-center w-16 h-16 bg-green-500 rounded-full">
                  <HiCheck size={35} color="white" />
                </div>
                <p className="text-[22px] font-semibold">Transfer Success</p>
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
              <div className="pt-5">
                <p className="text-lg font-semibold">Transfer to</p>
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
              <div className="flex gap-4 justify-end pt-[75px]">
                <Link
                  href="./home"
                  className="btn w-[170px] bg-[#99A98F]/40 text-[#99A98F] border-none normal-case"
                  type="button"
                >
                  <FiDownload size={25} />
                  Download PDF
                </Link>
                <Link
                  href="./home"
                  className="btn w-[170px] bg-[#99A98F] text-white border-none normal-case"
                  type="button"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
