import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const VideoBackGround = ({ movieId }) => {

  const getMovieById = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/976573/videos?language=en-US`, API_OPTIONS)
    const json = await data.json();

    const filterData = json?.results?.filter(video => video.type == "Trailer")
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    console.log(filterData[0])

  }

  useEffect(() => {
    getMovieById();
  }, [])
  return (
    <div>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/yDr7PLOs3s4?si=Yw4AtoPEwBGbiIt3"
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