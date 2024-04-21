import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import ShowCard from "../MovieCard/ShowCard";
import "./MovieListing.scss";

export default function MovieListing() { 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  return (
    <div className="movie-wrapper"> 
    {Object.keys(movies).length == 0 && Object.keys(shows).length == 0 ? (<div style={{color : 'white' , textAlign : 'center' , fontSize : '25px'}}>...Loading</div>) : (
       <>
       <div className="movie-list">
         <h2>Movies</h2>
         <div className="movie-container">
           <Slider {...settings}>
             {movies ? (
               movies.map((movie, index) => (
                 <MovieCard key={index} data={movie} />
               ))
             ) : (
               <h3>Movies Not Found !</h3>
             )}
           </Slider>
         </div>
       </div>
 
       <div className="show-list">
         <h2>Shows</h2>
         <div className="movie-container"> 
         <Slider {...settings}>
           {shows ? (
             shows.map((show, index) => <ShowCard key={index} data={show} />)
           ) : (
             <h3>Shows Not Found !</h3>
           )}
         </Slider>
         </div>
       </div>
     </>
    )}
   
    </div>
  );
}
