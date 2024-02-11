import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await response.json();
        dispatch(addPopularMovies(json?.results))
        console.log(json)


    }

    useEffect(() => {
        getPopularMovies();
    }, [])

}
export default usePopularMovies;   