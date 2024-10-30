import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";



const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#abb2f7] to-[#f87fbb]  ">
      <div className="text-red-500  p-5 md:p-10 flex items-center justify-center gap-x-4">
        <Link href={"https://t.me/trumpelonalliance" } target="_blank" className=" ">
          <div className="bg-black p-2 md:p-3 md:p-5 rounded-full border-2 border-white">
          <BiLogoTelegram className="text-white " />
          </div>
        </Link>
        <Link href={"https://x.com/trumplonaliance"} target="_blank" className=" ">
          <div className="bg-black p-2 md:p-3 md:p-5 rounded-full border-2 border-white">
            <FaXTwitter className="text-white " />
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default Footer;
