"use client";
import React, { Suspense } from "react";
import MovieWrapper from "./TrendingSlides";
import WeeklyTrendingMovie from "./WeeklyTrendingMovie";
import PopularMovieList from "./PopularMovieList";

const HomeMovi = () => {
  const loadingElment = (
    <div className="flex gap-3">
      {new Array(6).map((_, i) => (
        <div className="skeleton h-72 w-52" key={i}></div>
      ))}
    </div>
  );

  return (
    <article className="relative h-[calc(100vh-88px)] w-full overflow-y-auto bg-surface-l p-3 sm:p-4">
      <div className="pointer-events-none fixed bottom-0 left-0 z-10 h-36 w-full bg-bottom-overlay"></div>
      <Suspense fallback={<div className="skeleton h-[75vh] w-full"></div>}>
        <MovieWrapper />
      </Suspense>
      <h2 className="mb-3 text-xl font-semibold  text-white sm:text-2xl">
        Weekly Trending Movies
      </h2>
      <Suspense fallback={loadingElment}>
        <WeeklyTrendingMovie />
      </Suspense>
      <Suspense fallback={loadingElment}>
        <PopularMovieList />
      </Suspense>
    </article>
  );
};

export default HomeMovi;
