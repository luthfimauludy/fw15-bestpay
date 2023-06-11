import React from "react";
import Link from "next/link";
import { FiUser, FiArrowUp } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import TopUp from "./TopUp";
import axios from "axios";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();
  const doLogout = async () => {
    await axios.get("http://localhost:3000/api/logout");
    router.replace("/auth/login");
  };

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
      <button onClick={doLogout} className="flex items-center gap-6">
        <LuLogOut size={25} />
        <p className="text-lg">Logout</p>
      </button>
    </div>
  );
}
