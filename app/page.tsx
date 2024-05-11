import MovieWrapper from "@/components/TrendingSlides";
import PopularMovieList from "@/components/PopularMovieList";
import WeeklyTrendingMovie from "@/components/WeeklyTrendingMovie";
import { Suspense } from "react";

export default function Home() {
  const loadingElment = (
    <div className="flex gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
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
}
