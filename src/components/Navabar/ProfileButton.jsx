import React from "react";
import { Menu } from "@headlessui/react";
import { Link, redirect } from "react-router-dom";
import { PiCaretDownThin } from "react-icons/pi";
import { useStateValue } from "../../store";
import * as actionTypes from "../../store/actionTypes";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import ProfileIcon from "../Profile/ProfileIcon";

function ProfileButton() {
  const [state, dispatch] = useStateValue();

  const handleLogout = () => {
    redirect("/");
    dispatch({
      type: actionTypes.SET_USER_DATA,
      payload: null,
    });
    localStorage.removeItem("token");
  };
  return (
    <div className="flex items-center gap-5 z-40">
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
      <Menu>
        <Menu.Button className="flex items-center gap-2">
          {/* <img
            src="https://picsum.photos/200/300"
            className="h-10 w-10 rounded-full"
          /> */}
          {state.user && (
            <ProfileIcon
              name={state.user.name}
              className="h-10 w-10 text-lg bg-black text-white"
            />
          )}
          <PiCaretDownThin />
        </Menu.Button>
        <Menu.Items className="absolute top-12 flex flex-col w-60 bg-white px-3 py-5 rounded-md shadow-md">
          <Menu.Item>
            {({ active }) => (
              <Link
                className={`${active && "bg-gray-200"} px-2 p-1`}
                to="/profile"
              >
                Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${active && "bg-gray-200"} px-2 py-1 text-left`}
                onClick={handleLogout}
              >
                Sign Out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default ProfileButton;
