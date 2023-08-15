import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import EditProfile from "../components/Profile/EditProfileModal";

function Profile() {
  const [openEditModal, setOpenEditModal] = useState(false);
  return (
    <>
      <div className="w-6/12 mx-auto">
        <div className="flex items-center gap-4">
          <img
            src="https://picsum.photos/200/300"
            className="h-24 w-24 rounded-full"
          />
          <div className="space-y-1">
            <h1 className="text-4xl font-bold">Richard Arthur</h1>
            <button
              className="text-sm text-green-800 underline"
              onClick={() => setOpenEditModal(true)}
            >
              Edit profile
            </button>
          </div>
        </div>

        <div className="mt-12">
          <Tab.Group>
            <Tab.List className="border-b text-gray-500">
              <Tab className="border-b border-black">All Post</Tab>
            </Tab.List>
            <Tab.Panels className="mt-3">
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <EditProfile isOpen={openEditModal} setIsOpen={setOpenEditModal} />
    </>
  );
}

export default Profile;
