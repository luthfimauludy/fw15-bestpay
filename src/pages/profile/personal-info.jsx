import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import EditProfile from "@/components/EditProfile";
import cookieConfig from "@/helpers/cookieConfig";
import { useSelector } from "react-redux";
import { withIronSessionSsr } from "iron-session/next";
import checkCredentials from "@/helpers/checkCredentials";
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

export default function PersonalInfo({ userToken }) {
  const profile = useSelector((state) => state.profile.data);
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpenModal = () => {
    if (modalOpen === true) {
      setModalOpen(false);
      setTimeout(() => {
        setModalOpen(true);
      }, 100);
    } else {
      setModalOpen(true);
    }
  };
  return (
    <>
      <Head>
        <title>Personal Information</title>
      </Head>
      <main className="bg-[#E5E5E5] h-full">
        <Navbar token={userToken} />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <SideBar />
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div className="flex flex-col w-full p-[30px] gap-5">
                <div className="flex flex-col max-w-[342px] gap-6">
                  <p className="text-lg font-semibold">Personal Information</p>
                  <p className="text-[#7A7886]">
                    We got your personal information from the sign up proccess.
                    If you want to make changes on your information, contact our
                    support.
                  </p>
                </div>
                <div className="flex flex-col gap-5 pt-5">
                  <div className="flex items-center w-full min-h-[92px] shadow-lg shadow-gray-300/50 rounded-xl p-[15px] gap-5">
                    <div className="w-full flex flex-col gap-2">
                      <div className="w-full flex items-center justify-between">
                        <p className="text-[#6A6A6A]">Full Name</p>
                        <div className="text-base text-[#99A98F] font-bold">
                          <button onClick={handleOpenModal}>Edit</button>
                        </div>
                      </div>
                      <div className="text-xl font-semibold">
                        {profile?.fullName ? profile?.fullName : "-"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center w-full min-h-[92px] shadow-lg shadow-gray-300/50 rounded-xl p-[15px] gap-5">
                    <div className="flex flex-col gap-2">
                      <p className="text-[#6A6A6A]">Verified E-mail</p>
                      <p className="font-semibold text-[22px]">
                        {profile?.email ? profile?.email : "-"}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full min-h-[92px] shadow-lg shadow-gray-300/50 rounded-xl p-[15px] gap-5">
                    <div className="flex flex-col gap-2">
                      <p className="text-[#6A6A6A]">Phone Number</p>
                      <p className="font-semibold text-[22px]">
                        {profile?.phones?.length >= 1 ? profile?.phones : "-"}
                      </p>
                    </div>
                    <Link
                      href="./change-phone"
                      className="text-[#99A98F] font-bold"
                    >
                      Manage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {modalOpen && (
          <EditProfile visibleModal={modalOpen} token={userToken} />
        )}
      </main>
    </>
  );
}
