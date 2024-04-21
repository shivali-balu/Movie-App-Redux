import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIkey } from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}`
    );
    const json = await response.json();
    return json.results;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${APIkey}`
    );
    const json = await response.json();
    return json.results;
  }
);

export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}`
    );
    const json = await response.json();
    return json;
  }
);

export const fetchAsyncShowDetail = createAsyncThunk(
  "movies/fetchAsyncShowDetail",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${APIkey}`
    );
    const json = await response.json();
    return json;
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectedMovie: [],
  selectedShow: [],
  searchedMovies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectedMovie = [];
    },

    removeSelectedShow: (state) => {
      state.selectedShow = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Fetched movie data");
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log("Request rejected!");
      })

      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("Fetched shows data");
        state.shows = payload;
      })

      .addCase(fetchAsyncMovieDetail.fulfilled, (state, { payload }) => {
        console.log("Fetched movie detail data");
        state.selectedMovie = payload;
      })

      .addCase(fetchAsyncShowDetail.fulfilled, (state, { payload }) => {
        console.log("Fetched show detail data");
        state.selectedShow = payload;
      });
  },
});

export const { removeSelectedMovie, removeSelectedShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export const getSelectedShow = (state) => state.movies.selectedShow;
export default movieSlice.reducer;
