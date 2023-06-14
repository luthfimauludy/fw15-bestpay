import React from "react";
import Image from "next/image";
import phone from "../../assets/phone-auth.png";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FaBehanceSquare } from "react-icons/fa";

export default function ResetPassword() {
  const [eye, setEye] = React.useState(false);

  function showEye() {
    setEye(!eye);
  }

  return (
    <main className="bg-[#E5E5E5]">
      <div className="flex md:flex-row flex-col min-h-screen">
        {/* Window */}
        <div className="hidden md:flex flex-col flex-1 bg-header bg-cover bg-no-repeat py-[50px] px-[100px] text-white">
          <div className="flex items-center font-semibold">
            <FaBehanceSquare size={45} color="black" />
            <p className="font-bold text-[29px]">stPay</p>
          </div>
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
        <div className="md:hidden text-center px-10 pt-[100px] pb-[60px] text-[29px] font-bold">
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
              Now you can create a new password for your BestPay account. Type
              your password twice so we can confirm your new passsword.
            </p>
          </div>
          <form className="pt-16">
            <div className="flex border-b border-gray-500 gap-5 pt-16 pb-4 relative">
              <FiLock size={35} />
              <input
                type={eye ? "text" : "password"}
                name="password"
                className="w-full bg-transparent outline-none"
                placeholder="Enter new password"
              />
              <button type="button" onClick={showEye}>
                {eye ? (
                  <FiEye
                    className="flex justify-center items-center right-2 bottom-4 absolute"
                    size={25}
                  />
                ) : (
                  <FiEyeOff
                    className="flex justify-center items-center right-2 bottom-4 absolute"
                    size={25}
                  />
                )}
              </button>
            </div>
            <div className="flex border-b border-gray-500 gap-5 pt-16 pb-4 relative">
              <FiLock size={35} />
              <input
                type={eye ? "text" : "password"}
                name="password"
                className="w-full bg-transparent outline-none"
                placeholder="Enter confirm password"
              />
              <button type="button" onClick={showEye}>
                {eye ? (
                  <FiEye
                    className="flex justify-center items-center right-2 bottom-4 absolute"
                    size={25}
                  />
                ) : (
                  <FiEyeOff
                    className="flex justify-center items-center right-2 bottom-4 absolute"
                    size={25}
                  />
                )}
              </button>
            </div>
            <div className="pb-10 pt-20">
              <button
                className="btn bg-gray-300 hover:bg-[#99A98F] font-bold border-none btn-block normal-case"
                type="submit"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
