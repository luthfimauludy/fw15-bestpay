import React from "react";
import { FiArrowUp, FiArrowDown, FiPlus, FiUser } from "react-icons/fi";
import Image from "next/image";
import graphic from "@/assets/graphic.png";
import Link from "next/link";
import { withIronSessionSsr } from "iron-session/next";
import cookieConfig from "@/helpers/cookieConfig";
import checkCredentials from "@/helpers/checkCredentials";
import Layout from "@/components/Layout";
import { useDispatch, useSelector } from "react-redux";
import http from "@/helpers/http";
import { setTransactions } from "@/redux/reducers/transactions";
import TransactionTopUp from "@/components/TransactionTopUp";
import Head from "next/head";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token;
    checkCredentials(token, res, "/auth/login");

    if (!token) {
      res.setHeader("location", "/auth/login");
      res.statusCode = 302;
      res.end();
      return {
        props: {},
      };
    }

    return {
      props: {
        userToken: token,
      },
    };
  },
  cookieConfig
);

export default function Home({ userToken }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  const transaction = useSelector((state) => state.transactions.data);
  const [modalOpen, setModalOpen] = React.useState(false);

  const getTransaction = React.useCallback(async () => {
    const { data } = await http(userToken).get("/transactions", {
      params: { limit: 5 },
    });
    dispatch(setTransactions(data.results));
  }, [userToken, dispatch]);

  React.useEffect(() => {
    getTransaction();
  }, [getTransaction]);

  const openModal = () => {
    if (modalOpen === true) {
      setModalOpen(false);
      setTimeout(() => {
        setModalOpen(true);
      }, 200);
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Layout token={userToken}>
        <div className="flex flex-col w-full h-full gap-5">
          <div className="flex justify-between w-full max-h-[190px] p-[30px] text-white bg-[#99A98F] rounded-xl">
            <div className="flex flex-col gap-3">
              <p className="text-lg font">Balance</p>
              <p className="text-[40px] font-semibold">
                {profile?.balance
                  ? `Rp.${Number(profile?.balance).toLocaleString("id")}`
                  : "Rp.0"}
              </p>
              <p className="text-sm">{profile?.email}</p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/transfer"
                className="w-[162px] h-[57px] btn btn-white normal-case text-lg bg-gray-300/50"
              >
                <FiArrowUp size={25} /> Transfer
              </Link>
              <button
                onClick={() => {
                  openModal();
                }}
                className="w-[162px] h-[57px] btn btn-white normal-case text-lg bg-gray-300/50"
              >
                <FiPlus size={25} /> Top Up
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-[60px] max-w-[463px] min-h-full bg-white p-[30px] rounded-xl">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <FiArrowDown size={25} color="green" />
                  <p className="text-xs text-[#6A6A6A]">Income</p>
                  <p className="text-lg font-semibold">Rp2.120.000</p>
                </div>
                <div className="flex flex-col gap-2">
                  <FiArrowUp size={25} color="red" />
                  <p className="text-xs text-[#6A6A6A]">Expense</p>
                  <p className="text-lg font-semibold">Rp1.560.000</p>
                </div>
              </div>
              <div className="flex justify-center">
                <Image src={graphic} alt="graphic" />
              </div>
            </div>
            <div className="flex flex-col gap-10 min-w-[397px] bg-white p-[30px] rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Transaction History</p>
                <Link href="/history">
                  <p className="text-sm text-[#99A98F]">See all</p>
                </Link>
              </div>
              <div className="flex flex-col gap-5">
                {transaction.map((item) => (
                  <div
                    className="flex justify-between items-center"
                    key={`transaction-list-${item.id}`}
                  >
                    <div className="flex justify-between items-center gap-3">
                      {item.type === "TOP-UP" && (
                        <>
                          <div>
                            {!item.recipient.picture && (
                              <div className="w-12 h-12 bg-white border rounded-xl flex justify-center items-center">
                                <FiUser size={35} />
                              </div>
                            )}
                            {item.recipient.picture && (
                              <Image
                                width={150}
                                height={150}
                                className="object-cover w-12 h-12 rounded-xl overflow-hidden"
                                src={item.recipient.picture}
                                alt="userImage"
                              />
                            )}
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="font-semibold">
                              {item?.recipient?.fullName ||
                                item?.recipient?.email}
                            </p>
                            <p className="text-sm text-[#6A6A6A]">Topup</p>
                          </div>
                        </>
                      )}
                      {item.type === "TRANSFER" && (
                        <>
                          {item.recipient.id !== profile.id && (
                            <>
                              <div>
                                {!item.recipient.picture && (
                                  <div className="w-12 h-12 bg-white border rounded-xl flex justify-center items-center">
                                    <FiUser size={35} />
                                  </div>
                                )}
                                {item.recipient.picture && (
                                  <Image
                                    width={150}
                                    height={150}
                                    className="object-cover w-12 h-12 rounded-xl overflow-hidden"
                                    src={item.recipient.picture}
                                    alt="userImage"
                                  />
                                )}
                              </div>
                              <div className="flex flex-col gap-2">
                                <p className="font-semibold">
                                  {item?.recipient?.fullName ||
                                    item?.recipient?.email}
                                </p>
                                <p className="text-sm text-[#6A6A6A]">
                                  Outcome
                                </p>
                              </div>
                            </>
                          )}

                          {item.recipient.id === profile.id && (
                            <>
                              <div>
                                {!item.recipient.picture && (
                                  <div className="w-12 h-12 bg-white border rounded-xl flex justify-center items-center">
                                    <FiUser size={35} />
                                  </div>
                                )}
                                {item.recipient.picture && (
                                  <Image
                                    width={150}
                                    height={150}
                                    className="object-cover w-12 h-12 rounded-xl overflow-hidden"
                                    src={item.recipient.picture}
                                    alt="userImage"
                                  />
                                )}
                              </div>
                              <div className="flex flex-col gap-2">
                                <p className="font-semibold">
                                  {item?.recipient?.fullName ||
                                    item?.recipient?.email}
                                </p>
                                <p className="text-sm text-[#6A6A6A]">Income</p>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                    {item?.type === "TOP-UP" && (
                      <div className="text-base font-semibold text-green-500">
                        +
                        {item.amount &&
                          `Rp.${Number(item.amount).toLocaleString("id")}`}
                      </div>
                    )}
                    {item?.type === "TRANSFER" &&
                      (item.sender.id !== profile.id ? (
                        <div className="text-base font-semibold text-green-500">
                          +
                          {item.amount &&
                            `Rp.${Number(item.amount).toLocaleString("id")}`}
                        </div>
                      ) : (
                        <div className="text-base font-semibold text-red-500">
                          -
                          {item.amount &&
                            `Rp.${Number(item.amount).toLocaleString("id")}`}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {modalOpen && (
        <TransactionTopUp visibleModal={modalOpen} userToken={userToken} />
      )}
    </>
  );
}
