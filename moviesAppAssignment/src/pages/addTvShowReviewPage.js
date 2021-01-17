import React from "react";
import PageTemplate from "../components/templateTvShowPage";
import TvShowReviewForm from '../components/tvShowReviewForm';

const TvShowReviewFormPage = props => {

  return (
      <PageTemplate tvShow={props.location.state.tvShow}>
          <TvShowReviewForm tvShow={props.location.state.tvShow} />
      </PageTemplate>
  );
};
export default TvShowReviewFormPage;