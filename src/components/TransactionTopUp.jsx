import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import http from "@/helpers/http";
import { useDispatch } from "react-redux";
import { MdCheck, MdError } from "react-icons/md";
import { setProfile } from "@/redux/reducers/profile";
import { setTransactions } from "@/redux/reducers/transactions";

const validationSchema = Yup.object({
  amount: Yup.number().min(20000, "Min amount Rp. 20.000"),
});

const TransactionTopUp = (props) => {
  const { userToken, visibleModal } = props;
  const dispatch = useDispatch();
  const [closeModal, setCloseModal] = React.useState(visibleModal);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMassage] = React.useState("");

  const close = () => {
    setCloseModal(false);
  };

  const getTransaction = React.useCallback(async () => {
    const { data } = await http(userToken).get("/transactions", {
      params: { limit: 10 },
    });
    dispatch(setTransactions(data.results));
  }, [userToken, dispatch]);

  const doTopup = async (values) => {
    const amount = values.amount;
    const form = new URLSearchParams({ amount });
    const { data } = await http(userToken).post(
      "/transactions/topup",
      form.toString()
    );

    if (data.results) {
      dispatch(setProfile(data.results));
      setSuccessMassage(`${data.message} Topup Success!`);
      setTimeout(() => {
        setSuccessMassage("");
        setCloseModal(false);
      }, 1500);
      getTransaction();
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
            <div className="py-3 text-black text-lg font-semibold">Topup</div>

            {errorMessage && (
              <div className="flex flex-row justify-center alert shadow-lg text-lg">
                <MdError size={30} color="red" />
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="flex flex-row justify-center alert shadow-lg text-lg">
                <MdCheck size={30} color="green" />
                {successMessage}
              </div>
            )}
            <div className="py-3 text-black text-base font-semibold">
              Enter the amount of money, and click submit
            </div>

            <Formik
              initialValues={{
                amount: "",
              }}
              validationSchema={validationSchema}
              onSubmit={doTopup}
              enableReinitialize={true}
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
                  className="modal-action flex flex-col items-center justify-center gap-7 w-full"
                >
                  <div className="w-full">
                    <input
                      type="text"
                      name="amount"
                      placeholder="Enter your amount min Rp. 20.000"
                      className={`border-b-2 outline-none h-12 ${
                        errors.amount && touched.amount && "border-[#e11d48]"
                      } w-full font-[500] text-secondary text-xl`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.amount}
                    />
                    {errors.amount && touched.amount && (
                      <label className="label">
                        <span className="label-text-alt text-[#e11d48]">
                          {errors.amount}
                        </span>
                      </label>
                    )}
                  </div>
                  <div className="w-full flex items-center gap-4 justify-end">
                    <button
                      type="submit"
                      className="btn bg-gray-300 hover:bg-[#22c55e] border-none w-20 capitalize self-end"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn bg-gray-300 hover:bg-[#e11d48] border-none w-20 capitalize self-end"
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

export default TransactionTopUp;
