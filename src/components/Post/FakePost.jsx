import React from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

function FakePost() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <img src={faker.image.url()} className="h-6 w-6 rounded-full" />
          <p className="font-bold text-sm">{faker.person.fullName()}</p>
        </div>
        <Link className="w-10/12">
          <p className="text-xl font-bold">{faker.lorem.lines(1)}</p>
          <p className="text-gray-500">{faker.lorem.sentence()}</p>
        </Link>
        {/* <p className="text-sm text-gray-500">
        {new Date(faker.date.recent({ days: 10 }))} · 4 min read
      </p> */}
        <p className="text-sm text-gray-500">Aug 9 · 4 min read</p>
      </div>
      <img src={faker.image.url()} className="h-32 w-48 object-cover" />
    </div>
  );
}

export default FakePost;
