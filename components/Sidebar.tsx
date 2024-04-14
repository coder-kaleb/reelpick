import { useNavContext } from "@/context";
import React from "react";

const Sidebar = () => {
  const { isOpen } = useNavContext();
  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  return (
    <aside
      className={`fixed z-10 top-16 h-[90dvh] bg-background-1 px-4 transition-all duration-500 overflow-y-auto md:translate-x-0 ${!isOpen ? "-translate-x-full" : "translate-x-0"}`}
    >
      <h4 className="mb-1 text-lg font-medium text-white">Genres</h4>
      <ul className="w-full h-full">
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
  );
};

export default Sidebar;
