import chai from "chai";
import request from "supertest";

const expect = chai.expect;

let api;
let token = "eyJhbGciOiJIUzI1NiJ9.dXNlcjE.FmYria8wq0aFDHnzYWhKQrhF5BkJbFNN1PqNyNQ7V4M";

const sampleTvShow = {
  id: 44217,
  name: "Vikings",
};

describe("TvShow endpoint", () => {
  
  beforeEach(function (done) {
    try {
      api = require("../../../../index");
      this.timeout(6000);
      setTimeout(() => {
        done();
      }, 3000)
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  });

  afterEach(() => {
    api.close(); // Release PORT 8080
    delete require.cache[require.resolve("../../../../index")];
  });

  describe("Get /TvShows route", () => {
  describe("GET /TvShows when not authorised ", () => {
    it("should return no movies and a status 401", () => {
      return request(api)
        .get("/api/tvShows")
        .set("Accept", "application/json")
        .expect(401)
        .then((res) => {
          expect(res.body).to.be.empty
        });
    });
  });

  describe("GET /TvShows when authorised ", () => {
    it("should return 20 TvShows and a status 200", (done) => {
      request(api)
        .get("/api/tvShows")
        .set('Authorization', 'Bearer ' + token)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.equal(20);
          done();
        });
    });
  });
  });

  describe("GET /TvShows/:id", () => {
    describe("when the id is valid", () => {
      it("should return the matching TvShows", () => {
        return request(api)
          .get(`/api/tvShows/${sampleTvShow.id}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          .then((res) => {
            expect(res.body).to.have.property("name", sampleTvShow.name);
          });
      });
    });

    describe("GET /tvShows/:id when not authorised", () => {
        it("should return a status 404", () => {
          return request(api)
            .get(`/api/tvShows/${sampleTvShow.id}`)
            .expect(401)
            .then((res) => {
              expect(res.body).to.be.empty            
            });
        });
      });
 
    describe("GET /tvShows/:id when the id is invalid", () => {
      it("should return the NOT found message", () => {
        return request(api)
          .get("/api/tvShows/xxx")
          .set('Authorization', 'Bearer ' + token)
          .set("Accept", "application/json")
          .expect(500)
        });
      });
  });
  /*
    describe("POST/ tvShows  ", () => {
      describe("POST/ tvShows when authorised", () => {
       it("should return a 201 status and the confirmation message", () => {
         return request(api)
           .post("/api/tvShows")
           .set('Authorization', 'Bearer ' + token)
           .query({ action: 'create' })
           .set("Accept", "application/json")
           .send({
             name: "Test TvShow",
             id: 1234
           })
           .expect(201)
           .expect({ code: 201, success: true, msg: "Successfully added TvShow." });
       });
     });
     describe("POST/ tvShows when not authorised", () => {
       it("should return a 401 status and the unauthorised message", () => {
         return request(api)
           .post("/api/tvShows")
           .query({ action: 'create' })
           .set("Accept", "application/json")
           .send({
            name: "Test TvShow",
             id: 1234
           })
           .then((res) => {
             expect(res.body).to.be.empty
           });
     });
   });
   
   describe("POST/ tvShows when no id", () => {
     it("should return a 500 status and the error message", () => {
       return request(api)
         .post("/api/tvShows")
         .set('Authorization', 'Bearer ' + token)
         .query({ action: 'create' })
         .set("Accept", "application/json")
         .send({
          name: "Test TvShow",
          //id: 1234
         })
         .expect(500)
         .expect({ code: 500, success: false, msg: "Please pass a tvShow id" });
     });
   });
   
   describe("POST/ tvShows when no name", () => {
     it("should return a 500 status and the error message", () => {
       return request(api)
         .post("/api/tvShows")
         .set('Authorization', 'Bearer ' + token)
         .query({ action: 'create' })
         .set("Accept", "application/json")
         .send({
             //name: "test show",
             id: 234
         })
         .expect(500)
         .expect({ code: 500, success: false, msg: "Please pass a tvShow name" });
     });
   });
   
   });*/
});
