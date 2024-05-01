import React from "react";
import { Movie } from "@/constants";
import { genres } from "@/constants";
import { Play, Star, TrendingUp } from "lucide-react";

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
      className={`embla__slide relative isolate flex h-[700px] flex-col gap-3 overflow-hidden rounded-lg pl-16 pt-32`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-5 left-5">
        <h1 className="relative isolate inline-block px-1 text-2xl font-semibold text-white before:absolute before:-inset-1 before:-z-10 before:-skew-y-3 before:bg-red-500">
          Trending
        </h1>
      </div>
      <h1 className="max-w-4xl text-6xl font-bold leading-none text-white">
        {title}
      </h1>
      <div className="flex gap-3 text-white">
        <span className="text-md">{releaseYear}</span>
        <div className="flex gap-1 items-center">
          <Star className="size-4" />
          <span className="flex items-center justify-between rounded bg-banner-background px-1 text-sm font-semibold">
            {parseFloat(vote_average.toString()).toFixed(1)}
          </span>
        </div>
      </div>
      <p className="font-light tracking-wide text-white">
        {genre().join(", ")}
      </p>
      <p className="word-space text-md line-clamp-4 max-w-xl tracking-wide text-gray-300">
        {overview}
      </p>
      <div className="mt-10">
        <button className="flex items-center justify-center gap-1 rounded-md bg-red-600 px-4 py-3 font-semibold text-white shadow-none transition hover:shadow-md">
          <Play strokeWidth={4} className="size-4" />
          Watch Now
        </button>
      </div>
      <div className="absolute inset-0 -z-10 w-full bg-overlay"></div>
    </div>
  );
};

export default PopMovie;
