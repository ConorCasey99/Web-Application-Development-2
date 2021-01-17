import React from "react";
import "./tvShowDetails.css";
// eslint-disable-next-line
export default ({ tvShow }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{tvShow.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Number Episodes
        </li>
        <li key="rut" className="list-group-item ">
          {tvShow.number_of_episodes}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Release Date
        </li>
        <li key="rdv" className="list-group-item ">
          {tvShow.first_air_date}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {tvShow.genres.map(g => (
          <li key={g.name} className="list-group-item">
            {g.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
          Spoken Languages
        </li>
        {tvShow.spoken_languages.map(lang => (
          <li key={lang.name} className="list-group-item">
            {lang.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Companies
        </li>
        {tvShow.production_companies.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pcg" className="list-group-item list-group-item-dark">
          Production Countries
        </li>
        {tvShow.production_countries.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pci" className="list-group-item list-group-item-dark">
          Seasons
        </li>
        {tvShow.seasons.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name} 
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pcj" className="list-group-item list-group-item-dark">
          Overview
        </li>
        {tvShow.seasons.map(pc => (
          <li key={pc.overview} className="list-group-item">
            {pc.overview} 
          </li>
        ))}
      </ul>
    </>
  );
};