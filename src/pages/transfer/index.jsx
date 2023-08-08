import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import Layout from "@/components/Layout";
import cookieConfig from "@/helpers/cookieConfig";
import checkCredentials from "@/helpers/checkCredentials";
import { withIronSessionSsr } from "iron-session/next";
import http from "@/helpers/http";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setRecipient as setRecipientAction } from "@/redux/reducers/transfer";
import { useRouter } from "next/router";
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

export default function SearchRecipient({ userToken }) {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const [recipient, setRecipient] = React.useState({});
  const router = useRouter();
  const getUsers = React.useCallback(
    async (page = 1, search = "") => {
      const { data } = await http(userToken).get("/users", {
        params: {
          page,
          search,
        },
      });
      setRecipient(data);
    },
    [userToken]
  );

  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

  React.useEffect(() => {
    getUsers(1, search);
  }, [getUsers, search]);

  const recipientRedux = useSelector((state) => state.transfer.user);

  React.useEffect(() => {
    if (recipientRedux) {
      router.push("/transfer/input-amount");
    }
  }, [recipientRedux, router]);

  return (
    <>
      <Head>
        <title>Search Recipient</title>
      </Head>
      <Layout token={userToken}>
        <div className="flex flex-col w-full h-full gap-5">
          <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Search Receiver</p>
            </div>
            <div className="flex gap-4 items-center p-4 bg-gray-200 rounded-xl">
              <FiSearch size={25} className="text-gray-400" />
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none"
                placeholder="Search receiver here"
              />
            </div>
            {recipient.results && (
              <>
                {recipient.results.map((item) => (
                  <div
                    className="cursor-pointer flex justify-between items-center"
                    key={`trx-list-${item.id}`}
                  >
                    <div
                      onClick={() => dispatch(setRecipientAction(item))}
                      className="flex justify-between items-center gap-3"
                    >
                      <>
                        <div>
                          {!item.picture && (
                            <div className="w-12 h-12 bg-white border rounded-xl flex justify-center items-center">
                              <FiUser size={35} />
                            </div>
                          )}
                          {item.picture && (
                            <Image
                              className="object-cover w-12 h-12 rounded-xl overflow-hidden"
                              width={100}
                              height={100}
                              src={item.picture}
                              alt={item.fullName || item.email}
                            />
                          )}
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-semibold">{item.fullName}</p>
                          <p className="text-sm text-[#6A6A6A]">{item.email}</p>
                        </div>
                      </>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() =>
                      getUsers(recipient.pageInfo.page - 1, search)
                    }
                    disabled={recipient.pageInfo.page <= 1}
                    className="btn bg-[#99A98F] border-none normal-case"
                  >
                    Prev
                  </button>
                  <div className="font-semibold">
                    {recipient.pageInfo.page} of {recipient.pageInfo.totalPage}
                  </div>
                  <button
                    onClick={() =>
                      getUsers(recipient.pageInfo.page + 1, search)
                    }
                    disabled={
                      recipient.pageInfo.page === recipient.pageInfo.totalPage
                    }
                    className="btn bg-[#99A98F] border-none normal-case"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
