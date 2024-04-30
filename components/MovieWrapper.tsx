"use client";
import React, { useEffect, useState } from "react";
import PopMovie from "./PopMovie";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Movie, MovieApiResponse } from "@/constants";

const MovieWrapper = () => {
  const [movie, setMovie] = useState<Movie[]>();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 3000 }),
  ]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjExYjljZGRlMzQzZjMwZGZmNDdlMDdmNTI0MmQ1MSIsInN1YiI6IjY0N2Y0NWJlMGUyOWEyMmJkZWJkYjM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.thwqloDibcqsU7JleISSddPWZj7MBmHgA9ifczThNwQ",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options,
    )
      .then((response) => response.json())
      .then((response: MovieApiResponse) => setMovie(response.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(movie);
  return (
    <section className="relative w-full bg-surface-l p-4">
      <div className="embla w-full" ref={emblaRef}>
        <div className="embla__container w-full">
          {/* {movie?.map((mov) => ( */}
          <PopMovie
          // key={mov.id}
          // adult={mov.adult}
          // backdrop_path={mov.backdrop_path}
          // genre_ids={mov.genre_ids}
          // id={mov.id}
          // original_language={mov.original_language}
          // original_title={mov.original_title}
          // overview={mov.overview}
          // popularity={mov.popularity}
          // poster_path={mov.poster_path}
          // release_date={mov.release_date}
          // title={mov.title}
          // video={mov.video}
          // vote_average={mov.vote_average}
          // vote_count={mov.vote_count}
          />
          {/* ))} */}
        </div>
      </div>
    </section>
  );
};

export default MovieWrapper;
