import React from "react";
import { Link } from "react-router-dom";

function CategoryTag({ name }) {
  return (
    <Link to="" className="bg-gray-200 rounded-full w-fit py-1 px-3">
      <span className="text-sm capitalize">{name}</span>
    </Link>
  );
}

export default CategoryTag;
