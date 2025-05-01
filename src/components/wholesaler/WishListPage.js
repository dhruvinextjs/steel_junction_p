// "use client";
// import React, { useEffect } from "react";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import Picture from "../ui/picture";
// import CommonBannerPage from "../global/CommonBanner";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { handleAddFavRemove, handleGetFavs } from "@/redux/FavouriteSlice";
// import { getToken } from "@/utils/auth";
// import toast from "react-hot-toast";

// const WishListPage = () => {
//   const dispatch = useDispatch();
//   const { favorites = [], loading } = useSelector((state) => state.getfavorites);
//   const token = getToken() || localStorage.getItem("token");

//   useEffect(() => {
//     if (!token) {
//       toast.error("Please log in to see your favorites.");
//       return;
//     }
//     dispatch(handleGetFavs({ signal: { current: new AbortController() } }));
//   }, [dispatch, token]);

//   const handleFavoriteToggle = (id) => {
//     if (!token) {
//       toast.error("Please log in to manage your favorites.");
//       return;
//     }

//     dispatch(handleAddFavRemove({ id })).then(() => {
//       dispatch(handleGetFavs({ signal: { current: new AbortController() } }));
//     });
//   };

//   const getProductImage = (product) => {
//     if (!product?.images) return "/static/images/no-image.png";

//     // If images is an array
//     if (Array.isArray(product.images) && product.images.length > 0) {
//       return `https://steel-junction.onrender.com/uploads/${product.images[0]}`;
//     }

//     // If images is a string
//     if (typeof product.images === "string" && product.images.trim() !== "") {
//       return `https://steel-junction.onrender.com/uploads/${product.images}`;
//     }

//     return "/static/images/no-image.png";
//   };

//   return (
//     <div className="w-full space-y-5 md:space-y-10">
//       <CommonBannerPage
//         image="/static/images/commonbanner.png"
//         title="Wishlist"
//       />

//       <div className="container grid w-full grid-cols-1 gap-4 pb-5 xl:grid-cols-4 md:grid-cols-2 md:pb-10">
//         {loading ? (
//           <p>Loading...</p>
//         ) : favorites.length === 0 ? (
//           <p className="text-center col-span-full">
//             No products in your wishlist.
//           </p>
//         ) : (
//           favorites.map((fav) => {
//             const product = fav?.productDetails || fav;

//             const id = product?._id || fav?._id;
//             const image = getProductImage(product);
//             const title = product?.title || product?.name || "No Title";
//             const description =
//               product?.description || product?.sortDescription || "No Description";

//             return (
//               <div
//                 key={id}
//                 className="w-full gap-3 border rounded-lg select-none bg-[#FCFCFC] border-[#E6E6E6]"
//               >
//                 <div className="relative w-full">
//                   <Link href={`/product-details/${id}`}>
//                     <Picture
//                       src={image}
//                       alt={title}
//                       width={200}
//                       height={200}
//                       className="object-cover w-full h-auto"
//                     />
//                   </Link>
//                   <div className="p-4 space-y-2">
//                     <div className="flex items-center justify-between">
//                       <p className="font-semibold line-clamp-1">{title}</p>
//                       <RiDeleteBin6Line
//                         className="text-[#FC342A] text-2xl cursor-pointer"
//                         onClick={() => handleFavoriteToggle(id)}
//                       />
//                     </div>
//                     <p className="text-sm text-[#1D1B1B]">{description}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default WishListPage;


"use client";
import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Picture from "../ui/picture";
import CommonBannerPage from "../global/CommonBanner";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { handleAddFavRemove, handleGetFavs } from "@/redux/FavouriteSlice";
import { getToken } from "@/utils/auth";
import toast from "react-hot-toast";

const WishListPage = () => {
  const dispatch = useDispatch();
  const { favorites = [], loading } = useSelector((state) => state.getfavorites);
  const token = getToken() || localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      toast.error("Please log in to see your favorites.");
      return;
    }
    dispatch(handleGetFavs({ signal: { current: new AbortController() } }));
  }, [dispatch, token]);

  const handleFavoriteToggle = (id) => {
    if (!token) {
      toast.error("Please log in to manage your favorites.");
      return;
    }

    // Dispatch the action to toggle the favorite status in the backend
    dispatch(handleAddFavRemove({ id })).then(() => {
      // Fetch the latest favorites list from the server
      dispatch(handleGetFavs({ signal: { current: new AbortController() } }));
    });
  };

  const getProductImage = (product) => {
    if (!product?.images) return "/static/images/no-image.png";

    if (Array.isArray(product.images) && product.images.length > 0) {
      return `https://steel-junction.onrender.com/uploads/${product.images[0]}`;
    }

    if (typeof product.images === "string" && product.images.trim() !== "") {
      return `https://steel-junction.onrender.com/uploads/${product.images}`;
    }

    return "/static/images/no-image.png";
  };

  return (
    <div className="w-full space-y-5 md:space-y-10">
      <CommonBannerPage
        image="/static/images/commonbanner.png"
        title="Wishlist"
      />

      <div className="container grid w-full grid-cols-1 gap-4 pb-5 xl:grid-cols-4 md:grid-cols-2 md:pb-10">
        {loading ? (
          <p>Loading...</p>
        ) : favorites.length === 0 ? (
          <p className="text-center col-span-full">
            No products in your wishlist.
          </p>
        ) : (
          favorites.map((fav) => {
            const product = fav?.productDetails || fav;
            const id = product?._id || fav?._id;
            const image = getProductImage(product);
            const title = product?.title || product?.name || "No Title";
            const description =
              product?.description || product?.sortDescription || "No Description";

            return (
              <div
                key={id}
                className="w-full gap-3 border rounded-lg select-none bg-[#FCFCFC] border-[#E6E6E6]"
              >
                <div className="relative w-full">
                  <Link href={`/product-details/${id}`}>
                    <Picture
                      src={image}
                      alt={title}
                      width={200}
                      height={200}
                      className="object-cover w-full h-auto"
                    />
                  </Link>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold line-clamp-1">{title}</p>
                      <RiDeleteBin6Line
                        className={`text-2xl cursor-pointer ${
                          favorites.some((fav) => fav._id === id)
                            ? "text-[#FC342A]"
                            : "text-gray-400"
                        }`}
                        onClick={() => handleFavoriteToggle(id)}
                      />
                    </div>
                    <p className="text-sm text-[#1D1B1B]">{description}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default WishListPage;
