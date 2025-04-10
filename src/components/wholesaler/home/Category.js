import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCategories } from "@/redux/GetContentSlice";
import Picture from "@/components/ui/picture";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Category } from "@/components/ui/skeleton/category";
import { handleGetProduct } from "@/redux/ProductSlice";

const CategorySection = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.getContent);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(handleGetCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(handleGetProduct([selectedCategory])); // Pass category ID as an array
    }
  }, [selectedCategory, dispatch]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="w-full pb-10 space-y-4 md:space-y-7">
      <p className="text-xl font-bold md:text-3xl text-title_color">
        Shop By Category
      </p>
      <div className="w-full space-y-3">
        {loading ? (
          <div className="grid w-full grid-cols-2 gap-4 pb-5 xl:grid-cols-5 md:grid-cols-4 md:pb-10">
            {[...Array(categories.length)].map((_, index) => (
              <Category key={index} />
            ))}
          </div>
        ) : (
          <div className="grid w-full grid-cols-2 gap-4 pb-5 xl:grid-cols-5 md:grid-cols-4 md:pb-10">
            {categories.map((item) => (
              <div
                className={`w-full gap-3 border rounded-lg select-none bg-[#FCFCFC] border-[#E6E6E6] ${
                  selectedCategory === item._id ? "" : ""
                }`}
                key={item?._id}
                onClick={() => handleCategoryClick(item._id)}
              >
                <div className="space-y-3 text-center">
                  <Link
                    href={`/product/${item._id}`}
                    state={{ id: item._id }}
                    key={item._id}
                  >
                    <Picture
                      src={`https://steel-junction.onrender.com/uploads/${item?.image}`} // Dynamically load image
                      alt={item?.name || "Product"}
                      loading="lazy"
                      width={200}
                      height={200}
                      //   priority={true}
                      className="object-cover w-full h-auto"
                    />
                  </Link>
                  <p className="mx-auto text-base md:text-xl">{item?.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySection;
