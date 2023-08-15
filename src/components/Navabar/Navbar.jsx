import React from "react";
import ProfileButton from "./ProfileButton";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useStateValue } from "../../store";

function Navbar() {
  const [state, dispatch] = useStateValue();

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
          {state.user ? (
            <ProfileButton />
          ) : (
            <button
              className="bg-black text-white rounded-full px-5 py-2 text-sm"
              onClick={() =>
                dispatch({
                  type: actionTypes.SET_OPEN_LOGIN_MODAL,
                  payload: true,
                })
              }
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
