import React from "react";
import Image from "next/image";
import defaultPic from "@/assets/default-picture.jpg";
import { FiBell } from "react-icons/fi";
import { FaBehanceSquare } from "react-icons/fa";
import http from "@/helpers/http";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "@/redux/reducers/profile";

export default function Navbar({ token }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);

  const getProfile = React.useCallback(async () => {
    if (token) {
      try {
        const { data } = await http(token).get("/profile");
        dispatch(setProfile(data.results));
      } catch (err) {
        const message = err?.response?.data?.message;
        return console.log(message);
      }
    }
  }, [token, dispatch]);

  React.useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <nav className="flex justify-between items-center w-full min-h-[140px] bg-white px-[150px] py-[42px] rounded-b-2xl">
      <Link
        href="/home"
        className="flex items-center text-[#99A98F] text-[29px] font-semibold"
      >
        <FaBehanceSquare size={45} color="black" />
        <p className="font-bold">stPay</p>
      </Link>
      {token ? (
        <div className="hidden lg:flex justify-center items-center gap-5">
          <Link
            href="/profile"
            className="w-16 h-16 overflow-hidden object-cover rounded-2xl"
          >
            {profile?.picture ? (
              <Image
                width={150}
                height={150}
                className="w-full h-full object-cover"
                src={profile?.picture}
                alt="Profile Picture"
              />
            ) : (
              <Image
                width={150}
                height={150}
                className="w-full h-full object-cover"
                src={defaultPic}
                alt="Default picture"
              />
            )}
          </Link>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">{profile?.fullName}</p>
            <p className="text-[13px]">{profile?.email}</p>
          </div>
          <div className="flex justify-end items-center">
            <button type="button">
              <FiBell size={25} />
            </button>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="./auth/login"
            className="btn bg-white border-transparent px-8 text-lg normal-case"
          >
            Login
          </Link>
          <Link
            href="./auth/signup"
            className="btn bg-[#99A98F] text-white px-8 border-transparent text-lg normal-case"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
