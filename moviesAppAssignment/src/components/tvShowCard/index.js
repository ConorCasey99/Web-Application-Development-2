import React from "react";
import { Link } from "react-router-dom";
import "./tvShowCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TvShowCard = ({tvShow, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/tvShow/${tvShow.id}`}>
        <img
          className="card-img-tag center "
          alt={tvShow.name}
          src={
            tvShow.poster_path
              ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
              : "./tv-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{tvShow.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {tvShow.first_air_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {tvShow.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(tvShow)}
        </div>
      </div>
    </div>
  );
};

export default TvShowCard;