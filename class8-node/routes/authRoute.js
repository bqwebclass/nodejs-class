// const router = require("express").Router()
const express = require("express");
const { signUpController, signInController } = require("../controllers/authController");
const router = express.Router();

router.post("/auth/signup", signUpController)
router.post("/auth/signin", signInController)

module.exports = router