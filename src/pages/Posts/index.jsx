import React, { useEffect, useState } from "react";
import BlogPost from "../../components/Post/BlogPost";
import { getAllPost } from "../../services/blog";

function Index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await getAllPost();
      setPosts(res.data.blogs);
      console.log(res.data.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-5/12 mx-auto">
      <div className="space-y-10">
        {posts.map((post, idx) => {
          return (
            <div key={idx} className="border-b border-gray-300 pb-5">
              <BlogPost post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
