/** @format */
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
exports.addUser = async (req, res) => {
  const { firstname, lastname, gender, age, email, password } = req.body;
  try {
    let emailExist = await User.findOne({ email: email });
    if (emailExist) {
      return res.status(401).json({
        message:
          "Email already exist, Please login or create a new account with a new email",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstname,
      lastname,
      gender,
      age,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const emailExist = await User.findOne({ email });
    if (!emailExist) {
      return res.status(401).json({
        message: "Email does not exist, please create an account",
      });
    }
    let isPasswordExist = await bcrypt.compare(password, emailExist.password);
    if (!isPasswordExist) {
      return res.status(401).json({
        message: "Password Not Correct",
      });
    }
    const data = {
      id: emailExist._id,
      email: emailExist.email,
      role: emailExist.role,
    };

    const token = await jwt.sign(data, JWT_SECRET, { expiresIn: "2h" });
    return res.status(200).json({
      message: "User login successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
