import { genres } from "@/constants";
import { useNavContext } from "@/context";
import React from "react";

const Sidebar = () => {
  const { isOpen } = useNavContext();
  console.log(isOpen);
  return (
    <nav
      className={` sidebar__scroll absolute -left-80 bottom-0 top-[87px] z-10 w-full max-w-80 ${isOpen ? " translate-x-80" : ""} overflow-y-auto border-t  border-t-slate-600 bg-background-1 py-6 transition duration-500`}
    >
      <aside className={`px-4`}>
        <h4 className="mb-1 text-lg font-medium text-white">Genres</h4>
        <ul className="flex flex-col gap-2">
          {genres.map((item) => (
            <li
              key={item.id}
              className="w-full rounded-md px-2 py-1 text-gray-400 transition hover:cursor-pointer hover:bg-banner-background"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
};

export default Sidebar;
