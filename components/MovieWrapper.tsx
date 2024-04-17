"use client";
import React, { useEffect, useState } from "react";
import PopMovie from "./PopMovie";

interface MovieApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const MovieWrapper = () => {
  const [movie, setMovie] = useState<Movie[]>();
  // useEffect(() => {

  // fetch(
  //   "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  //   options,
  // )
  //   .then((response) => response.json())
  //   .then((response: MovieApiResponse) => setMovie(response.results))
  //   .catch((err) => console.error(err));
  // }, []);
  // console.log(movie);
  return (
    <section className="relative z-0 mx-auto h-[70vh] w-full text-white">
      <article className="flex h-full w-full flex-col gap-4 rounded-lg bg-banner-background p-4">
        {movie?.map((mov) => (
          <PopMovie
            key={mov.id}
            adult={mov.adult}
            backdrop_path={mov.backdrop_path}
            genre_ids={mov.genre_ids}
            id={mov.id}
            original_language={mov.original_language}
            original_title={mov.original_title}
            overview={mov.overview}
            popularity={mov.popularity}
            poster_path={mov.poster_path}
            release_date={mov.release_date}
            title={mov.title}
            video={mov.video}
            vote_average={mov.vote_average}
            vote_count={mov.vote_count}
          />
        ))}
      </article>
    </section>
  );
};

export default MovieWrapper;
