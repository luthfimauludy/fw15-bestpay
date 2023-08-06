import React from "react";
import Image from "next/image";
import defaultPic from "@/assets/default-picture.jpg";
import Layout from "@/components/Layout";
import { withIronSessionSsr } from "iron-session/next";
import cookieConfig from "@/helpers/cookieConfig";
import checkCredentials from "@/helpers/checkCredentials";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import http from "@/helpers/http";
import { clearTransferState } from "@/redux/reducers/transfer";
import moment from "moment/moment";
import PinInput from "@/components/PinInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export default function Confirmation({ userToken }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const recipient = useSelector((state) => state.transfer.user);
  const amount = useSelector((state) => state.transfer.amount);
  const notes = useSelector((state) => state.transfer.notes);
  const profile = useSelector((state) => state.profile.data);
  const [pin, setPin] = React.useState("");
  const balanceLeft = profile.balance - amount;
  const notifyWarnReq = (data) => toast.warn(data);

  React.useEffect(() => {
    if (!recipient) {
      router.replace("/transfer");
    }
  }, [router, recipient]);

  const doTransfer = async () => {
    try {
      const form = new URLSearchParams({
        recipientId: recipient.id,
        notes: notes,
        amount,
        pin,
      });
      const { data } = await http(userToken).post(
        "/transactions/transfer",
        form
      );
      dispatch(clearTransferState());
      if (data.results) {
        router.replace("/transfer/status/" + data.results.id);
      }
    } catch (error) {
      const message = error?.response?.data?.message;
      if (message === "transfer_wrong_pin") {
        notifyWarnReq("Opss! Wrong PIN");
      } else {
        notifyWarnReq(message);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Transfer Confirmation</title>
      </Head>
      <Layout token={userToken}>
        <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Transfer To</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
              <div>
                {recipient.picture ? (
                  <Image
                    className="object-cover w-14 h-14 rounded-xl"
                    width={150}
                    height={150}
                    src={recipient.picture}
                    alt="User Picture"
                  />
                ) : (
                  <Image
                    className="object-cover w-14 h-14 rounded-xl"
                    width={150}
                    height={150}
                    src={defaultPic}
                    alt="Default Picture"
                  />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">
                  {recipient?.fullName || recipient?.username}
                </p>
                <p className="text-sm text-[#6A6A6A]">
                  {recipient?.phones ? recipient.phones : recipient?.email}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-lg font-semibold">Details</p>
            </div>
            <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
              <div className="flex flex-col gap-2">
                <p className="text-[#6A6A6A]">Amount</p>
                <p className="text-[22px] font-semibold">
                  {amount && `Rp.${Number(amount).toLocaleString("id")}`}
                </p>
              </div>
            </div>
            <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
              <div className="flex flex-col gap-2">
                <p className="text-[#6A6A6A]">Balance Left</p>
                <p className="text-[22px] font-semibold">
                  {balanceLeft &&
                    `Rp.${Number(balanceLeft).toLocaleString("id")}`}
                </p>
              </div>
            </div>
            <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
              <div className="flex flex-col gap-2">
                <p className="text-[#6A6A6A]">Date & Time</p>
                <p className="text-[22px] font-semibold">
                  {moment(new Date()).format("MMMM Do, YYYY - HH.mm")}
                </p>
              </div>
            </div>
            <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
              <div className="flex flex-col gap-2">
                <p className="text-[#6A6A6A]">Notes</p>
                <p className="text-[22px] font-semibold">{notes}</p>
              </div>
            </div>
            <div className="w-full text-end mt-5">
              <button
                onClick={() => window.my_modal_3.showModal()}
                className="btn bg-gray-300 hover:bg-[#99A98F] w-full lg:w-[170px] border-none normal-case"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <dialog id="my_modal_3" className="modal">
          <form
            method="dialog"
            className="modal-box flex flex-col gap-6 bg-white"
          >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-primary text-lg">
              Enter PIN to Transfer
            </h3>
            <p className="py-4 pr-28 text-left">
              Enter your 6 digits PIN for confirmation to continue transferring
              money.{" "}
            </p>
            <PinInput onChangePin={setPin} />
            <div className="modal-action">
              <button
                onClick={doTransfer}
                disabled={!(pin.length >= 6)}
                type="submit"
                className="btn bg-gray-300 hover:bg-[#99A98F] w-full h-full lg:w-36 border-none normal-case rounded-xl text-md"
              >
                Continue
              </button>
            </div>
          </form>
        </dialog>
      </Layout>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
}
