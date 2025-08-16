const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    dob: Date,
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ['admin', 'teacher', 'student', 'staff'], 
        required: true,
        default: 'student',
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }, // if student
});


const User = mongoose.model("User", userSchema);

module.exports = User;