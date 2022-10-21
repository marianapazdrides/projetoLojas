const supertest = require("supertest");
const assert = require("chai").assert;

const orderId = 12312313;

describe("Petstore Swagger - Store", () => {
    const request = supertest("https://petstore.swagger.io/v2");

    it("POST Store", () => {
        const jsonFile = require("../../vendors/store.json");

        return request
            .post("/store/order")
            .send(jsonFile)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, 12312313);
                assert.equal(resposta.body.petId, 990734576)
            })
    });

    it("GET Store", () => {

        return request
            .get("/store/order/" + orderId)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.quantity, 10)
            })
        
    });

    it("DELETE Store", () => {
        
        return request
            .delete("/store/order/" + orderId)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.message, "12312313")
            })

    });

    it("GET Store - Inventory", () => {
        
        return request
            .get("/store/inventory")
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200)
            })
    })
})