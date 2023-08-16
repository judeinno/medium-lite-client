import React, { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useStateValue } from "../../store";
import * as actionTypes from "../../store/actionTypes";
import { GrClose } from "react-icons/gr";
import { createPost } from "../../services/blog";
import { toast } from "react-toastify";
import { BiLoaderAlt } from "react-icons/bi";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";

function WritePostModal() {
  const [state, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const editorRef = useRef(null);
  const navigate = useNavigate();

  const handleCreatePost = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("content", editorRef.current.getContent());
      formData.append("image", image[0]);
      await createPost(formData);

      toast.success("Post Published!!!");
      navigate(0);
    } catch (error) {
      console.log(error);
      toast.error("Error uploading post!!! try again");
    } finally {
      setImage(null);
      setLoading(false);
      dispatch({
        type: actionTypes.SET_OPEN_WRITE_POST_MODAL,
        payload: false,
      });
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

      <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
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
              <Editor
                apiKey={import.meta.env.VITE_TINY_MCE}
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue=""
                init={{
                  height: 300,
                  menubar: false,
                  resize: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
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
                className="text-black font-bold rounded-full bg-yellow px-5 py-2 flex items-center gap-2"
                onClick={handleCreatePost}
              >
                Publish
                {loading && <BiLoaderAlt className="animate-spin text-xl" />}
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default WritePostModal;
