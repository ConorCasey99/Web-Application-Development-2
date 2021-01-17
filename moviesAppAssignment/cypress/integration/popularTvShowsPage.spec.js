let tvShows;    // List of movies from TMDB

// Utility functions
const filterByName = (tvShowList, string) =>
  tvShowList.filter((m) => m.name.toLowerCase().search(string) !== -1);

const filterByGenre = (tvShowList, genreId) =>
  tvShowList.filter((m) => m.genre_ids.includes(genreId));

describe("Popular TvShows Page ", () => {
  before(() => {
    // Get TvShows from TMDB and store in TvShows variable.
    cy.request(
      `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&sort_by=popularity.desc&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        tvShows = response.results
      })
  })
  
  beforeEach(() => {
    cy.visit(`/`);
    cy.wait(5000)
  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
        cy.wait(5000)
        cy.get("h2").contains("Popular TvShows No.");
        cy.get(".badge").contains(20);
      });
      describe("Filtering", () => {
        it("should only display movies with the specified name substring", () => {
          let searchString = "a";
          let matchingTvShows = filterByName(tvShows, searchString);
          cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
          cy.get("input").clear().type(searchString); // Enter m in text box
          cy.get(".card").should("have.length", matchingTvShows.length);
          // Do a second test for certainty!
          searchString = "o";
          matchingTvShows = filterByName(tvShows, searchString);
          cy.get("input").clear().type(searchString)
          cy.get(".card").should("have.length", matchingTvShows.length);
          //test for exceptional case
          searchString = "xyz";
          matchingTvShows = filterByName(tvShows, searchString);
          cy.get("input").clear().type(searchString); // Enter xyz in text box
          cy.get(".card").should("have.length", matchingTvShows.length);  
          });
      });
        describe("By tvshow genre", () => {
          it("should display tvshows with the specified genre only", () => {
            const selectedGenreId =  18;
            const selectedGenreText = "Drama";
            const matchingTvShows = filterByGenre(tvShows, selectedGenreId);
            cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
            cy.wait(5000)
            cy.get("select").select(selectedGenreText); 
            cy.get(".card").should("have.length", matchingTvShows.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
                .find(".card-title")
                .should("have.text", matchingTvShows[index].name);
            });      
          }); 
          }); 
          describe("by genre and name", () => {
            it("should display tvShows with the specified genre and name only", () => {
              const searchString = "T";
              const selectedGenreId = 35;
              const selectedGenreText = "Comedy";
              const matchingTvShows = filterByName(tvShows, searchString) && filterByGenre(tvShows, selectedGenreId);
              cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
              cy.get("input").clear().type(searchString);
              cy.get("select").select(selectedGenreText);
              cy.get(".card").should("have.length", matchingTvShows.length);
              cy.get(".card").each(($card, index) => {
                cy.wrap($card)
                  .find(".card-title")
                  .should("have.text", matchingTvShows[index].name);
              }); 
            });
          });
  });
});