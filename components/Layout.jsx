import React from "react";
import { useRouter } from "next/router";

//components
import Navbar from "./Navbar";
import Info from "./Info";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Navbar />

      <div className="min-h-screen overflow-hidden bg-greyLt">{children}</div>

      {pathname !== "/checkout" && <Info />}

      <Footer />
    </>
  );
};

export default Layout;
