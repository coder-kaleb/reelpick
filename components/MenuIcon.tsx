import { useNavContext } from "@/context";
import React from "react";

const MenuIcon = () => {
  const { isOpen } = useNavContext();
  return (
    <div className="flex hover:cursor-pointer gap-1 flex-col">
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
