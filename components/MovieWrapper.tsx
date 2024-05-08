import { Movie, baseApiUrl, options } from "@/constants";
import TrendingMovie from "./TrendingMovie";
import { fetchData } from "@/utility";
import Carousel from "./Carousel";

interface Props {
  trendingMovie: Movie[] | undefined;
  popularMovie: Movie[] | undefined;
  popularTvSeries: Movie[] | undefined;
}

const MovieWrapper = async () => {
  
  const {results:trendingMovie} = await fetchData(`${baseApiUrl}/3/trending/movie/day?language=en-US`, options)
;

  return (
    <section className="mb-5">
      <Carousel>
          {trendingMovie.map((mov) => (
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
      </Carousel>
    </section>
  );
};

export default MovieWrapper;
