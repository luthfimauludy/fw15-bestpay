import React from "react";
import Image from "next/image";
import phone from "../../assets/phone-auth.png";
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import Link from "next/link";
import * as Yup from "yup";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { withIronSessionSsr } from "iron-session/next";
import cookieConfig from "@/helpers/cookieConfig";
import http from "@/helpers/http";
import { saveEmail } from "@/redux/reducers/auth";
import { useDispatch } from "react-redux";

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
      props: {
        token: null,
      },
    };
  },
  cookieConfig
);

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoading, setLoading] = React.useState("");
  const [eye, setEye] = React.useState(false);
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must have at least 3 characters")
      .required("Username cannot be empty"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"),
  });

  function showEye() {
    setEye(!eye);
  }

  const doSignup = async (values) => {
    try {
      setErrorMessage("");
      setLoading(true);
      const form = new URLSearchParams({
        username: values.username,
        email: values.email,
        password: values.password,
      }).toString();

      const { data } = await http().post("/auth/register", form);
      dispatch(saveEmail(values.email));
      router.push("/auth/set-pin");
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.message;
      if (message?.includes("duplicate")) {
        setErrorMessage("Email already exists!");
      }
    } finally {
      setLoading(false);
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
              Sign Up
            </p>
            <p className="max-w-[290px] text-center text-gray-400 leading-loose">
              Create your account to access BestPay.
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
            onSubmit={doSignup}
            initialValues={{
              username: "",
              email: "",
              password: "",
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
                  {errorMessage && (
                    <div className="flex justify-center alert bg-red-500 border-none shadow-lg mb-5 text-white">
                      {errorMessage}
                    </div>
                  )}
                  <div className="flex border-b border-gray-500 gap-5 pt-10 pb-4">
                    <FiUser size={35} />
                    <input
                      type="text"
                      name="username"
                      className="w-full bg-transparent rounded-lg border-none outline-none"
                      placeholder="Enter your username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                  </div>
                  {errors.username && touched.username && (
                    <label className="label">
                      <span className="label-text-alt text-red-500">
                        {errors.username}
                      </span>
                    </label>
                  )}
                  <div className="flex border-b border-gray-500 gap-5 pt-10 pb-4">
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
                  <div className="flex border-b border-gray-500 gap-5 pt-10 pb-4 relative">
                    <FiLock size={35} />
                    <input
                      type={eye ? "text" : "password"}
                      name="password"
                      className="w-full bg-transparent rounded-lg border-none outline-none"
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
                  <div className="pb-10 pt-20">
                    <button
                      disabled={isLoading}
                      className="btn bg-gray-300 hover:bg-[#99A98F] border-none btn-block normal-case"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="flex justify-center">
                    Don’t have an account? Let’s&nbsp;
                    <Link href="./login" className="text-[#99A98F] font-bold">
                      Login
                    </Link>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </main>
  );
}
