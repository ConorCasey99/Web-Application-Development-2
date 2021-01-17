import React from "react";
import TvShowHeader from '../headerTvShow'
import "./tvShowPage.css";

const TemplateTvShowPage = ({ tvShow, children }) => {
  return (
    <>
      <TvShowHeader tvShow={tvShow} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              tvShow.poster_path
                ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
                : "./tv-poster-placeholder.png"
            }
            className="tvShow"
            alt={tvShow.name}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateTvShowPage;