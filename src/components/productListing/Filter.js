"use client";
import { handleGetCategories } from "@/redux/GetContentSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.getContent
  );
  const [localSelectedCategories, setLocalSelectedCategories] = useState([]);

  useEffect(() => {
    if (!categories || categories.length === 0) {
      dispatch(handleGetCategories()); // Fetch categories if not loaded yet
    }
  }, [dispatch, categories]);

  const handleCheckboxChange = (categoryId) => {
    const updatedCategories = localSelectedCategories.includes(categoryId)
      ? localSelectedCategories.filter((id) => id !== categoryId)
      : [...localSelectedCategories, categoryId];

    setLocalSelectedCategories(updatedCategories);
    onFilterChange?.(updatedCategories); // Pass selected categories to parent
  };

  const handleSelectAll = () => {
    const allCategoryIds =
      localSelectedCategories.length === (categories?.length || 0)
        ? []
        : categories.map((category) => category._id);
    setLocalSelectedCategories(allCategoryIds);
    onFilterChange?.(allCategoryIds);
  };

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }
  return (
    <div className="w-full p-2 space-y-2 border border-gray-200 rounded-lg xl:w-3/12 md:p-3 md:space-y-3">
      <div className="flex items-center justify-between w-full">
        <p className="font-semibold">Filters</p>
        <p
          className="text-[#FC342A] uppercase cursor-pointer"
          onClick={() => handleSelectAll()}
        >
          {localSelectedCategories.length === categories?.length
            ? "Clear All"
            : "Select All"}
        </p>
      </div>
      <hr className="w-full" />
      <div className="flex flex-col w-full gap-2 overflow-hidden">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="w-4 h-4 border accent-primary_color "
            id="all"
            checked={localSelectedCategories.length === categories.length}
            onChange={handleSelectAll}
          />
          <label className="text-textColor" htmlFor="all">
            All
          </label>
        </div>
        {loading ? (
          <p>Loading categories...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          categories.map((category) => (
            <div className="flex items-center gap-3" key={category._id}>
              <input
                type="checkbox"
                className="w-4 h-4 border accent-primary_color "
                id={category._id}
                checked={localSelectedCategories?.includes(category._id)}
                onChange={() => handleCheckboxChange(category._id)}
              />
              <label className="text-textColor" htmlFor={category._id}>
                {category.name}
              </label>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Filter;
