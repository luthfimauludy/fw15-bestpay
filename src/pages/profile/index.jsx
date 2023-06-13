import React from "react";
import { FiArrowRight, FiEdit2 } from "react-icons/fi";
import Link from "next/link";
import cookieConfig from "@/helpers/cookieConfig";
import checkCredentials from "@/helpers/checkCredentials";
import { withIronSessionSsr } from "iron-session/next";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token;
    checkCredentials(token, res, "/auth/profile");

    return {
      props: {
        token,
      },
    };
  },
  cookieConfig
);

export default function SelfProfile() {
  return (
    <>
      <main className="bg-[#E5E5E5] h-full">
        <Navbar />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <SideBar />
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
                  <Link
                    href="/profile/personal-info"
                    className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
                  >
                    <div className="font-semibold">Personal Infromation</div>
                    <FiArrowRight size={25} />
                  </Link>
                  <Link
                    href="/profile/change-password"
                    className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
                  >
                    <div className="font-semibold">Change Password</div>
                    <FiArrowRight size={25} />
                  </Link>
                  <Link
                    href="/profile/change-pin"
                    className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
                  >
                    <div className="font-semibold">Change PIN</div>
                    <FiArrowRight size={25} />
                  </Link>
                  <Link
                    href="/auth/logout"
                    className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
                  >
                    <div className="font-semibold">Logout</div>
                    <FiArrowRight size={25} />
                  </Link>
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
