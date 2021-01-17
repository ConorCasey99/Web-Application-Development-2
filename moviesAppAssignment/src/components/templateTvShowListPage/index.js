import React, { useState } from "react";
import TvShowHeader from "../headerTvShowList";
import TvShowList from "../tvShowList";
import FilterControls from "../filterControls";

const TvShowListPageTemplate = ({ tvShows, name, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedTvShows = tvShows
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <TvShowHeader name={name} numTvShows={displayedTvShows.length} />
      <FilterControls onUserInput={handleChange} numTvShows={displayedTvShows.length}/>
      <TvShowList
        action={action}
        tvShows={displayedTvShows}
      ></TvShowList>
    </>
  );
};

export default TvShowListPageTemplate ;