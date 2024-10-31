import Image from "next/image";
import React from "react";
import image1 from ".././app/assets/image1.jpg";

const Banner = () => {

  
  return (
    <div className="relative mx-auto  ">
      <Image
        className="sm:object-cover bg-no-repeat"
        alt="img"
        // src={image1}
        priority
      />
      {/* <div className="absolute left-0 -bottom-10 bg-gradient-to-b from-cyan-400/0 via-[20%] to-[#3663B5] h-[20vh] w-full"/> */}
    </div>
  );
};

export default Banner;
