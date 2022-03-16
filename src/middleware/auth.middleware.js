/** @format */

const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorize = async (req, res, next) => {
  try {
    let authorizationArr = req.headers.authorization.split(" ");
    if (!authorizationArr.includes("Bearer")) {
      return res.status(401).json({
        success: false,
        message: "Token required to start with Bearer...",
      });
    }
    let token = authorizationArr[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is required...",
      });
    }
    const decryptToken = await jwt.verify(token, process.env.token, {
      expiresIn: "1h",
    });
    req.user = decryptToken;
    console.log(req.user);
    // next();
  } catch (error) {
    // console.log(error)
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role === "Admin") {
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "User does not have access to this resource",
      });
    }
  } catch (error) {}
};

module.exports = { authorize, isAdmin };
