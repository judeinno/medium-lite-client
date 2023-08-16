import React from "react";
import ProfileButton from "./ProfileButton";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useStateValue } from "../../store";
import * as actionTypes from "../../store/actionTypes";

function Navbar() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="bg-yellow p-4 border-b border-black">
      <div className="w-8/12 mx-auto flex justify-between items-center">
        <h2 className="font-bold text-4xl font-garamond">
          <Link to="/">StuBlog</Link>
        </h2>

        <div className="relative flex items-center gap-8">
          {state.user ? (
            <>
              <button
                className="flex items-center gap-2 text-gray-700"
                onClick={() => {
                  dispatch({
                    type: actionTypes.SET_OPEN_WRITE_POST_MODAL,
                    payload: true,
                  });
                }}
              >
                <HiOutlinePencilSquare className="text-2xl" />
                <p>Write</p>
              </button>
              <ProfileButton />
            </>
          ) : (
            <button
              className="bg-black text-white rounded-full px-5 py-2 text-sm"
              onClick={() => {
                dispatch({
                  type: actionTypes.SET_OPEN_LOGIN_MODAL,
                  payload: true,
                });
              }}
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
