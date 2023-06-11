import React from "react";
import Link from "next/link";
import { FiUser, FiArrowUp } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import TopUp from "./TopUp";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-between min-w-[278px] max-h-full bg-white rounded-xl px-10 py-12">
      <div className="flex flex-col gap-[52px]">
        <Link href="/home" className="flex items-center gap-6">
          <RxDashboard size={25} />
          <p className="text-lg">Dashboard</p>
        </Link>
        <Link href="/transfer" className="flex items-center gap-6">
          <FiArrowUp size={25} />
          <p className="text-lg">Transfer</p>
        </Link>
        <TopUp />
        <Link href="/profile" className="flex items-center gap-6">
          <FiUser size={25} />
          <p className="text-lg">Profile</p>
        </Link>
      </div>
      <Link href="./auth/logout" className="flex items-center gap-6">
        <LuLogOut size={25} />
        <p className="text-lg">Logout</p>
      </Link>
    </div>
  );
}
