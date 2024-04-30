import { genres } from "@/constants";
import { useNavContext } from "@/context";
import React from "react";

const Sidebar = () => {
  // const { isOpen } = useNavContext();

  return (
    <nav className=" sidebar__scroll absolute bottom-0 top-20 z-10 -translate-x-full overflow-y-auto border-t  border-t-slate-600 bg-background-1 py-6">
      <aside className={`px-4`}>
        <h4 className="mb-1 text-lg font-medium text-white">Genres</h4>
        <ul className="flex flex-col gap-1">
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
