// // // // // "use client"
// // // // // import React, { useEffect } from "react";
// // // // // import {
// // // // //   Carousel,
// // // // //   CarouselContent,
// // // // //   CarouselItem,
// // // // //   CarouselNext,
// // // // //   CarouselPrevious,
// // // // //   CarouselDots,
// // // // // } from "@/components/ui/carousel";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // import { handleGetProduct } from "@/redux/ProductSlice";
// // // // // import { v4 } from "uuid";

// // // // // const TrendingProduct = () => {
// // // // //   const dispatch = useDispatch();
// // // // //   const { products = { all: [] }, loading,loaded } = useSelector((state) => state.getProduct); // Getting data from Redux store

// // // // //   useEffect(() => {
// // // // //     // Fetch products only if not already loaded
// // // // //     if (!loaded.trending) {
// // // // //       dispatch(handleGetProduct({ isTrending: true }));
// // // // //     }
// // // // //   }, [dispatch, loaded.trending]);

// // // // //   if (loading && !products.trending.length)
// // // // //     return <div>Loading products...</div>;
// // // // //   return (
// // // // //     <div className="w-full space-y-7">
// // // // //       <div className="flex items-center justify-between">
// // // // //         <p className="text-xl font-bold md:text-3xl text-title_color">
// // // // //           Trending Products
// // // // //         </p>
// // // // //         <Link href="/product">
// // // // //           <p className="font-bold text-[#FC342A]">Show All</p>
// // // // //         </Link>
// // // // //       </div>
// // // // //       <div className="w-full">
// // // // //         <Carousel
// // // // //           opts={{
// // // // //             align: "start",
// // // // //             loop: true,
// // // // //           }}
// // // // //           className="w-full"
// // // // //         >
// // // // //           <CarouselContent>
// // // // //             {products.trending?.map((item) => (
// // // // //               <CarouselItem
// // // // //                 key={v4()}
// // // // //                 className="md:basis-[50%] xl:basis-[25%] lg:basis-[33%]"
// // // // //               >
// // // // //                 <div
// // // // //                   className="border md:min-h-[19rem] md:max-h-[23rem] border-[#E2E2E2]"
// // // // //                   key={item._id}
// // // // //                 >
// // // // //                   <Link href="/product-details">
// // // // //                     {/* <Link href="/coming-soon"> */}
// // // // //                     <Image
// // // // //                       src={`https://steel-junction.onrender.com/uploads/${item?.images}`}
// // // // //                       alt="image"
// // // // //                       loading="lazy"
// // // // //                       width={250}
// // // // //                       height={250}
// // // // //                       className="object-cover w-full"
// // // // //                     />
// // // // //                   </Link>
// // // // //                   <div className="p-4 space-y-2">
// // // // //                     <p className="font-semibold line-clamp-1">{item.name}</p>
// // // // //                     <p className="text-sm text-[#1D1B1B]">
// // // // //                       {item?.sortDescription}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </CarouselItem>
// // // // //             ))}
// // // // //           </CarouselContent>
// // // // //           <CarouselDots className="mx-auto mt-5" />
// // // // //         </Carousel>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TrendingProduct;

// // // // "use client";
// // // // import React, { useEffect } from "react";
// // // // import {
// // // //   Carousel,
// // // //   CarouselContent,
// // // //   CarouselItem,
// // // //   CarouselNext,
// // // //   CarouselPrevious,
// // // //   CarouselDots,
// // // // } from "@/components/ui/carousel";
// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { handleGetProduct } from "@/redux/ProductSlice";
// // // // import { v4 } from "uuid";

// // // // const TrendingProduct = () => {
// // // //   const dispatch = useDispatch();
// // // //   const { products = { trending: [] }, loading, loaded } = useSelector(
// // // //     (state) => state.getProduct
// // // //   ); // Safely accessing products.trending

// // // //   useEffect(() => {
// // // //     // Fetch products only if not already loaded
// // // //     if (!loaded.trending) {
// // // //       dispatch(handleGetProduct({ isTrending: true }));
// // // //     }
// // // //   }, [dispatch, loaded.trending]);

