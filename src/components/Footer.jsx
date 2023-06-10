import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between w-full max-h-[68px] py-5 px-[150px] bg-[#99A98F] text-white">
        <p className="font">2023 BestPay. All right reserved</p>
        <div className="flex gap-10">
          <p>+62 5637 8892 9901</p>
          <p>contact@bestpay.com</p>
        </div>
      </div>
    </footer>
  );
}
