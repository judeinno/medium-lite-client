import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { PiCaretDownThin } from "react-icons/pi";

function ProfileButton() {
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
            <a
              className={`${active && "bg-gray-200"} px-2 p-1`}
              href="/account-settings"
            >
              Sign Out
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default ProfileButton;
