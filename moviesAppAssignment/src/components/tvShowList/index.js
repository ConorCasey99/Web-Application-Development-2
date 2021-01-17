import React from "react";
import TvShow from "../tvShowCard/";
import "./tvShowList.css";

const TvShowList = ({tvShows, action}) => {
  const tvShowCards = tvShows.map(m => (
    <TvShow key={m.id} tvShow={m} action={action} />
  ));
  return <div className="row movies bg-info">{tvShowCards}</div>;
};

export default TvShowList;