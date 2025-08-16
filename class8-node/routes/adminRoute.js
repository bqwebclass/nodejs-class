const express = require("express");
const { getAllUserForAdmin } = require("../controllers/adminController");
const router = express.Router();

router.get("/admin/get-all-user", getAllUserForAdmin)


module.exports = router