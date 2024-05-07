"use client";
import { Minimize, Search } from "lucide-react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import MenuIcon from "./MenuIcon";
import { useNavContext } from "@/context";
import Image from "next/image";

const Nav = () => {
  const { extendWidth, setNavState } = useNavContext();
  return (
    <header className="relative flex w-full items-center justify-between overflow-hidden px-4 py-5">
      <Link href="/" className={`text-xl font-semibold text-white`}>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={120}
          height={120}
          priority
        />
      </Link>
      {extendWidth ? (
        <div
          className={`group/parent absolute left-0 z-10 flex w-full items-center gap-3 bg-background-1 px-4 md:gap-3`}
        >
          <input
            type="text"
            placeholder="Search any movies..."
            className={`h-12 flex-1 rounded-md border-none bg-white-alpha-20 px-1 py-2 pl-10 text-white outline-none transition-all duration-300 hover:shadow-around focus-visible:shadow-around  group-focus-within/parent:pl-3`}
          />
          <Search className="absolute left-6 top-1/2 size-5 -translate-y-1/2 text-white transition hover:cursor-pointer group-focus-within/parent:opacity-0" />
          <div
            className="group/icon rounded-md bg-banner-background p-3 opacity-50 hover:cursor-pointer"
            onClick={() =>
              setNavState((preVal) => ({
                ...preVal,
                extendWidth: !preVal.extendWidth,
              }))
            }
          >
            <Minimize className=" text-white opacity-60 transition group-hover/icon:opacity-100" />
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        className={`group relative hidden items-center gap-3 md:flex md:gap-5`}
      >
        <input
          type="text"
          placeholder="Search any movies..."
          className={`h-12 w-72 flex-1 rounded-md border-none bg-white-alpha-20 px-1 py-2 pl-10 text-white outline-none transition-all duration-300 hover:shadow-around focus-visible:shadow-around  group-focus-within:pl-3`}
        />
        <Search className="absolute left-2 top-1/2 size-5 -translate-y-1/2 text-white transition hover:cursor-pointer group-focus-within:opacity-0" />
        <MenuIcon />
      </div>
      <div className="flex items-center gap-3 md:hidden">
        <div
          className="group rounded-md bg-banner-background p-3 opacity-50 hover:cursor-pointer "
          onClick={() =>
            setNavState((preVal) => ({
              ...preVal,
              extendWidth: !preVal.extendWidth,
            }))
          }
        >
          <Search className="text-white opacity-60 transition group-hover:opacity-100" />
        </div>
        <MenuIcon />
      </div>
    </header>
  );
};

export default Nav;
