import React from "react";
import { FiArrowUp, FiArrowDown, FiPlus } from "react-icons/fi";
import Image from "next/image";
import graphic from "@/assets/graphic.png";
import defaultPic from "@/assets/default-picture.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <>
      <main className="bg-[#E5E5E5] h-full">
        <Navbar />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <SideBar />
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex justify-between w-full max-h-[190px] p-[30px] text-white bg-[#99A98F] rounded-xl">
              <div className="flex flex-col gap-3">
                <p className="text-lg font">Balance</p>
                <p className="text-[40px] font-semibold">Rp120.000</p>
                <p className="text-sm">+62 813-9387-7946</p>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <button
                    className="w-[162px] h-[57px] btn btn-white normal-case text-lg bg-gray-300/50"
                    type="button"
                  >
                    <FiArrowUp size={25} /> Transfer
                  </button>
                </div>
                <div>
                  <button
                    className="w-[162px] h-[57px] btn btn-white normal-case text-lg bg-gray-300/50"
                    type="button"
                  >
                    <FiPlus size={25} /> Top Up
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-[60px] max-w-[463px] min-h-full bg-white p-[30px] rounded-xl">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <FiArrowDown size={25} color="green" />
                    <p className="text-xs text-[#6A6A6A]">Income</p>
                    <p className="text-lg font-semibold">Rp2.120.000</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <FiArrowUp size={25} color="red" />
                    <p className="text-xs text-[#6A6A6A]">Expense</p>
                    <p className="text-lg font-semibold">Rp1.560.000</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image src={graphic} alt="graphic" />
                </div>
              </div>
              <div className="flex flex-col gap-10 min-w-[367px] bg-white p-[30px] rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">Transaction History</p>
                  <Link href="./history">
                    <p className="text-sm text-[#99A98F]">See all</p>
                  </Link>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14">
                      <Image src={defaultPic} alt="Default picture" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold">Samuel Suhi</p>
                      <p className="text-sm text-[#6A6A6A]">Accept</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-green-500">+Rp50.000</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14">
                      <Image src={defaultPic} alt="Default picture" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold">Netflix</p>
                      <p className="text-sm text-[#6A6A6A]">Transfer</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-red-500">-Rp149.000</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14">
                      <Image src={defaultPic} alt="Default picture" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold">Christine Mar...</p>
                      <p className="text-sm text-[#6A6A6A]">Accept</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-green-500">+Rp150.000</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14">
                      <Image src={defaultPic} alt="Default picture" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold">Robert Chandler</p>
                      <p className="text-sm text-[#6A6A6A]">Topup</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-red-500">-Rp249.000</p>
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
