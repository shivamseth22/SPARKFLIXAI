import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryCotainer from './SecondaryCotainer';



const Browse = () => {

  useNowPlayingMovies();

  return (
    <>
      <Header/>
      <MainContainer/>
      <SecondaryCotainer/>
    </>
  )
}

export default Browse