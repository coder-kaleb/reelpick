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
      className={`embla__slide justify-end relative isolate flex h-[700px] flex-col gap-4 pb-16 overflow-hidden border-none rounded-lg pl-5 pt-36 sm:pl-16`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute left-5 top-5">
        <h1 className="relative isolate inline-block px-1 text-2xl font-semibold text-white before:absolute before:-inset-1 before:-z-10 before:-skew-y-3 before:bg-red-500">
          Trending
        </h1>
      </div>
      <h1 className="max-w-4xl max-sm:mx-auto max-sm:text-center mb-7 text-4xl font-bold leading-none text-white max-sm:pr-5 sm:text-6xl">
        {title}
      </h1>
      <div className="flex w-full max-sm:justify-center max-sm:items-center gap-3 text-center text-white">
        <span className="text-md">{releaseYear}</span>
        <div className="flex items-center gap-1">
          <Star className="size-4" />
          <span className="flex items-center justify-between rounded bg-banner-background px-1 font-semibold">
            {parseFloat(vote_average.toString()).toFixed(1)}
          </span>
        </div>
      </div>
      <p className="font-light max-sm:text-center tracking-wide text-white">
        {genre().join(", ")}
      </p>
      <p className="word-space max-sm:mx-auto text-md line-clamp-4 max-w-xl tracking-wide text-gray-300 max-sm:text-gray-400">
        {overview}
      </p>
      <div className="mt-10 flex gap-7">
        <button className="flex items-center justify-center gap-1 rounded-md bg-red-600 px-4 py-3 font-semibold text-white shadow-none transition hover:shadow-md">
          <Play strokeWidth={4} className="size-4" />
          Watch Now
        </button>
        <button className="flex items-center justify-center gap-1 rounded-md border-gray-200 border px-4 py-3 font-semibold text-white shadow-none transition hover:shadow-md">
          <Play strokeWidth={4} className="size-4" />
          Watch Trailer
        </button>
      </div>
      <div className="absolute inset-0 -z-10 w-full bg-overlay"></div>
    </div>
  );
};

export default PopMovie;
