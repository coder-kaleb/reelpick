import React from "react";
import { Movie } from "@/constants";
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
  const releaseYear = new Date(release_date).getFullYear();

  return (
    <div
      className={`embla__slide  flex h-[700px] flex-col justify-center gap-5 overflow-hidden rounded-lg p-10 pl-20 before:absolute before:w-full`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="max-w-md text-5xl font-bold leading-none text-white">
        {title}
      </h1>
      <div className="flex gap-2 text-white">
        <span>{releaseYear}</span>
        <span className="flex items-center justify-between rounded bg-banner-background px-1 text-sm">
          {parseFloat(vote_average.toString()).toFixed(1)}
        </span>
      </div>
      <p className="text-white">{genre().join(" ,")}</p>
      <p className="word-space line-clamp-2 max-w-xl tracking-wide text-gray-300">
        {overview}
      </p>
    </div>
  );
};

export default PopMovie;
