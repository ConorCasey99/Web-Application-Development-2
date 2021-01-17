import chai from "chai";
import request from "supertest";

const expect = chai.expect;

let api;
let token = "eyJhbGciOiJIUzI1NiJ9.dXNlcjE.FmYria8wq0aFDHnzYWhKQrhF5BkJbFNN1PqNyNQ7V4M";

const samplePerson = {
  id: 90633,
  name: "Gal Gadot",
};

describe("People endpoint", () => {
  
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

  describe("Get /people route", () => {
  describe("GET /people/ when not authorised ", () => {
    it("should return no people and a status 401", () => {
      return request(api)
        .get("/api/movies")
        .set("Accept", "application/json")
        .expect(401)
        .then((res) => {
          expect(res.body).to.be.empty
        });
    });
  });

  describe("GET /people/ when authorised ", () => {
    it("should return 20 people and a status 200", (done) => {
      request(api)
        .get("/api/people")
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

  describe("GET /people/:id", () => {
    describe("when the id is valid", () => {
      it("should return the matching people", () => {
        return request(api)
          .get(`/api/people/${samplePerson.id}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          .then((res) => {
            expect(res.body).to.have.property("name", samplePerson.name);
          });
      });
    });
 
    describe("when the id is invalid", () => {
      it("should return the NOT found message", () => {
        return request(api)
          .get("/api/person/xxx")
          .set('Authorization', 'Bearer ' + token)
          .set("Accept", "application/json")
          .expect(404)
        });
      });
  });
/*
  describe("POST/ People  ", () => {
    describe("POST/ People when authorised", () => {
     it("should return a 201 status and the confirmation message", () => {
       return request(api)
         .post("/api/people")
         .set('Authorization', 'Bearer ' + token)
         .query({ action: 'create' })
         .set("Accept", "application/json")
         .send({
           name: "Man Man",
           id: 234
         })
         .expect(201)
         .expect({ code: 201, success: true, msg: "Successfully added Person." });
     });
   });
   describe("POST/ People when not authorised", () => {
     it("should return a 401 status and the unauthorised message", () => {
       return request(api)
         .post("/api/people")
         .query({ action: 'create' })
         .set("Accept", "application/json")
         .send({
          name: "Man Man",
          id: 234
         })
         .then((res) => {
           expect(res.body).to.be.empty
         });
   });
 });
 
 describe("POST/ People when no id", () => {
   it("should return a 500 status and the error message", () => {
     return request(api)
       .post("/api/people")
       .set('Authorization', 'Bearer ' + token)
       .query({ action: 'create' })
       .set("Accept", "application/json")
       .send({
        name: "Man Man"
        //id: 234
       })
       .expect(500)
       .expect({ code: 500, success: false, msg: "Please pass a person id" });
   });
 });
 
 describe("POST/ People when no name", () => {
   it("should return a 500 status and the error message", () => {
     return request(api)
       .post("/api/people")
       .set('Authorization', 'Bearer ' + token)
       .query({ action: 'create' })
       .set("Accept", "application/json")
       .send({
           //name: "Man Man",
           id: 234
       })
       .expect(500)
       .expect({ code: 500, success: false, msg: "Please pass a person name" });
   });
 });
 
 });*/
});
