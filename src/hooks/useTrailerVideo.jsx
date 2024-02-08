import React from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useTrailerVideo = (movieId) => {

    const dispatch = useDispatch();

    const getMovieById = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();

        const filterData = json?.results?.filter(video => video.type == "Trailer")
        const trailer = filterData.length ? filterData[0] : json?.results[0];
        // setTrailerId(trailer.key) its a way to keep it in a state or we can put it into redux
        dispatch(addTrailerVideo(trailer))
    
      }
      useEffect(() => {
        getMovieById();
      }, [])
      
}
export default useTrailerVideo