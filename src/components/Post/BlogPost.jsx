import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

function BlogPost({ post }) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <img src={faker.image.url()} className="h-6 w-6 rounded-full" />
          <p className="font-bold text-sm capitalize">{post.author.name}</p>
        </div>
        <Link to={`/posts/${post._id}`} className="w-10/12">
          <p className="text-xl font-bold">{post.title}</p>
          <p className="text-gray-500">{post.description}</p>
        </Link>
        <p className="text-sm text-gray-500">
          {new Date(post.createdAt)
            .toUTCString()
            .split(" ")
            .slice(0, 5)
            .join(" ")}
        </p>
      </div>
      <img
        src={post.image ?? faker.image.url()}
        className="h-32 w-48 object-cover"
      />
    </div>
  );
}

export default BlogPost;
