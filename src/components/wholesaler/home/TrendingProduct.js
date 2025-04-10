import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { handleGetProduct } from "@/redux/ProductSlice";
import { v4 } from "uuid";

const TrendingProduct = () => {
  const dispatch = useDispatch();
  const { products = { all: [] }, loading,loaded } = useSelector((state) => state.getProduct); // Getting data from Redux store

  useEffect(() => {
    // Fetch products only if not already loaded
    if (!loaded.trending) {
      dispatch(handleGetProduct({ isTrending: true }));
    }
  }, [dispatch, loaded.trending]);

  if (loading && !products.trending.length)
    return <div>Loading products...</div>;
  return (
    <div className="w-full space-y-7">
      <div className="flex items-center justify-between">
        <p className="md:text-3xl text-xl font-bold text-title_color">
          Trending Products
        </p>
        <Link href="/product">
          <p className="font-bold text-[#FC342A]">Show All</p>
        </Link>
      </div>
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.trending?.map((item) => (
              <CarouselItem
                key={v4()}
                className="md:basis-[50%] xl:basis-[25%] lg:basis-[33%]"
              >
                <div
                  className="border md:min-h-[19rem] md:max-h-[23rem] border-[#E2E2E2]"
                  key={item._id}
                >
                  <Link href="/product-details">
                    {/* <Link href="/coming-soon"> */}
                    <Image
                      src={`https://steel-junction.onrender.com/uploads/${item?.images}`}
                      alt="image"
                      loading="lazy"
                      width={250}
                      height={250}
                      className="object-cover w-full"
                    />
                  </Link>
                  <div className="p-4 space-y-2">
                    <p className="font-semibold line-clamp-1">{item.name}</p>
                    <p className="text-sm text-[#1D1B1B]">
                      {item?.sortDescription}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots className="mx-auto mt-5" />
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingProduct;
