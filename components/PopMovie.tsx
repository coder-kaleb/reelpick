import React from "react";
import { Movie } from "@/constants";
import { genres } from "@/constants";

const PopMovie = ({}) => {
  // const genre = () => {
  //   const gen = genres.map((g) => {
  //     if (genre_ids.includes(g.id)) {
  //       return g.name;
  //     }
  //   });
  //   return gen.filter((g) => {
  //     if (g) {
  //       return g;
  //     }
  //   });
  // };

  // const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className={`embla__slide  flex h-[700px] flex-col justify-center gap-5 overflow-hidden rounded-lg p-10 pl-20 before:absolute before:w-full`}
      style={{
        backgroundImage: `url(/images/slider-banner.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="max-w-md text-6xl font-bold leading-none text-white">
        Puss In Buts: The Last Wish
      </h1>
      <div className="flex gap-2 text-white">
        <span>2022</span>
        <span className="rounded bg-banner-background px-1">7.7</span>
      </div>
      <p className="text-white">animagtion, adeventure, action, fantasy</p>
      <p className="word-space line-clamp-2 max-w-xl tracking-wide text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid
        quae exercitationem soluta rerum odio ea culpa neque accusamus iste?
      </p>
    </div>
  );
};

export default PopMovie;
