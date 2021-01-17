const { faCandyCane } = require("@fortawesome/free-solid-svg-icons");

let tvShowId = null
let tvShow;
let reviews;
describe("TvShow Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&sort_by=popularity.desc&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[1].id;
      })
      .then((arbitraryTvShowIdignored) => {
        tvShowId = arbitraryTvShowIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((tvShowDetails) => {
        tvShow = tvShowDetails;
        return tvShowDetails.id;
      })
  });
  
  beforeEach(() => {
    cy.visit(`/`);
    cy.wait(6000)
  });

  it("should display tvShow name in the page header", () => {
    cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
    cy.get(".card").eq(1).find("img").click();
    cy.wait(6000)
    cy.get("h2").contains(tvShow.name);
  });

  it("should display the tvShow's details", () => {
    cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
    cy.get(".card").eq(1).find("img").click();
    cy.wait(6000)
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(tvShow.overview);
    cy.get("ul")
      .eq(0)
      .within(() => {
        cy.get("li").eq(0).contains("Number Episodes");
        cy.get("li").eq(1).contains(tvShow.number_of_episodes);
        cy.get("li").eq(2).contains("Release Date");
        cy.get("li").eq(3).contains(tvShow.first_air_date);
      });
      cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Genres");
        //cy.get("li").eq(1).contains(tvShow.genres.map);
      });
      cy.get("ul")
      .eq(2)
      .within(() => {
        cy.get("li").eq(0).contains("Spoken Languages");
        //cy.get("li").eq(1).contains(tvShow.genres.map);
      });
      cy.get("ul")
      .eq(3)
      .within(() => {
        cy.get("li").eq(0).contains("Production Companies");
        //cy.get("li").eq(1).contains(tvShow.genres.map);
      });
      cy.get("ul")
      .eq(4)
      .within(() => {
        cy.get("li").eq(0).contains("Production Countries");
        //cy.get("li").eq(1).contains(tvShow.genres.map);
      });
      cy.get("ul")
      .eq(5)
      .within(() => {
        cy.get("li").eq(0).contains("Seasons");
        //cy.get("li").eq(1).contains(tvShow.genres.map);
      });
      cy.get("ul")
      .eq(6)
      .within(() => {
        cy.get("li").eq(0).contains("Overview");
        //cy.get("li").eq(1).contains(tvShow.genres.map);
      });
    });

      it("should display the Home icon with the correct URL value", () => {
        cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
        cy.get(".card").eq(1).find("img").click();
        cy.wait(6000)
        cy.get(".fa-home")
          .parent()
          .should("have.attr", "href")
          .should("include", tvShow.homepage);
      });

      it("should display tvShow poster", () => {
        cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
        cy.get(".card").eq(1).find("img").click();
        cy.wait(6000)
        cy.get(".tvShow")
        .should("have.attr", "src");
    });
  });
