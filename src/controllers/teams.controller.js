/** @format */

const Teams = require("../models/teams.model");

exports.createTeams = async (req, res) => {
  const { teams, stadium } = req.body;
  try {
    let newTeam = await Teams.create({ teams, stadium });
    return res.status(201).json({
      message: "New Team Created Successfully",
      newTeam,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
