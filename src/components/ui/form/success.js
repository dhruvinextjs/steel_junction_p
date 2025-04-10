import React from "react";
import { GoCheckCircle } from "react-icons/go";

function Success({ message }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 mb-2 text-sm text-green-800 rounded-md bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
      <span className="font-medium">
        <GoCheckCircle className="text-lg" />
      </span>
      {message}
    </div>
  );
}

export default Success;
