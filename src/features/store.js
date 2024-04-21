import { configureStore } from "@reduxjs/toolkit"; 
import moviesReducer from "./movies/movieSlice" ; 

export const store = configureStore({
    devTools : true , 
    reducer : {
        movies : moviesReducer  ,
    } , 
}) ; 