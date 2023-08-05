import React from "react";
import { FiArrowRight, FiEdit2 } from "react-icons/fi";
import Link from "next/link";
import cookieConfig from "@/helpers/cookieConfig";
import checkCredentials from "@/helpers/checkCredentials";
import { withIronSessionSsr } from "iron-session/next";
import Layout from "@/components/Layout";
import http from "@/helpers/http";
import Image from "next/image";
import profilePict from "../../assets/default-picture.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "@/redux/reducers/profile";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token;
    checkCredentials(token, res, "/auth/profile");

    return {
      props: {
        userToken: token,
      },
    };
  },
  cookieConfig
);

export default function SelfProfile({ userToken }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  const [pictureURI, setPictureURI] = React.useState("");
  const [selectedPicture, setSelectedPicture] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const fileToDataUrl = (file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setPictureURI(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const changePicture = (e) => {
    const file = e.target.files[0];
    setSelectedPicture(file);
    fileToDataUrl(file);
  };

  const doChangePicture = async (values) => {
    setLoading(true);
    const form = new FormData();
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        form.append(key, values[key]);
      }
    });
    if (selectedPicture) {
      form.append("picture", selectedPicture);
    }
    if (userToken) {
      const { data } = await http(userToken).patch("/profile", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(setProfile(data.results));
      setLoading(false);
      setPictureURI("");
    }
  };

  return (
    <>
      <Layout token={userToken}>
        <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
          <div className="flex flex-col justify-center items-center w-full p-[30px] gap-[10px]">
            <div className="w-full flex flex-col items-center justify-between gap-5">
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center items-center w-20 h-20 rounded-2xl overflow-hidden">
                  {pictureURI && (
                    <div className="w-20 h-20 overflow-hidden rounded-2xl">
                      <Image
                        className="object-cover w-full h-full"
                        src={pictureURI}
                        width={150}
                        height={150}
                        alt="selected-picture"
                      />
                    </div>
                  )}
                  {!pictureURI && (
                    <div className="w-16 h-16 overflow-hidden rounded-2xl">
                      {profile?.picture ? (
                        <Image
                          width={150}
                          height={150}
                          className="object-cover w-full h-full"
                          src={profile?.picture}
                          alt="user-profile-img"
                        />
                      ) : (
                        <Image
                          width={150}
                          height={150}
                          className="object-cover"
                          src={profilePict}
                          alt="user-profile-default"
                        />
                      )}
                    </div>
                  )}
                </div>
                <label className="flex gap-2 items-center justify-center font-[500] text-accent hover:text-primary cursor-pointer">
                  {!pictureURI ? (
                    <>
                      <input
                        name="picture"
                        type="file"
                        className="hidden"
                        onChange={changePicture}
                      />
                      <FiEdit2 size={15} />
                      Edit
                    </>
                  ) : null}
                </label>
                {pictureURI && (
                  <div className="flex items-start gap-2">
                    <button
                      onClick={doChangePicture}
                      className="font-[500] text-accent hover:text-primary"
                      type="button"
                    >
                      Save
                    </button>
                    {loading && (
                      <span className="loading loading-spinner loading-sm"></span>
                    )}
                  </div>
                )}
              </div>
              <div
                className={`text-2xl text-neutral font-semibold ${
                  profile?.fullName ? "capitalize" : "lowercase"
                }`}
              >
                {!profile?.fullName ? profile?.email : profile?.fullName}
              </div>
              <div className="text-base text-neutral">
                {profile?.phones?.length >= 1 ? profile?.phones : "-"}
              </div>
            </div>

            <div className="flex flex-col gap-5 pt-10">
              <Link
                href="/profile/personal-info"
                className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
              >
                <div className="font-semibold">Personal Infromation</div>
                <FiArrowRight size={25} />
              </Link>
              <Link
                href="/profile/change-password"
                className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
              >
                <div className="font-semibold">Change Password</div>
                <FiArrowRight size={25} />
              </Link>
              <Link
                href="/profile/change-pin"
                className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
              >
                <div className="font-semibold">Change PIN</div>
                <FiArrowRight size={25} />
              </Link>
              <Link
                href="/auth/logout"
                className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
              >
                <div className="font-semibold">Logout</div>
                <FiArrowRight size={25} />
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      {/* <main className="bg-[#E5E5E5] h-full">
        <Navbar />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <SideBar />
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div className="flex flex-col justify-center items-center w-full p-[30px] gap-[10px]">
                <div className="flex justify-center items-center w-16 h-16 rounded-full">
                  Image
                </div>
                <div className="flex items-center gap-3 text-[#7A7886]">
                  <FiEdit2 size={15} />
                  <p>Edit</p>
                </div>
                <p className="text-2xl font-semibold pt-[5px]">
                  Robert Chandler
                </p>
                <p className="text-[#7A7886]">+62 813-9387-7946</p>
                <div className="flex flex-col gap-5 pt-10">
                  <Link
                    href="/profile/personal-info"
                    className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
                  >
                    <div className="font-semibold">Personal Infromation</div>
                    <FiArrowRight size={25} />
                  </Link>
                  <Link
                    href="/profile/change-password"
                    className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
                  >
                    <div className="font-semibold">Change Password</div>
                    <FiArrowRight size={25} />
                  </Link>
                  <Link
                    href="/profile/change-pin"
                    className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
                  >
                    <div className="font-semibold">Change PIN</div>
                    <FiArrowRight size={25} />
                  </Link>
                  <Link
                    href="/auth/logout"
                    className="flex justify-between min-w-[433px] max-h-16 p-5 bg-gray-300 rounded-xl"
                  >
                    <div className="font-semibold">Logout</div>
                    <FiArrowRight size={25} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="flex justify-between w-full max-h-[68px] py-5 px-[150px] bg-[#99A98F] text-white">
            <p className="font">2023 BestPay. All right reserved</p>
            <div className="flex gap-10">
              <p>+62 5637 8892 9901</p>
              <p>contact@bestpay.com</p>
            </div>
          </div>
        </footer>
      </main> */}
    </>
  );
}
