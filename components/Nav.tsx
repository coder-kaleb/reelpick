"use client";
import { DoorClosed, Menu, Minimize, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import MenuIcon from "./MenuIcon";
import MobNav from "./MobNav";
import { NavContext, useNavContext } from "@/context";
import Image from "next/image";

const Nav = () => {
  const { extendWidth, setNavState } = useNavContext();
  return (
    <>
      <header className="relative overflow-hidden flex w-full items-center justify-between px-4 py-5">
        <Link href="/" className={`text-xl font-semibold text-white`}>
          <Image src="/images/logo.png" alt="logo" width={120} height={120} />
        </Link>
        {extendWidth ? (
          <div
            className={`group/parent absolute z-10 flex left-0 w-full items-center gap-3 bg-background-1 md:gap-3 px-4`}
          >
            <input
              type="text"
              placeholder="Search any movies..."
              className={`hover:shadow-around focus-visible:shadow-around h-12 flex-1 rounded-md border-none bg-white-alpha-20 px-1 py-2 pl-10 text-white outline-none transition-all duration-300  group-focus-within/parent:pl-3`}
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
              <Minimize className="text-white opacity-60 transition group-hover/icon:opacity-100" />
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
            className={`hover:shadow-around focus-visible:shadow-around h-12 w-72 flex-1 rounded-md border-none bg-white-alpha-20 px-1 py-2 pl-10 text-white outline-none transition-all duration-300  group-focus-within:pl-3`}
          />
          <Search className="absolute left-2 top-1/2 size-5 -translate-y-1/2 text-white transition hover:cursor-pointer group-focus-within:opacity-0" />
          <MenuIcon />
        </div>

        <div
          className="group block rounded-md bg-banner-background p-3 opacity-50 hover:cursor-pointer md:hidden"
          onClick={() =>
            setNavState((preVal) => ({
              ...preVal,
              extendWidth: !preVal.extendWidth,
            }))
          }
        >
          <Search className="text-white opacity-60 transition group-hover:opacity-100" />
        </div>
      </header>
      {/* <MobNav /> */}
    </>
  );
};

export default Nav;
