import React, { useEffect } from "react";
import SingleProductBox from "./SingleProductBox";
import { useDispatch, useSelector } from "react-redux";
import { handleGetProduct } from "@/redux/ProductSlice";
import { useRouter } from "next/navigation";
import { Category } from "../ui/skeleton/category";
import { AllProduct } from "../ui/skeleton/Allproduct";

const Results = ({ selectedCategories, selectedProduct }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.getProduct);

  useEffect(() => {
    if (!selectedProduct) {
      dispatch(handleGetProduct(selectedCategories));
    }
  }, [dispatch, selectedCategories, selectedProduct]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (selectedProduct) {
    return (
      <div className="w-full h-full space-y-3 xl:w-9/12">
        <SingleProductBox key={selectedProduct._id} item={selectedProduct} />
      </div>
    );
  }

  if (!Array.isArray(products) || products.length === 0) {
    return (
      <p className="flex items-center justify-center text-center">
        No products available.
      </p>
    );
  }
  return (
    <div className="w-full h-full space-y-3 xl:w-9/12">
      <div className="flex flex-wrap items-center justify-between w-full gap-3 p-2 font-semibold text-left bg-gray-100 md:text-lg md:p-3">
        <p className="text-base font-normal">
          Showing {products.length} results
        </p>
      </div>

      {loading ? (
        <div className="grid w-full grid-cols-1 gap-4 pb-5 xl:grid-cols-3 md:grid-cols-2 md:pb-10">
          {[...Array(products.length)].map((_, index) => (
            <AllProduct key={index} />
          ))}
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-4 pb-5 xl:grid-cols-3 md:grid-cols-2 md:pb-10">
          {products.map((item) => (
            <SingleProductBox key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
