const mongoose = require('mongoose'); // ORM

const userScheam = mongoose.Schema({
    name: String,
    email: String,
    dob: Date,
    password: String,
})

const User = mongoose.model("User", userScheam);

module.exports = User;