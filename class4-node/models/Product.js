// schema
// model (query run)
// https://mongoosejs.com/docs/schematypes.html
// https://mongoosejs.com/docs/queries.html

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    // _id: mongoose.Schema.ObjectId,
    name: String,
    price: Number,
    dc: Number,
    createdAt: Date,
    updatedAt: Date,
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product