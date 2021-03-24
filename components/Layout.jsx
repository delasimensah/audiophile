import React from "react";

//components
import Navbar from "./Navbar";
import Info from "./Info";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen overflow-hidden">{children}</div>

      <Info />

      <Footer />
    </>
  );
};

export default Layout;
