import React from "react";

interface Props {
  isOpen: boolean;
}
const MenuIcon = ({ isOpen }: Props) => {
  return (
    <>
      <span
        className={`w-7 h-[3px] rounded-sm bg-white transition-all duration-500 ${
          isOpen ? "rotate-45 translate-x-1 translate-y-1" : ""
        }`}
      ></span>
      <span
        className={`w-7 h-[3px] rounded-sm bg-white transition-all duration-100 ${
          isOpen ? "scale-0" : ""
        }`}
      ></span>
      <span
        className={`w-7 h-[3px] rounded-sm bg-white transition-all duration-500 ${
          isOpen ? "-rotate-45 translate-x-1 -translate-y-1" : ""
        }`}
      ></span>
    </>
  );
};

export default MenuIcon;
