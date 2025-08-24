const express = require("express");
const { getAllUserForAdmin, getAvgAgeOfStd } = require("../controllers/adminController");
const router = express.Router();

router.get("/admin/get-all-user", getAllUserForAdmin)

router.get("/admin/get-avg-age", getAvgAgeOfStd)


module.exports = router