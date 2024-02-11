import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryCotainer from './SecondaryCotainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPT/GPTSearch'
import { useSelector } from 'react-redux';



const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const gptState = useSelector(state => state.gpt.showGPTSearch)
  console.log(gptState)

  return (
    <>
      {
        gptState ?
         <>
          <GPTSearch/>
        </> 
        :
        <><Header />
          <MainContainer />
          <SecondaryCotainer />
        </>
      }



    </>
  )
}

export default Browse