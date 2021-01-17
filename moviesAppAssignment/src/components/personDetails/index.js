import React from "react";
import "./personDetails.css";
// eslint-disable-next-line
export default ({ person }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{person.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Also known as
        </li>
        <li key="rut" className="list-group-item ">
          {person.also_known_as}
        </li>
        <li key="ruh" className="list-group-item list-group-item-dark">
          Popularity
        </li>
        <li key="rut" className="list-group-item ">
          {person.popularity}
        </li>
        <li key="ruh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rut" className="list-group-item ">
          {person.birthday}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Gender
        </li>
        <li key="rdv" className="list-group-item ">
          {person.gender}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Place of Birth
        </li>
        <li key="rdv" className="list-group-item ">
          {person.place_of_birth}
        </li>
        </ul>

        <ul className="list-group list-group-horizontal">
        <li key="rdl" className="list-group-item list-group-item-dark">
          Biography
        </li>
        <li key="rdm" className="list-group-item ">
          {person.biography}
        </li>
      </ul> 
    </>
  );
};