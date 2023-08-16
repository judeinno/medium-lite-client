import React from "react";

function ProfileIcon({ name, className }) {
  const displayName = name.split(" ");
  return (
    <div
      className={`rounded-full border shadow-md grid place-items-center ${className}`}
    >
      <p className="font-bold">
        {displayName.length > 1
          ? `${displayName[0][0]}${displayName[1][0]}`
          : displayName[0]}
      </p>
    </div>
  );
}

export default ProfileIcon;
