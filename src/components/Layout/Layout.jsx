import React from "react";
import Navbar from "../Navabar/Navbar";
import WritePostModal from "../Post/WritePostModal";
import SignupModal from "../Auth/SignupModal";
import LoginModal from "../Auth/LoginModal";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-16">{children}</div>

      <WritePostModal />
      <LoginModal />
      <SignupModal />
    </>
  );
}

export default Layout;
