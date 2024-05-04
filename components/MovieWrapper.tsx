"use client";
import React, { useEffect, useState } from "react";
import PopMovie from "./PopMovie";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Movie, MovieApiResponse } from "@/constants";
import LoadingSkeleton from "./LoadingSkeleton";
import MovieInfo from "./MovieInfo";

const MovieWrapper = () => {
  const [movie, setMovie] = useState<Movie[]>();
  const [loading, setLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 4000, stopOnMouseEnter: true }),
  ]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options,
    )
      .then((response) => response.json())
      .then((response: MovieApiResponse) => {
        setMovie(response.results);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });


      // fetch 
  }, []);
  console.log(movie);
  return (
    <article className="relative h-[calc(100vh-88px)] w-full overflow-y-auto bg-surface-l p-3 sm:p-4">
      {/* TRENDING MOVIES ---------------------- */}
      <div className="pointer-events-none fixed bottom-0 left-0 z-10 h-36 w-full bg-bottom-overlay"></div>
      <div className="embla mb-4 w-full" ref={emblaRef}>
        <div className="embla__container w-full">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            movie?.map((mov) => (
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
            ))
          )}
        </div>
      </div>

      {/* THE POPULAR MOVIES --------------- */}
      <h2 className="mb-2 text-2xl font-semibold text-white">
        Weekly Trending Movies
      </h2>
      <section className="w-full overflow-x-auto pb-14">
        <div className="flex gap-3">
          <MovieInfo />
        </div>
      </section>
    </article>
  );
};

export default MovieWrapper;
