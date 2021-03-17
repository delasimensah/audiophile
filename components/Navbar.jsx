import React from "react";
import { useRouter } from "next/router";
import { IoCartOutline, IoMenuOutline } from "react-icons/io5";

//mui
import { Divider } from "@material-ui/core";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <div
      className={`absolute top-0 flex items-center space-x-10 w-full h-16 text-white px-5 md:px-10 lg:px-20 ${
        pathname === "/details" ? "bg-dark" : "bg-transparent"
      }`}
    >
      <div className="lg:hidden">
        <IoMenuOutline className="w-8 h-8" />
      </div>

      <div className="flex justify-center flex-grow md:justify-start lg:flex-none">
        <img src="/assets/shared/desktop/logo.svg" alt="" />
      </div>

      <ul className="items-center justify-center flex-grow hidden space-x-10 text-sm tracking-wider uppercase lg:flex">
        <li>Home</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
      </ul>

      <div>
        <IoCartOutline className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Navbar;
