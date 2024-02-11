import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ backdrop_path , movieTitle , rating  }) => {
  // console.log( movies[0]?.backdrop_path)
  return (
    <div className='hover:scale-105'>
      <img  src={IMG_CDN + backdrop_path} className='min-w-[300px]'/>
      <div className='flex justify-between'>
        
      <h1>{movieTitle}</h1>
      <h1 className='font-bold'>{rating.toFixed(1)}/10</h1>
      </div>
    </div>
  )
}

export default MovieCard
