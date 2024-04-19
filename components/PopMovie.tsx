import React from "react";
import { Movie } from "./MovieWrapper";
import { genres } from "@/constants";

const PopMovie = ({
  adult,
  backdrop_path,
  genre_ids,
  id,
  original_language,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  vote_count,
}: Movie) => {
  const genre = () => {
    const gen = genres.map((g) => {
      if (genre_ids.includes(g.id)) {
        return g.name;
      }
    });
    return gen.filter((g) => {
      if (g) {
        return g;
      }
    });
  };

  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className={`embla__slide flex-1 justify-center flex-col gap-5 overflow-hidden flex rounded-lg p-10 pl-20`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="max-w-md text-6xl text-white font-bold leading-none">{title}</h1>
      <div className="flex gap-2 text-white">
        <span>{release_date}</span>
        <span className="rounded bg-banner-background px-1">
          {vote_average}
        </span>
      </div>
      <p className="text-white">{genre().join(", ")}</p>
      <p className="word-space line-clamp-2 max-w-xl tracking-wide text-gray-300">
        {overview}
      </p>
    </div>
  );
};

export default PopMovie;
