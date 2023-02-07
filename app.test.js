const request = require("supertest");
const baseURL = "http://localhost:7001/api"


// Add User API
describe("POST /users", () => {
    test("should response 200 statusCode", async () => {
        const response = await request(baseURL).post("/users").send({
            name: "John",
            email: "saddam@gmail.com",
            dob: "28-november-1992"
        });
        expect(response.statusCode).toBe(200)
    })

    test("when the name email and dob is missing", async () => {

        const bodyData = [
            {name: "username"},
            {email: "email@gmail.com"},
            {dob: "29-march-1998"},
            {}
        ]
        for(const body of bodyData){
            const response = await request(baseURL).post("/users").send(body);
            expect(response.statusCode).toBe(400)
        }
    })
});

