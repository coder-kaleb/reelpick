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
  const {isOpen, setNavState} = useNavContext()
  return (
    <>
      <header
        className="relative pt-3 hidden max-w-screen-2xl
     items-center justify-between gap-2 px-4 overflow-hidden md:flex"
      >
        <Link href="/" className={`text-xl font-semibold text-white`}>
          Logo
        </Link>
        <div className={` relative flex items-center gap-3 md:gap-5`}>
          
            <input
              type="text"
              placeholder="Search any movies..."
              className={`max-w-72 w-full flex-1 rounded-md border-none bg-white-alpha-20 px-1 py-2 pl-8 text-white outline-none`}
            />
            <Search className="absolute left-1 top-1/2 size-5 -translate-y-1/2 text-white hover:cursor-pointer" />
          
        </div>
      </header>
      <MobNav />
    </>
  );
};

export default Nav;
