import { baseApiUrl, options } from '@/constants'
import { fetchData } from '@/utility'
import React from 'react'
import MovieInfo from './MovieInfo'

const WeeklyTrendingMovie = async () => {
  const {results:trendingMovie} = await fetchData(`${baseApiUrl}/3/trending/movie/day?language=en-US&include_adult=false`, options)
  return (
    
    
      <section className="horizontal__scroll mb-12 w-full overflow-x-auto pb-4">
        <div className=" flex gap-3">
          {trendingMovie.map((mov) => (
            <MovieInfo
              key={mov.id}
              genre_ids={mov.genre_ids}
              id={mov.id}
              poster_path={mov.poster_path}
              release_date={mov.release_date}
              title={mov.title}
              vote_average={mov.vote_average}
              media_type={mov.media_type}
            />
          ))}
        </div>
      </section>
    
  )
}

export default WeeklyTrendingMovie