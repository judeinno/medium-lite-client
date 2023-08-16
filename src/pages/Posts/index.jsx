import React, { useState } from "react";
import BlogPost from "../../components/Post/BlogPost";

function Index() {
  const [posts, setPosts] = useState([...Array(10).fill(0)]);

  return (
    <div className="w-5/12 mx-auto">
      <div className="space-y-10">
        {posts.map((post, idx) => {
          return (
            <div key={idx} className="border-b border-gray-300 pb-5">
              <BlogPost />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
