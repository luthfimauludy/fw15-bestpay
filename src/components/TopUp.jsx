import React from "react";
import { FiPlus } from "react-icons/fi";

export default function TopUp() {
  return (
    <div className="border-l-4 border-transparent px-10">
      <button
        className="flex items-center gap-6"
        onClick={() => window.my_modal_2.showModal()}
      >
        <FiPlus size={25} />
        <p className="text-lg">Top Up</p>
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box bg-[#E5E5E5]">
          <h3 className="font-bold text-lg">Top Up</h3>
          <p className="max-w-[302px] pt-4 pb-11">
            Enter the amount of money, and click submit
          </p>
          <div className="flex justify-center w-full min-h-16 border border-gray-400 rounded-xl bg-white">
            <input
              className="border-gray-300 text-center text-4xl bg-transparent outline-none"
              type="number"
            />
          </div>
          <div className="flex justify-end pb-10 pt-10">
            <button
              className="max-w-[170px] btn bg-gray-300 font-bold border-none btn-block normal-case"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
}
