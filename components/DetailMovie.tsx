import { DetailMov, options } from "@/constants";
import { fetchDetail } from "@/utility";
import { PlayIcon, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const DetailMovie = async ({ pid }: { pid: number }) => {
  const {
    title,
    backdrop_path,
    runtime,
    original_language,
    production_countries,
    genre_ids,
    overview,
    release_date,
    vote_average,
    budget,
    poster_path,
    imdb_id,
    id,
  } = await fetchDetail(
    `https://api.themoviedb.org/3/movie/${pid}?api_key=5611b9cdde343f30dff47e07f5242d51`,
    options,
  );
  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const releaseYear = new Date(release_date).toDateString();
  const vote = parseFloat(vote_average.toString()).toFixed(1);
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const genreName = genre_ids?.map((g, i) => g.name).join(", ");
  const productionCountry = production_countries.map((c, i) => c.iso_3166_1);
  return (
    <section className="relative h-[calc(100vh-88px)] w-full overflow-y-auto bg-surface-l p-3 sm:p-4 ">
      <div className="pointer-events-none absolute inset-0 bottom-[15px] isolate  w-full bg-video-gradient" />

      <div
        className={`grid h-[80vh] place-items-center bg-cover bg-center`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <button className="group btn btn-lg size-24 rounded-full">
          <PlayIcon className="size-10 group-hover:text-white" />
        </button>
      </div>

      <div className="hidden gap-10 bg-[rgba(19,18,18,1)] px-5 pt-10 text-[#868484] md:flex ">
        <div className="relative h-80 w-64">
          <Image
            src={posterUrl}
            alt="movie-image"
            className="rounded-lg"
            fill
          />
        </div>
        <div>
          <div className="relative isolate flex flex-col gap-3">
            <div
              className={`absolute inset-0 -z-10 block bg-[url('/puss.jpg')] bg-cover bg-center opacity-60 md:hidden`}
            ></div>
            <h2 className="text-3xl font-semibold text-white">{title}</h2>
            <ul className="flex items-start gap-6 pl-2 text-sm ">
              <li className="relative flex gap-1 before:absolute before:-left-2 before:h-full before:w-1 before:bg-[#868484]">
                {vote}
                <Star className="size-4" strokeWidth={4} />
              </li>
              <li className="relative before:absolute before:-left-2 before:h-full before:w-1 before:bg-[#868484]">
                {genreName}
              </li>
              <li className="relative before:absolute before:-left-2 before:h-full before:w-1 before:bg-[#868484]">
                {runtime} min
              </li>
            </ul>
            <p className="text-md line-clamp-3 max-w-2xl">{overview}</p>

            {/* detail */}
            <section className="flex gap-16 text-[15px]">
              <div>
                <div>Type:</div>
                <div>Gener:</div>
                <div>Release date:</div>
                <div>Language:</div>
              </div>
              <div>
                <div>Movie</div>
                <div>{productionCountry}</div>
                <div>{releaseYear}</div>
                <div>{original_language}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMovie;
