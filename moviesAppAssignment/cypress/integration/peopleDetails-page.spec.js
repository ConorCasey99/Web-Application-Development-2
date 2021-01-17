const { faCandyCane } = require("@fortawesome/free-solid-svg-icons");

let personId = null
let person;

describe("Person Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryPersonIdignored) => {
        personId = arbitraryPersonIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/person/${personId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((personDetails) => {
        person = personDetails;
        return personDetails.id;
      })
  });
  
  beforeEach(() => {
    cy.visit(`/`);
  });

  it("should display Person name in the page header", () => {
    cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
    cy.url().should("include", `/people/popular`);
    cy.wait(3000)
    cy.get(".card").eq(2).find("img").click();
    cy.get("h2").contains(person.name);
  });

  it("should display the person's details", () => {
    cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
    cy.url().should("include", `/people/popular`);
    cy.get(".card").eq(2).find("img").click();
    cy.get("h4").contains("Overview");
    cy.get("ul")
      .eq(0)
      .within(() => {
        cy.get("li").eq(0).contains("Also known as");
        //cy.get("li").eq(1).contains(person.also_known_as);
        cy.get("li").eq(2).contains("Popularity");
        cy.get("li").eq(3).contains(person.popularity);
        cy.get("li").eq(4).contains("Birthday");
        cy.get("li").eq(5).contains(person.birthday);
        cy.get("li").eq(6).contains("Gender");
        cy.get("li").eq(7).contains(person.gender);
        cy.get("li").eq(8).contains("Place of Birth");
        cy.get("li").eq(9).contains(person.place_of_birth);
      });
      cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Biography");
        //cy.get("li").eq(1).contains(person.biography);
      });
    });

      it("should display the Home icon with the correct URL value", () => {
        cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
        cy.url().should("include", `/people/popular`);
        cy.get(".card").eq(3).find("img").click();
        cy.get(".fa-home")
          .parent()
          .should("have.attr", "href")
          .should("include", "/people/popular");
      });

      it("should display person poster", () => {
        cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
        cy.url().should("include", `/people/popular`);
        cy.get(".card").eq(3).find("img").click();
        cy.get(".person")
        .should("have.attr", "src");
    });
  });
