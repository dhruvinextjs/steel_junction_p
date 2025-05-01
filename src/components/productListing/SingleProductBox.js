// "use client";
// import React, { useEffect, useState } from "react";
// import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
// import Link from "next/link";
// import Picture from "../ui/picture";
// import { useDispatch, useSelector } from "react-redux";
// import { handleAddFavRemove, handleGetFavs } from "@/redux/FavouriteSlice";
// import toast from "react-hot-toast";

// const SingleProductBox = ({ item, token }) => {
//   const dispatch = useDispatch();
//   const { favorites, loading, error } = useSelector((state) => state.getfavorites);

//   const resolvedToken = token || localStorage.getItem("token");

//   // Local state to handle immediate UI update
//   const [isFav, setIsFav] = useState(false);

//   useEffect(() => {
//     if (!resolvedToken) {
//       console.warn("Token not found. Ensure the user is logged in.");
//       toast.error("Please log in to see your favorites.");
//       return;
//     }
//     dispatch(handleGetFavs({ token: resolvedToken }));
//   }, [dispatch, resolvedToken]);

//   useEffect(() => {
//     // Set initial fav state after fetching favorites
//     setIsFav(favorites.some((fav) => fav._id === item._id));
//   }, [favorites, item._id]);

//   const handleFavoriteToggle = () => {
//     if (!resolvedToken) {
//       toast.error("Please log in to manage your favorites.");
//       return;
//     }
//     dispatch(handleAddFavRemove({ id: item._id, token: resolvedToken }))
//       .then(() => {
//         // Optimistically update UI
//         setIsFav((prev) => !prev);
//       });
//   };

//   return (
//     <>
//       <div className="w-full gap-3 border rounded-lg select-none bg-[#FCFCFC] border-[#E6E6E6]">
//         <div className="relative w-full">
//           <div
//             onClick={handleFavoriteToggle}
//             className={`absolute top-3 right-3 ${isFav ? "bg-red-500" : "bg-[#b6b6b6]/50"} rounded-lg p-2 cursor-pointer`}
//           >
//             {isFav ? (
//               <HiHeart className="text-2xl text-white" />
//             ) : (
//               <HiOutlineHeart className="text-2xl text-white" />
//             )}
//           </div>
//           <Link href={`/product-details/${item._id}`}>
//             <Picture
//               src={`https://steel-junction.onrender.com/uploads/${item?.images[0]}`}
//               alt={item?.name || "Product"}
//               width={200}
//               height={200}
//               className="object-cover w-full h-auto"
//             />
//           </Link>
//           <div className="p-4 space-y-2">
//             <p className="font-semibold line-clamp-1">{item.name}</p>
//             <p className="text-sm text-[#1D1B1B]">{item?.sortDescription}</p>
//           </div>
//           {error && <p className="text-sm text-red-500">Error: {error}</p>}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SingleProductBox;

"use client";
import React, { useEffect, useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import Link from "next/link";
import Picture from "../ui/picture";
import { useDispatch, useSelector } from "react-redux";
import { handleAddFavRemove, handleGetFavs } from "@/redux/FavouriteSlice";
import toast from "react-hot-toast";

const SingleProductBox = ({ item, token }) => {
  const dispatch = useDispatch();
  const { favorites, loading, error } = useSelector((state) => state.getfavorites);
  const resolvedToken = token || localStorage.getItem("token");

  // Local state to handle immediate UI update
  const [isFav, setIsFav] = useState(false);

  // Fetch favorites when the component mounts
  useEffect(() => {
    if (!resolvedToken) {
      console.warn("Token not found. Ensure the user is logged in.");
      toast.error("Please log in to see your favorites.");
      return;
    }
    dispatch(handleGetFavs({ signal: {} })); // Pass signal if necessary (e.g., for cancellation)
  }, [dispatch, resolvedToken]);

  // Update the 'isFav' state based on fetched favorites list
  useEffect(() => {
    if (favorites.length > 0) {
      const isFavorite = favorites.some((fav) => fav._id === item._id);
      setIsFav(isFavorite);
    }
  }, [favorites, item._id]);

  const handleFavoriteToggle = () => {
    if (!resolvedToken) {
      toast.error("Please log in to manage your favorites.");
      return;
    }

    // Dispatch the add/remove favorite action
    dispatch(handleAddFavRemove({ id: item._id }))
      .then(() => {
        // Optimistically update UI
        setIsFav((prev) => !prev);
        // toast.success(isFav ? "Removed from favorites!" : "Added to favorites!");
      })
      .catch((error) => {
        // In case of error, revert the optimistic UI update
        setIsFav(isFav);
        toast.error("Failed to update favorites.");
      });
  };

  return (
    <div className="w-full gap-3 border rounded-lg select-none bg-[#FCFCFC] border-[#E6E6E6]">
      <div className="relative w-full">
        <div
          onClick={handleFavoriteToggle}
          className={`absolute top-3 right-3 ${isFav ? "bg-red-500" : "bg-[#b6b6b6]/50"} rounded-lg p-2 cursor-pointer`}
        >
          {isFav ? (
            <HiHeart className="text-2xl text-white" />
          ) : (
            <HiOutlineHeart className="text-2xl text-white" />
          )}
        </div>
        <Link href={`/product-details/${item._id}`}>
          <Picture
            src={`https://steel-junction.onrender.com/uploads/${item?.images[0]}`}
            alt={item?.name || "Product"}
            width={200}
            height={200}
            className="object-cover w-full h-auto"
          />
        </Link>
        <div className="p-4 space-y-2">
          <p className="font-semibold line-clamp-1">{item.name}</p>
          <p className="text-sm text-[#1D1B1B]">{item?.sortDescription}</p>
        </div>
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
      </div>
    </div>
  );
};

export default SingleProductBox;
