import React from 'react'
import MovieInfo from './MovieInfo'
import { fetchData } from '@/utility'
import { baseApiUrl, options } from '@/constants'
import ButtonSlider from './ButtonSlider'

const PopularMovieList = async () => {
    const {results:popularMovie} =   await  fetchData(`${baseApiUrl}/3/movie/popular?language=en-US&page=1`, options)
  return (
    <>
    <div className="mb-3 flex items-center">
        <h2 className=" mr-auto text-xl font-semibold text-white sm:text-2xl">
          Popular
        </h2>
        <ButtonSlider />
      </div>
    <section className="horizontal__scroll w-full overflow-x-auto pb-4">
        <div className="flex gap-3">
          {popularMovie.map((mov) => (
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
    </>
  )
}

export default PopularMovieList