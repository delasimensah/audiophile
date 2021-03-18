import React from "react";
import { useRouter } from "next/router";
import { IoCartOutline, IoMenuOutline } from "react-icons/io5";

//mui
import { Divider } from "@material-ui/core";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <div
      className={`absolute top-0 w-full h-20 text-white padding-h ${
        pathname === "/details" ? "bg-dark" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full space-x-10 lg:space-x-0">
        <div className="lg:hidden">
          <IoMenuOutline className="w-7 h-7" />
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
          <IoCartOutline className="w-7 h-7" />
        </div>
      </div>

      <div className="h-px bg-grey"></div>
    </div>
  );
};

export default Navbar;
