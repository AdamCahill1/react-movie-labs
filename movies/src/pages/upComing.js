import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpComingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'

const UpComing = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getUpComingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const playlist = movies.filter(m => m.favorite)
  localStorage.setItem('playlist', JSON.stringify(playlist))
  const addToPlaylist = (movieId) => true

  return (
    <PageTemplate
      title="Discover Up Coming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default UpComing;