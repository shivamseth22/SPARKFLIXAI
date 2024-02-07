import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector(store=>store?.movies?.nowPlayingMovies);
    console.log("movies" , movies )
    if(!movies)return;

    const mainMovie = movies[0];
    const {original_title , overview , id} = mainMovie;
  return (
    <div className='relative'>
         <div>
         <VideoBackGround movieId={id}/>
         </div>
         <div className='absolute top-96 left-20 right-20'>
         <VideoTitle title = {original_title} overview={overview} />
         </div>
    </div>
  )
}

export default MainContainer