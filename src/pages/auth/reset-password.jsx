import React from "react";
import Image from "next/image";
import phone from "../../assets/phone-auth.png";
import * as Yup from "yup";
import { FiLock, FiEye, FiEyeOff, FiMail } from "react-icons/fi";
import { FaBehanceSquare } from "react-icons/fa";
import { useRouter } from "next/router";
import http from "@/helpers/http";
import { Formik } from "formik";
import Head from "next/head";

export default function ResetPassword() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [eye, setEye] = React.useState(false);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email is not valid!")
      .required("Email is required!"),
    password: Yup.string()
      .min(8, "Password must be strong, at least 8 characters")
      .required("Password is required!"),
    confirmPassword: Yup.string()
      .required("Email is required!")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  function showEye() {
    setEye(!eye);
  }

  async function doReset(values) {
    try {
      setErrorMessage("");
      setLoading(true);
      const form = new URLSearchParams({
        email: values.email,
        newPassword: values.password,
        confirmPassword: values.confirmPassword,
      }).toString();
      const { data } = await http().post("/auth/reset-password", form);
      if (data) {
        setSuccessMessage("Reset password successfully");
      }
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message) {
        setErrorMessage("Error reset password");
      }
    } finally {
      setLoading(false);
    }
  }

  if (successMessage) {
    setTimeout(() => {
      setErrorMessage(false);
      setSuccessMessage(false);
      router.push("/auth/login");
    }, 3000);
  }

  return (
    <>
      <Head>
        <title>Reset Password</title>
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
          <div className="md:hidden text-center px-10 pt-[100px] pb-[60px] text-[29px] font-bold">
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
                Now you can create a new password for your BestPay account. Type
                your password twice so we can confirm your new passsword.
              </p>
              {errorMessage && (
                <div className="alert alert-error text-xl bg-red-500 text-center border-none">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="alert alert-success text-xl bg-[#99A98F] text-center border-none">
                  {successMessage}
                </div>
              )}
            </div>
            <Formik
              onSubmit={doReset}
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
              }}
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
                      <label className="label">
                        <span className="label-text-alt font-semibold text-sm text-red-500">
                          {errors.email}
                        </span>
                      </label>
                    )}
                    <div className="flex border-b border-gray-500 gap-5 pt-16 pb-4 relative">
                      <FiLock size={35} />
                      <input
                        type={eye ? "text" : "password"}
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter new password"
                      />
                      <button type="button" onClick={showEye}>
                        {eye ? (
                          <FiEye
                            className="flex justify-center items-center right-2 bottom-4 absolute"
                            size={25}
                          />
                        ) : (
                          <FiEyeOff
                            className="flex justify-center items-center right-2 bottom-4 absolute"
                            size={25}
                          />
                        )}
                      </button>
                    </div>
                    {errors.password && touched.password && (
                      <label className="label">
                        <span className="label-text-alt font-semibold text-sm text-red-500">
                          {errors.password}
                        </span>
                      </label>
                    )}
                    <div className="flex border-b border-gray-500 gap-5 pt-16 pb-4 relative">
                      <FiLock size={35} />
                      <input
                        type={eye ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full bg-transparent outline-none"
                        placeholder="Enter confirm password"
                      />
                      <button type="button" onClick={showEye}>
                        {eye ? (
                          <FiEye
                            className="flex justify-center items-center right-2 bottom-4 absolute"
                            size={25}
                          />
                        ) : (
                          <FiEyeOff
                            className="flex justify-center items-center right-2 bottom-4 absolute"
                            size={25}
                          />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <label className="label">
                        <span className="label-text-alt font-semibold text-sm text-red-500">
                          {errors.confirmPassword}
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
