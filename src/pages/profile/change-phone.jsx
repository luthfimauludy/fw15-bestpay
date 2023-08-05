import React from "react";
import { BsTelephone } from "react-icons/bs";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { withIronSessionSsr } from "iron-session/next";
import cookieConfig from "@/helpers/cookieConfig";
import checkCredentials from "@/helpers/checkCredentials";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "@/redux/reducers/profile";
import { MdCheck, MdError } from "react-icons/md";
import { Formik } from "formik";
import * as Yup from "yup";
import http from "@/helpers/http";

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

const regExp = /\b\d{10}\b/;
const validationSchema = Yup.object({
  phones: Yup.number().test(
    "len",
    "At least 7 characters",
    (val) => !val || (val && val.toString().length >= 7)
  ),
});

export default function ChangePhone({ userToken }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMassage] = React.useState("");

  const doUpdatePhone = async (values) => {
    const form = new FormData();
    if (values.phones) {
      form.append("phones", values.phones);
    }
    const { data } = await http(userToken).patch("/profile", form);
    if (data.results) {
      dispatch(setProfile(data.results));
      setSuccessMassage(`${data.message} Phone Number Updated!`);
      setTimeout(() => {
        setSuccessMassage("");
      }, 1500);
    }
  };

  return (
    <>
      <Head>
        <title>Change Phone Number</title>
      </Head>
      <main className="bg-[#E5E5E5] h-full">
        <Navbar token={userToken} />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <SideBar />
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div className="flex flex-col w-full p-[30px] gap-24">
                <div className="flex flex-col max-w-[342px] gap-6">
                  <p className="text-lg font-semibold">Edit Phone Number</p>
                  <p className="text-[#7A7886]">
                    Add at least one phone number for the transfer ID so you can
                    start transfering your money to another user.
                  </p>
                </div>
                {errorMessage && (
                  <div className="flex flex-row justify-center alert alert-[#e11d48] shadow-lg text-lg">
                    <MdError size={30} />
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className="flex flex-row justify-center alert alert-[#22c55e] shadow-lg text-lg">
                    <MdCheck size={30} />
                    {successMessage}
                  </div>
                )}
                <Formik
                  initialValues={{
                    phones: profile?.phones || [],
                  }}
                  validationSchema={validationSchema}
                  onSubmit={doUpdatePhone}
                  enableReinitialize={true}
                >
                  {({
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    values,
                    errors,
                    touched,
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col items-center gap-2 pt-5"
                    >
                      <div
                        className={`flex items-center min-w-[431px] border-b border-gray-500 gap-5 pb-4 ${
                          errors.phones && touched.phones && "border-[#e11d48]"
                        }`}
                      >
                        <BsTelephone size={35} />
                        <p>+62</p>
                        <input
                          type="text"
                          name="phones"
                          className="w-full bg-transparent outline-none"
                          placeholder="Enter your phone number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phones}
                        />
                      </div>
                      {errors.phones && touched.phones && (
                        <label className="label">
                          <span className="label-text-alt text-[#e11d48]">
                            {errors.phones}
                          </span>
                        </label>
                      )}
                      <div className="min-w-[431px] pb-10 pt-10">
                        <button
                          className="btn bg-gray-300 font-bold border-none btn-block normal-case"
                          type="submit"
                        >
                          Edit Phone Number
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
