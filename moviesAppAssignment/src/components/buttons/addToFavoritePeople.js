import React, { useContext } from "react";
import {PeopleContext} from "../../contexts/peopleContext";

const AddToFavoritePeopleButton = ({ person }) => {
  const context = useContext(PeopleContext);

  const handleAddToFavoritePeople = e => {
    e.preventDefault();
    context.addToFavoritePeople(person.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavoritePeople}
    >
      Add to Favorite People
    </button>
  );
};

export default AddToFavoritePeopleButton;