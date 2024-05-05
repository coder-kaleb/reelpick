"use client";
import React, { useEffect, useState } from "react";
import PopMovie from "./TrendingMovie";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Movie, MovieApiResponse } from "@/constants";
import LoadingSkeleton from "./LoadingSkeleton";
import MovieInfo from "./MovieInfo";
import TrendingMovie from "./TrendingMovie";

interface Props {
  trendingMovie: Movie[];
  popularMovie: Movie[];
  popularTvSeries: Movie[];
}

const MovieWrapper = () => {
  const [movieInfo, setMovieInfo] = useState<Props>({
    trendingMovie: [],
    popularMovie: [],
    popularTvSeries: [],
  });
  const [loading, setLoading] = useState(true);

  const [isSlide, setIsSlide] = useState("0");
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
        setMovieInfo((preVal) => ({
          ...preVal,
          trendingMovie: response.results,
        }));
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });

    // fetch popular movie
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options,
    )
      .then((response) => response.json())
      .then((response: MovieApiResponse) => {
        setMovieInfo((preVal) => ({
          ...preVal,
          popularMovie: response.results,
        }));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  console.log(movieInfo);
  return (
    <article className="relative h-[calc(100vh-88px)] w-full overflow-y-auto bg-surface-l p-3 sm:p-4">
      <div className="pointer-events-none fixed bottom-0 left-0 z-10 h-36 w-full bg-bottom-overlay"></div>

      {/* TRENDING MOVIES ---------------------- */}
      <div className="embla mb-4 w-full" ref={emblaRef}>
        <div className="embla__container w-full">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            movieInfo.trendingMovie?.map((mov) => (
              <TrendingMovie
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
      <h2 className="mb-3 text-xl font-semibold  text-white sm:text-2xl">
        Weekly Trending Movies
      </h2>
      <section className="mb-12 w-full overflow-x-auto pb-14">
        <div className=" flex gap-3 pb-3">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            movieInfo.trendingMovie?.map((mov) => (
              <MovieInfo
                key={mov.id}
                genre_ids={mov.genre_ids}
                id={mov.id}
                poster_path={mov.poster_path}
                release_date={mov.release_date}
                title={mov.title}
                vote_average={mov.vote_average}
              />
            ))
          )}
        </div>
      </section>

      <div className="mb-3 flex items-center">
        <h2 className=" mr-auto text-xl font-semibold text-white sm:text-2xl">
          Popular
        </h2>

        <div className="relative isolate font-medium text-white">
          <button
            className="rounded-full px-4 py-2"
            onClick={() => setIsSlide("0")}
          >
            Movie
          </button>
          <button
            className="rounded-full px-4 py-2"
            onClick={() => setIsSlide("1")}
          >
            Tv Series
          </button>

          <div
            className={`absolute isolate -z-10 bg-red-600 transition-all duration-500  ${isSlide === "0" ? "translate-x-0" : "w-[87px] translate-x-full"}  top-0 h-full w-20 rounded-full`}
          ></div>
        </div>
      </div>

      <section className="w-full overflow-x-auto pb-14">
        <div className="flex gap-3 pb-3">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            movieInfo.popularMovie?.map((mov) => (
              <MovieInfo
                key={mov.id}
                genre_ids={mov.genre_ids}
                id={mov.id}
                poster_path={mov.poster_path}
                release_date={mov.release_date}
                title={mov.title}
                vote_average={mov.vote_average}
              />
            ))
          )}
        </div>
      </section>
    </article>
  );
};

export default MovieWrapper;
