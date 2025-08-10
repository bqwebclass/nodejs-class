// const router = require("express").Router()
const express = require("express");
const { signUpController } = require("../controllers/authController");
const router = express.Router();

router.post("/api/auth/signup", signUpController)

module.exports = router