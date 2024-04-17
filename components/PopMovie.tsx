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

  return (
    <div
      className={`flex  h-full flex-col gap-5 rounded-lg bg-[url('/puss.jpg')] bg-cover bg-center bg-no-repeat p-10 pl-20`}
    >
      <h1 className="max-w-md text-5xl font-medium leading-none">{title}</h1>
      <div className="flex gap-2">
        <span className="text-gray-300">{release_date}</span>
        <span className="rounded bg-banner-background px-1">
          {vote_average}
        </span>
      </div>
      <p className="text-gray-300">{genre()}</p>
      <p className="word-space line-clamp-2 max-w-2xl tracking-wide text-gray-300">
        {overview}
      </p>
    </div>
  );
};

export default PopMovie;
