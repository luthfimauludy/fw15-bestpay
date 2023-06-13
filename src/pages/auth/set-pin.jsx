import React from "react";
import Image from "next/image";
import phone from "../../assets/phone-auth.png";
import PinInput from "@/components/PinInput";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import http from "@/helpers/http";
import { clearAuthState } from "@/redux/reducers/auth";

export default function SetPin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [pin, setPin] = React.useState("");

  React.useEffect(() => {
    if (!email) {
      router.back();
    }
  }, [email, router]);

  const setUserPin = async (values) => {
    try {
      const form = new URLSearchParams({
        email: values.email,
        pin,
      }).toString();

      const { data } = await http().post("/auth/set-pin", form);
      dispatch(clearAuthState());
      router.replace("/auth/login");
    } catch (err) {
      setErrorMessage("PIN is invalid");
    }
  };

  return (
    <main className="bg-[#E5E5E5]">
      <div className="flex md:flex-row flex-col min-h-screen">
        {/* Window */}
        <div className="hidden md:flex flex-col flex-1 bg-header bg-cover bg-no-repeat py-[50px] px-[100px] text-white">
          <div className="text-[29px] font-bold">BestPay</div>
          <div>
            <Image src={phone} alt="Phone" priority />
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
              Create Security PIN
            </p>
            <p className="max-w-[310px] text-center text-gray-400 leading-loose">
              Create a PIN that’s contain 6 digits number for security purpose
              in BestPay.
            </p>
          </div>

          {/* Window */}
          <div className="hidden md:flex flex-col gap-8">
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
          <form onSubmit={setUserPin} className="pt-16">
            {errorMessage && (
              <div className="alert alert-error">{errorMessage}</div>
            )}
            <PinInput onChangePin={setPin} />
            <div className="pb-10 pt-20">
              <button
                className="btn bg-gray-300 hover:bg-[#99A98F] border-none btn-block normal-case"
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
