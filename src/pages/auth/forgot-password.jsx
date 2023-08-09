import React from "react";
import Image from "next/image";
import phone from "../../assets/phone-auth.png";
import * as Yup from "yup";
import { FiMail } from "react-icons/fi";
import { FaBehanceSquare } from "react-icons/fa";
import { Formik } from "formik";
import { useRouter } from "next/router";
import http from "@/helpers/http";
import Head from "next/head";

export default function ForgotPassword() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email is not valid!")
      .required("Email is required!"),
  });

  async function doForgot(values) {
    try {
      setErrorMessage("");
      setLoading(true);
      const form = new URLSearchParams({
        email: values.email,
      }).toString();
      const { data } = await http().post("/auth/forgot-password", form);
      if (data) {
        setSuccessMessage("Send request to reset password");
      }
      setTimeout(() => {
        router.push("/auth/reset-password");
      }, 3000);
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message?.includes("auth_wrong_user")) {
        setErrorMessage("User not found");
      }

      if (message?.includes("auth_forgot_already_requested")) {
        setErrorMessage("Request already sent");
      }

      setTimeout(() => {
        setErrorMessage(false);
        setSuccessMessage(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <main className="bg-[#E5E5E5]">
        <div className="flex md:flex-row flex-col min-h-screen">
          {/* Window */}
          <div className="hidden md:flex flex-col flex-1 bg-header bg-cover bg-no-repeat py-[50px] px-[100px] text-white">
            <div className="flex items-center font-semibold">
              <FaBehanceSquare size={45} color="black" />
              <p className="font-bold text-[29px]">stPay</p>
            </div>
            <div>
              <Image src={phone} alt="Phone" />
            </div>
            <div className="text-2xl font-bold pb-8">
              App that Covering Banking Needs.
            </div>
            <div className="max-w-[497px]">
              BestPay is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in BestPay everyday with worldwide
              users coverage.
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden text-center px-[140px] pt-[100px] pb-[60px] text-[29px] font-bold">
            BestPay
          </div>
          <div className="w-full md:max-w-[550px] bg-white md:bg-[#E5E5E5] rounded-t-3xl md:rounded-none py-10 md:py-[80px] px-4 md:pl-12 md:pr-[80px]">
            {/* Mobile */}
            <div className="md:hidden flex flex-col justify-center items-center gap-8">
              <p className="max-w-[394px] text-2xl font-bold leading-loose">
                Reset Password
              </p>
              <p className="max-w-[310px] text-center text-gray-400 leading-loose">
                Enter your BestPay e-mail so we can send you a password reset
                link.
              </p>
            </div>

            {/* Window */}
            <div className="hidden md:flex flex-col gap-8">
              <p className="max-w-[394px] text-2xl font-bold leading-loose">
                Did You Forgot Your Password? Don’t Worry, You Can Reset Your
                Password In a Minutes.
              </p>
              <p className="leading-loose">
                To reset your password, you must type your e-mail and we will
                send a link to your email and you will be directed to the reset
                password screens.
              </p>
              {errorMessage && (
                <div className="flex justify-center alert alert-error bg-red-500 text-xl text-center border-none">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="flex justify-center alert alert-success text-xl bg-[#99A98F] text-center border-none">
                  {successMessage}
                </div>
              )}
            </div>
            <Formik
              onSubmit={doForgot}
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                handleChange,
                isSubmitting,
              }) => {
                return (
                  <form onSubmit={handleSubmit} className="pt-16">
                    <div className="flex border-b border-gray-500 gap-5 pb-4">
                      <FiMail size={35} />
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full rounded-lg bg-transparent outline-none"
                        placeholder="Enter your e-mail"
                      />
                    </div>
                    {errors.email && touched.email && (
                      <label htmlFor="email" className="label">
                        <span className="label-text-alt font-semibold text-sm text-red-500">
                          {errors.email}
                        </span>
                      </label>
                    )}
                    <div className="pb-10 pt-20">
                      <button
                        disabled={isSubmitting}
                        className="btn bg-gray-300 hover:bg-[#99A98F] font-bold border-none btn-block normal-case"
                        type="submit"
                      >
                        {loading && (
                          <span className="loading loading-spinner loading-sm"></span>
                        )}
                        {!loading && "Confirm"}
                      </button>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </main>
    </>
  );
}
