import chai from "chai";
import request from "supertest";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const expect = chai.expect;

let api;
let token = "eyJhbGciOiJIUzI1NiJ9.dXNlcjE.FmYria8wq0aFDHnzYWhKQrhF5BkJbFNN1PqNyNQ7V4M";

const sampleMovie = {
  id: 337401,
  title: "Mulan",
};

describe("Movies endpoint", () => {
  
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

  describe("Get /Movies route", () => {
  describe("GET /movies when not authorised ", () => {
    it("should return no movies and a status 401", () => {
      return request(api)
        .get("/api/movies")
        .set("Accept", "application/json")
        .expect(401)
        .then((res) => {
          expect(res.body).to.be.empty
        });
    });
  });

  describe("GET /movies when authorised ", () => {
    it("should return 20 movies and a status 200", (done) => {
      request(api)
        .get("/api/movies")
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

  describe("GET /movies/:id", () => {
    describe("when the id is valid", () => {
      it("should return the matching movie", () => {
        return request(api)
          .get(`/api/movies/${sampleMovie.id}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          .then((res) => {
            expect(res.body).to.have.property("title", sampleMovie.title);
          });
      });
    });
 
    describe("when the id is invalid", () => {
      it("should return the NOT found message", () => {
        return request(api)
          .get("/api/movies/xxx")
          .set('Authorization', 'Bearer ' + token)
          .set("Accept", "application/json")
          .expect(500)
        });
      });
  });
/*
  describe("POST/ Movies  ", () => {
   describe("POST/ Movies when authorised", () => {
    it("should return a 201 status and the confirmation message", () => {
      return request(api)
        .post("/api/movies")
        .set('Authorization', 'Bearer ' + token)
        .query({ action: 'create' })
        .set("Accept", "application/json")
        .send({
          title: "The Incredibles",
          id: 234,
          release_date: "23-09-2005",
          popularity: 9
        })
        .expect(201)
        .expect({ code: 201, success: true, msg: "Successfully added Movie." });
    });
  });
  describe("POST/ Movies when not authorised", () => {
    it("should return empty body", () => {
      return request(api)
        .post("/api/movies")
        .query({ action: 'create' })
        .set("Accept", "application/json")
        .send({
          title: "The Incredibles",
          id: 234,
          release_date: "23-09-2005",
          popularity: 9
        })
        .then((res) => {
          expect(res.body).to.be.empty
        });
  });
});

describe("POST/ Movies when no id", () => {
  it("should return a 500 status and the error message", () => {
    return request(api)
      .post("/api/movies")
      .set('Authorization', 'Bearer ' + token)
      .query({ action: 'create' })
      .set("Accept", "application/json")
      .send({
        title: "The Incredibles",
      //  id: 234,
        release_date: "23-09-2005",
        popularity: 9
      })
      .expect(500)
      .expect({ code: 500, success: false, msg: "Please pass a movie id" });
  });
});

describe("POST/ Movies when no title", () => {
  it("should return a 500 status and the error message", () => {
    return request(api)
      .post("/api/movies")
      .set('Authorization', 'Bearer ' + token)
      .query({ action: 'create' })
      .set("Accept", "application/json")
      .send({
       // title: "The Incredibles",
        id: 234,
        release_date: "23-09-2005",
        popularity: 9
      })
      .expect(500)
      .expect({ code: 500, success: false, msg: "Please pass a movie name" });
  });
});

});*/
});
