import React from 'react';
import logo1 from '../app/assets/logo.jpg';
import Image from 'next/image';

const Client = () => {
  return (
    <div className="p-1 md:p-2">
      <p
        className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-center font-bold text-transparent"
        style={{
          WebkitTextStroke: "2px #f5bcba", // Lighter pink border color
          color: "#c8a8e9", // Purple text color
          textShadow: `
            0 0 10px #f9a1a0, 
            0 0 20px #f9a1a0, 
            0 0 30px #f9a1a0, 
            0 0 40px #f9a1a0, 
            0 0 50px #f9a1a0, 
            0 0 60px #f9a1a0`, // Multiple layers for stronger glow
        }}
      >
        <span style={{ color: "#c8a8e9" }}>$</span>TEA
      </p>
    </div>
  );
};

export default Client;
