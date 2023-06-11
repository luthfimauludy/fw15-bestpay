import React from "react";

export default function PinConfirm() {
  return (
    <div className="flex justify-end pt-[35px]">
      <button
        className="btn w-[170px] bg-[#99A98F] text-white border-none normal-case"
        onClick={() => window.my_modal_3.showModal()}
      >
        Continue
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box bg-[#E5E5E5]">
          <h3 className="font-bold text-lg">Enter PIN to Transfer</h3>
          <p className="max-w-[302px] py-4">
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
          </p>
          <div className="flex gap-5 pt-8 pb-4">
            <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
              <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
            </div>
            <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
              <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
            </div>
            <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
              <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
            </div>
            <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
              <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
            </div>
            <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
              <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
            </div>
            <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
              <input className="w-8 h-14 border-b border-gray-300 text-center text-4xl pt-2 bg-transparent outline-none" />
            </div>
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
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
