import React from "react";
import {/* Link, Route,*/ withRouter } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import usePerson from "../hooks/usePerson";

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id)  // NEW
  return (
    <>
    {person ? (
      <>
        <PageTemplate person={person}>
          <PersonDetails person={person} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for person details</p>
    )}
  </>
  );
    }

    export default withRouter(PersonPage);