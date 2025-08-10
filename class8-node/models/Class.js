const mongoose = require('mongoose');

const classScheam = mongoose.Schema({
    className: String,
    classTeacher: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    year: { type: Number },
})

const Class = mongoose.model("Class", classScheam);

module.exports = Class;