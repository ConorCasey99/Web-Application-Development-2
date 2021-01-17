import React, { useContext } from "react";
import PageTemplate from '../components/templateTvShowListPage'
import AddToPlanToWatchTvShows from '../components/buttons/addToPlanToWatchTvShows'
import {TvShowsContext} from '../contexts/tvShowsContext'

const TopRatedTvShowsPage = () => {
  const context = useContext(TvShowsContext);
  const topRated = context.topRated.filter((m) => {  
    return !("topRated" in m);
  });

  return (
    <PageTemplate
      name="Top Rated TvShows No."
      tvShows={topRated} 
      action={(tvShow) => {
      return <AddToPlanToWatchTvShows tvShow={tvShow} />;
      }}
    />
  );
};

export default TopRatedTvShowsPage;
