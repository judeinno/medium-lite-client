import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import EditProfile from "../components/Profile/EditProfileModal";
import BlogPost from "../components/Post/BlogPost";
import { faker } from "@faker-js/faker";
import { useStateValue } from "../store";
import { BiLoaderAlt } from "react-icons/bi";
import { getAllUserPost } from "../services/blog";

function Profile() {
  const [state, dispatch] = useStateValue();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [posts, setPosts] = useState([...Array(10).fill(0)]);
  const image = faker.image.nature();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await getAllUserPost();
      console.log(res.data);
      setPosts(res.data.blogs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (state.userLoading || loading) {
    return (
      <div className="grid place-items-center mx-auto h-screen">
        <BiLoaderAlt className="animate-spin text-8xl text-yellow" />
      </div>
    );
  }

  return (
    <>
      <div className="w-5/12 mx-auto min-h-screen">
        <div className="flex items-center gap-4">
          <img src={image} className="h-24 w-24 rounded-full" />
          <div className="space-y-1">
            <h1 className="text-4xl font-bold">{state.user.name}</h1>
            <button
              className="text-sm text-green-800 underline"
              onClick={() => setOpenEditModal(true)}
            >
              Edit profile
            </button>
          </div>
        </div>

        <div className="mt-12 min-h-[65vh]">
          <Tab.Group>
            <Tab.List className="border-b text-gray-500 space-x-5">
              <Tab className="border-b border-black">All Post</Tab>
            </Tab.List>
            <Tab.Panels className="mt-10">
              <Tab.Panel>
                <div className="space-y-10">
                  {posts.map((post, idx) => {
                    return (
                      <div
                        key={post._id}
                        className="border-b border-gray-300 pb-5"
                      >
                        <BlogPost post={post} />
                      </div>
                    );
                  })}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <EditProfile
        image={image}
        isOpen={openEditModal}
        setIsOpen={setOpenEditModal}
      />
    </>
  );
}

export default Profile;
