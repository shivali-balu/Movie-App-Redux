import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies()) ;  
    dispatch(fetchAsyncShows()) ; 
  }, [dispatch]); 

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing /> 
    </div>
  );
}
