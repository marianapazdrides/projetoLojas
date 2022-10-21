const supertest = require("supertest");
const assert = require("chai").assert;

const username = "hgranger";
let token = "";

describe("Petstore Swagger - User", () => {
    const request = supertest("https://petstore.swagger.io/v2");

    it("POST User", () => {
        const jsonFile = require("../../vendors/user1.json");

        return request
            .post("/user")
            .send(jsonFile)
            .then((resposta) =>{
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.message, "988154576");
        });
    });

    it("GET User", () => {
        return request
            .get("/user/" + username)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, 988154576);
                assert.equal(resposta.body.username, username);
                assert.equal(resposta.body.phone, "1122223333")
            })
        
    });

    it("PUT User", () => {
        const jsonFile = require("../../vendors/user2.json");

        return request
            .put("/user/" + username)
            .send(jsonFile)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.message, "988154576");
                assert.equal(resposta.body.type, "unknown")
            })
    });
    /*
    it("DELETE User", () => {
        return request
            .delete("/user/" + username)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200)
            })
    });
    */
    it("Login com Extração", () => {
        const username = "hgranger";
        const password = "123456";

        return request
            .get("/user/login?username=" + username + "&password=" + password)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                token = resposta.body.message.substring(23);
                console.log("Token: " + token);
            });
    });
})

