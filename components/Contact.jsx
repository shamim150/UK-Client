import React from "react";
import image2 from ".././app/assets/image2.jpg";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-700 relative py-0 md:py-20">
      <div className="absolute top-0 left-0 bg-black h-full w-full opacity-20"></div>

      <div className="flex flex-col items-center pt-10 z-10 relative px-4">
        <Image
          className="rounded-lg w-full max-w-[600px] h-auto"
          alt="image2"
          src={image2}
          priority
        />
        <h1 className="text-white text-2xl sm:text-5xl md:text-[50px] font-bold text-center  mt-4 max-w-[900px] pb-4">
          Donald Trump says he would offer Elon Musk a cabinet or advisory role
          if elected President". As the presidential election at the door elon
          and trump both going for an alliance and things going crazy
          with these two...
        </h1>
      </div>
      
    </div>
  );
};

export default Contact;
