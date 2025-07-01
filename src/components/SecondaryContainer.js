import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  
  return movies.nowPlayingMovies && (
    <div className=' bg-black'>
      <div className='-mt-60 pl-8 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
      </div>
    </div>
  )
}
