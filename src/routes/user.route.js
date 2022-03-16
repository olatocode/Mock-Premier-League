/** @format */
const User = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

//signup
router.post("/userSignup", User.addUser);
router.post("/userLogin", User.userLogin);

module.exports = router;
