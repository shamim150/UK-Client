import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#9BA7DE] ">
      <div className="text-red-500  p-10 flex items-center justify-center gap-x-4">
        <Link href={"#"} className=" ">
          <div className="bg-black p-5 rounded-full border-2 border-white">
            <FaXTwitter className="text-white " />
          </div>
        </Link>
        <Link href={"#"} className=" ">
          <div className="bg-black p-5 rounded-full border-2 border-white">
            <FaXTwitter className="text-white " />
          </div>
        </Link>
        <Link href={"#"} className=" ">
          <div className="bg-black p-5 rounded-full border-2 border-white">
            <FaXTwitter className="text-white " />
          </div>
        </Link>
        <Link href={"#"} className=" ">
          <div className="bg-black p-5 rounded-full border-2 border-white">
            <FaXTwitter className="text-white " />
          </div>
        </Link>
        <Link href={"#"} className=" ">
          <div className="bg-black p-5 rounded-full border-2 border-white">
            <FaXTwitter className="text-white " />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
