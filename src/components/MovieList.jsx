import React from 'react'
import MovieCart from './MovieCard'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies)
    return (
        <div className='text-white p-5'>
            <div >
                <h1 className='text-2xl pb-4'>{title}</h1>
                <div className='flex gap-5 ' style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                    {
                        movies?.map((movies) => (<>
                            <MovieCard backdrop_path={movies?.backdrop_path} movieTitle={movies?.title} rating={movies?.vote_average} />

                        </>))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList