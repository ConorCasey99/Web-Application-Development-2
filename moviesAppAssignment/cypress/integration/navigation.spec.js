let movies;
let tvShows;
let people;
const movieId = 497582; // Enola Holmes movie id
const reviewId = '5f69e4d0cee2f6003633becf'// The id of the top review
const tvShowId = '82856' //Mandalorian Id
const showReviewId = '5e01a5f5d236e6001692b040'// The id of the top review
const personId = '1734'
let reviews;

describe("Navigation", () => {
  before(() => {
    /* Tv Shows */
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });

      /*Tv Shows*/
      cy.request(
        `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")
        .then((response) => {
          tvShows = response.results;
        });
      cy.request(
        `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${Cypress.env(
          "TMDB_KEY"
        )}`
      )
        .its("body")
        .then((response) => {
          console.log(response);
          reviews = response.results;
        });
      
      /*People*/
      cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&page=1`
      )
        .its("body")
        .then((response) => {
          people = response.results;
        });
      cy.request(
        `https://api.themoviedb.org/3/person/${personId}?api_key=${Cypress.env(
          "TMDB_KEY"
        )}`
      )
        .its("body")
        .then((response) => {
          console.log(response);
          reviews = response.results;
        });      
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit(`/`);
    });

    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      cy.get(".dropdown").contains("Movies").click().get('.dropdown-menu').get(".dropdown-item").contains("Favorites").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite Movies");
      cy.get(".dropdown").contains("Movies").click().get('.dropdown-menu').get(".dropdown-item").contains("Upcoming").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("No. Movies");
      cy.get(".dropdown").contains("Movies").click().get('.dropdown-menu').get(".dropdown-item").contains("Discover").click();
    });
  });

    describe("From the Movie Details page ", () => {
        beforeEach(() => {
          cy.visit(`/`);
          cy.get(".card").eq(1).find("img").click();
        });
        it("should change browser URL when show/hide reviews is clicked", () => {
          cy.wait(3000)
          cy.contains("Show Reviews").click();
          cy.url().should("include", `/reviews`);
          cy.contains("Hide Reviews").click();
          cy.url().should("not.include", `/reviews`);
        });
        it("navigate to the full review page when a 'Full Review' link is clicked", () => {
          cy.contains("Show Reviews").click();
          cy.url().should("include", `/reviews`);
          cy.contains("Full Review").click();
          cy.url().should("include", `/reviews`);
        });
      });


  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
    });
  });
    describe("The Go Back button", () => {
        beforeEach(() => {
          cy.visit("/");
        });
        it("should navigate from home page to movie details and back", () => {
          cy.get(".card").eq(0).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
          cy.url().should("not.include", `/movies`);
          cy.get("h2").contains("No. Movies");
        });
        it("should navigate from favorites page to movie details and back", () => {
            cy.get(".card").eq(0).find("button").click();
            cy.get(".dropdown").contains("Movies").click().get('.dropdown-menu').get(".dropdown-item").contains("Favorites").click();
            cy.url().should("include", `/favorites`);
            cy.get("h2").contains("Favorite Movies");
            cy.get(".card").eq(0).find("img").click();
            cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
            cy.get("h2").contains("Favorite Movies");
        });
      });

                        /* TvShows*/

describe("From the TvShows page", () => {
    beforeEach(() => {
      cy.visit(`/`);
    });

    it("should navigate to the TvShows details page and change browser URL", () => {
      cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/tvShow/${tvShows[0].id}`);
      cy.get("h2").contains(tvShows[0].name);
    });
    it("should allow navigation from site header", () => {
      cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Favorite Shows").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite Tv Shows");
      cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Top Rated TvShows").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Top Rated TvShows No.");
      cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
    });
  });

    describe("From the TvShows Details page ", () => {
        beforeEach(() => {
          cy.visit(`/`);
          cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
          cy.get(".card").eq(0).find("img").click();
        });
        it("should change browser URL when show/hide reviews is clicked", () => {
          cy.wait(3000)
          cy.contains("Show Reviews").click();
          cy.url().should("include", `/reviews`);
          cy.contains("Hide Reviews").click();
          cy.url().should("not.include", `/reviews`);
        });
        it("navigate to the full review page when a 'Full Review' link is clicked", () => {
          cy.contains("Show Reviews").click();
          cy.url().should("include", `/reviews`);
          cy.wait(3000)
          cy.contains("Full Review").click();
          cy.url().should("include", `/tvShowReviews`);
        });
      });


  describe("From the TvShow page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should navigate to the TvShow detail page and change the browser URL", () => {
      cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/tvShow/${tvShows[0].id}`);
      cy.get("h2").contains(tvShows[0].name);
    });
  });
    describe("The Go Back button", () => {
        beforeEach(() => {
          cy.visit("/");
        });
        it("should navigate from home page to TvShows details and back", () => {
          cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
          cy.get(".card").eq(0).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
          cy.url().should("not.include", `/favorites`);
          cy.get("h2").contains("Popular TvShows No.");
        });
        it("should navigate from favorites page to TvShow details and back", () => {
            cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular TvShows").click();
            cy.get(".card").eq(0).find("button").click();
            cy.get(".dropdown").contains("TvShows").click().get('.dropdown-menu').get(".dropdown-item").contains("Favorite Shows").click();
            cy.url().should("include", `/favorites`);
            cy.get("h2").contains("Favorite Tv Shows");
            cy.get(".card").eq(0).find("img").click();
            cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
            cy.get("h2").contains("Favorite Tv Shows");
        });
      });


                        /*People*/

describe("From the People page", () => {
    beforeEach(() => {
      cy.visit(`/`);
    });

    it("should navigate to the TvShows details page and change browser URL", () => {
      cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/people/${people[0].id}`);
      cy.get("h2").contains(people[0].name);
    });
    it("should allow navigation from site header", () => {
      cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Favorite People").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Your Favorite People");
      cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Popular People No.");
    });
  });

    describe("From the People Details page ", () => {
        beforeEach(() => {
          cy.visit(`/`);
          cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
          cy.get(".card").eq(0).find("img").click();
        });
      });


  describe("From the people details page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should navigate to the people detail page and change the browser URL", () => {
      cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/people/${people[0].id}`);
      cy.get("h2").contains(people[0].name);
    });
  });
    describe("The Go Back button", () => {
        beforeEach(() => {
          cy.visit("/");
        });
        it("should navigate from home page to people details and back", () => {
          cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
          cy.get(".card").eq(0).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
          cy.url().should("not.include", `/favorites`);
          cy.get("h2").contains("Popular People No.");
        });
        it("should navigate from favorites page to people details and back", () => {
            cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular People").click();
            cy.get(".card").eq(0).find("button").click();
            cy.get(".dropdown").contains("People").click().get('.dropdown-menu').get(".dropdown-item").contains("Favorite People").click();
            cy.url().should("include", `/favorites`);
            cy.get("h2").contains("Your Favorite People");
            cy.get(".card").eq(0).find("img").click();
            cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
            cy.get("h2").contains("Your Favorite People");
        });
      });
  });

