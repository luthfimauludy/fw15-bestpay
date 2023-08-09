import React from "react";
import { FiDownload } from "react-icons/fi";
import { HiCheck } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import defaultPic from "@/assets/default-picture.jpg";
import Layout from "@/components/Layout";
import cookieConfig from "@/helpers/cookieConfig";
import checkCredentials from "@/helpers/checkCredentials";
import { withIronSessionSsr } from "iron-session/next";
import { useRouter } from "next/router";
import moment from "moment";
import { useSelector } from "react-redux";
import http from "@/helpers/http";
import Head from "next/head";

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

export default function Status({ userToken }) {
  const profile = useSelector((state) => state.profile.data);
  const [transaction, setTransaction] = React.useState({});
  const [recipient, setRecipient] = React.useState({});
  const balanceLeft = profile.balance - transaction.amount;

  const {
    query: { id },
  } = useRouter();

  const getDataStatus = React.useCallback(async () => {
    const { data } = await http(userToken).get("/transactions/" + id);
    if (data.results) {
      setTransaction(data.results);
      setRecipient(data.results.recipient);
    }
  }, [id, userToken]);

  React.useEffect(() => {
    getDataStatus();
  }, [getDataStatus]);

  return (
    <>
      <Head>
        <title>Transaction Status</title>
      </Head>
      <Layout token={userToken}>
        <div
          id={id}
          className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl"
        >
          <div className="flex flex-col justify-center items-center w-full p-[30px] gap-7">
            <div className="flex justify-center items-center w-16 h-16 bg-green-500 rounded-full">
              <HiCheck size={35} color="white" />
            </div>
            <p className="text-[22px] font-semibold">Transfer Success</p>
          </div>
          <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-[#6A6A6A]">Amount</p>
              <p className="text-[22px] font-semibold">
                {transaction.amount &&
                  `Rp.${Number(transaction.amount).toLocaleString("id")}`}
              </p>
            </div>
          </div>
          <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-[#6A6A6A]">Balance Left</p>
              <p className="text-[22px] font-semibold">
                {profile?.balance &&
                  `Rp.${Number(profile?.balance).toLocaleString("id")}`}
              </p>
            </div>
          </div>
          <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-[#6A6A6A]">Date & Time</p>
              <p className="text-[22px] font-semibold">
                {moment(transaction.createdAt).format("MMMM Do, YYYY - HH.mm")}
              </p>
            </div>
          </div>
          <div className="flex items-center w-full min-h-[110px] shadow-lg shadow-gray-300/50 rounded-xl p-5 gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-[#6A6A6A]">Notes</p>
              <p className="text-[22px] font-semibold">{transaction.notes}</p>
            </div>
          </div>
          <div className="pt-5">
            <p className="text-lg font-semibold">Transfer to</p>
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
          <div className="flex gap-4 justify-end pt-[75px]">
            <button className="btn w-[170px] bg-[#99A98F]/40 hover:bg-[#99A98F] border-none normal-case">
              <FiDownload size={25} />
              Download PDF
            </button>
            <Link
              href="/home"
              className="btn w-[170px] bg-[#99A98F]/40 hover:bg-[#99A98F] border-none normal-case"
              type="button"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
