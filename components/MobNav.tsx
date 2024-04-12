import { Search, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import MenuIcon from "./MenuIcon";

interface Props {
  navState: {
    isOpen: boolean;
    extendWidth: boolean;
  };
  setNavState: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      extendWidth: boolean;
    }>
  >;
}
const MobNav = ({ navState, setNavState }: Props) => {
  return (
    <header
      className="relative mx-auto flex max-w-screen-2xl
    items-center justify-between gap-2 px-4 py-6 md:hidden"
    >
      <Link
        href="/"
        className={`text-xl font-semibold text-white ${navState.extendWidth ? "hidden" : ""}`}
      >
        Logo
      </Link>
      <div
        className={`flex items-center gap-1 ${navState.extendWidth ? "w-full" : ""}`}
      >
        <input
          type="text"
          placeholder="Search any movies..."
          className={`flex-1 origin-right scale-0 rounded-md transition-all duration-200 ${navState.extendWidth ? "w-full scale-100" : ""} border-none bg-white-alpha-20 px-1 py-2 pl-8 text-white outline-none`}
        />
        <div
          className="flex size-8 items-center justify-center rounded bg-white-alpha-20 hover:cursor-pointer md:hidden"
          onClick={() =>
            setNavState((preVal) => ({
              ...preVal,
              extendWidth: !navState.extendWidth,
            }))
          }
        >
          {navState.extendWidth ? (
            <X className="size-5 text-white" />
          ) : (
            <Search className="size-5 text-white" />
          )}
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
  );
};

export default MobNav;
