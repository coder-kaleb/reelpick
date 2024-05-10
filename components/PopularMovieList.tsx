"use client";
import MovieInfo from "./MovieInfo";
import { fetchData } from "@/utility";
import { Movie, baseApiUrl, options } from "@/constants";
import ButtonSlider from "./ButtonSlider";
import { useEffect, useState } from "react";

const PopularMovieList = () => {
  const [popularMovie, setPopularMovie] = useState<Movie[] | null>(null);
  const [isSlide, setIsSlide] = useState<"movie" | "tv">("movie");
  const [loading, setLoading] = useState(true);
  console.log(isSlide);
  useEffect(() => {
    setLoading(true);
    fetchData(
      `${baseApiUrl}/3/${isSlide}/popular?language=en-US&include_adult=false&page=1`,
      options,
    ).then((res) => {
      setPopularMovie(res.results);
      setLoading(false);
    });
  }, [isSlide]);
  const loadingEl = Array.from({ length: 6 }, (_, i) => (
    <div className="skeleton h-72 w-60" key={i}></div>
  ));

  return (
    <>
      <div className="mb-3 flex items-center">
        <h2 className=" mr-auto text-xl font-semibold text-white sm:text-2xl">
          Popular
        </h2>
        <ButtonSlider isSlide={isSlide} setIsSlide={setIsSlide} />
      </div>
      <section className="horizontal__scroll w-full overflow-x-auto pb-4">
        <div className="flex gap-3">
          {loading ? (
            <>{loadingEl}</>
          ) : (
            popularMovie?.map((mov) => (
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
    </>
  );
};

export default PopularMovieList;
