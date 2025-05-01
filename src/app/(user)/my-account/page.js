"use client";
import MainDetail from "@/components/wholesaler/MyAccount/MainDetail";
import MainMenu from "@/components/wholesaler/MyAccount/MainMenu";
import React, { useState } from "react";

const MyAccountpage = () => {
  const [tabMenu, setTabMenu] = useState("Profile");

  return (
    <div className="w-full">
      <div className="h-24 md:h-20 bg-primary_color"></div>
      <div className="container flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-5 relative mt-[-2.5rem] z-[2] md:mb-10">
        <div className="shadow-lg h-fit  md:w-[40%] lg:w-[25%] w-[95%] mx-auto space-y-5 z-2 bg-white">
          <MainMenu onTabChange={setTabMenu} tabMenu={tabMenu} />
        </div>
        <div className="md:w-4/5 w-[95%] mx-auto space-y-5 shadow-lg h-fit min-h-[350px] z-2 bg-white">
          <MainDetail tabMenu={tabMenu} />
        </div>
      </div>
    </div>
  );
};

export default MyAccountpage;
