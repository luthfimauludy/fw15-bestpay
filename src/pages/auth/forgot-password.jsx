import React from "react";
import Image from "next/image";
import phone from "../../assets/phone-auth.png";
import { FiMail } from "react-icons/fi";

export default function ForgotPassword() {
  return (
    <main className="bg-[#E5E5E5]">
      <div className="flex md:flex-row flex-col min-h-screen">
        {/* Window */}
        <div className="hidden md:flex flex-col flex-1 bg-header bg-cover bg-no-repeat py-[50px] px-[100px] text-white">
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

        {/* Mobile */}
        <div className="md:hidden text-center px-[140px] pt-[100px] pb-[60px] text-[29px] font-bold">
          BestPay
        </div>
        <div className="w-full md:max-w-[550px] bg-white md:bg-[#E5E5E5] rounded-t-3xl md:rounded-none py-10 md:py-[80px] px-4 md:pl-12 md:pr-[80px]">
          {/* Mobile */}
          <div className="md:hidden flex flex-col justify-center items-center gap-8">
            <p className="max-w-[394px] text-2xl font-bold leading-loose">
              Reset Password
            </p>
            <p className="max-w-[310px] text-center text-gray-400 leading-loose">
              Enter your BestPay e-mail so we can send you a password reset
              link.
            </p>
          </div>

          {/* Window */}
          <div className="hidden md:flex flex-col gap-8">
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
