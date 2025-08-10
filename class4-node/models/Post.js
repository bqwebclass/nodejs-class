const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: Date,
})

// postSchema.virtual()

const Post = mongoose.model("Post", postSchema)

module.exports = Post