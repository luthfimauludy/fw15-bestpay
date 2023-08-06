import React from "react";
import { FiEdit2 } from "react-icons/fi";
import Image from "next/image";
import defaultPic from "@/assets/default-picture.jpg";
import cookieConfig from "@/helpers/cookieConfig";
import checkCredentials from "@/helpers/checkCredentials";
import { withIronSessionSsr } from "iron-session/next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/components/Layout";
import { setAmount, setNotes } from "@/redux/reducers/transfer";

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

export default function InputAmount({ userToken }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  const recipient = useSelector((state) => state.transfer.user);
  const amount = useSelector((state) => state.transfer.amount);

  React.useEffect(() => {
    if (!recipient) {
      router.replace("/transfer");
    }
  }, [router, recipient]);

  const checkAmount = (amount) => {
    amount = parseInt(amount);
    if (amount > profile.balance) {
      return profile.balance;
    }
    return amount;
  };

  return (
    <>
      <Layout token={userToken}>
        <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
          <div>
            <p className="text-lg font-semibold">Transfer Money</p>
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
          <div className="max-w-[340px] pt-5">
            <p className="text-[#7A7886]">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
          </div>
          <form className="flex flex-col justify-center items-center gap-10 pt-11">
            <input
              onChange={(e) => dispatch(setAmount(e.target.value))}
              value={checkAmount(amount)}
              className="text-center text-[42px] outline-none"
              placeholder="0.00"
              type="number"
            />
            <p className="font-semibold text-center">
              Rp. {!profile?.balance ? "0" : profile?.balance} Available
            </p>
            <div className="flex min-w-[343px] border-b border-gray-500 gap-4 pt-5 pb-4">
              <FiEdit2 size={20} />
              <input
                className="outline-none"
                placeholder="Add some notes"
                type="text"
                onChange={(e) => dispatch(setNotes(e.target.value))}
              />
            </div>
            <div className="w-full text-end pt-9">
              <button
                className="btn bg-gray-300 hover:bg-[#99A98F] w-full lg:w-[170px] border-none normal-case"
                type="button"
                onClick={() => router.replace("/transfer/confirmation")}
                disabled={amount < 10000}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}
