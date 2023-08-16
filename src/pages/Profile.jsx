import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import EditProfile from "../components/Profile/EditProfileModal";
import BlogPost from "../components/Post/BlogPost";

function Profile() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [posts, setPosts] = useState([...Array(10).fill(0)]);

  return (
    <>
      <div className="w-5/12 mx-auto">
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
            <Tab.List className="border-b text-gray-500 space-x-5">
              <Tab className="border-b border-black">All Post</Tab>
            </Tab.List>
            <Tab.Panels className="mt-3">
              <Tab.Panel>
                <div className="space-y-10">
                  {posts.map((post, idx) => {
                    return (
                      <div key={idx} className="border-b border-gray-300 pb-5">
                        <BlogPost />
                      </div>
                    );
                  })}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <EditProfile isOpen={openEditModal} setIsOpen={setOpenEditModal} />
    </>
  );
}

export default Profile;
