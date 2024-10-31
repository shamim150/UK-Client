import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";



const Footer = () => {
  return (
    <div>
      <div className="text-red-500  p-5 md:p-10 flex items-center justify-center gap-x-4">
        <p className="text-white text-4xl font-bold ">Join Now</p><Link href={"https://t.me/trumpelonalliance" } target="_blank" className=" ">
          <div className="bg-black p-2 md:p-3  rounded-full border-2 border-white">
          <BiLogoTelegram className="text-white text-2xl " />
          </div>
        </Link>
        <Link href={"https://x.com/trumplonaliance"} target="_blank" className=" ">
          <div className="bg-black p-2 md:p-3  rounded-full border-2 border-white">
            <FaXTwitter className="text-white  text-2xl " />
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default Footer;
