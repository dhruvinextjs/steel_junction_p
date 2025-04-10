import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="w-full pb-10 space-y-7">
      <p className="md:text-3xl text-xl font-bold text-title_color">
        Testimonials
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {TestimonialData.map((item) => (
            <CarouselItem
              key={item?.id}
              className="md:basis-[50%] relative xl:basis-[33%]"
            >
              <div className="w-full mx-auto">
                <div className="border border-[#E2E2E2] space-y-4 rounded-lg p-4 overflow-visible">
                  <div className="">
                    <Image
                      src={item.image}
                      alt="spa life"
                      loading="lazy"
                      width={70}
                      height={70}
                      className="rounded-full border-2 border-white shadow-lg"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-[#FFC700]" />
                    <FaStar className="text-[#FFC700]" />
                    <FaStar className="text-[#FFC700]" />
                    <FaStar className="text-[#FFC700]" />
                    <FaStar className="text-[#FFC700]" />
                  </div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-justify">
                    When I commenced the programme, I gave myself one year to
                    challenge my thinking, change my outlook and choose my next
                    step. This could not have been achieved without the
                    remarkable opportunities and strategic tools afforded to me.
                  </p>
                  <p className="text-[#535353] text-xs">{item.post}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="mx-auto mt-5" />
      </Carousel>
    </div>
  );
};

export default Testimonials;

const TestimonialData = [
  {
    id: 1,
    image: "/static/images/testimonial 1.png",
    title: "Anthony",
    post: "Posted on 14, sep 2023",
  },
  {
    id: 2,
    image: "/static/images/testimonial 2.png",
    title: "Rick Marry",
    post: "Posted on 11 sep 2023",
  },
  {
    id: 3,
    image: "/static/images/testimonial 3.png",
    title: "David Jonh",
    post: "Posted on 9, sep 2023",
  },
  {
    id: 4,
    image: "/static/images/testimonial 1.png",
    title: "Hisense Quantum Dot ULED Smart TV",
    post: "Posted on 14, sep 2023",
  },
  {
    id: 5,
    image: "/static/images/testimonial 2.png",
    title: "ASUS TUF Gaming F17 with 90Whr Battery",
    post: "Posted on 11, sep 2023",
  },
];
