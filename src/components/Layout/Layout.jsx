import React from "react";
import Navbar from "../Navabar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-16">{children}</div>
    </>
  );
}

export default Layout;
