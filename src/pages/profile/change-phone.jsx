import React from "react";
import { FiBell } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import SideBar from "@/components/SideBar";

export default function ChangePhone() {
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
                  <p className="text-lg font-semibold">Edit Phone Number</p>
                  <p className="text-[#7A7886]">
                    Add at least one phone number for the transfer ID so you can
                    start transfering your money to another user.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-5 pt-5">
                  <div className="flex items-center min-w-[431px] border-b border-gray-500 gap-5 pb-4">
                    <BsTelephone size={35} />
                    <p>+62</p>
                    <input
                      className="w-full bg-transparent outline-none"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="min-w-[431px] pb-10 pt-10">
                    <button
                      className="btn bg-gray-300 font-bold border-none btn-block normal-case"
                      type="submit"
                    >
                      Edit Phone Number
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
