import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";

function Error({ error }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 mb-2 text-sm text-red-800 rounded-md bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="font-medium">
        <MdOutlineErrorOutline className="text-lg" />
      </span>
      {error}
    </div>
  );
}

export default Error;
