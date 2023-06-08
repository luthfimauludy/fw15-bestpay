import React from "react";
import Image from "next/image";
import phone from "../../assets/phone-auth.png";
import { FiMail, FiLock, FiEyeOff } from "react-icons/fi";
import Link from "next/link";

export default function Login() {
  return (
    <main className="bg-[#E5E5E5]">
      <div className="flex min-h-screen">
        <div className="flex flex-1 h-full bg-header bg-cover bg-no-repeat text-white">
          <div className="flex flex-col py-[50px] px-[100px]">
            <div className="text-[29px] font-bold">BestPay</div>
            <div>
              <Image src={phone} alt="Phone" />
            </div>
            <div className="text-2xl font-bold pb-8">
              App that Covering Banking Needs.
            </div>
            <div className="max-w-[497px]">
              BestPay is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in BestPay everyday with worldwide
              users coverage.
            </div>
          </div>
        </div>
        <div className="max-w-[550px] py-[80px] pl-12 pr-[80px]">
          <div className="flex flex-col gap-8">
            <p className="max-w-[394px] text-2xl font-bold leading-loose">
              Did You Forgot Your Password? Don’t Worry, You Can Reset Your
              Password In a Minutes.
            </p>
            <p className="leading-loose">
              To reset your password, you must type your e-mail and we will send
              a link to your email and you will be directed to the reset
              password screens.
            </p>
          </div>
          <form className="pt-16">
            <div className="flex border-b border-gray-500 gap-5 pb-4">
              <FiMail size={35} />
              <input
                className="w-full bg-transparent outline-none"
                placeholder="Enter your e-mail"
              />
            </div>
            <div className="pb-10 pt-20">
              <button
                className="btn bg-gray-300 font-bold border-none btn-block normal-case"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
