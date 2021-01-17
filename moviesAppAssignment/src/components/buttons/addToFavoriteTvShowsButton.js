import React, { useContext } from "react";
import {TvShowsContext} from "../../contexts/tvShowsContext";

const AddToFavoriteTvShowsButton = ({ tvShow }) => {
  const context = useContext(TvShowsContext);
  
  const handleAddToFavoriteTvShows = e => {
    e.preventDefault();
    context.addToFavoriteTvShows(tvShow.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavoriteTvShows}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteTvShowsButton;