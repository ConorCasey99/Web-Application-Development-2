import React, {useContext} from "react";
import TvShowListPageTemplate from "../components/templateTvShowListPage";
import AddTvShowReviewButton from '../components/buttons/addTvShowReview'
import {TvShowsContext} from '../contexts/tvShowsContext'

const PlanToWatchTvShowsPage = ()=> {
  const context = useContext(TvShowsContext);
  const PlannedToWatchTvShows = context.topRated.filter( m => m.topRated )
  return (
    <TvShowListPageTemplate
      tvShows={PlannedToWatchTvShows}
      name={"Planned To Watch Shows"}
      action={tvShow => <AddTvShowReviewButton tvShow={tvShow} />}
    />
  );
};

export default PlanToWatchTvShowsPage;