import React from "react";
import PageTemplate from '../components/templateTvShowPage';
import TvShowReview from "../components/tvShowReview";

const TvShowReviewPage = (props) => {
  return (
      <PageTemplate tvShow={props.location.state.tvShow}>
        <TvShowReview review={props.location.state.review} /> 
      </PageTemplate>
  );
};

export default TvShowReviewPage;