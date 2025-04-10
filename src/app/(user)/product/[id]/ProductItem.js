"use client";

import Filter from "@/components/productListing/Filter";
import Results from "@/components/productListing/Results";
import { handleGetCategories } from "@/redux/GetContentSlice";
import { handleGetProduct } from "@/redux/ProductSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductItemPage = () => {
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // New state
  const { products } = useSelector((state) => state.getProduct);

  useEffect(() => {
    dispatch(handleGetCategories()); // Fetch categories on initial load
    dispatch(handleGetProduct()); // Fetch all products on initial load
  }, [dispatch]);

  const handleFilterChange = (categories) => {
    setSelectedCategories(categories);
    dispatch(handleGetProduct(categories));
  };

  return (
    <>
      <div className="container w-full space-y-5">
        <div className="w-full px-0 mx-auto mt-5 space-y-5 bg-white xl:px-0 md:px-10 lg:space-y-8">
          <div className="space-y-5">
            {/* <p>
              Search result :{" "}
              <span className="text-xl font-bold">
                {selectedProduct ? `“${selectedProduct.name}”` : "All Products"}
              </span>
            </p> */}
            <p className="text-[#6D6D6D]">
              {selectedProduct
                ? "1 result found"
                : `${products.length} results found`}
            </p>
          </div>
          <div className="flex flex-col items-start w-full h-full gap-5 xl:flex-row">
            <Filter onFilterChange={handleFilterChange} />
            <Results
              selectedCategories={selectedCategories}
              selectedProduct={selectedProduct}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItemPage;
