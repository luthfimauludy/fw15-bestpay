import React from "react";
import { FiUser, FiArrowUp, FiPlus, FiEdit2 } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import Image from "next/image";
import defaultPic from "@/assets/default-picture.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AmountInput() {
  return (
    <>
      <main className="bg-[#E5E5E5] h-full">
        <Navbar />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <div className="flex flex-col justify-between min-w-[278px] max-h-full bg-white rounded-xl px-10 py-12">
            <div className="flex flex-col gap-[52px]">
              <Link href="../home" className="flex items-center gap-6">
                <RxDashboard size={25} />
                <p className="text-lg">Dashboard</p>
              </Link>
              <Link href="." className="flex items-center gap-6 text-[#99A98F]">
                <FiArrowUp size={25} />
                <p className="text-lg">Transfer</p>
              </Link>
              <Link href="../top-up" className="flex items-center gap-6">
                <FiPlus size={25} />
                <p className="text-lg">Top Up</p>
              </Link>
              <Link href="../profile" className="flex items-center gap-6">
                <FiUser size={25} />
                <p className="text-lg">Profile</p>
              </Link>
            </div>
            <Link href="../auth/logout" className="flex items-center gap-6">
              <LuLogOut size={25} />
              <p className="text-lg">Logout</p>
            </Link>
          </div>
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div>
                <p className="text-lg font-semibold">Transfer Money</p>
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
              <div className="max-w-[340px] pt-5">
                <p className="text-[#7A7886]">
                  Type the amount you want to transfer and then press continue
                  to the next steps.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-10 pt-11">
                <input
                  className="text-center text-[42px] outline-none"
                  placeholder="0.00"
                  type="number"
                />
                <p className="font-semibold text-center">Rp120.000 Available</p>
                <div className="flex min-w-[343px] border-b border-gray-500 gap-4 pt-5 pb-4">
                  <FiEdit2 size={20} />
                  <input
                    className="outline-none"
                    placeholder="Add some notes"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-9">
                <button
                  className="btn bg-[#99A98F] w-[170px] h-[57px] text-white border-none normal-case"
                  type="button"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
