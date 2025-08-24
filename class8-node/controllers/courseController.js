const mongoose = require('mongoose');
const Course = require('../models/Course');
const Class = require('../models/Class');

// Create a new course
const createCourse = async (req, res) => {
    try {
        const { title, description, classId, materials } = req.body;
        
        // Validate required fields
        if (!title || !classId) {
            return res.status(400).json({ error: 'Title and classId are required' });
        }

        const classExists = await Class.findById(classId);
        if (!classExists) {
            return res.status(400).json({ error: 'Invalid classId' });
        }

        const course = new Course({
            title,
            description,
            classId,
            materials
        });

        const savedCourse = await course.save();
        return res.status(201).json(savedCourse);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find()
            .populate('classId', 'className')
            .lean();
        return res.status(200).json(courses);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Get course by ID
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
            .populate('classId', 'className')
            .lean();
        
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        
        return res.status(200).json(course);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Update course
const updateCourse = async (req, res) => {
    try {
        const { title, description, classId, materials } = req.body;

        // If classId is provided, verify it exists
        if (classId) {
            const classExists = await Class.findById(classId);
            if (!classExists) {
                return res.status(400).json({ error: 'Invalid classId' });
            }
        }

        const course = await Course.findByIdAndUpdate(
            req.params.id,
            { title, description, classId, materials, updatedAt: Date.now() },
            { new: true, runValidators: true }
        );

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        return res.status(200).json(course);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Delete course
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.courseId);
        
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        
        return res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
};