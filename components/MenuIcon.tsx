import { navContex, useNavContext } from "@/context";
import React, { useContext } from "react";

const MenuIcon = () => {
  const { isOpen, setNavState } = useNavContext();
  return (
    <div
      className="flex flex-col gap-1 hover:cursor-pointer"
      onClick={() =>
        setNavState((preVal) => ({ ...preVal, isOpen: !preVal.isOpen }))
      }
    >
      <span
        className={`h-[2px] w-6 rounded-sm bg-white transition-all duration-500 ${
          isOpen ? "translate-x-1 translate-y-1 rotate-45" : ""
        }`}
      ></span>
      <span
        className={`h-[2px] w-6 rounded-sm bg-white transition-all duration-100 ${
          isOpen ? "scale-0" : ""
        }`}
      ></span>
      <span
        className={`h-[2px] w-6 rounded-sm bg-white transition-all duration-500 ${
          isOpen ? "-translate-y-1 translate-x-1 -rotate-45" : ""
        }`}
      ></span>
    </div>
  );
};

export default MenuIcon;
