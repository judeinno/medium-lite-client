import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPostDetail } from "../../services/blog";
import { BiLoaderAlt } from "react-icons/bi";
import { faker } from "@faker-js/faker";

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPostDetail();
  }, []);

  const fetchPostDetail = async () => {
    try {
      const res = await getPostDetail(postId);
      setPost(res.data.blog);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-7/12 mx-auto min-h-[80vh] font-sora">
      {loading ? (
        <div className="grid place-items-center mx-auto">
          <BiLoaderAlt className="animate-spin text-8xl text-yellow" />
        </div>
      ) : (
        <div className="w-full space-y-12 pb-16">
          <div className="h-[40vh] relative w-full overflow-hidden rounded-md">
            <img src={post.image} className="w-full h-full object-cover" />
          </div>
          <div className="w-full 2xl:w-11/12 mx-auto space-y-12">
            <div className="flex items-end gap-5">
              <img
                src={faker.image.url()}
                className="h-20 w-20 rounded-full object-cover"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl 2xl:text-3xl font-bold capitalize">
                  {post.title}
                </h1>
                <p className="font-bold text-sm">
                  ~ Author: {post.author.name}
                </p>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostDetail;
