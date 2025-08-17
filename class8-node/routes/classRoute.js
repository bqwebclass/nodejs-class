
const express = require("express");
const { getAllClasses } = require("../controllers/classController");
const router = express.Router();

router.get("/", getAllClasses)
router.post("/", )
router.put("/:id", )
router.delete("/:id", )


module.exports = router