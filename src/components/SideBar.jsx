import React from "react";
import Link from "next/link";
import { FiUser, FiArrowUp } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import TopUp from "./TopUp";
import Logout from "./Logout";
import { useRouter } from "next/router";

const MENU = [
  {
    id: 1,
    name: "Dashboard",
    href: "/home",
    icon: <RxDashboard size={25} />,
  },
  {
    id: 2,
    name: "Transfer",
    href: "/transfer",
    icon: <FiArrowUp size={25} />,
  },
  {
    id: 3,
    name: "Profile",
    href: "/profile",
    icon: <FiUser size={25} />,
  },
];

export default function SideBar() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between min-w-[278px] max-h-full bg-white rounded-xl py-12">
      <div className="flex flex-col gap-[52px]">
        {MENU.map((item) => (
          <div key={`menu-${item.id}`}>
            <Link
              href={item.href}
              className={
                "flex items-center gap-6 border-l-4 px-10" +
                (item.href === router.pathname
                  ? " border-[#6A6A6A]"
                  : " border-transparent")
              }
            >
              <span>{item.icon}</span>
              <span className="text-lg">{item.name}</span>
            </Link>
          </div>
        ))}
        <TopUp />
      </div>
      <Logout />
    </div>
  );
}
