import React from "react";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import cookieConfig from "@/helpers/cookieConfig";
import checkCredentials from "@/helpers/checkCredentials";
import { withIronSessionSsr } from "iron-session/next";
import http from "@/helpers/http";
import PinInput from "@/components/PinInput";
import { BsCheckCircleFill } from "react-icons/bs";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token;
    checkCredentials(token, res, "/auth/login");
    return {
      props: {
        userToken: token,
      },
    };
  },
  cookieConfig
);

export default function ChangePin({ userToken }) {
  const [oldPin, setOldPin] = React.useState("");
  const [newPin, setNewPin] = React.useState("");
  const [confirmPin, setConfirmPin] = React.useState("");
  const [showFormOld, setShowFormOld] = React.useState(true);
  const [showFormNew, setShowFormNew] = React.useState(false);
  const [showFormConfirm, setShowFormConfirm] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState(false);

  const doOldPin = () => {
    setErrorMessage("");
    if (oldPin.length === 6) {
      setShowFormOld(false);
      setShowFormNew(true);
      console.log("oldPin :" + oldPin);
    } else {
      setErrorMessage("Pin must be 6 digits");
    }
  };

  const doNewPin = () => {
    setErrorMessage("");
    if (newPin.length === 6) {
      setShowFormNew(false);
      setShowFormConfirm(true);
      console.log("newPin :" + newPin);
    } else {
      setErrorMessage("Pin must be 6 digits");
    }
  };

  const doChangePin = async () => {
    setErrorMessage("");
    if (newPin === oldPin) {
      setErrorMessage("Pin must be different from the old pin");
      setShowFormOld(true);
      setShowFormNew(false);
      setShowFormConfirm(false);
      setOldPin("");
      setNewPin("");
      setConfirmPin("");
    }
    if (newPin !== confirmPin) {
      setErrorMessage("Confirm Pin does not match");
    } else if (newPin.length === 6 && newPin !== oldPin) {
      console.log("confirm :" + confirmPin);
      const form = new URLSearchParams({
        oldPin: oldPin,
        newPin: newPin,
        confirmPin: confirmPin,
      }).toString();

      try {
        const { data } = await http(userToken).patch(
          "/profile/change-pin",
          form
        );
        console.log(data);
        if (data) {
          setSuccessMessage(true);
          setShowFormNew(false);
          setShowFormConfirm(false);
          setShowFormOld(true);
          setOldPin("");
          setNewPin("");
          setConfirmPin("");
        }
      } catch (error) {
        console.log(error);
        setErrorMessage("An error occurred. Please try again.");
      }
    } else if (confirmPin.length < 6) {
      setErrorMessage("Pin must be 6 digits");
    }
  };

  const handleSubmitOldPin = (e) => {
    e.preventDefault();
    doOldPin();
  };

  const handleSubmitNewPin = (e) => {
    e.preventDefault();
    doNewPin();
  };

  const handleSubmitChangePin = (e) => {
    e.preventDefault();
    doChangePin();
  };

  return (
    <>
      <Head>
        <title>Change PIN</title>
      </Head>
      <main className="bg-[#E5E5E5] h-full">
        <Navbar token={userToken} />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <SideBar />
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div className="flex flex-col w-full p-[30px] gap-24">
                <div className="flex flex-col max-w-[342px] gap-6">
                  <p className="text-lg font-semibold">Change Pin</p>
                  <p className="text-[#7A7886]">
                    Enter your current 6 digits Bestpay PIN below to continue to
                    the next steps.
                  </p>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center gap-5 pt-5">
                  <div className="w-full lg:w-[40%] flex gap-5">
                    <div className="h-full w-full flex gap-5">
                      {showFormOld && (
                        <form
                          onSubmit={handleSubmitOldPin}
                          className="w-full flex flex-col gap-7 items-center justify-center"
                        >
                          {successMessage && (
                            <div className="w-full flex flex-row justify-center text-white text-lg">
                              <BsCheckCircleFill
                                className="text-green-400"
                                size={60}
                              />
                            </div>
                          )}
                          <div className="w-full flex flex-row justify-center text-black font-semibold text-base">
                            Input Your Old PIN
                          </div>
                          {errorMessage && (
                            <div className="w-full flex flex-row justify-center text-red-500 font-semibold text-base">
                              <p className="text-center">*{errorMessage}</p>
                            </div>
                          )}
                          <PinInput onChangePin={setOldPin} />
                          <button
                            type="submit"
                            className="btn bg-gray-300 hover:bg-[#99A98F] font-bold border-none btn-block normal-case"
                          >
                            Continue
                          </button>
                        </form>
                      )}
                      {showFormNew && (
                        <form
                          onSubmit={handleSubmitNewPin}
                          className="w-full flex flex-col gap-7 items-center justify-center"
                        >
                          {successMessage && (
                            <div className="w-full flex flex-row justify-center text-white text-lg">
                              <BsCheckCircleFill
                                className="text-green-400"
                                size={60}
                              />
                            </div>
                          )}
                          <div className="w-full flex flex-row justify-center text-black font-semibold text-base">
                            Input New PIN
                          </div>
                          {errorMessage && (
                            <div className="w-full flex flex-row justify-center text-red-500 font-semibold text-base">
                              <p className="text-center">*{errorMessage}</p>
                            </div>
                          )}
                          <PinInput onChangePin={setNewPin} />
                          <button
                            type="submit"
                            className="btn bg-gray-300 hover:bg-[#99A98F] font-bold border-none btn-block normal-case"
                          >
                            Continue
                          </button>
                        </form>
                      )}
                      {showFormConfirm && (
                        <form
                          onSubmit={handleSubmitChangePin}
                          className="w-full flex flex-col gap-7 items-center justify-center"
                        >
                          {successMessage && (
                            <div className="w-full flex flex-row justify-center text-white text-lg">
                              <BsCheckCircleFill
                                className="text-green-400"
                                size={60}
                              />
                            </div>
                          )}
                          <div className="w-full flex flex-row justify-center text-black font-semibold text-base">
                            Input PIN Confirmation
                          </div>
                          {errorMessage && (
                            <div className="w-full flex flex-row justify-center text-red-500 font-semibold text-base">
                              <p className="text-center">*{errorMessage}</p>
                            </div>
                          )}
                          <PinInput onChangePin={setConfirmPin} />
                          <button
                            className="btn bg-gray-300 hover:bg-[#99A98F] font-bold border-none btn-block normal-case"
                            type="submit"
                          >
                            Continue
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
                {/* <div className="w-full h-full flex flex-col justify-center items-center gap-5 pt-5">
                  <PinInput />
                  <div className="min-w-[431px] pb-10 pt-10">
                    <button
                      className="btn bg-gray-300 hover:bg-[#99A98F] font-bold border-none btn-block normal-case"
                      type="submit"
                    >
                      Continue
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
