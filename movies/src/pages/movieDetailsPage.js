import React, {useState, useEffect}  from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";

const MoviePage = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;

//getMovieImages(id).then((images) => {
  // Filter for Languages images
    // English: en
    // French: fr
    // German: de
    // Spanish: es
    // Italian: it
    // Dutch: nl
    // Russian: ru
    // Chinese: zh
    // Japanese: ja
    // Korean: ko
    // Arabic: ar
  //const englishImages = images.filter(image => image.iso_639_1 === 'en');
  //console.log(englishImages);
  //setImages(englishImages);