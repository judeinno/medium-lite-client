import React from "react";

function Trending({ post }) {
  return (
    <div className="flex gap-5">
      <h2 className="text-4xl text-gray-300"></h2>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img
            src="https://picsum.photos/200/300"
            className="h-5 w-5 rounded-full"
          />
          <p className="font-bold">{post.author.name}</p>
        </div>
        <p className="text-lg font-bold">{post.title.substring(0, 40)}...</p>
        <p className="text-sm text-gray-400">
          {new Date(post.createdAt)
            .toUTCString()
            .split(" ")
            .slice(0, 5)
            .join(" ")}
        </p>
      </div>
    </div>
  );
}

export default Trending;
