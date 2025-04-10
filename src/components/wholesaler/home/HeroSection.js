import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import Picture from "@/components/ui/picture";
import { useDispatch, useSelector } from "react-redux";
import { handleGetBanners } from "@/redux/GetContentSlice";
import { BannerLoader } from "@/components/ui/skeleton/BannerLoader";
import { GetUrl } from "@/app/api/BaseUrl";

const HeroSection = () => {
  const dispatch = useDispatch();
  const { banner, loading } = useSelector((state) => state.getContent);

  const [stealPrice, setStealPrice] = useState(null); // State to store the steal price
  const [priceLoading, setPriceLoading] = useState(true); // State to handle API loading

  // Fetch price from /config API using GetUrl instance
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await GetUrl("/config"); // Use the GetUrl axios instance
        if (response.data.success && response.data.data.length > 0) {
          setStealPrice(response.data.data[0].stealPrice);
        }
      } catch (error) {
        console.error("Failed to fetch steal price:", error);
      } finally {
        setPriceLoading(false);
      }
    };

    fetchPrice();
  }, []);

  useEffect(() => {
    dispatch(handleGetBanners());
  }, [dispatch]);

  return (
    <div className="container w-full mx-auto space-y-4">
      {loading ? (
        <div className="w-full">
          <BannerLoader />
        </div>
      ) : (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {banner.map((item, index) => (
              <CarouselItem key={item._id || index}>
                <div className="relative w-full mx-auto ">
                  <Picture
                    src={`https://steel-junction.onrender.com/uploads/${item?.image}`}
                    alt="banner image"
                    loading="lazy"
                    width={1900}
                    quality={100}
                    // sizes="100vw"
                    height={300}
                    className="object-cover rounded-md max-h-96"
                  />
                </div>
                {stealPrice ? (
                  <div className="absolute flex items-center justify-center w-full h-full md:top-0 -top-0">
                    {index === 0 && !priceLoading && stealPrice && (
                      <div className="container md:space-y-2 px-7">
                        <div className="text-lg text-center text-white md:text-5xl">
                          Today Steal Price: ₹{stealPrice}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots className="mx-auto mt-3" />
        </Carousel>
      )}
    </div>
  );
};

export default HeroSection;
