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
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </p>
            <p className="leading-loose">
              Transfering money is eassier than ever, you can access FazzPay
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
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
            <div className="flex border-b border-gray-500 gap-5 pt-16 pb-4 relative">
              <FiLock size={35} />
              <input
                className="w-full bg-transparent outline-none"
                placeholder="Enter your password"
              />
              <button type="button">
                <FiEyeOff
                  className="flex justify-center items-center right-2 bottom-4 absolute"
                  size={25}
                />
              </button>
            </div>
            <div className="text-right font-semibold text-sm pt-4 pb-16">
              <Link href="./forgot-password">Forgot password?</Link>
            </div>
            <div className="pb-10">
              <button
                className="btn bg-gray-300 border-none btn-block normal-case"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center">
              Don’t have an account? Let’s&nbsp;
              <Link href="./signup" className="text-[#99A98F] font-bold">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
