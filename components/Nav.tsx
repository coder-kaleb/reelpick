"use client";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "./MenuIcon";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className="w-full relative py-6 px-4
     flex justify-between items-center gap-2"
    >
      <Link href="/" className="text-white font-semibold text-xl">
        Logo
      </Link>
      <div className="flex relative gap-5 items-center">
        <input
          type="text"
          placeholder="Search any movies..."
          className="bg-white-alpha-20 max-md:hidden flex-1 py-2 px-1 pl-8 rounded-md outline-none border-none"
        />
        <Search className="md:absolute size-5 text-white md:top-1/2 md:left-1 md:-translate-y-1/2" />
        <div
          className="flex flex-col gap-1 hover:cursor-pointer"
          onClick={() => setIsOpen((preVal) => !preVal)}
        >
          <MenuIcon isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
};

export default Nav;
