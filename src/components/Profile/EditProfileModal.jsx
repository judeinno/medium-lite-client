import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { GrClose } from "react-icons/gr";
import { useStateValue } from "../../store";
import { updateProfile } from "../../services/auth";
import { toast } from "react-toastify";
import { BiLoaderAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import * as actionTypes from "../../store/actionTypes";

function EditProfile({ isOpen, setIsOpen, image }) {
  const [state, dispatch] = useStateValue();
  const [name, setName] = useState(state.user.name);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleProfileUpdate = async () => {
    setLoading(true);
    try {
      const res = await updateProfile({ name });
      dispatch({
        type: actionTypes.SET_USER_DATA,
        payload: res.data.user,
      });
      toast.success("Profile Updated successfully!");
      setIsOpen(false);
    } catch (e) {
      toast.error("Error updating profile");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

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
          <div className="mt-5">
            {/* <span className="text-sm text-gray-400">Photo</span> */}
            <div className="flex gap-5 items-start">
              <div className="flex-[0.2]">
                <img src={image} className="h-20 w-20 rounded-full" />
              </div>
              {/* <div className="space-y-4 flex-[0.8]">
                <div className="text-sm gap-3 flex">
                  <button className="text-green-400">Update</button>
                  <button className="text-red-400">Remove</button>
                </div>
                <p className="text-sm text-gray-400">
                  Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels
                  per side.
                </p>
              </div> */}
            </div>

            <div className="flex flex-col gap-1 mt-10">
              <label className="text-sm">Name</label>
              <input
                type="text"
                value={name}
                className="border border-black outline-none border-t-0 border-r-0 border-l-0 border-b"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mt-10 flex justify-end">
              <button
                className="bg-green-600 text-white rounded-full px-6 py-2 font-bold disabled:cursor-not-allowed disabled:bg-gray-400 flex items-center gap-2"
                onClick={handleProfileUpdate}
                // disabled={email.length === 0 || password.length === 0}
              >
                Save
                {loading && <BiLoaderAlt className="animate-spin text-xl" />}
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default EditProfile;
