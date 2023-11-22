import React, { useState, useEffect } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";

const TemplateMoviePage = ({ movie, children }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getMovieImages(movie.id).then((images) => {
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
      const englishImages = images.filter(image => image.iso_639_1 === 'en');
      console.log(englishImages);
      setImages(englishImages);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={1}>
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;