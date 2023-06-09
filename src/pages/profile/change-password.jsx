import React from "react";
import {
  FiBell,
  FiUser,
  FiArrowUp,
  FiPlus,
  FiLock,
  FiEyeOff,
} from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";

export default function ChangePassword() {
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
                <p className="text-lg">Dashboard</p>
              </div>
              <div className="flex items-center gap-6">
                <FiArrowUp size={25} />
                <p className="text-lg">Transfer</p>
              </div>
              <div className="flex items-center gap-6">
                <FiPlus size={25} />
                <p className="text-lg">Top Up</p>
              </div>
              <div className="flex items-center gap-6 text-[#99A98F]">
                <FiUser size={25} />
                <p className="text-lg">Profile</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <LuLogOut size={25} />
              <p className="text-lg">Logout</p>
            </div>
          </div>
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div className="flex flex-col w-full p-[30px] gap-5">
                <div className="flex flex-col max-w-[342px] gap-6">
                  <p className="text-lg font-semibold">Change Password</p>
                  <p className="text-[#7A7886]">
                    We got your personal information from the sign up proccess.
                    If you want to make changes on your information, contact our
                    support.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-5 pt-5">
                  <div className="flex min-w-[431px] border-b border-gray-500 gap-5 pt-10 pb-4 relative">
                    <FiLock size={35} />
                    <input
                      className="w-full bg-transparent outline-none"
                      placeholder="Current your password"
                    />
                    <button type="button">
                      <FiEyeOff
                        className="flex justify-center items-center right-2 bottom-4 absolute"
                        size={25}
                      />
                    </button>
                  </div>
                  <div className="flex min-w-[431px] border-b border-gray-500 gap-5 pt-10 pb-4 relative">
                    <FiLock size={35} />
                    <input
                      className="w-full bg-transparent outline-none"
                      placeholder="New password"
                    />
                    <button type="button">
                      <FiEyeOff
                        className="flex justify-center items-center right-2 bottom-4 absolute"
                        size={25}
                      />
                    </button>
                  </div>
                  <div className="flex min-w-[431px] border-b border-gray-500 gap-5 pt-10 pb-4 relative">
                    <FiLock size={35} />
                    <input
                      className="w-full bg-transparent outline-none"
                      placeholder="Repeat new password"
                    />
                    <button type="button">
                      <FiEyeOff
                        className="flex justify-center items-center right-2 bottom-4 absolute"
                        size={25}
                      />
                    </button>
                  </div>
                  <div className="min-w-[431px] pb-10 pt-20">
                    <button
                      className="btn bg-gray-300 font-bold border-none btn-block normal-case"
                      type="submit"
                    >
                      Change Password
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
