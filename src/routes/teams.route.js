const Teams = require("../controllers/teams.controller");
const { authorize } = "../middleware/auth.middleware";
const express = require("express");
const router = express.Router();

// create new Team
router.post("/addTeams", authorize, Teams.createTeams);

module.exports = router;
