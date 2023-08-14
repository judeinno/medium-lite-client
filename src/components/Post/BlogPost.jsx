import React from "react";

function BlogPost() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <img
            src="https://picsum.photos/200/300"
            className="h-6 w-6 rounded-full"
          />
          <p className="font-bold text-sm">Christopher P Jones</p>
        </div>
        <div>
          <p className="text-xl font-bold">The Art of Slowing Down</p>
          <p className="text-gray-500">
            Turning patience into a form of creative action
          </p>
        </div>
        <p className="text-sm text-gray-500">Aug 9 · 4 min read</p>
      </div>
      <img src="https://picsum.photos/200/300" className="h-32 w-48" />
    </div>
  );
}

export default BlogPost;
