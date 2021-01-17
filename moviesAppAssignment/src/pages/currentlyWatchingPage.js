import React, {useContext} from "react";
import TvShowListPageTemplate from "../components/templateTvShowListPage";
import AddTvShowReviewButton from '../components/buttons/addTvShowReview'
import {AiringContext} from '../contexts/airingTvContext'

const CurrentlyWatchingPage = ()=> {
  const context = useContext(AiringContext);
  const CurrentlyWatchingTvShows = context.airing.filter( m => m.airing )
  return (
    <TvShowListPageTemplate
      tvShows={CurrentlyWatchingTvShows}
      name={"Currently Watching Shows"}
      action={tvShow => <AddTvShowReviewButton tvShow={tvShow} />}
    />
  );
};

export default CurrentlyWatchingPage;