"use client";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import MenuIcon from "./MenuIcon";
import MobNav from "./MobNav";
import { useNavContext } from "@/context";

export interface navProps {
  isOpen: boolean;
  extendWidth: boolean;
  setNavState: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      extendWidth: boolean;
    }>
  >;
}

const Nav = () => {
  return (
    <>
      <header
        className="sticky top-0 z-50 hidden w-full justify-between  border border-red-600 px-4 pt-3 md:flex
     "
      >
        <Link href="/" className={`text-xl font-semibold text-white`}>
          Logo
        </Link>
        <div className={` relative flex items-center gap-3 md:gap-5`}>
          <input
            type="text"
            placeholder="Search any movies..."
            className={`w-full max-w-72 flex-1 rounded-md border-none bg-white-alpha-20 px-1 py-2 pl-8 text-white outline-none`}
          />
          <Search className="absolute left-1 top-1/2 size-5 -translate-y-1/2 text-white hover:cursor-pointer" />
        </div>
      </header>
      <MobNav />
    </>
  );
};

export default Nav;
