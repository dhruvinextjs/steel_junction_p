import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <div className="relative px-0 mx-auto mt-10 xl:px-40">
      <div className="bg-primary_color rounded-2xl  border-8 border-[#B8D4EC] ">
        <div className="px-5 py-5 space-y-5 lg:px-20 lg:py-12">
          <p className="hidden mx-auto text-xl font-bold text-white xl:text-5xl md:block">
            Buy Quality Steel in <br /> Minutes
          </p>
          <p className="block mx-auto text-xl font-bold text-white xl:text-5xl md:hidden">
            Buy Quality Steel in Minutes
          </p>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <Image
              src="/static/images/playstore.png"
              alt="spa life"
              loading="lazy"
              width={100}
              height={100}
              className=""
            />
            <Image
              src="/static/images/appstore2.png"
              alt="spa life"
              loading="lazy"
              width={100}
              height={100}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/static/images/mobile.png"
          alt="spa life"
          loading="lazy"
          width={150}
          height={150}
          className="absolute -top-5  object-cover md:right-[10%] xl:right-[20%]"
        />
      </div>
    </div>
  );
};

export default Download;
