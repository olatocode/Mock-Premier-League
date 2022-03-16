/** @format */
const Admin = require("../controllers/admin.controller");
const express = require("express");
const router = express.Router();

//signup
router.post("/adminSignup", Admin.addAdmin);
router.post("/adminLogin", Admin.adminLogin);

module.exports = router;
