import { BsTelephone } from "react-icons/bs";
import { FiLock, FiDownload } from "react-icons/fi";
import Image from "next/image";
import microsoft from "../assets/microsoft.png";
import dropbox from "../assets/dropbox.png";
import handm from "../assets/h&m.png";
import airbnb from "../assets/airbnb.png";
import canon from "../assets/canon.png";
import dell from "../assets/dell.png";
import phone from "../assets/phone.png";
import Link from "next/link";
import { FaBehanceSquare } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="bg-[#E5E5E5]">
        <div className="flex flex-col items-center w-full h-[900px] bg-header bg-cover bg-no-repeat text-white">
          <div className="flex justify-between w-full h-40 py-12 px-36">
            <div className="flex items-center font-semibold">
              <FaBehanceSquare size={45} color="black" />
              <p className="font-bold text-white text-[29px]">stPay</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="./auth/login"
                className="btn btn-primary px-8 text-lg normal-case"
              >
                Login
              </Link>
              <Link
                href="./auth/signup"
                className="btn bg-white text-[#99A98F] px-8 border-transparent text-lg normal-case"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="max-w-[537px] h-full flex flex-col gap-10 justify-center items-center text-center">
            <div className="text-[68px] font-bold">
              Awesome App For Saving Time.
            </div>
            <div className="px-10 text-lg">
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </div>
            <div>
              <button className="btn bg-white text-[#99A98F] px-8 border-transparent text-lg normal-case">
                Try It Free
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full h-[800px] pt-[150px] pb-[70px] gap-8 text-center">
          <div className="text-6xl font-bold">
            <span className="text-[#99A98F]">Why</span> Choose BestPay?
          </div>
          <div className="max-w-[567px] text-lg">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </div>
          <div className="flex py-10">
            <div className="flex flex-col items-center max-w-[367px] h-[320px] gap-9 text-center py-10">
              <div className="bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center">
                <BsTelephone size={35} className="text-[#99A98F]" />
              </div>
              <div className="text-2xl font-semibold">24/7 Support</div>
              <div className="min-w-[307px] px-6">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </div>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white max-w-[367px] h-[320px] gap-9 text-center py-10">
              <div className="bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center">
                <FiLock size={35} className="text-[#99A98F]" />
              </div>
              <div className="text-2xl font-semibold">Data Privacy</div>
              <div className="min-w-[307px] px-6">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </div>
            </div>
            <div className="flex flex-col items-center max-w-[367px] h-[320px] gap-9 text-center py-10">
              <div className="bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center">
                <FiDownload size={35} className="text-[#99A98F]" />
              </div>
              <div className="text-2xl font-semibold">Easy Download</div>
              <div className="min-w-[307px] px-6">
                BestPay is 100% totally free to use it’s now available on Google
                Play Store and App Store.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-[300px] gap-10 bg-[#ABC4AA] px-[150px] py-[90px]">
          <div>
            <Image src={microsoft} alt="logo microsoft" />
          </div>
          <div>
            <Image src={dropbox} alt="logo dropbox" />
          </div>
          <div>
            <Image src={handm} alt="logo H&M" />
          </div>
          <div>
            <Image src={airbnb} alt="logo airbnb" />
          </div>
          <div>
            <Image src={canon} alt="logo canon" />
          </div>
          <div>
            <Image src={dell} alt="logo dell" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-[600px] gap-12">
          <div className="text-[#99A98F] bg-[#ABC4AA] px-20 py-6 rounded-[80px] text-[68px] font-bold">
            Rp. 390.736.500
          </div>
          <div className="font-bold text-6xl">
            <span className="text-[#99A98F]">Money</span> has Been Transfered.
          </div>
          <div className="max-w-[567px] text-center text-lg">
            That amount of money has been transfered from all users. We still
            counting and going strong!
          </div>
        </div>
        <div className="flex w-full h-[900px] bg-[#ABC4AA] py-20 pr-[100px]">
          <div className="flex flex-1">
            <Image className="w-full h-full" src={phone} alt="phone image" />
          </div>
          <div className="flex flex-col justify-center min-w-[620px] h-full">
            <div className="max-w-[507px] text-6xl font-bold">
              All The <span className="text-[#99A98F]">Great</span> BestPay
              Features.
            </div>
            <div className="flex flex-col gap-4 pt-10">
              <div className="max-w-[600px]">
                <div className="flex flex-col gap-3 bg-white rounded-2xl px-6 py-5">
                  <div className="text-xl font-semibold">
                    <span className="text-[#99A98F] text-[22px]">1.</span>{" "}
                    &nbsp;&nbsp;Small Fee
                  </div>
                  <div className="text-lg">
                    We only charge 5% of every success transaction done in
                    BestPay app.
                  </div>
                </div>
              </div>
              <div className="max-w-[600px]">
                <div className="flex flex-col gap-3 bg-white rounded-2xl px-6 py-5">
                  <div className="text-xl font-semibold">
                    <span className="text-[#99A98F] text-[22px]">2.</span>{" "}
                    &nbsp;&nbsp;Data Secured
                  </div>
                  <div className="text-lg">
                    All your data is secured properly in our system and it’s
                    encrypted.
                  </div>
                </div>
              </div>
              <div className="max-w-[600px]">
                <div className="flex flex-col gap-3 bg-white rounded-2xl px-6 py-5">
                  <div className="text-xl font-semibold">
                    <span className="text-[#99A98F] text-[22px]">3.</span>{" "}
                    &nbsp;&nbsp;User Friendly
                  </div>
                  <div className="text-lg">
                    BestPay come up with modern and sleek design and not
                    complicated.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full pt-[150px] pb-[70px] gap-8 text-center">
          <div className="text-6xl font-bold">
            What Users are <span className="text-[#99A98F]">Saying.</span>
          </div>
          <div className="max-w-[567px] text-lg">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </div>
          <div className="flex min-w-[988px] py-10">
            <div className="flex flex-col items-center rounded-2xl bg-white w-full h-[496px] text-center py-[60px]">
              <div className="bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center">
                <FiLock size={35} className="text-[#99A98F]" />
              </div>
              <div className="text-[26px] pt-[30px] font-semibold">
                Luthfi Putra M.
              </div>
              <div className="text-xl pt-2">Designer</div>
              <div className="text-lg max-w-[869px] pt-11">
                “This is the most outstanding app that I’ve ever try in my live,
                this app is such an amazing masterpiece and it’s suitable for
                you who is bussy with their bussiness and must transfer money to
                another person aut there. Just try this app and see the power!”
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
