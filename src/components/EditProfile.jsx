import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import http from "@/helpers/http";
import { useDispatch, useSelector } from "react-redux";
import { MdCheck, MdError } from "react-icons/md";
import { setProfile } from "@/redux/reducers/profile";

const validationSchema = Yup.object({
  fullName: Yup.string().min(3, "At least 3 characters"),
  email: Yup.string().email("Email is invalid"),
});

const EditProfile = (props) => {
  const { token, visibleModal } = props;
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  const [closeModal, setCloseModal] = React.useState(visibleModal);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMassage] = React.useState("");

  const close = () => {
    setCloseModal(false);
  };

  const doUpdateProfile = async (values) => {
    if (
      values.fullName === profile?.fullName &&
      values.email === profile?.email
    ) {
      return setCloseModal(false);
    }

    const form = new FormData();
    if (values.fullName) {
      form.append("fullName", values.fullName);
    }
    if (values.email) {
      form.append("email", values.email);
    }
    const { data } = await http(token).patch("/profile", form);
    if (data.results) {
      dispatch(setProfile(data.results));
      setSuccessMassage(`${data.message} Profile Updated!`);
      setTimeout(() => {
        setSuccessMassage("");
        setCloseModal(false);
      }, 1500);
    }
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="loading"
          className="modal-toggle"
          checked={closeModal}
          onChange={() => setCloseModal(!closeModal)}
        />
        <div className="modal">
          <div className="modal-box bg-white">
            <div className="py-3 text-black text-lg font-semibold">
              Edit Profile
            </div>
            {errorMessage && (
              <div className="flex flex-row justify-center alert alert-[#e11d48] shadow-lg text-lg">
                <MdError size={30} color="red" />
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="flex flex-row justify-center alert alert-[#22c55e] shadow-lg text-lg">
                <MdCheck size={30} color="green" />
                {successMessage}
              </div>
            )}

            <Formik
              initialValues={{
                fullName: profile?.fullName || "",
                email: profile?.email || "",
              }}
              validationSchema={validationSchema}
              onSubmit={doUpdateProfile}
              enableReinitialize={true}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="modal-action flex flex-col items-center justify-center gap-7 w-full"
                >
                  <div className="w-full">
                    <label className="text-black text-sm">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      className={`border-b-2 outline-none h-12 ${
                        errors.fullName &&
                        touched.fullName &&
                        "border-[#e11d48]"
                      } w-full font-[500] text-secondary text-xl`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                    />
                    {errors.fullName && touched.fullName && (
                      <label className="label">
                        <span className="label-text-alt text-[#e11d48]">
                          {errors.fullName}
                        </span>
                      </label>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="text-black text-sm">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      className={`border-b-2 outline-none h-12 ${
                        errors.email && touched.email && "border-[#e11d48]"
                      } w-full font-[500] text-secondary text-xl`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <label className="label">
                        <span className="label-text-alt text-[#e11d48]">
                          {errors.email}
                        </span>
                      </label>
                    )}
                  </div>
                  <div className="w-full flex items-center gap-4 justify-end">
                    <button
                      type="submit"
                      className="btn btn-[#22c55e] w-20 capitalize self-end"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-[#99A98F] w-20 capitalize self-end"
                      onClick={() => {
                        close();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
