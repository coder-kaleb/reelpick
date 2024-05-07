import { Movie, baseApiUrl } from "@/constants";

import TrendingMovie from "./TrendingMovie";
import { fetchData } from "@/utility";
import MovieInfo from "./MovieInfo";
import ButtonSlider from "./ButtonSlider";

interface Props {
  trendingMovie: Movie[] | undefined;
  popularMovie: Movie[] | undefined;
  popularTvSeries: Movie[] | undefined;
}

const MovieWrapper = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  };
  const [trendingMovie, popularMovie] = await Promise.all([
    fetchData(`${baseApiUrl}/3/trending/movie/day?language=en-US`, options),
    fetchData(`${baseApiUrl}/3/movie/popular?language=en-US&page=1`, options),
  ]);

  return (
    <article className="relative h-[calc(100vh-88px)] w-full overflow-y-auto bg-surface-l p-3 sm:p-4">
      <div className="pointer-events-none fixed bottom-0 left-0 z-10 h-36 w-full bg-bottom-overlay"></div>

      {/* TRENDING MOVIES ---------------------- */}
      <div className="embla mb-4 w-full">
        <div className="embla__container w-full">
          {trendingMovie?.results?.map((mov) => (
            <TrendingMovie
              key={mov.id}
              backdrop_path={mov.backdrop_path}
              genre_ids={mov.genre_ids}
              id={mov.id}
              overview={mov.overview}
              poster_path={mov.poster_path}
              release_date={mov.release_date}
              title={mov.title}
              vote_average={mov.vote_average}
            />
          ))}
        </div>
      </div>

      {/* THE POPULAR MOVIES --------------- */}
      <h2 className="mb-3 text-xl font-semibold  text-white sm:text-2xl">
        Weekly Trending Movies
      </h2>
      <section className="horizontal__scroll mb-12 w-full overflow-x-auto pb-4">
        <div className=" flex gap-3">
          {trendingMovie?.results?.map((mov) => (
            <MovieInfo
              key={mov.id}
              genre_ids={mov.genre_ids}
              id={mov.id}
              poster_path={mov.poster_path}
              release_date={mov.release_date}
              title={mov.title}
              vote_average={mov.vote_average}
            />
          ))}
        </div>
      </section>

      <div className="mb-3 flex items-center">
        <h2 className=" mr-auto text-xl font-semibold text-white sm:text-2xl">
          Popular
        </h2>
        <ButtonSlider />
      </div>

      <section className="horizontal__scroll w-full overflow-x-auto pb-4">
        <div className="flex gap-3">
          {popularMovie?.results?.map((mov) => (
            <MovieInfo
              key={mov.id}
              genre_ids={mov.genre_ids}
              id={mov.id}
              poster_path={mov.poster_path}
              release_date={mov.release_date}
              title={mov.title}
              vote_average={mov.vote_average}
            />
          ))}
        </div>
      </section>
    </article>
  );
};

export default MovieWrapper;
