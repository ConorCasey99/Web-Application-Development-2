import React, { useContext } from "react";
import {AiringContext} from "../../contexts/airingTvContext";

const AddToCurrentlyWatchingTvShows = ({ tvShow }) => {
  const context = useContext(AiringContext);
  
  const handleAddToCurrentlyWatchingTvShows = e => {
    e.preventDefault();
    context.addToCurrentlyWatchingTvShows(tvShow.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToCurrentlyWatchingTvShows}
    >
      Add to Currently Watching
    </button>
  );
};

export default AddToCurrentlyWatchingTvShows;