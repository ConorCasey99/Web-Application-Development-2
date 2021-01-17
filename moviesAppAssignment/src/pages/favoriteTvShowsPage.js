import React, {useContext} from "react";
import TvShowListPageTemplate from "../components/templateTvShowListPage";
import AddTvShowReviewButton from '../components/buttons/addTvShowReview'
import {TvShowsContext} from '../contexts/tvShowsContext'

const FavoriteTvShowsPage = ()=> {
  const context = useContext(TvShowsContext);
  const favoriteTvShows = context.tvShows.filter( m => m.favoriteTvShow )
  return (
    <TvShowListPageTemplate
      tvShows={favoriteTvShows}
      name={"Favorite Tv Shows"}
      action={tvShow => <AddTvShowReviewButton tvShow={tvShow} />}
    />
  );
};

export default FavoriteTvShowsPage;