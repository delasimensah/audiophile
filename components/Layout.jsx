import React from "react";

//components
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen overflow-hidden">{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
