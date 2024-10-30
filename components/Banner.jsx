import Image from "next/image";
import React from "react";
import image1 from ".././app/assets/image1.jpg";
import wave from ".././app/assets/wave.svg";

const Banner = () => {
  return (
    <div className="mx-auto">
      <Image
        className="w-full h-screen object-cover bg-no-repeat"
        alt="img"
        src={image1}
      />
      {/* <Image className='absolute left-0 bottom-0 w-full' alt='wave' src={wave}/> */}
      <svg
        className="absolute left-0 bottom-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#00000"
          fillOpacity="0.7"
          d="M0,32L16,64C32,96,64,160,96,186.7C128,213,160,203,192,181.3C224,160,256,128,288,144C320,160,352,224,384,245.3C416,267,448,245,480,250.7C512,256,544,288,576,304C608,320,640,320,672,293.3C704,267,736,213,768,208C800,203,832,245,864,256C896,267,928,245,960,224C992,203,1024,181,1056,192C1088,203,1120,245,1152,229.3C1184,213,1216,139,1248,133.3C1280,128,1312,192,1344,213.3C1376,235,1408,213,1424,202.7L1440,192L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
