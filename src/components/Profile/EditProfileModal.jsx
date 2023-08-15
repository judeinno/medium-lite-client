import React from "react";
import { Dialog } from "@headlessui/react";
import { GrClose } from "react-icons/gr";

function EditProfile({ isOpen, setIsOpen }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-4/12 rounded-md bg-white px-12 py-10">
          <Dialog.Title className="flex items-center justify-between">
            <p className="font-bold text-lg">Profile information</p>
            <button onClick={() => setIsOpen(false)}>
              <GrClose />
            </button>
          </Dialog.Title>
          <div className="mt-5 space-y-5">
            <span className="text-sm text-gray-400">Photo</span>
            <div className="flex gap-5 items-start">
              <div className="flex-[0.2]">
                <img
                  src="https://picsum.photos/200/300"
                  className="h-20 w-20 rounded-full"
                />
              </div>
              <div className="space-y-4 flex-[0.8]">
                <div className="text-sm gap-3 flex">
                  <button className="text-green-400">Update</button>
                  <button className="text-red-400">Remove</button>
                </div>
                <p className="text-sm text-gray-400">
                  Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels
                  per side.
                </p>
              </div>
            </div>

            {/* <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                type="email"
                className="border border-black outline-none rounded-md p-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div> */}
            {/* <div className="flex flex-col gap-1">
              <label>Password</label>
              <input
                type="password"
                className="border border-black outline-none rounded-md p-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div> */}

            {/* <button
              className="bg-yellow rounded-lg px-8 py-3 font-bold disabled:cursor-not-allowed disabled:bg-gray-400"
              onClick={handleLogin}
              disabled={email.length === 0 || password.length === 0}
            >
              Login
            </button> */}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default EditProfile;
