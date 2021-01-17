import React, { useContext } from "react";
import PageTemplate from '../components/templatePeopleListPage'
import AddToFavoritePeopleButton from '../components/buttons/addToFavoritePeople'
import {PeopleContext} from '../contexts/apiPeopleContext'

const PeopleListPage = () => {
  const context = useContext(PeopleContext);
  const people = context.people.filter((m) => {  // New
    return !("favoritePerson" in m);
  });

  return (
    <PageTemplate
      name="Popular People No."
      people={people}  /* Changed */
      action={(person) => {
      return <AddToFavoritePeopleButton person={person} />;
      }}
    />
  );
};

export default PeopleListPage;
