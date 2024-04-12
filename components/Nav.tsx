"use client";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import MobNav from "./MobNav";

const Nav = () => {
  const [navState, setNavState] = useState({
    isOpen: false,
    extendWidth: false,
  });
  return (
    <>
      <header
        className="relative mx-auto hidden max-w-screen-2xl
     items-center justify-between gap-2 px-4 py-6 md:flex"
      >
        <Link href="/" className={`text-xl font-semibold text-white`}>
          Logo
        </Link>
        <div className={`relative flex items-center gap-3 md:gap-5`}>
          <div className={``}>
            <input
              type="text"
              placeholder="Search any movies..."
              className={`flex-1 rounded-md border-none bg-white-alpha-20 px-1 py-2 pl-8 text-white outline-none`}
            />
            <Search className="absolute left-1 top-1/2 size-5 -translate-y-1/2 text-white hover:cursor-pointer" />
          </div>
          <div
            className="flex flex-col items-center gap-[5px] p-1 hover:cursor-pointer "
            onClick={() =>
              setNavState((preVal) => ({ ...preVal, isOpen: !navState.isOpen }))
            }
          >
            <MenuIcon isOpen={navState.isOpen} />
          </div>
        </div>
      </header>
      <MobNav navState={navState} setNavState={setNavState} />
    </>
  );
};

export default Nav;
