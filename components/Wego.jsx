import Image from "next/image";
import Link from "next/link";
import React from "react";
import image3 from ".././app/assets/image3.jpg";

const Wego = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#000000] p-3 md:p-5 rounded-full border md:border-2 mt-4 border-red-500">
        <Link target="_blank"
          className=" text-white font-bold text-xl md:text-3xl"
          href="https://x.com/WatcherGuru/status/1825635663779344537?t=d5v_OFNMsJFA1u7P7Xtb9Q&s=19"
        >
          Click Here
        </Link>
      </div>

      <Image
          className="rounded-lg w-full max-w-[500px] h-auto my-5"
          alt="image2"
          src={image3}
          priority
        />
      <h1 className="">
      
      </h1>

      <div className="my-10">
        <Link target="_blank"
          className=" text-center sm:text-xl md:text-2xl lg:text-[80px] text-white uppercase font-bold py-4 md:py-6 lg:py-10 mb-5"
          href="https://x.com/WatcherGuru/status/1825635663779344537?t=d5v_OFNMsJFA1u7P7Xtb9Q&s=19"
        >
           Here we go
        </Link>
      </div>
    </div>
  );
};

export default Wego;
