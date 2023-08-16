import React from "react";
import { Menu } from "@headlessui/react";
import { Link, redirect } from "react-router-dom";
import { PiCaretDownThin } from "react-icons/pi";
import { useStateValue } from "../../store";
import * as actionTypes from "../../store/actionTypes";

function ProfileButton() {
  const [state, dispatch] = useStateValue();

  const handleLogout = () => {
    dispatch({
      type: actionTypes.SET_USER_DATA,
      payload: null,
    });
    localStorage.removeItem("token");
    redirect("/");
  };
  return (
    <Menu>
      <Menu.Button className="flex items-center gap-2">
        <img
          src="https://picsum.photos/200/300"
          className="h-10 w-10 rounded-full"
        />
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
  );
}

export default ProfileButton;
