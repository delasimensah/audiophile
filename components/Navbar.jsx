import React from "react";
import { useRouter } from "next/router";
import { IoCartOutline, IoMenuOutline } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <div
      className={`absolute top-0 w-full h-20 text-white padding-h ${
        pathname === "/[category]/[id]" ? "bg-dark" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full space-x-10 lg:space-x-0">
        <div className="lg:hidden">
          <IoMenuOutline className="w-7 h-7" />
        </div>

        <div className="flex justify-center flex-grow md:justify-start lg:flex-none">
          <Link href="/">
            <a className="inline-block">
              <img src="/assets/shared/desktop/logo.svg" alt="" />
            </a>
          </Link>
        </div>

        <ul className="items-center justify-center flex-grow hidden space-x-10 text-sm tracking-wider uppercase lg:flex">
          <li>
            <Link href="/">
              <a className="uppercase hover:text-primary">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/headphones">
              <a className="uppercase hover:text-primary">headphones</a>
            </Link>
          </li>
          <li>
            <Link href="/speakers">
              <a className="uppercase hover:text-primary">speakers</a>
            </Link>
          </li>
          <li>
            <Link href="/earphones">
              <a className="uppercase hover:text-primary">earphones</a>
            </Link>
          </li>
        </ul>

        <div>
          <IoCartOutline className="w-7 h-7" />
        </div>
      </div>

      {pathname !== "/[category]/[id]" && (
        <div className="h-px bg-gray-800"></div>
      )}
    </div>
  );
};

export default Navbar;
