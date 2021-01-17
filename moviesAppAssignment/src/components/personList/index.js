import React from "react";
import Person from "../personCard/";
import "./personList.css";

const PersonList = ({people, action}) => {
  const personCards = people.map(m => (
    <Person key={m.id} person={m} action={action} />
  ));
  return <div className="row people bg-info">{personCards}</div>;
};

export default PersonList;