/** @format */
const userRouter = require("./routes/user.route");
const adminRouter = require("./routes/admin.route");
const teamsRouter = require("./routes/teams.route");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(cors());

app.use("/api/v1", userRouter);
app.use("/api/v1", adminRouter);
app.use("/api/v1", teamsRouter);

module.exports = app;
