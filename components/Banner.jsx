import Image from "next/image";
import React from "react";
import image1 from ".././app/assets/image1.jpg";

const Banner = () => {

  
  return (
    <div className="relative mx-auto  ">
      <Image
        className="sm:object-cover bg-no-repeat"
        alt="img"
        priority
      />
    </div>
  );
};

export default Banner;
