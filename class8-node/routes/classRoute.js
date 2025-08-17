
const express = require("express");
const { createClassController, getAllClassesController, updateClassController, deleteClassController, getClassByIdController } = require("../controllers/classController");
const router = express.Router();
const roleChecking = require("../middleware/roleChecking");

router.get("/", getAllClassesController)
router.get("/:id", getClassByIdController)
router.post("/", roleChecking(["admin"]), createClassController)
router.put("/:classId", roleChecking(["admin"]), updateClassController)
router.delete("/:id", roleChecking(["admin"]), deleteClassController)


module.exports = router