// // // //   if (loading && !products.trending.length)
// // // //     return <div>Loading products...</div>;

// // // //   return (
// // // //     <div className="w-full space-y-7">
// // // //       <div className="flex items-center justify-between">
// // // //         <p className="text-xl font-bold md:text-3xl text-title_color">
// // // //           Trending Products
// // // //         </p>
// // // //         <Link href="/product">
// // // //           <p className="font-bold text-[#FC342A]">Show All</p>
// // // //         </Link>
// // // //       </div>
// // // //       <div className="w-full">
// // // //         <Carousel
// // // //           opts={{
// // // //             align: "start",
// // // //             loop: true,
// // // //           }}
// // // //           className="w-full"
// // // //         >
// // // //           <CarouselContent>
// // // //             {products.trending?.map((item) => (
// // // //               <CarouselItem
// // // //                 key={v4()}
// // // //                 className="md:basis-[50%] xl:basis-[25%] lg:basis-[33%]"
// // // //               >
// // // //                 <div
// // // //                   className="border md:min-h-[19rem] md:max-h-[23rem] border-[#E2E2E2]"
// // // //                   key={item._id}
// // // //                 >
// // // //                   <Link href="/product-details">
// // // //                     {/* <Link href="/coming-soon"> */}
// // // //                     <Image
// // // //                       src={`https://steel-junction.onrender.com/uploads/${item?.images}`}
// // // //                       alt="image"
// // // //                       loading="lazy"
// // // //                       width={250}
// // // //                       height={250}
// // // //                       className="object-cover w-full"
// // // //                     />
// // // //                   </Link>
// // // //                   <div className="p-4 space-y-2">
// // // //                     <p className="font-semibold line-clamp-1">{item.name}</p>
// // // //                     <p className="text-sm text-[#1D1B1B]">
// // // //                       {item?.sortDescription}
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>
// // // //               </CarouselItem>
// // // //             ))}
// // // //           </CarouselContent>
// // // //           <CarouselDots className="mx-auto mt-5" />
// // // //         </Carousel>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TrendingProduct;

// // // "use client";
// // // import React, { useEffect } from "react";
// // // import {
// // //   Carousel,
// // //   CarouselContent,
// // //   CarouselItem,
// // //   CarouselDots,
// // // } from "@/components/ui/carousel";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { handleGetProduct } from "@/redux/ProductSlice";
// // // import { v4 } from "uuid";

// // // const TrendingProduct = () => {
// // //   const dispatch = useDispatch();
// // //   const { products = { trending: [] }, loading, loaded } = useSelector(
// // //     (state) => state.getProduct || {} // Ensure we are safely accessing the state
// // //   );

// // //   useEffect(() => {
// // //     // Fetch products only if not already loaded
// // //     if (!loaded.trending) {
// // //       dispatch(handleGetProduct({ isTrending: true }));
// // //     }
// // //   }, [dispatch, loaded.trending]);

// // //   if (loading && !products.trending.length) {
// // //     return <div>Loading products...</div>;
// // //   }

// // //   if (!products.trending || !products.trending.length) {
// // //     return <div>No trending products available.</div>;
// // //   }

// // //   return (
// // //     <div className="w-full space-y-7">
// // //       <div className="flex items-center justify-between">
// // //         <p className="text-xl font-bold md:text-3xl text-title_color">
// // //           Trending Products
// // //         </p>
// // //         <Link href="/product">
// // //           <p className="font-bold text-[#FC342A]">Show All</p>
// // //         </Link>
// // //       </div>
// // //       <div className="w-full">
// // //         <Carousel
// // //           opts={{
// // //             align: "start",
// // //             loop: true,
// // //           }}
// // //           className="w-full"
// // //         >
// // //           <CarouselContent>
// // //             {products.trending.map((item) => (
// // //               <CarouselItem
// // //                 key={v4()}
// // //                 className="md:basis-[50%] xl:basis-[25%] lg:basis-[33%]"
// // //               >
// // //                 <div
// // //                   className="border md:min-h-[19rem] md:max-h-[23rem] border-[#E2E2E2]"
// // //                   key={item._id}
// // //                 >
// // //                   <Link href="/product-details">
// // //                     <Image
// // //                       src={`https://steel-junction.onrender.com/uploads/${item?.images[0]}`} // Accessing the first image
// // //                       alt={item?.name || "product image"}
// // //                       loading="lazy"
// // //                       width={250}
// // //                       height={250}
// // //                       className="object-cover w-full"
// // //                     />
// // //                   </Link>
// // //                   <div className="p-4 space-y-2">
// // //                     <p className="font-semibold line-clamp-1">{item.name}</p>
// // //                     <p className="text-sm text-[#1D1B1B]">
// // //                       {item?.sortDescription}
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               </CarouselItem>
// // //             ))}
// // //           </CarouselContent>
// // //           <CarouselDots className="mx-auto mt-5" />
// // //         </Carousel>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TrendingProduct;

