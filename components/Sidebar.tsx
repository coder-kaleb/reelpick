import { genres } from "@/constants";
import { useNavContext } from "@/context";
import React from "react";

const Sidebar = () => {
  // const { isOpen } = useNavContext();

  return (
    <nav>
    <aside
      className={`fixed sidebar__scroll top-16 bottom-0 z-10 h-[90dvh] overflow-y-auto bg-background-1 px-4 transition-all duration-500 md:-translate-x-full`}
    >
      <h4 className="mb-1 text-lg font-medium text-white">Genres</h4>
      <ul className="h-full w-full">
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
