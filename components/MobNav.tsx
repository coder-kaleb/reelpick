import { Search, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import MenuIcon from "./MenuIcon";
import { useNavContext } from "@/context";

const MobNav = () => {
  const { isOpen, extendWidth, setNavState } = useNavContext();
  return (
    <header
      className="relative flex items-center 
    gap-2 overflow-hidden px-4 pt-3 md:hidden"
    >
      <Link
        href="/"
        className={`text-xl font-semibold text-white ${extendWidth ? "hidden" : "block"}`}
      >
        Logo
      </Link>
      <div
        className={`ml-auto flex items-center gap-2 ${extendWidth ? "w-full" : ""}`}
      >
        <input
          type="text"
          placeholder="Search any movies..."
          className={`flex-1 origin-right scale-0 rounded-md transition-all duration-200 ${extendWidth ? "w-full scale-100" : "w-0 scale-0"} border-none bg-white-alpha-20 px-1 py-2 pl-8 text-white outline-none`}
        />
        <div
          className="flex size-8 items-center justify-center rounded bg-white-alpha-20 hover:cursor-pointer md:hidden"
          onClick={() =>
            setNavState((preVal) => ({
              ...preVal,
              extendWidth: !extendWidth,
            }))
          }
        >
          {extendWidth ? (
            <X className="size-5 text-white" />
          ) : (
            <Search className="size-5 text-white" />
          )}
        </div>
        <div
          className={`flex flex-col items-center gap-[5px] hover:cursor-pointer ${extendWidth ? "hidden" : ""}`}
          onClick={() =>
            setNavState((preVal) => ({ ...preVal, isOpen: !isOpen }))
          }
        >
          <MenuIcon />
        </div>
      </div>
    </header>
  );
};

export default MobNav;
