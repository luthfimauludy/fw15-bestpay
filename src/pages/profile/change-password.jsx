import React from "react";
import { FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cookieConfig from "@/helpers/cookieConfig";
import checkCredentials from "@/helpers/checkCredentials";
import { withIronSessionSsr } from "iron-session/next";
import Head from "next/head";
import * as Yup from "yup";
import http from "@/helpers/http";
import { MdCheck, MdError } from "react-icons/md";
import { Formik } from "formik";

const validationSchema = Yup.object({
  oldPassword: Yup.string().required("Password cannot be empty!"),
  newPassword: Yup.string()
    .min(4, "At least 4 characters")
    .required("New password cannot be empty!"),
  confirmPassword: Yup.string()
    .required("Confirm password cannot be empty!")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

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

export default function ChangePassword({ userToken }) {
  const [eye, setEye] = React.useState(false);
  const [eye2, setEye2] = React.useState(false);
  const [eye3, setEye3] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [oldPassword, setOldPassword] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const doChangePassword = async (values, { resetForm }) => {
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const form = new URLSearchParams({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      }).toString();

      const { data } = await http(userToken).patch(
        "/profile/change-password",
        form
      );
      if (data.success === true) {
        setSuccessMessage("Change password success!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
        setLoading(false);
        resetForm();
      }
    } catch (error) {
      const message = "failed, wrong old password!";
      setErrorMessage(message);
      setLoading(false);
    }
  };

  const handleOldPassword = () => {
    setEye(!oldPassword);
    setOldPassword(!eye);
  };
  const handleNewPassword = () => {
    setEye2(!newPassword);
    setNewPassword(!eye2);
  };
  const handleConfirmPassword = () => {
    setEye3(!confirmPassword);
    setConfirmPassword(!eye3);
  };

  return (
    <>
      <Head>
        <title>Change Password</title>
      </Head>
      <main className="bg-[#E5E5E5] h-full">
        <Navbar token={userToken} />
        <div className="flex w-full px-[150px] py-10 gap-5">
          <SideBar />
          <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-5 min-w-[367px] bg-white p-[30px] rounded-xl">
              <div className="flex flex-col w-full p-[30px] gap-5">
                <div className="flex flex-col max-w-[342px] gap-6">
                  <p className="text-lg font-semibold">Change Password</p>
                  <p className="text-[#7A7886]">
                    You must enter your current password and then type your new
                    password twice.
                  </p>
                </div>
                {errorMessage && (
                  <div className="flex flex-row justify-center alert bg-red-400 shadow-lg text-lg">
                    <MdError size={30} color="white" />
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className="flex flex-row justify-center alert bg-green-400 shadow-lg text-lg">
                    <MdCheck size={30} color="white" />
                    {successMessage}
                  </div>
                )}
                <Formik
                  initialValues={{
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={doChangePassword}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      autoComplete="off"
                      className="flex flex-col items-center gap-2 pt-5"
                    >
                      <div
                        className={`flex min-w-[431px] border-b border-gray-500 gap-5 pt-10 pb-4 relative ${
                          errors.oldPassword &&
                          touched.oldPassword &&
                          "border-[#e11d48]"
                        }`}
                      >
                        <FiLock size={35} />
                        <input
                          type={oldPassword ? "text" : "password"}
                          name="oldPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.oldPassword}
                          className="w-full bg-transparent outline-none"
                          placeholder="Enter your old password"
                        />
                        <button
                          type="button"
                          onClick={handleOldPassword}
                          className="flex justify-center items-center right-2 bottom-4 absolute"
                        >
                          {eye ? <FiEye size={25} /> : <FiEyeOff size={25} />}
                        </button>
                      </div>
                      {errors.oldPassword && touched.oldPassword && (
                        <label className="label">
                          <span className="label-text-alt text-[#e11d48]">
                            {errors.oldPassword}
                          </span>
                        </label>
                      )}
                      <div
                        className={`flex min-w-[431px] border-b border-gray-500 gap-5 pt-10 pb-4 relative ${
                          errors.newPassword &&
                          touched.newPassword &&
                          "border-[#e11d48]"
                        }`}
                      >
                        <FiLock size={35} />
                        <input
                          type={newPassword ? "text" : "password"}
                          name="newPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.newPassword}
                          className="w-full bg-transparent outline-none"
                          placeholder="Enter your new password"
                        />
                        <button
                          type="button"
                          onClick={handleNewPassword}
                          className="flex justify-center items-center right-2 bottom-4 absolute"
                        >
                          {eye2 ? <FiEye size={25} /> : <FiEyeOff size={25} />}
                        </button>
                      </div>
                      {errors.newPassword && touched.newPassword && (
                        <label className="label">
                          <span className="label-text-alt text-[#e11d48]">
                            {errors.newPassword}
                          </span>
                        </label>
                      )}
                      <div
                        className={`flex min-w-[431px] border-b border-gray-500 gap-5 pt-10 pb-4 relative ${
                          errors.confirmPassword &&
                          touched.confirmPassword &&
                          "border-[#e11d48]"
                        }`}
                      >
                        <FiLock size={35} />
                        <input
                          type={confirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          className="w-full bg-transparent outline-none"
                          placeholder="Enter your confirm password"
                        />
                        <button
                          type="button"
                          onClick={handleConfirmPassword}
                          className="flex justify-center items-center right-2 bottom-4 absolute"
                        >
                          {eye3 ? <FiEye size={25} /> : <FiEyeOff size={25} />}
                        </button>
                      </div>
                      {errors.confirmPassword && touched.confirmPassword && (
                        <label className="label">
                          <span className="label-text-alt text-[#e11d48]">
                            {errors.confirmPassword}
                          </span>
                        </label>
                      )}
                      <div className="min-w-[431px] pb-10 pt-20">
                        {loading ? (
                          <button className="w-full btn btn-[#99A98F] capitalize text-base text-white font-semibold hover:font-bold">
                            <span className="loading loading-spinner loading-sm"></span>
                          </button>
                        ) : (
                          <button
                            className="btn bg-gray-300 hover:bg-[#99A98F] font-bold border-none btn-block normal-case"
                            type="submit"
                          >
                            Change Password
                          </button>
                        )}
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