// // "use client";
// // import React, { useEffect } from "react";
// // import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useDispatch, useSelector } from "react-redux";
// // import { handleGetProduct } from "@/redux/ProductSlice";
// // import { v4 } from "uuid";

// // const TrendingProduct = () => {
// //   const dispatch = useDispatch();
// //   const { products, loading, loaded, error } = useSelector((state) => state.getProduct);

// //   useEffect(() => {
// //     console.log("Products State: ", products); // Debugging log to check state
// //     if (!loaded.trending) {
// //       console.log("Dispatching handleGetProduct...");
// //       dispatch(handleGetProduct());
// //     }
// //   }, [dispatch, loaded.trending]);

// //   if (loading) {
// //     console.log("Loading products...");
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     console.error("Error:", error); // Log the error
// //     return <div>Error: {error}</div>;
// //   }

// //   // Ensure that products and trending are defined before accessing them
// //   if (!products || !products.trending || products.trending.length === 0) {
// //     console.log("No trending products available.");
// //     return <div>No trending products available.</div>;
// //   }

// //   return (
// //     <div className="w-full space-y-7">
// //       <div className="flex items-center justify-between">
// //         <p className="text-xl font-bold md:text-3xl text-title_color">
// //           Trending Products
// //         </p>
// //         <Link href="/product">
// //           <p className="font-bold text-[#FC342A]">Show All</p>
// //         </Link>
// //       </div>
// //       <div className="w-full">
// //         <Carousel opts={{ align: "start", loop: true }} className="w-full">
// //           <CarouselContent>
// //             {products.trending.map((item) => (
// //               <CarouselItem
// //                 key={v4()}
// //                 className="md:basis-[50%] xl:basis-[25%] lg:basis-[33%]"
// //               >
// //                 <div
// //                   className="border md:min-h-[19rem] md:max-h-[23rem] border-[#E2E2E2]"
// //                   key={item._id}
// //                 >
// //                   <Link href="/product-details">
// //                     <Image
// //                       src={`https://steel-junction.onrender.com/uploads/${item?.images[0]}`} // Accessing the first image
// //                       alt={item?.name || "product image"}
// //                       loading="lazy"
// //                       width={250}
// //                       height={250}
// //                       className="object-cover w-full"
// //                     />
// //                   </Link>
// //                   <div className="p-4 space-y-2">
// //                     <p className="font-semibold line-clamp-1">{item.name}</p>
// //                     <p className="text-sm text-[#1D1B1B]">
// //                       {item?.sortDescription}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </CarouselItem>
// //             ))}
// //           </CarouselContent>
// //           <CarouselDots className="mx-auto mt-5" />
// //         </Carousel>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrendingProduct;

// "use client";
// import React, { useEffect, useState } from "react";
// import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
// import Image from "next/image";
// import Link from "next/link";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import { GetUrl } from "@/app/api/BaseUrl"; // or wherever your axios config is
// import { getToken } from "@/utils/auth";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Custom Left Arrow
// const PrevArrow = ({ onClick }) => (
//   <div
//     onClick={onClick}
//     className="absolute z-10 -translate-y-1/2 cursor-pointer top-1/2 -left-8"
//   >
//     <ChevronLeft size={32} className="text-black transition hover:scale-110" />
//   </div>
// );

