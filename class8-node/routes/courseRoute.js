const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController'); // Adjust path as needed
const roleChecking = require('../middleware/roleChecking');

// Course routes
router.post('/', roleChecking(["admin", "teacher",]), courseController.createCourse);
router.get('/', roleChecking(["admin", "teacher", "student"]), courseController.getAllCourses);
router.get('/:id', roleChecking(["admin", "teacher", "student"]), courseController.getCourseById);
router.put('/:id', roleChecking(["admin", "teacher",]), courseController.updateCourse);
router.delete('/:courseId', roleChecking(["admin", "teacher",]), courseController.deleteCourse);

module.exports = router;