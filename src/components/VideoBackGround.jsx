import React from 'react';
import useTrailerVideo from '../hooks/useTrailerVideo'

import {  useSelector } from 'react-redux';

const VideoBackGround = ({ movieId }) => {
//const [trailerId, setTrailerId] = useState(null);
   useTrailerVideo(movieId);
  const trailerVideo = useSelector(state=>state?.movies?.TrailerVideo);


  return (
    <div>
      <iframe
      className='w-screen h-screen'
        // width="100%"
        height="500px"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      // allowFullScreen
      >
      </iframe>

    </div>
  )
}

export default VideoBackGround