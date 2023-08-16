import React from "react";
import Navbar from "../Navabar/Navbar";
import WritePostModal from "../Post/WritePostModal";
import SignupModal from "../Auth/SignupModal";
import LoginModal from "../Auth/LoginModal";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-10">{children}</div>
      <Footer />
      <WritePostModal />
      <LoginModal />
      <SignupModal />
    </>
  );
}

export default Layout;
