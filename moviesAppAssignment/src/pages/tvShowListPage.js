import React, { useContext } from "react";
import PageTemplate from '../components/templateTvShowListPage'
import AddToFavoriteTvShowsButton from '../components/buttons/addToFavoriteTvShowsButton'
import {TvShowsContext} from '../contexts/apiTvShowContext'

const TvShowListPage = () => {
  const context = useContext(TvShowsContext);
  const tvShows = context.tvShows.filter((m) => {  // New
    return !("favoriteTvShow" in m);
  });

  return (
    <PageTemplate
      name="Popular TvShows No."
      tvShows={tvShows}  /* Changed */
      action={(tvShow) => {
      return <AddToFavoriteTvShowsButton tvShow={tvShow} />;
      }}
    />
  );
};

export default TvShowListPage;
