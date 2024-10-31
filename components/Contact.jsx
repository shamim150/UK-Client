import React from "react";
import image2 from ".././app/assets/image2.jpg";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className=" relative ">

      <div className="flex flex-col items-center pt-2 z-10 relative px-4">
        <Image
          className="rounded-lg w-full max-w-[500px] h-auto"
          alt="image2"
          src={image2}
          priority
        />
        <h1 className="text-white sm:text-xl md:text-[35px] font-bold text-center leading-relaxed sm:text-xl md:text-[35px] md:leading-snug lg:leading-normal  mt-10 max-w-[900px]">
          Donald Trump says he would offer Elon Musk a cabinet or advisory role
          if elected President. As the presidential election at the door elon
          and trump both going for an alliance and things going crazy
          with these two...
        </h1>
      </div>
      
    </div>
  );
};

export default Contact;
