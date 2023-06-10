import React from "react";
import Image from "next/image";
import defaultPic from "@/assets/default-picture.jpg";
import { FiBell } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full min-h-[140px] bg-white px-[150px] py-[42px] rounded-b-2xl">
      <div className="text-[#99A98F] text-[29px] font-semibold">BestPay</div>
      <div className="flex items-center gap-5">
        <div className="w-[52px] h-[52px]">
          <Image src={defaultPic} alt="Default picture" />
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold">Robert Chandler</div>
          <div className="text-[13px]">+62 8139 3877 7946</div>
        </div>
        <FiBell size={25} />
      </div>
    </nav>
  );
}
