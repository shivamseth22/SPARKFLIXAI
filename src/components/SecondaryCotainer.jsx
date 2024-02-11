import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryCotainer = () => {
  const movies = useSelector(store => store.movies)
  console.log(movies)

  return (
    <div className='bg-black'>
      <div className='relative -top-80'>
        <MovieList title={<div className='font-bold'>Now Playing</div>} movies={movies?.nowPlayingMovies} />
        <MovieList title={<div className='font-bold'>Top Rated Movies</div>} movies={movies?.topRatedMovies} />
        <MovieList title={<div className='font-bold'>Popular Movies</div>} movies={movies?.popularMovies} />
        <MovieList title={<div className='font-bold'>Upcoming Movies</div>} movies={movies?.upcomingMovies} />
      </div>



    </div>
  )
}

export default SecondaryCotainer