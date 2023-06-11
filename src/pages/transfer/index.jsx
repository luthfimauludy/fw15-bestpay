import React from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import defaultPic from "@/assets/default-picture.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

export default function Transfer() {
  return (
    <>
      <main className="bg-[#E5E5E5] h-full">
        <Navbar />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <SideBar />
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Search Receiver</p>
              </div>
              <div className="flex gap-4 items-center p-4 bg-gray-200 rounded-xl">
                <FiSearch size={25} className="text-gray-400" />
                <input
                  className="w-full bg-transparent outline-none"
                  placeholder="Search receiver here"
                />
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
              <div className="flex justify-between items-center">
                <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
                  <div className="w-14 h-14">
                    <Image src={defaultPic} alt="Default picture" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Momo Taro</p>
                    <p className="text-sm text-[#6A6A6A]">+62 812-4343-6731</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
                  <div className="w-14 h-14">
                    <Image src={defaultPic} alt="Default picture" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Jessica Keen</p>
                    <p className="text-sm text-[#6A6A6A]">+62 811-3452-5252</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
                  <div className="w-14 h-14">
                    <Image src={defaultPic} alt="Default picture" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Michael Le</p>
                    <p className="text-sm text-[#6A6A6A]">+62 810-4224-4613</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
