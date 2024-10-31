import Banner from "@/components/Banner";
import Buy from "@/components/Buy";
import Client from "@/components/Client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Wego from "@/components/Wego";
import React from "react";
import image1 from "../app/assets/image1.jpg";

const page = () => {
  return (
    <div className="relative">
      <div  className="bg-cover bg-center  absolute -z-10 bg-no-repeat h-full w-full blur ] "
      style={{ backgroundImage: `url(${image1.src})` }}>
        
      </div>
      <Client />
      {/* <Banner /> */}
      <Contact />
      <Wego />
      {/* <Buy /> */}
      <Footer />
    </div>
  );
};

export default page;
