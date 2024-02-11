import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
            const json = await response.json();
            console.log(json.results)
            dispatch(addUpcomingMovies(json?.results))

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getUpcomingMovies();
    })
}

export default useUpcomingMovies