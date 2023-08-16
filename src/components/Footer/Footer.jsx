import React from "react";

function Footer() {
  return (
    <div className="p-5 border font-sora flex justify-center">
      <div>
        Made with ❤️ by students, for students. &copy;{" "}
        {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;
