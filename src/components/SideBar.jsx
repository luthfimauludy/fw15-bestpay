import React from "react";
import Link from "next/link";
import { FiUser, FiArrowUp, FiPlus } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import Logout from "./Logout";
import { useRouter } from "next/router";
import TransactionTopUp from "./TransactionTopUp";
import { withIronSessionSsr } from "iron-session/next";
import checkCredentials from "@/helpers/checkCredentials";
import cookieConfig from "@/helpers/cookieConfig";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token;
    checkCredentials(token, res, "/auth/login");

    if (!token) {
      res.setHeader("location", "/auth/login");
      res.statusCode = 302;
      res.end();
      return {
        props: {},
      };
    }

    return {
      props: {
        userToken: token,
      },
    };
  },
  cookieConfig
);

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

export default function SideBar({ userToken }) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    if (modalOpen === true) {
      setModalOpen(false);
      setTimeout(() => {
        setModalOpen(true);
      }, 200);
    } else {
      setModalOpen(true);
    }
  };

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
        <div className="border-l-4 border-transparent px-10">
          <button
            className="flex items-center gap-6"
            onClick={() => {
              openModal();
            }}
          >
            <FiPlus size={25} />
            <p className="text-lg">Top Up</p>
          </button>
        </div>
      </div>
      {modalOpen && (
        <TransactionTopUp visibleModal={modalOpen} userToken={userToken} />
      )}
      <Logout />
    </div>
  );
}
