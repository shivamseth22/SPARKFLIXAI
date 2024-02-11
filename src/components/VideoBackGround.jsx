import React from 'react';
import useTrailerVideo from '../hooks/useTrailerVideo'

import {  useSelector } from 'react-redux';

const VideoBackGround = ({ movieId }) => {
//const [trailerId, setTrailerId] = useState(null);
   useTrailerVideo(movieId);
  const trailerVideo = useSelector(state=>state?.movies?.TrailerVideo);


  return (
    <div className='w-screen'>
      <iframe
      className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      // allowFullScreen
      >
      </iframe>

    </div>
  )
}

export default VideoBackGround