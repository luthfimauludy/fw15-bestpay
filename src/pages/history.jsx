import React from "react";
import { FiUser, FiArrowUp, FiPlus } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import Image from "next/image";
import defaultPic from "@/assets/default-picture.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function History() {
  return (
    <>
      <main className="bg-[#E5E5E5] h-full">
        <Navbar />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <div className="flex flex-col justify-between min-w-[278px] max-h-full bg-white rounded-xl px-10 py-12">
            <div className="flex flex-col gap-[52px]">
              <Link
                href="./home"
                className="flex items-center gap-6 text-[#99A98F]"
              >
                <RxDashboard size={25} />
                <p className="text-lg">Dashboard</p>
              </Link>
              <Link href="./transfer" className="flex items-center gap-6">
                <FiArrowUp size={25} />
                <p className="text-lg">Transfer</p>
              </Link>
              <Link href="./top-up" className="flex items-center gap-6">
                <FiPlus size={25} />
                <p className="text-lg">Top Up</p>
              </Link>
              <Link href="./profile" className="flex items-center gap-6">
                <FiUser size={25} />
                <p className="text-lg">Profile</p>
              </Link>
            </div>
            <Link href="./auth/logout" className="flex items-center gap-6">
              <LuLogOut size={25} />
              <p className="text-lg">Logout</p>
            </Link>
          </div>
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-10 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Transaction History</p>
                <button
                  className="btn bg-gray-300 font-medium border-none rounded-2xl normal-case"
                  type="button"
                >
                  -- Select Filter --
                </button>
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
                    <p className="font-semibold">Samuel Suhi</p>
                    <p className="text-sm text-[#6A6A6A]">Accept</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-green-500">+Rp50.000</p>
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
