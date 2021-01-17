import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvShowPage";
import TvShowReviews from "../components/tvShowReviews";
import useTvShow from "../hooks/useTvShow";

const TvShowPage = props => {
  const { id } = props.match.params;
  const [show] = useTvShow(id)  // NEW
  return (
    <>
    {show ? (
      <>
        <PageTemplate tvShow={show}>
          <TvShowDetails tvShow={show} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tvShow/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tvShow/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/tvShow/:id/reviews`}
          render={props => <TvShowReviews tvShow={show} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for tv show details</p>
    )}
  </>
  );
    }

    export default withRouter(TvShowPage);