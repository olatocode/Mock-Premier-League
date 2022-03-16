/** @format */

const app = require("../src/app");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const databaseName = "user_test";
const supertest = require("supertest");
const request = supertest(app);

const User = require("../src/models/user.model");

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
});

beforeEach(async () => {
  await User.deleteMany();
});

test("Should signup a new user", async () => {
  const response = await request
    .post("/user/signup")
    .send({
      firstname: "Dhriti",
      lastname: "tobi",
      gender: "male",
      age: "20",
      email: "Dhriti@test.com",
      password: "1234567890",
    })
    .expect(201);
});
