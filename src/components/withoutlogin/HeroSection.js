import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import Picture from "../ui/picture";
const HeroSectionWithLogin = () => {
  return (
    <div className="container w-full mx-auto space-y-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full mx-auto h-auto">
              <Picture
                src={"/static/images/banner.png"}
                alt="banner image"
                loading="lazy"
                width={1900}
                quality={100}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <div className="absolute flex items-center justify-center w-full h-full md:top-0 -top-0">
              <div className="md:space-y-2 container px-7">
                <div className="text-white md:text-5xl text-lg">
                  Best Quality
                </div>
                <div className="text-white md:text-2xl text-base">TMT BAR</div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full mx-auto h-auto">
              <Picture
                src={"/static/images/banner.png"}
                alt="banner image"
                loading="lazy"
                width={1900}
                quality={100}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <div className="absolute flex items-center justify-center w-full h-full md:top-0 -top-0">
              <div className="md:space-y-2 container px-7">
                <div className="text-white md:text-5xl text-lg">
                  Best Quality
                </div>
                <div className="text-white md:text-2xl text-base">TMT BAR</div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselDots className="mx-auto mt-3" />
      </Carousel>
    </div>
  );
};

export default HeroSectionWithLogin;
