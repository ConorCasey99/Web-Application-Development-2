import React, { useContext } from "react";
import {TvShowsContext} from "../../contexts/tvShowsContext";

const AddToPlanToWatchTvShows = ({ tvShow }) => {
  const context = useContext(TvShowsContext);
  
  const handleAddToPlanToWatchTvShows = e => {
    e.preventDefault();
    context.addPlanToWatchTvShows(tvShow.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToPlanToWatchTvShows}
    >
      Add to Plan To Watch
    </button>
  );
};

export default AddToPlanToWatchTvShows;