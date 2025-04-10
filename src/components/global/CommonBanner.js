import React from "react";
import Picture from "../ui/picture";

const CommonBannerPage = ({ title, image }) => {
  return (
    <div className="relative md:h-80 h-60">
      <Picture
        // src={dynamicImage ? BaseUrl.concat(dynamicImage) : image}
        src={image}
        alt={title}
        width={1900}
        // height={400}
        className="object-cover h-full w-full"
      />
      <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
        {title}
      </h1>
    </div>
  );
};

export default CommonBannerPage;
