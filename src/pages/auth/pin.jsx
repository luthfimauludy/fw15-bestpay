import React from "react";
import Image from "next/image";
import phone from "../../assets/phone-auth.png";

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
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </p>
            <p className="leading-loose">
              Create 6 digits pin to secure all your money and your data in
              BestPay app. Keep it secret and don’t tell anyone about your
              BestPay account password and the PIN.
            </p>
          </div>
          <form className="pt-16">
            <div className="flex gap-5 pb-4">
              <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
              </div>
              <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
              </div>
              <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
              </div>
              <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
              </div>
              <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
              </div>
              <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
                <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
              </div>
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
