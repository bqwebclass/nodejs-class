const mongoose = require('mongoose');

const courseScheam = mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    materials: [{
        type: String,
    }],
})

const Course = mongoose.model("Course", courseScheam);

module.exports = Course;