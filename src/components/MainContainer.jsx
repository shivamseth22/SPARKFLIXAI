import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector(store=>store?.movies?.nowPlayingMovies);
    if(!movies)return;

    const mainMovie = movies[0];
    const {title , overview , id} = mainMovie;
  return (
    <div className='relative'>
    <div className='video-container'>
      <VideoBackGround movieId={id}/>
      <div className="absolute inset-0 bg-gradient-to-r from-black"></div>
    </div>
    <div className='absolute top-80 left-40 right-20 text-white'>
      <VideoTitle title={title} overview={overview} />
    </div>
  </div>
  
  )
}

export default MainContainer