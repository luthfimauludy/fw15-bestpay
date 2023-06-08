import React from "react";
import {
  FiBell,
  FiUser,
  FiArrowUp,
  FiArrowRight,
  FiPlus,
  FiEdit2,
} from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";

export default function SelfProfile() {
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
              <div className="flex items-center gap-6">
                <FiArrowUp size={25} />
                <p>Transfer</p>
              </div>
              <div className="flex items-center gap-6">
                <FiPlus size={25} />
                <p>Top Up</p>
              </div>
              <div className="flex items-center gap-6 text-[#99A98F]">
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
              <div className="flex flex-col justify-center items-center w-full p-[30px] gap-[10px]">
                <div className="flex justify-center items-center w-16 h-16 rounded-full">
                  Image
                </div>
                <div className="flex items-center gap-3 text-[#7A7886]">
                  <FiEdit2 size={15} />
                  <p>Edit</p>
                </div>
                <p className="text-2xl font-semibold pt-[5px]">
                  Robert Chandler
                </p>
                <p className="text-[#7A7886]">+62 813-9387-7946</p>
                <div className="flex flex-col gap-5 pt-10">
                  <div className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl">
                    <Link href="../personal-info" className="font-semibold">
                      Personal Infromation
                    </Link>
                    <FiArrowRight size={25} />
                  </div>
                  <div className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl">
                    <Link href="../change-password" className="font-semibold">
                      Change Password
                    </Link>
                    <FiArrowRight size={25} />
                  </div>
                  <div className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl">
                    <Link href="../change-pin" className="font-semibold">
                      Change PIN
                    </Link>
                    <FiArrowRight size={25} />
                  </div>
                  <div className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl">
                    <Link href="../logout" className="font-semibold">
                      Logout
                    </Link>
                    <FiArrowRight size={25} />
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
