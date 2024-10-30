import React from "react";
import image2 from ".././app/assets/image2.jpg";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-700 relative py-20">
      <div className=" absolute top-0 left-0 bg-black h-full w-full opacity-20"></div>

      <div className="flex flex-col items-center pt-10">
        <Image className=" rounded-lg min-h-[600px] w-[600px]" alt="image2" src={image2} />
        <h1 className="text-white text-[70px] font-bold ">ELON TRUMP VS Harris</h1>
        <Link className="text-white mt-2" href='https://tailwindcss.com/docs/background-image#linear-gradients'>Contact:- https://tailwindcss.com/docs/background-image#linear-gradients</Link>

      </div>
    </div>
  );
};

export default Contact;
