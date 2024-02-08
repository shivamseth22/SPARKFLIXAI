import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


export const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=IN&page=1', API_OPTIONS)
        const json = await response.json();
        dispatch(addNowPlayingMovies(json?.results))


    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}