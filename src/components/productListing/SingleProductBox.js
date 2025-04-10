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
  const { favorites, loading, error } = useSelector(
    (state) => state.getfavorites
  );

  // Fallback: Retrieve token from localStorage if not passed as a prop
  const resolvedToken = token || localStorage.getItem("token");

  // Check if the item is already a favorite
  const isFavourite = favorites.some((fav) => fav._id === item._id);

  useEffect(() => {
    // Debugging: Log token
    if (!resolvedToken) {
      console.warn("Token not found. Ensure the user is logged in.");
      toast.error("Please log in to see your favorites.");
      return;
    }
    console.log("Token found:", resolvedToken);

    // Fetch favorites if token is available
    dispatch(handleGetFavs({ token: resolvedToken }));
  }, [dispatch, resolvedToken]);

  const handleFavoriteToggle = () => {
    if (!resolvedToken) {
      toast.error("Please log in to manage your favorites.");
      return;
    }
    dispatch(handleAddFavRemove({ id: item._id, token: resolvedToken }));
  };
  return (
    <>
      <div
        className="w-full gap-3 border rounded-lg select-none bg-[#FCFCFC] border-[#E6E6E6]"
        // key={item.userId}
      >
        <div className="relative w-full">
          <div
            onClick={handleFavoriteToggle}
            className={`absolute top-3 right-3 ${
              isFavourite ? "bg-red-500" : "bg-[#b6b6b6]/50"
            } rounded-lg p-2 cursor-pointer`}
          >
            {isFavourite ? (
              <HiHeart className="text-2xl text-white" />
            ) : (
              <HiOutlineHeart className="text-2xl text-white" />
            )}
          </div>
          <Link
            href={`/product-details/${item._id}`}
            // href="/product-details"
          >
            <Picture
              src={`https://steel-junction.onrender.com/uploads/${item?.images[0]}`}
              alt={item?.name || "Product"}
              width={200}
              height={200}
              //   priority={true}
              className="object-cover w-full h-auto"
            />
          </Link>
          <div className="p-4 space-y-2">
            <p className="font-semibold line-clamp-1">{item.name}</p>
            <p className="text-sm text-[#1D1B1B]">{item?.sortDescription}</p>
          </div>
          {/* {loading && (
            <p className="text-sm text-blue-500">Updating favorite...</p>
          )} */}
          {error && <p className="text-sm text-red-500">Error: {error}</p>}
        </div>
      </div>
    </>
  );
};

export default SingleProductBox;
