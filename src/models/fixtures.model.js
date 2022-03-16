/** @format */

const mongoose = require("mongoose");
const fixturesSchema = new mongoose.Schema(
  {
    teams: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teams",
      required: true,
    },
    homeTeam: {
      type: String,
      required: true,
      trim: true,
    },
    awayTeam: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      required: true,
      trim: true,
      enum: ["completed", "pending"],
      default: "completed",
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

const fixturesModel = new mongoose.model("Fixtures", fixturesSchema);
module.exports = fixturesModel;
