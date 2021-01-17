import React, { useEffect, createContext, useReducer } from "react";
import {getTvShows, getAiringTvShows} from "../api/tmdb-api";

export const AiringContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-currently-watching":
        return {
          airing: state.airing.map((m) =>
            m.id === action.payload.tvShow.id ? { ...m, airing: true } : m
          ),
          tvShows: [...state.tvShows],
        };

   
      case "load":
      return { tvShows: action.payload.tvShows, airing: [...state.airing]};
      case "load-airing":
        return { airing: action.payload.tvShows, tvShows: [...state.tvShows]}; 

    case "add-TvShowReview":
      return {
        tvShows: state.tvShows.map((m) =>
          m.id === action.payload.tvShow.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        airing: [...state.airing]
      };
    default:
      return state;
  }
};

const AiringContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { tvShows: [], airing:[] });

  const addToCurrentlyWatchingTvShows = (tvShowId) => {
    const index = state.airing.map((m) => m.id).indexOf(tvShowId);
    dispatch({ type: "add-currently-watching", payload: { tvShow: state.airing[index]} });
  };

  const addTvShowReview = (tvShow, review) => {
    dispatch({ type: "add-TvShowReview", payload: { tvShow, review } });
  };

  useEffect(() => {
    getTvShows().then((tvShows) => {
      dispatch({ type: "load", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getAiringTvShows().then((tvShows) => {
      dispatch({ type: "load-airing", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AiringContext.Provider
      value={{
        tvShows: state.tvShows,
        airing: state.airing,
        addToCurrentlyWatchingTvShows: addToCurrentlyWatchingTvShows,
        addTvShowReview: addTvShowReview,
      }}
    >
      {props.children}
    </AiringContext.Provider>
  );
};

export default AiringContextProvider;