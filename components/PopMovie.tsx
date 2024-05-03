import React from "react";
import { Movie } from "@/constants";
import { genres } from "@/constants";
import { Play, Star } from "lucide-react";
import RatingIcon from "./RatingIcon";

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
  const vote = parseFloat(vote_average.toString()).toFixed(1);
  return (
    <div
      className={`embla__slide relative isolate flex h-[75vh] flex-col justify-end gap-2 overflow-hidden rounded-lg border-none pb-9 pl-5 pt-36 outline-none sm:pl-16`}
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
      <h1 className="mb-1 max-w-5xl text-4xl font-bold leading-none text-white max-sm:mx-auto max-sm:pr-5 max-sm:text-center sm:text-6xl">
        {title}
      </h1>
      <div className="flex w-full gap-3 text-center text-white max-sm:items-center max-sm:justify-center">
        <span className="text-md">{releaseYear}</span>
        <RatingIcon rate={vote} bg={false} />
      </div>
      <p className="font-light tracking-wide text-white max-sm:text-center">
        {genre().join(", ")}
      </p>
      <div className="mt-5 flex gap-7 max-sm:items-center max-sm:justify-center">
        <button className="flex items-center justify-center gap-1 rounded-md bg-red-600 px-4 py-3 font-semibold text-white shadow-none transition hover:shadow-md">
          <Play strokeWidth={4} className="size-4" />
          Watch Now
        </button>
        <button className="flex items-center justify-center gap-1 rounded-md border border-gray-200 px-4 py-3 font-semibold text-white shadow-none transition hover:shadow-md">
          <Play strokeWidth={4} className="size-4" />
          Watch Trailer
        </button>
      </div>
      <div className="absolute inset-0 -z-10 w-full bg-overlay"></div>
    </div>
  );
};

export default PopMovie;
