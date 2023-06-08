import React from "react";
import { FiBell, FiUser, FiArrowUp, FiPlus, FiSearch } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";

export default function SearchReceiver() {
  return (
    <>
      <main className="bg-[#E5E5E5] h-full">
        <nav className="flex justify-between items-center w-full min-h-[140px] bg-white px-[150px] py-[42px] rounded-b-2xl">
          <div className="text-[#99A98F] text-[29px] font-semibold">
            BestPay
          </div>
          <div className="flex items-center gap-5">
            <div>Image</div>
            <div className="flex flex-col">
              <div className="text-lg font-semibold">Robert Chandler</div>
              <div className="text-[13px]">+62 8139 3877 7946</div>
            </div>
            <FiBell size={25} />
          </div>
        </nav>
        <div className="flex w-full px-[150px] py-10 gap-5">
          <div className="flex flex-col justify-between min-w-[278px] max-h-full bg-white rounded-xl px-10 py-12">
            <div className="flex flex-col gap-[52px]">
              <div className="flex items-center gap-6">
                <RxDashboard size={25} />
                <p>Dashboard</p>
              </div>
              <div className="flex items-center gap-6 text-[#99A98F]">
                <FiArrowUp size={25} />
                <p>Transfer</p>
              </div>
              <div className="flex items-center gap-6">
                <FiPlus size={25} />
                <p>Top Up</p>
              </div>
              <div className="flex items-center gap-6">
                <FiUser size={25} />
                <p>Profile</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <LuLogOut size={25} />
              <p>Logout</p>
            </div>
          </div>
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
                  <div>image</div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Samuel Suhi</p>
                    <p className="text-sm text-[#6A6A6A]">+62 813-8492-9994</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
                  <div>image</div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Momo Taro</p>
                    <p className="text-sm text-[#6A6A6A]">+62 812-4343-6731</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
                  <div>image</div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Jessica Keen</p>
                    <p className="text-sm text-[#6A6A6A]">+62 811-3452-5252</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
                  <div>image</div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Michael Le</p>
                    <p className="text-sm text-[#6A6A6A]">+62 810-4224-4613</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="flex justify-between w-full max-h-[68px] py-5 px-[150px] bg-[#99A98F] text-white">
            <p className="font">2023 BestPay. All right reserved</p>
            <div className="flex gap-10">
              <p>+62 5637 8892 9901</p>
              <p>contact@bestpay.com</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
