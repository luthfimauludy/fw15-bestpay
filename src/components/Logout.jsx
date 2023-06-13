import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { LuLogOut } from "react-icons/lu";

export default function Logout() {
  const router = useRouter();
  const doLogout = async () => {
    await axios.get("http://localhost:3000/auth/logout");
    router.replace("/auth/login");
  };
  return (
    <div>
      <button
        className="btn border-none normal-case p-0"
        onClick={() => window.my_modal_1.showModal()}
      >
        <LuLogOut size={25} />
        <p className="text-lg">Logout</p>
      </button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box bg-[#E5E5E5]">
          <h3 className="font-bold text-lg">Logout</h3>
          <p className="py-4">Are you sure want to logout?</p>
          <div className="flex justify-end gap-4">
            <div className="modal-action">
              <button
                className="btn bg-gray-300 hover:bg-red-500 border-none normal-case"
                onClick={doLogout}
              >
                Yes
              </button>
            </div>
            <div className="modal-action">
              <button className="btn bg-gray-300 hover:bg-green-500 border-none normal-case">
                No
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
}
