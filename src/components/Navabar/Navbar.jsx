import React from "react";
import ProfileButton from "./ProfileButton";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-yellow p-4 border-b border-black">
      <div className="w-8/12 mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl">
          Blog
        </Link>
        <div className="relative flex items-center gap-8">
          <Link className="flex items-center gap-2 text-gray-700">
            <HiOutlinePencilSquare className="text-2xl" />
            <p>Write</p>
          </Link>
          <ProfileButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
