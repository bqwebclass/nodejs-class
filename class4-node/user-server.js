const express = require("express");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require("./models/User");
const MONGODB_URI = `mongodb://localhost:27017/BQ-MongoStart`;

const app = express();
app.use(express.json()) // parse your data 

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Database Connected');
  }).catch(err => {
    console.log(err);
  })

app.post("/api/user", async (req, res) => {
    try {
        const body = req.body;
        const password = await bcrypt.hash(body.password, 10);
        console.log(body);
        const user = new User({ ...body, password: password });
        await user.save();

        return res.send({ data: user, success: true, })
    } catch (error) {
        return res.status(500).send({ data: null, success: false, error })
    }
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server in Running or http://localhost:${PORT}`);
})