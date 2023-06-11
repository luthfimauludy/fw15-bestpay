import React from "react";
import { FiBell } from "react-icons/fi";
import SideBar from "@/components/SideBar";

export default function ChangePin() {
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
          <SideBar />
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div className="flex flex-col w-full p-[30px] gap-24">
                <div className="flex flex-col max-w-[342px] gap-6">
                  <p className="text-lg font-semibold">Change Pin</p>
                  <p className="text-[#7A7886]">
                    Enter your current 6 digits Bestpay PIN below to continue to
                    the next steps.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-5 pt-5">
                  <div className="flex gap-5 pb-4">
                    <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                      <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
                    </div>
                    <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                      <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
                    </div>
                    <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                      <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
                    </div>
                    <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                      <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
                    </div>
                    <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                      <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
                    </div>
                    <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                      <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
                    </div>
                  </div>
                  <div className="min-w-[431px] pb-10 pt-10">
                    <button
                      className="btn bg-gray-300 font-bold border-none btn-block normal-case"
                      type="submit"
                    >
                      Continue
                    </button>
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
