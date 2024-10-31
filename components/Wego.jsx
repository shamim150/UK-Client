import Link from "next/link";
import React from "react";

const Wego = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#000000] p-5 rounded-full border-2 mt-4 border-white">
        <Link target="_blank"
          className=" text-white font-bold text-3xl"
          href="https://x.com/WatcherGuru/status/1825635663779344537?t=d5v_OFNMsJFA1u7P7Xtb9Q&s=19"
        >
          Click Here
        </Link>
      </div>
      <h1 className="text-center sm:text-xl md:text-2xl lg:text-[80px] text-white uppercase font-bold py-4 md:py-6 lg:py-10">
        Here we go
      </h1>
    </div>
  );
};

export default Wego;
