const express = require("express");
const mongoose = require('mongoose');
const Product = require("./models/Product");
const MONGODB_URI = `mongodb://localhost:27017/BQ-MongoStart`;
// const MONGO_DB_NAME = `BQ-MongoStart`;



// Promise (Concept -> async/await, .then() .catch() (callback hell), callback)
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Database Connected');
  }).catch(err => {
    console.log(err);
  })


const app = express();
app.use(express.json()) // parse your data 

// Status 
// (200 -> Success), 
// (401 -> unauthorized), 
// (404 -> Not Found), 
// (500 -> Server Error)
app.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send({ data: products, })
  } catch (error) {
    res.status(500).send({ data: null, error: error, })
  }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server in Running or http://localhost:${PORT}`);
})