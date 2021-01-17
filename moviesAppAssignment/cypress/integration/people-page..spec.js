let people;    // List of people from TMDB

// Utility functions
const filterByName = (personList, string) =>
  personList.filter((m) => m.name.toLowerCase().search(string) !== -1);

describe("Popular People Page ", () => {
  before(() => {
    // Get people from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        people = response.results
      })
  })
  
  beforeEach(() => {
    cy.visit(`/`);
  });

    describe("Base test", () => {
        it("displays page header", () => {
          cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
          cy.url().should("include", `/people/popular`);
          cy.get("h2").contains("Popular People No");
          cy.get(".badge").contains(20);
        });

        describe("Filtering", () => {
            it("should only display people with the specified title substring", () => {
              cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
              cy.url().should("include", `/people/popular`);
              let searchString = "o";
              let matchingPeople = filterByName(people, searchString);
              cy.get("input").clear().type(searchString); // Enter o in text box
              cy.get(".card").should("have.length", matchingPeople.length);
              // Do a second test for certainty!
              searchString = "o";
              matchingPeople = filterByName(people, searchString);
              cy.get("input").clear().type(searchString)
              cy.get(".card").should("have.length", matchingPeople.length);
              //test for exceptional case
              searchString = "xyz";
              matchingPeople = filterByName(people, searchString);
              cy.get("input").clear().type(searchString); // Enter xyz in text box
              cy.get(".card").should("have.length", matchingPeople.length);  
              });
          });
        });
    });