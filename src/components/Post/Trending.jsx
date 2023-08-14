import React from "react";

function Trending() {
  return (
    <div className="flex gap-5">
      <h2 className="text-4xl text-gray-300"></h2>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img
            src="https://picsum.photos/200/300"
            className="h-5 w-5 rounded-full"
          />
          <p className="font-bold">Marie Le Conte</p>
        </div>
        <p className="text-lg font-bold">Limbs</p>
        <p className="text-sm text-gray-400">Aug 9 · 4 min read</p>
      </div>
    </div>
  );
}

export default Trending;