// // Custom Right Arrow
// const NextArrow = ({ onClick }) => (
//   <div
//     onClick={onClick}
//     className="absolute z-10 -translate-y-1/2 cursor-pointer top-1/2 -right-8"
//   >
//     <ChevronRight size={32} className="text-black transition hover:scale-110" />
//   </div>
// );

// const TrendingProduct = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {

// const fetchProducts = async () => {
//   try {
//     setLoading(true);

//     const token = localStorage.getItem("token");

//     const res = await GetUrl.get("/product", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const allProducts = res.data?.data || [];
//     setProducts(allProducts);
//   } catch (err) {
//     setError("Failed to load products.");
//     console.error(err);
//   } finally {
//     setLoading(false);
//   }
// };

//     fetchProducts();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!products || products.length === 0) return <div>No trending products available.</div>;

//   return (
//     <div className="w-full space-y-7">
//       <div className="flex items-center justify-between">
//         <p className="text-xl font-bold md:text-3xl text-title_color">
//           Trending Products
//         </p>
//         <Link href="/products">
//           <p className="font-bold text-[#FC342A]">Show All</p>
//         </Link>
//       </div>
//       <div className="w-full">
//         <Carousel opts={{ align: "start", loop: true }} className="w-full">
//           <CarouselContent>
//             {products.map((item) => (
//              <CarouselItem
//              key={uuidv4()}
//              className="md:basis-[50%] xl:basis-[25%] lg:basis-[33%]"
//            >
//              <div className="border border-[#E2E2E2] h-[17rem] flex flex-col">
//                {/* Product Image */}
//                <div className="h-[12rem] w-full overflow-hidden">
//                  <Image
//                    src={`https://steel-junction.onrender.com/uploads/${item?.images[0]}`}
//                    alt={item?.name || "product image"}
//                    loading="lazy"
//                    width={250}
//                    height={250}
//                    className="object-cover w-full h-full"
//                  />
//                </div>

//                {/* Product Info */}
//                <div className="flex-1 p-3 space-y-1 overflow-hidden">
//                  <p className="text-sm font-semibold line-clamp-1">{item.name}</p>
//                  <p className="text-sm text-[#1D1B1B] line-clamp-2">
//                    {item?.sortDescription}
//                  </p>
//                </div>
//              </div>
//            </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselDots className="mx-auto mt-5" />
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default TrendingProduct;

"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GetUrl } from "@/app/api/BaseUrl";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Left Arrow
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute z-10 -translate-y-1/2 cursor-pointer top-1/2 -left-8"
  >
    <ChevronLeft size={32} className="text-black transition hover:scale-110" />
  </div>
);

// Custom Right Arrow
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute z-10 -translate-y-1/2 cursor-pointer top-1/2 -right-8"
  >
    <ChevronRight size={32} className="text-black transition hover:scale-110" />
  </div>
);

const TrendingProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const res = await GetUrl.get("/product", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const allProducts = res.data?.data || [];
        setProducts(allProducts);
      } catch (err) {
        setError("Failed to load products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products || products.length === 0)
    return <div>No trending products available.</div>;

  return (
    <div className="w-full pb-10 space-y-4 md:space-y-7">
      <div className="flex items-center justify-between px-4 md:px-10">
        <p className="text-xl font-bold md:text-3xl text-title_color">
          Trending Products
        </p>
        <Link href="/products">
          <p className="font-bold text-[#FC342A]">Show All</p>
        </Link>
      </div>

      <div className="relative px-4 md:px-10">
        <Slider {...settings}>
          {products.map((item) => (
            <div key={uuidv4()} className="px-2">
              <div className="border border-[#E2E2E2] h-[17rem] flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg">
                {/* Product Image */}
                <div className="h-[12rem] w-full overflow-hidden">
                  <Image
                    src={`https://steel-junction.onrender.com/uploads/${item?.images[0]}`}
                    alt={item?.name || "product image"}
                    loading="lazy"
                    width={250}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 p-3 space-y-1 overflow-hidden">
                  <p className="text-sm font-semibold line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-sm text-[#1D1B1B] line-clamp-2">
                    {item?.sortDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingProduct;
