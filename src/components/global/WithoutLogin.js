import React from "react";
import HeroSectionWithLogin from "../withoutlogin/HeroSection";
import AboutWithOutLogin from "../withoutlogin/About";
import Download from "../wholesaler/home/Download";
import FeaturedProduct from "../wholesaler/home/FeaturedProduct";

const WithoutLoginPage = () => {
  return (
    <div className="space-y-6 xl:space-y-11">
      <HeroSectionWithLogin />
      <div className="container space-y-6 lg:space-y-11">
        <AboutWithOutLogin />
        <FeaturedProduct/>
        <Download />
      </div>
      {/* <p>WithoutLoginPage</p> */}
    </div>
  );
};

export default WithoutLoginPage;
