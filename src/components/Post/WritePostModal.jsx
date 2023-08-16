import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useStateValue } from "../../store";
import * as actionTypes from "../../store/actionTypes";
import { GrClose } from "react-icons/gr";
import { createPost } from "../../services/blog";
import { toast } from "react-toastify";

function WritePostModal() {
  const [state, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleCreatePost = async () => {
    try {
      const data = {
        title,
        description,
        // content,
        image: image[0],
      };
      toast.success("Post Published!!!");
      console.log(data);
      //   const res = await createPost(data);
      //   console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={state.openWritePostModal}
      onClose={() => {
        dispatch({
          type: actionTypes.SET_OPEN_WRITE_POST_MODAL,
          payload: false,
        });
      }}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto w-5/12 rounded bg-white p-8">
          <Dialog.Title className="flex items-center justify-between">
            <p className="font-bold text-2xl">New Post</p>
            <button
              onClick={() => {
                dispatch({
                  type: actionTypes.SET_OPEN_WRITE_POST_MODAL,
                  payload: false,
                });
              }}
            >
              <GrClose />
            </button>
          </Dialog.Title>

          <div className="mt-10 space-y-10">
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <input
                className="rounded-md border-2 border-black p-2"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Description</label>
              <input
                className="rounded-md border-2 border-black p-2"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Content</label>
              <textarea
                className="rounded-md border-2 border-black p-2"
                rows={10}
                cols={10}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="img-input"
                className="cursor-pointer font-bold bg-gray-500 inline-block text-white rounded-md p-2"
              >
                Upload image
                <input
                  hidden
                  id="img-input"
                  name="img-input"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(e) => setImage(e.target.files)}
                />
              </label>
              {image ? (
                <span className="ml-3 font-bold underline">
                  {image[0].name}
                </span>
              ) : null}
            </div>

            <div className="flex justify-end">
              <button
                className="text-black font-bold rounded-full bg-yellow px-5 py-2"
                onClick={handleCreatePost}
              >
                Publish
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default WritePostModal;
