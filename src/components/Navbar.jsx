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
  const user = useSelector((state) => state.profile.data);
  const getData = React.useCallback(async () => {
    const { data } = await http(token).get("/profile");
    dispatch(setProfile(data.results));
  }, [token, dispatch]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <nav className="flex justify-between items-center w-full min-h-[140px] bg-white px-[150px] py-[42px] rounded-b-2xl">
      <Link
        href="/home"
        className="flex items-center text-[#99A98F] text-[29px] font-semibold"
      >
        <FaBehanceSquare size={45} color="black" />
        <p className="font-bold">stPay</p>
      </Link>
      <div className="flex items-center gap-5">
        <Link href="/profile" className="flex items-center gap-5">
          <div className="w-[52px] h-[52px]">
            <Image src={defaultPic} alt="Default picture" />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">{user?.fullName}</p>
            <p className="text-[13px]">{user?.email}</p>
          </div>
        </Link>
        <div className="flex justify-end items-center">
          <button type="button">
            <FiBell size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
}
