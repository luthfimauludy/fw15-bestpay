import React from "react";
import Image from "next/image";
import phone from "../../assets/phone-auth.png";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { Formik } from "formik";
import { withIronSessionSsr } from "iron-session/next";
import * as Yup from "yup";
import cookieConfig from "@/helpers/cookieConfig";
import { useRouter } from "next/router";
import axios from "axios";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token;

    if (token) {
      res.setHeader("location", "/home");
      res.statusCode = 302;
      res.end();
      return {
        props: {
          token,
        },
      };
    }

    return {
      props: {},
    };
  },
  cookieConfig
);

export default function Login() {
  const router = useRouter();
  const [eye, setEye] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"),
  });

  function showEye() {
    setEye(!eye);
  }

  const doLogin = async (values) => {
    const form = new URLSearchParams({
      email: values.email,
      password: values.password,
    }).toString();
    const { data } = await axios.post("http://localhost:3000/api/login", form);
    if (data.success === false) {
      setErrorMessage("Wrong Email or Password");
    }
    if (data.success === true) {
      router.push("/home");
    }
  };

  return (
    <main className="bg-[#E5E5E5]">
      <div className="flex md:flex-row flex-col min-h-screen">
        {/* Window */}
        <div className="hidden md:flex flex-col flex-1 bg-header bg-cover bg-no-repeat py-[50px] px-[100px] text-white">
          <div className="text-[29px] font-bold">BestPay</div>
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
              Login
            </p>
            <p className="max-w-[290px] text-center text-gray-400 leading-loose">
              Login to your existing account to access all the features in
              BestPay.
            </p>
          </div>

          {/* Window */}
          <div className="hidden md:flex flex-col gap-8">
            <p className="max-w-[394px] text-2xl font-bold leading-loose">
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </p>
            <p className="leading-loose">
              Transfering money is eassier than ever, you can access BestPay
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
          </div>
          <Formik
            onSubmit={doLogin}
            initialValues={{ email: "", password: "" }}
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
                  {errorMessage && (
                    <div className="flex justify-center alert bg-red-500 border-none shadow-lg mb-5 text-white">
                      {errorMessage}
                    </div>
                  )}
                  <div className="flex border-b border-gray-500 gap-5 pb-4">
                    <FiMail size={35} />
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-transparent rounded-lg border-none outline-none"
                      placeholder="Enter your e-mail"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  {errors.email && touched.email && (
                    <label className="label">
                      <span className="label-text-alt text-red-500">
                        {errors.email}
                      </span>
                    </label>
                  )}
                  <div className="flex border-b border-gray-500 gap-5 pt-16 pb-4 relative">
                    <FiLock size={35} />
                    <input
                      type={eye ? "text" : "password"}
                      name="password"
                      className="w-full bg-transparent outline-none"
                      placeholder="Enter your password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
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
                      <span className="label-text-alt text-red-500">
                        {errors.password}
                      </span>
                    </label>
                  )}
                  <div className="text-right font-semibold text-sm pt-4 pb-16">
                    <Link href="./forgot-password">Forgot password?</Link>
                  </div>
                  <div className="pb-10">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="btn bg-gray-300 hover:bg-[#99A98F] border-none btn-block normal-case"
                    >
                      Login
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
          <div className="flex justify-center">
            Don’t have an account? Let’s&nbsp;
            <Link href="./signup" className="text-[#99A98F] font-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
