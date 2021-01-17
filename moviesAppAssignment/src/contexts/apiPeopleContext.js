import React, { useState, createContext, useEffect, useReducer } from "react";
import { getPeople } from "../api/movie-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { people: action.payload.result};
    default:
      return state;
  }
};

const ApiPeopleContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { people: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getPeople().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  return (
    <PeopleContext.Provider
      value={{
        people: state.people,
        setAuthenticated
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default ApiPeopleContextProvider