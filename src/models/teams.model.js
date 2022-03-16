/** @format */

const mongoose = require("mongoose");
const teamsSchema = new mongoose.Schema(
  {
    team: {
      type: String,
      required: true,
      trim: true,
    },

    stadium: {
      type: String,
      required: true,
      trim: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const teamsModel = new mongoose.model("Teams", teamsSchema);
module.exports = teamsModel;
