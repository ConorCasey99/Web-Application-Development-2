import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, createMovie } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    default:
      return state;
  }
};

const ApiMoviesContextProvider = props => {
  const existingToken = localStorage.getItem("token");
  const [state, dispatch] = useReducer(reducer, { movies: []});
  const [authenticated, setAuthenticated] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieId, setId] = useState("");
  const [movieRelease_date, setRelease_date] = useState("");
  const [moviePopularity, setMoviePopularity] = useState("");
  const [authToken, setAuthToken] = useState(existingToken);


  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },
  []);

  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const postMovie = async (movietitle, movieid, movierelease_date, moviepopularity) => {
    const result = await createMovie(movietitle, movieid, movierelease_date, moviepopularity);
    if (result.token) {
        setToken(result.token)
        setMovieTitle(movietitle);
        setId(movieid);
        setRelease_date(movierelease_date);
        setMoviePopularity(moviepopularity);
    }
  };
/*
  const postMovie = async (movietitle, movieid, movierelease_date, moviepopularity) => {
    const result = await createMovie(movietitle, movieid, movierelease_date, moviepopularity);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };
*/

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        setAuthenticated,
        postMovie,
        moviePopularity,
        movieRelease_date,
        movieId,
        movieTitle
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default ApiMoviesContextProvider